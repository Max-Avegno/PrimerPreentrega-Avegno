function Consolas(nombre, precio, categoria) {
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
}

const Playstation5 = new Consolas("Playstation 5", 1500000, "consola");
const XboxSeriesX = new Consolas("Xbox Series X", 1400000, "consola");
const NintendoSwitch = new Consolas("Nintendo Switch", 800000, "consola");
const Sega = new Consolas("Sega Genesis", 120000, "consola");

let contenedoresProductos =
  document.getElementsByClassName("contenedorProducto");

const productos = [Playstation5, XboxSeriesX, NintendoSwitch, Sega];
let carrito = [];
let valorTotal = 0;

document.addEventListener("DOMContentLoaded", function () {
  let contenedorProductos = document.getElementById("contenedorProductos");

  productos.forEach((producto) => {
    let productoDiv = document.createElement("div");
    productoDiv.className = "producto";

    let nombreP = document.createElement("h3");
    nombreP.innerHTML = ` ${producto.nombre}`;

    let precioP = document.createElement("p");
    precioP.innerHTML = `Precio: $${producto.precio}`;

    let categoriaP = document.createElement("p");
    categoriaP.innerHTML = `Categoría: ${producto.categoria}`;

    let botonAgregar = document.createElement("button");
    botonAgregar.className = "botonCarrito";
    botonAgregar.innerHTML = `agregar producto`;

    let botonSacar = document.createElement("button");
    botonSacar.className = "botonQuitar";
    botonSacar.innerHTML = `eliminar producto`;

    botonAgregar.addEventListener("click", function () {
      respuestaClick(producto);
    });


    botonSacar.addEventListener("click", function () {
      respuestaClickSacar(producto);
    });





    productoDiv.appendChild(nombreP);
    productoDiv.appendChild(precioP);
    productoDiv.appendChild(categoriaP);
    productoDiv.appendChild(botonAgregar);
    productoDiv.appendChild(botonSacar);

    contenedorProductos.appendChild(productoDiv);
  });
});

const botonCarrito = document.getElementById("carrito");

let guardarCarrito = document.createElement("button");
guardarCarrito.innerHTML = `Guardar en carrito`; 

botonCarrito.appendChild (guardarCarrito);

guardarCarrito.addEventListener("click", function () {
  localStorage.setItem("valorTotal", JSON.stringify(`$ ${valorTotal}`));
  alert("Carrito guardado en localStorage.");
});




function respuestaClick(producto) {
  valorTotal += producto.precio;

  actualizarTotal();
}

function respuestaClickSacar(producto) {
  valorTotal -= producto.precio;

  actualizarTotal();
}

function actualizarTotal() {
  let totalCompra = document.getElementById("totalCompra");
  totalCompra.innerHTML = `El valor total es $${valorTotal}`;
}

