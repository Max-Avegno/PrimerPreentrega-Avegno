let carrito = [];
let valorTotal = 0;

document.addEventListener("DOMContentLoaded", function () {
  let contenedorCards = document.getElementById("contenedorProductos");

  const peticionA = async () => {
    const respuesta = await fetch("/productos.json");
    const datos = await respuesta.json();

    for (const item of datos) {
      const card = document.createElement("div");
      card.innerHTML = `
            <div id="card">
                <img class="imagenCard" src="${item.imagen}" />
                <div class="descripcion">
                    <h5>${item.nombre}</h5>
                    <p>Descripcion: ${item.descripcion}</p>
                    <p>Precio: $${item.precio}.-</p>
                    <p>Stock: ${item.stock}</p>
                    <button class="botonAgregar">Comprar</button>
                </div>
            </div>
        `;
      contenedorCards.appendChild(card);

      const botonAgregar = card.querySelector(".botonAgregar");
      botonAgregar.addEventListener("click", function () {
        respuestaClick(item);
        Toastify({
          text: "Producto agregado",

          duration: 3000,
        }).showToast();
      });
    }
    

    let guardarCarrito = document.createElement("button");
    guardarCarrito.innerHTML = `Guardar en carrito`;
    document.body.appendChild(guardarCarrito);

    guardarCarrito.addEventListener("click", function () {
      localStorage.setItem("valorTotal", JSON.stringify(`$ ${valorTotal}`));
      alert("Carrito guardado en localStorage.");
    });
  };

  peticionA();
});

function respuestaClick(item) {
  carrito.push(item); 
  valorTotal += item.precio;
  actualizarTotal();
  mostrarCarrito(); 
}

function actualizarTotal() {
  let totalCompra = document.getElementById("totalCompra");
  totalCompra.innerHTML = `El valor total es $${valorTotal}`;
}

function mostrarCarrito() {
  let carritoContainer = document.getElementById("carritoCompleto");
  carritoContainer.innerHTML = ""; 

  carrito.forEach((producto, i) => {
    let itemAgregado = document.createElement("p");
    itemAgregado.innerHTML = `Producto: ${producto.nombre} - Precio: $${producto.precio}`;

    
    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "x";
    botonEliminar.addEventListener("click", function () {
      eliminarProducto(i);
    });

    itemAgregado.appendChild(botonEliminar);
    carritoContainer.appendChild(itemAgregado);
  });
}

function eliminarProducto(i) {
  const productoEliminado = carrito.splice(i, 1)[0];
  valorTotal -= productoEliminado.precio; 
  actualizarTotal(); 
  mostrarCarrito(); 
}
