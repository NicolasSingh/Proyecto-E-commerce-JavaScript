const Cards = document.querySelector(".container-card")
console.log(Cards)
const juegos= JSON.parse(localStorage.getItem("initialJuegos"))
console.log(juegos)
function generarCards (arrayCards){
    Cards.innerHTML=""
    arrayCards.forEach(element => {
        
        Cards.innerHTML+=`<div class="card">
        <figure>
            <img src="${element.image}">
        </figure>
        <div class="contenido-card">
            <h3>${element.producto}</h3>
            <p>${element.descripcion}</p>
            <article class="details">
            <h4 class="card-date">${element.fechacard}</h4>
            <h4 class="card-price">${element.precio}</h4>
            </article>
            <footer class="card-footer">
            <button class="card-btn">Reservar</button>
            <button class="card-btn" onClick=añadirCarrito('${element.id}')>Añadir al Carrito</button>
            </footer>
        </div>
    </div>`

    });
}
generarCards (juegos)