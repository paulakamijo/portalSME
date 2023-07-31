const DEBUG = false
const ME = Session.getActiveUser().getEmail()

/**
 * Obtém o índice de uma coluna da planilha, dado o seu nome (conforme escrito na primeira linha).
 */
const getColumnByName = (sheet, name) => {
  const columns = sheet.getRange(1, 1, 1, sheet.getMaxColumns()).getValues()[0]
  
  return columns.indexOf(name) + 1
}

/**
 * Gera um objeto com os dados de uma dada linha da planilha de inscrições nos cursos.
 */
const parseRowData = (cols, row) => {
  const data = name => row[cols.indexOf(name)]

  return {
    type: data('UNID TIPO'),
    region: data('REGIAO DAE'),
    school: data('UNIDADE'),
    email: data('E-MAIL'),
    fileName: data('ARQUIVO A RECEBER'),
    fileURL: data('LINK DO ARQUIVO'),
    fileID: data('ID DO ARQUIVO'),
    isSent: data('Arquivo enviado?') !== '',
    replyMessageSender: data('Remetente da mensagem')
  }
}

/**
 * Obtém um array de objetos com todos os dados para envio dos certificados de participação nos cursos.*/
 
const getSheetData = sheet => {
  const [first, ...rest] = sheet.getDataRange().getValues()

  return rest.map(row => parseRowData(first, row))
}

const getDriveIdFromCellHyperlink = cell => cell.getRichTextValue().getLinkUrl().match(/[-\w]{25,}/)

// COLUNA 5 = "ARQUIVO A RECEBER"
const getFolderDriveId = sheet => getDriveIdFromCellHyperlink(sheet.getRange(1, 5))

const testGetFolderDriveId = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName('Arquivos')
  
  return getFolderDriveId(sheet)
}

/**
 * Busca por um determinado arquivo no Google Drive, a partir do seu nome.
 *
 * @return o ID e a URL para compartilhamento da primeira ocorrência encontrada, ou undefined, se nenhuma ocorrência for encontrada.*/
 
const getDriveFileFromName = (name, parentId) => {
  const files = DriveApp.searchFiles(`title = "${name}"`)
  
  while (files.hasNext()) {
    const file = files.next()
    const parents = file.getParents()
  
    while (parents.hasNext()) {
      const parent = parents.next()

      if (parent.getId() == parentId) {
        return {
          id: file.getId(),
          url: file.getUrl()
        }
      }
    }
  }
}

/**
 * Popula a planilha com os IDs e as URLs dos arquivos encontrados no Google Drive.
 
const getFileURLs = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName('Arquivos')
  const sheetData = getSheetData(sheet)
  const folderId = getFolderDriveId(sheet)
  const storedIndices = []

  const filteredData = sheetData.filter((rowData, index) => {
    if (rowData.fileName && !rowData.fileID) {
      storedIndices.push(index + 1)
      return true
    }
  })

  filteredData.forEach((rowData, index) => {
    const newIndex = storedIndices[index] + 1
    
    try {
      const { id, url } = getDriveFileFromName(rowData.fileName, folderId)
      const column = name => getColumnByName(sheet, name)
      const fileURLCell = sheet.getRange(newIndex, column('LINK DO ARQUIVO'))
      const fileIDCell = sheet.getRange(newIndex, column('ID DO ARQUIVO'))

      fileURLCell.setValue(url)
      fileIDCell.setValue(id)
    } catch (e) {
    }
  })
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const processAllEntries = (entries, storedIndices, callback) => {
  entries.forEach((rowData, index) => {
    const newIndex = storedIndices[index] + 1

    callback(rowData, newIndex)
  })
  
  Logger.log(`Processadas ${entries.length} entradas da planilha.`)
}
  
const processFirstEntries = (entries, storedIndices, maxEntries, callback) => {
  const lastIndex = entries.length < maxEntries ? entries.length : maxEntries
  
  for (let i = 0; i < lastIndex; i++) {
    const rowData = entries[i]
    const newIndex = storedIndices[i] + 1

    callback(rowData, newIndex)
  }

  Logger.log(`Processadas ${lastIndex} entradas da planilha.`)
}

/**
 * Função genérica para envio automático das mensagens de e-mail.
 *
 * Uma cópia oculta das mensagens é enviada para suporte@se-pmmc.com.br.
 *
 * Após o envio, as informações sobre a data/hora de envio e o endereço do remetente
 * serão registradas na planilha.
 *
 * Caso seja detectada uma falha no envio da mensagem, uma notificação será enviada via
 * webhook para o Google Chat.
 */
