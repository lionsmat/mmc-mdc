console.log("Digite dois números, começando pelo primeiro:");

let numeros = [];

process.stdin.on("data", function (data) {
  let numero = Number(data.toString().trim());

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    numeros.push(numero);

    if (numeros.length === 2) {
      let a = numeros[0];
      let b = numeros[1];
      let originalB = b;

      // Calcular MDC
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      const mdc = a;

      // Calcular MMC
      const mmc = Math.abs(numeros[0] * numeros[1]) / mdc;

      console.log(`MDC: ${mdc}`);
      console.log(`MMC: ${mmc}`);

      process.exit();
    } else {
      console.log("Digite o segundo número:");
    }
  }
});
