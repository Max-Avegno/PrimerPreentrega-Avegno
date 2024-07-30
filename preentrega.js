console.log("Bienvenido a la calculadora de cuotas");



let ingreseValorPrestamo = parseFloat(
  prompt("Ingrese importe del prestamo: $")
);
console.log("El monto que eligio es $" + ingreseValorPrestamo);

let ingreseNumeroDeCuotas = prompt("Ingrese el numero de cuotas: 3, 6, 9 o 12");

if (ingreseNumeroDeCuotas == 3) {
  console.log(
    "El valor de la cuota es de $" +
      (ingreseValorPrestamo / 3 + ingreseValorPrestamo * 0.05)
  );
} else if (ingreseNumeroDeCuotas == 6) {
  console.log(
    "El valor de la cuota es de $" +
      (ingreseValorPrestamo / 6 + ingreseValorPrestamo * 0.05)
  );
} else if (ingreseNumeroDeCuotas == 9) {
  console.log(
    "El valor de la cuota es de $" +
      (ingreseValorPrestamo / 9 + ingreseValorPrestamo * 0.05)
  );
} else if (ingreseNumeroDeCuotas == 12) {
  console.log(
    "El valor de la cuota es de $" +
      (ingreseValorPrestamo / 12 + ingreseValorPrestamo * 0.06)
  );
} else {
  alert("ingresa valores validos");
}


function procesoCompleto() { let ingreseValorPrestamo = parseFloat(
    prompt("Ingrese importe del prestamo: $")
  );
  console.log("El monto que eligio es $" + ingreseValorPrestamo);
  
  let ingreseNumeroDeCuotas = prompt("Ingrese el numero de cuotas: 3, 6, 9 o 12");
  
  if (ingreseNumeroDeCuotas == 3) {
    console.log(
      "El valor de la cuota es de $" +
        (ingreseValorPrestamo / 3 + ingreseValorPrestamo * 0.05)
    );
  } else if (ingreseNumeroDeCuotas == 6) {
    console.log(
      "El valor de la cuota es de $" +
        (ingreseValorPrestamo / 6 + ingreseValorPrestamo * 0.05)
    );
  } else if (ingreseNumeroDeCuotas == 9) {
    console.log(
      "El valor de la cuota es de $" +
        (ingreseValorPrestamo / 9 + ingreseValorPrestamo * 0.05)
    );
  } else if (ingreseNumeroDeCuotas == 12) {
    console.log(
      "El valor de la cuota es de $" +
        (ingreseValorPrestamo / 12 + ingreseValorPrestamo * 0.06)
    );
  } else {
    alert("ingresa valores validos");
  }

}




let respuesta = prompt("Desea realizar otro calculo? SI/NO");
switch (respuesta) {
  case "SI":
    procesoCompleto();

  case "NO":
    break;

  case (respuesta != "SI", "NO"):
    alert("No ingreso un comando valido") + procesoCompleto();

  default:
    alert("No ingreso un valor valido") + procesoCompleto();
}
