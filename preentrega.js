function Consolas(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}

const Playstation5 = new Consolas("Playstation 5", 1500000, "consola");
const XboxSeriesX = new Consolas("Xbox Series X", 1400000, "consola");
const NintendoSwitch = new Consolas("Nintendo Switch", 800000, "consola");

const productos = {
  1: Playstation5,
  2: XboxSeriesX,
  3: NintendoSwitch,
};

let valorTotal = 0;

function seleccionarProducto() {
  let ingresaProducto = parseFloat(
    prompt(
      "Elegí el producto que querés comprar: 1: Playstation, 2: Xbox Series X, 3: Nintendo Switch, Ingrese el número del producto o 0 para finalizar"
    )
  );

  while (ingresaProducto !== 0) {
    const producto = productos[ingresaProducto];
    if (producto) {
      valorTotal += producto.precio;
      console.log(
        "El valor de la" + producto.nombre + "es de: $" + producto.precio
      );
    } else {
      console.error("No ingresaste un producto válido");
    }

    ingresaProducto = parseFloat(
      prompt(
        "Desea agregar otro producto? 1: Playstation 5, 2: Xbox Series X, 3: Nintendo Switch, Ingrese el número del producto o 0 para finalizar"
      )
    );
  }

  console.log("El valor total de su compra es de: $" + valorTotal);
}

seleccionarProducto();
