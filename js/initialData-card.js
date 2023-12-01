const initialCards = [
    {
        title: "Juegos para PC",
        id: "1",
        active: true,
        descripcion: "Tenemos una amplia variedad de juegos para que tus horas de diversión sean mas placenteras",
        fecha: new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
        image: "https://i.blogs.es/aacc8b/sobremesa/650_1200.jpg",
    },
    {
        title: "Combos de Actualización",
        id: "2",
        active: true,
        descripcion: "Actualiza tu PC para lograr una experiencia unica a la hora de jugar Increibles descuentos",
        fecha: new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
        image: "https://hardzone.es/app/uploads-hardzone.es/2019/12/Procesadores-Intel-y-AMD-800x419.jpg",
    },
    {
        title: "Desarrollo Web",
        id: "3",
        active: true,
        descripcion: "Creamos tu página web utilizando las últimas tecnologías disponibles. Una Web adaptativa a tu móvil o Tablet y con un gestor de contenido fácil.",
        fecha: new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
        image: "https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg",
    },
    {
        title: "Web-Hosting",
        id: "4",
        active: true,
        descripcion: "Te ayudamos desde cero a registrar tu dominio, subir tu web y crear cuentas de email.",
        fecha: new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
        image: "https://scotthall.co/wp-content/uploads/2020/10/web-hosting-1.jpg",
    },
    {
        title: "Hosting comercial y Seguridad Web",
        id: "5",
        active: true,
        descripcion: "Contamos con Maquinas potentes especialmente diseñadas para alojar tu servidor y brindarte seguridad en tu proyecto",
        fecha: new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
        image: "https://seguridadpy.info/wp-content/uploads/2020/01/Seguridad_Internet.jpg",
    },
    {
        title: "Reparaciones de PC",
        id: "6",
        active: true,
        descripcion: "Tecnicos expertos en reparacion de hadware y optimizacion de software haran que tu PC funcione de manera fluida y eficaz.",
        fecha: new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
        image: "https://tse1.explicit.bing.net/th?id=OIP.YdEUFpkxpuyCQpQ_Dxx4VQHaFD&pid=Api&P=0&h=180",
    },]

if (localStorage.getItem("initialCard") === null) {
    

    localStorage.setItem("initialCard", JSON.stringify(initialCards)); 
}

console.log(initialCards)