function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  var valorEmBitCoin = valorEmDolarNumerico * 0.000021;
  console.log(valorEmReal);
  console.log(valorEmBitCoin);

  var elementoValorConvertidoReal = document.getElementById(
    "valorConvertidoReal"
  );
  var valorConvertidoReal = "O resultado em real é R$ " + valorEmReal;

  var elementoValorConvertidoBitCoin = document.getElementById(
    "valorConvertidoBitCoin"
  );
  var valorConvertidoBitCoin =
    "O resultado em BitCoin " + valorEmBitCoin + " BTC";

  elementoValorConvertidoReal.innerHTML = valorConvertidoReal;
  elementoValorConvertidoBitCoin.innerHTML = valorConvertidoBitCoin;
}