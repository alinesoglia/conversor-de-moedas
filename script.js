function converterDolar() {
    var valorElemento = document.getElementById("valorDolar");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function converterEuro() {
    var valorElemento = document.getElementById("valorEuro");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmEuroNumerico * 5.5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function converterBitcoin() {
    var valorElemento = document.getElementById("valorBitcoin");
    var valor = valorElemento.value;
    var valorEmBitcoinNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmBitcoinNumerico * 120000;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  