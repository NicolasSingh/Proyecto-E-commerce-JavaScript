window.onscroll = function () {
    efectoHabilidades();
};

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills =
        window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("mongo").classList.add("barra-progreso4");
        document.getElementById("node").classList.add("barra-progreso5");
        document.getElementById("sass").classList.add("barra-progreso6");
        document.getElementById("less").classList.add("barra-progreso7");
        document.getElementById("git").classList.add("barra-progreso8");
    }
}