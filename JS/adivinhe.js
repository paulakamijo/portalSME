
<!DOCTYPE html;>
<html>
  <head>
    <meta charset="utf-8">

    <title>Jogo adivinhe o número</title>

    <style>
      html {
        font-family: sans-serif;
      }
      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }
      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
      <h1>Jogo adivinhe o número</h1>

      <p>Nós selecionamos um número aleatório entre 1 e 100. Veja se consegue adivinhar em 10 chances ou menos. Nós lhe diremos se seu palpite foi muito alto ou muito baixo.</p>

<div class="form">
  <label for="campoPalpite">Digite seu palpite: </label><input type="text" id="campoPalpite" class="campoPalpite">
  <input type="submit" value="Enviar palpite" class="envioPalpite">
</div>

<div class="resultadoParas">
  <p class="palpites"></p>
  <p class="ultimoResultado"></p>
  <p class="baixoOuAlto"></p>
</div>

</body>

<script> // Seu JavaScript vai aqui
  var numeroAleatorio = Math.floor(Math.random()*100) + 1; //algoritmo que gerará um número aleatório

  // definindo as variáveis que vão receber os valores a serem guardados
  var palpites = document.querySelector('.palpites');
  var ultimoResultado = document.querySelector('.ultimoResultado');
  var baixoOuAlto = documento.querySelector('.baixoOuAlto');

  //variáveis que armazenam referências para o campo de texto e o botão de envio
  var envioPalpite = documento.querySelector('.envioPalpite');
  var campoPalpite = document.querySelector('.campoPalpite');
  
  
  var contagemPalpites = 1; //atribuído o valor 1 à variável contagemPalpites

  var botaoReinicio;

  //Dentro da função vai o código a ser executado toda a vez que a função é chamada
  function conferirPalpite() {
    alert('Eu sou um placeholder');
  }


  
</script>
</html>