const sendEmail = (recipient, subject, message, signatureFileId, uuid, messageUUIDCell, messageSentCell, timestampCell, messageSenderCell, webhookThreadKey, attachments = []) => {
  const options = {
    /**bcc: 'suporte@se-pmmc.com.br',*/
    noReply: true,
    htmlBody: message,
    inlineImages: {
      signature: DriveApp.getFileById(signatureFileId).getBlob().setName('signatureBlob')
    }
  }

  let isEmailSentWithoutError

  try {
    GmailApp.sendEmail(
      recipient,
      `${subject} - ${uuid}`,
      message.replace(/(<([^>]+)>)/ig, ''),
      attachments.length > 0 ? { ...options, attachments } : options
    )

    isEmailSentWithoutError = true
  } catch (e) {
    Logger.log(`Falha ao tentar enviar mensagem para o endereço ${recipient}. O endereço é inválido.`)
    isEmailSentWithoutError = false
  }

  messageUUIDCell.setValue(uuid)
  messageSenderCell.setValue(ME)
  timestampCell.setValue(new Date())
      
  if (isEmailSentWithoutError) {
    messageSentCell.setValue('ok')
  } else {
    const webhookMessage = `[${ME}] Falha no envio do ${webhookThreadKey === 'SEND_SUBSCRIPTION_CONFIRMATION' ? 'e-mail de confirmação de inscrição' : 'certificado'} para *${recipient}*`

    messageSentCell.setValue('E-MAIL INVÁLIDO')
    // webhookPostMessage(webhookThreadKey, webhookMessage)
  }
}

/**
 * Envia um e-mail com o arquivo PDF anexo.
 */
/**const sendMessage = (messageData, subject, body, signatureFileId, isSentCell, timestampCell, messageUUIDCell, messageSenderCell) => {
  const uuid = Utilities.getUuid()
  const { name, email, fileName, fileID } = messageData
  const newSubject = `${subject} (${fileName})`
  const message = `
    ${body}

    <p><img src="cid:signature"></p>
  `
  const attachments = [DriveApp.getFileById(fileID).getAs(MimeType.PDF)]
  
  sendEmail(email, newSubject, message, signatureFileId, uuid, messageUUIDCell, isSentCell, timestampCell, messageSenderCell, 'SEND_MESSAGE', attachments)
}*/

const preSendFirstMissingMessage = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName('Arquivos')
  const sheetData = getSheetData(sheet)
  const storedIndices = []
  
  const filteredData = sheetData.filter((rowData, index) => {
    if (rowData.fileName && !rowData.isSent && !rowData.replyMessageSender) {
      storedIndices.push(index + 1)
      return true
    }
  })
  
  // processFirstEntries(filteredData, storedIndices, 1, (rowData, newIndex) => {
  processAllEntries(filteredData, storedIndices, (rowData, newIndex) => {
    const column = name => getColumnByName(sheet, name)
    const messageSenderCell = sheet.getRange(newIndex, column('Remetente da mensagem'))

    messageSenderCell.setValue(ME)
  })
  
  SpreadsheetApp.flush()
}

/**
 * Faz uma varredura na planilha em busca de novos arquivos
 * e envia por e-mail para a primeira ocorrência encontrada.
 * 'Arquivos, Texto de E-mail são as planilhas'
 */
