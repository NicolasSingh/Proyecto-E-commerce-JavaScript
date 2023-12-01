const productsArray = JSON.parse(localStorage.getItem("initialJuegos"));


const tableBody = document.getElementById("table-body");
const searchInput = document.querySelector("#search");
const productForm = document.querySelector("form#user-form");
const submitBtn = productForm.querySelector("button[type=submit].btn-form");


productForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const el = evt.target.elements;

  
  const id = el.id.value ? el.id.value : new Date().getTime();

  const product = {
    producto: el.producto.value,
    precio: el.precio.valueAsNumber, 
    descripcion: el.descripcion.value,
    active: el.active.checked,
    fecha: new Date(el.fecha.value + "T00:00:00-03:00").getTime(),
    id: id,
    image: el.image.value,
  };

 
  if (el.id.value) {
    
    const indice = productsArray.findIndex((producto) => {
      if (producto.id === el.id.value) {
        return true;
      }
    });

    productsArray[indice] = product;
    Swal.fire({
      title: "Producto Editado",
      icon: "success",
      timer: 3000,
    });
  } else {
    
    productsArray.push(product);
    Swal.fire({
      title: "Producto Agregado",
      icon: "success",
      timer: 3000,
    });
  }
  pintarProductos(productsArray);

  actualizarLocalStorage();

  resetearFormulario();
});


function resetearFormulario() {
  productForm.reset();
  submitBtn.classList.remove("btn-edit");
  submitBtn.innerText = "Agregar producto";
  productForm.elements.producto.focus();
}


searchInput.addEventListener("keyup", (eventito) => {
  const inputValue = eventito.target.value.toLowerCase();

  const productosFiltrados = productsArray.filter((prod) => {
    const nombre = prod.producto.toLowerCase();

    if (nombre.includes(inputValue)) {
      return true;
    }
    return false;
  });

  
  pintarProductos(productosFiltrados);
});
debugger;

pintarProductos(productsArray);

function pintarProductos(arrayPintar) {
  

  tableBody.innerHTML = "";

  arrayPintar.forEach((product, indiceActual) => {
    tableBody.innerHTML += `
        <tr class="table-row">
            <td class="user-image">
                <img src="${product.image}">
            </td>
            <td class="user-producto"> <strong> ${
              product.producto
            } </strong></td>
            <td class="user-descripcion">${product.descripcion}</td>
            <td class="user-precio">$ ${product.precio}</td>
        
            <td class="user-fecha">${formatDate(product.fecha)}</td>

            <td>      
              <button class="action-btn btn-danger" 
                      title="Borrar producto" 
                      onclick="borrarProducto(  '${product.id}', '${
      product.producto
    }'  )" >
                      <i class="fa-solid fa-trash-can"></i>
              </button>

              <button class="action-btn" 
                      title="Editar Producto"
                      onclick="editarProducto( '${product.id}')">
                      <i class="fa-solid fa-pen-to-square"></i>
              </button>

            </td>
        </tr>`;
  });
}


function actualizarLocalStorage() {
  localStorage.setItem("product", JSON.stringify(productsArray));
}


function borrarProducto(ID, producto) {
  const confirmDelete = confirm(
    `Realmente desea borrar este producto ${producto}`
  );

  if (confirmDelete) {
    const indice = productsArray.findIndex((product) => product.id === ID);

    productsArray.splice(indice, 1);
    pintarProductos(productsArray);

    actualizarLocalStorage();
  }
}



function editarProducto(idBuscar) {
  const productEdit = productsArray.find((producto) => {
    if (producto.id === idBuscar) {
      return true;
    }
    console.log(typeof producto.id); 
    console.log(typeof idBuscar); 
  });

  if (!productEdit) {
    Swal.fire("Error al editar", "No se pudo editar el producto", "error");
    return;
  }

  const el = productForm.elements;

  el.id.value = productEdit.id;
  el.precio.value = productEdit.precio;
  el.producto.value = productEdit.producto;
  el.image.value = productEdit.image;
  el.descripcion.value = productEdit.descripcion;
  el.active.checked = productEdit.active;
  el.fecha.value = formatInputDate(productEdit.fecha);

  

  submitBtn.classList.add("btn-edit");
  submitBtn.innerText = "Editar producto";
}