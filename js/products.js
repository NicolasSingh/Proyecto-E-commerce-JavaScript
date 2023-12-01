const Cards = document.querySelector(".container-card")
console.log(Cards)
const products= JSON.parse(localStorage.getItem("initialCard"))
console.log(products)
function generarCard (arrayCards){
    Cards.innerHTML=""
    arrayCards.forEach(element => {
        
        Cards.innerHTML+=`<div class="card">
        <figure>
            <img src="${element.image}">
        </figure>
        <div class="contenido-card">
            <h3>${element.title}</h3>
            <p>${element.descripcion}</p>
            <button type="button" class="btn" onclick="redireccionar()">Ver Mas</button>
        </div>
    </div>`

    });
}
generarCard(products)

function redireccionar(){

    location.href="/pages/cards-products/juegos.html"

}