const sendFirstMissingMessage = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName('Arquivos')
  const sheetData = getSheetData(sheet)
  const storedIndices = []
  
  const emailSheet = spreadsheet.getSheetByName('Texto de E-mail')
  const subject = emailSheet.getRange(8, 1).getValue()
  const body = emailSheet.getRange(2, 1).getValue()
  const signatureFileId = getDriveIdFromCellHyperlink(emailSheet.getRange(5, 1))

  const filteredData = sheetData.filter((rowData, index) => {
    if (rowData.replyMessageSender === ME && rowData.fileName && !rowData.isSent) {
      storedIndices.push(index + 1)
      return true
    }
  })
  
  processAllEntries(filteredData, storedIndices, (rowData, newIndex) => {
    const column = name => getColumnByName(sheet, name)
    const isSentCell = sheet.getRange(newIndex, column('Arquivo enviado?'))
    const timestampCell = sheet.getRange(newIndex, column('Data/hora do envio'))
    const messageUUIDCell = sheet.getRange(newIndex, column('UUID da mensagem'))
    const messageSenderCell = sheet.getRange(newIndex, column('Remetente da mensagem'))

    sendMessage(rowData, subject, body, signatureFileId, isSentCell, timestampCell, messageUUIDCell, messageSenderCell)
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Executa uma função de callback com bloqueio em nível de usuário para evitar múltiplas execuções concorrentes
 * vindas das diversas contas mailer.gas.[0-9]@se-pmmc.com.br.
 *
 * @param callback a função a ser chamada
 * @param timeoutInSeconds o intervalo máximo a esperar pela liberação do bloqueio, antes de desistir.
 */
const userLockExec = (callback, timeoutInSeconds) => {
  const lock = LockService.getUserLock()

  Logger.log('Aguardando pelo bloqueio de execução em nível de usuário...')
  
  try {
    lock.waitLock(1000 * timeoutInSeconds)
  } catch (e) {
    Logger.log('... Não foi possível obter o bloqueio de execução em nível de usuário.')
    return
  }

  callback()
  
  try {
    lock.releaseLock()
    Logger.log('... Bloqueio em nível de usuário liberado.')
  } catch (e) {
    Logger.log('... Falha ao tentar liberar o bloqueio em nível de usuário.')
  }
}

/**
 * Executa uma função de callback com bloqueio em nível de script para evitar múltiplas execuções concorrentes
 * vindas das diversas contas mailer.gas.[0-9]@se-pmmc.com.br.
 *
 * @param callback a função a ser chamada
 * @param timeoutInSeconds o intervalo máximo a esperar pela liberação do bloqueio, antes de desistir.
 */
const scriptLockExec = (callback, timeoutInSeconds) => {
  const lock = LockService.getScriptLock()

  Logger.log('Aguardando pelo bloqueio de execução em nível de script...')
  
  try {
    lock.waitLock(1000 * timeoutInSeconds)
  } catch (e) {
    Logger.log('... Não foi possível obter o bloqueio de execução em nível de script.')
    return
  }

  callback()
  
  try {
    lock.releaseLock()
    Logger.log('... Bloqueio em nível de script liberado.')
  } catch (e) {
    Logger.log('... Falha ao tentar liberar o bloqueio em nível de script.')
  }
}

/**
 * Executa uma função de callback com bloqueio em nível de documento para evitar múltiplas execuções concorrentes
 * vindas das diversas contas mailer.gas.[0-9]@se-pmmc.com.br.
 *
 * @param callback a função a ser chamada
 * @param timeoutInSeconds o intervalo máximo a esperar pela liberação do bloqueio, antes de desistir.
 */
const documentLockExec = (callback, timeoutInSeconds) => {
  const lock = LockService.getDocumentLock()

  Logger.log('Aguardando pelo bloqueio de execução em nível de documento...')
  
  try {
    lock.waitLock(1000 * timeoutInSeconds)
  } catch (e) {
    Logger.log('... Não foi possível obter o bloqueio de execução em nível de documento.')
    return
  }

  callback()
  
  try {
    lock.releaseLock()
    Logger.log('... Bloqueio em nível de documento liberado.')
  } catch (e) {
    Logger.log('... Falha ao liberar o bloqueio em nível de documento.')
  }
}

/**
 * Executa uma função de callback com bloqueio em todos os níveis para evitar múltiplas execuções concorrentes
 * vindas das diversas contas mailer.gas.[0-9]@se-pmmc.com.br.
 *
 * @param callback a função a ser chamada
 * @param timeoutInSeconds o intervalo máximo a esperar pela liberação do bloqueio, antes de desistir.
 */
const lockExec = (callback, timeoutInSeconds) => {
  userLockExec(() => {
    scriptLockExec(() => {
      documentLockExec(callback, timeoutInSeconds)
    }, timeoutInSeconds)
  }, timeoutInSeconds)
}
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const onOpen = () => {
  SpreadsheetApp.getUi()
                .createMenu('Atendimento')
                .addItem('Preencher links para os arquivos', 'getFileURLs')
                .addItem('Enviar e-mails faltantes', 'onSendAllMessages')
                .addToUi()
}

const onSendAllMessages = () => {
  lockExec(preSendFirstMissingMessage, 300)
  userLockExec(sendFirstMissingMessage, 10)
}