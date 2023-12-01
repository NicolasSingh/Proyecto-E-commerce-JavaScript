const productStart = [
    {
      producto: "Final Fantasy XVI ",
      precio:  87298,
      id: "1",
      active: true,
      descripcion:"Final Fantasy XVI trae de vuelta en 2023 el buque insignia de Square Enix en un videojuego que sigue apostando por una estética muy característica que atesoran los JRPG de la compañía japonesa. El legado de los cristales vuelve a tener importancia en este videojuego, enfocado en una campaña individual para PS5 que promete exprimir el hardware actual y volcarse en la acción.",
      fechacard:"2023-08-14",
      fecha:new Date("2023-09-25 + 'T00:00:00-03:00'").getTime(),
       image:"https://www.gry-online.pl/i/h/22/341676574.jpg",
      },
    {
      producto: "Diablo IV",
      precio: 51100,
      id: "2",
      active: true,
      descripcion: "Después de años de espera, Diablo IV ha llegado para poner sobre la mesa una jugabilidad tan adictiva como siempre y un tono tétrico, oscuro y sangriento que nunca debió abandonar la saga, una campaña madura que nos acompañará durante unas 25 horas a las que hay que sumar más, muchas más.",
      fechacard:"2023-08-14",
      fecha: new Date("2023-08-01").getTime(),
      image:
      "https://tse4.mm.bing.net/th?id=OIP.E0dXAiJMSyLgsuxEIQHryQHaEK&pid=Api&P=0&h=180",
      },
    {
      producto: "Star Wars Jedi: Survivor",
      precio:69400,
      id: "3",
      active: true,
      descripcion: "Star Wars Jedi: Survivor es una aventura extremadamente divertida y entretenida que nos deleita con una exploración fantástica, un diseño de niveles bien logrado y puzles ingeniosos y variados.",
      fechacard:"2023-04-28",
      fecha:new Date("2023-10-05").getTime(),
      image:
      "https://gagadget.com/media/uploads/457457-star-wars-jedi-survivor.jpg",

      },
    {
      producto: "Resident Evil 4 Remake",
      precio:  57662,
      id: "4",
      active: true,
      descripcion: "Volver a una de las entregas más legendarias de la saga Resident Evil no era nada fácil, pero Capcom ha superado con nota este reto: Resident Evil 4 Remake es más que un remake fiel al original, ya que sin olvidarse de ese legado consigue ofrecer una de las mejores, más intensas y más variadas aventuras de acción que hemos podido disfrutar en los últimos años.",
      fechacard:"2023-03-24",
      fecha: new Date("2023-03-21").getTime(),
      image:
      "https://www.somosxbox.com/wp-content/uploads/2021/05/re4remake.jpg",
    
      },
    {
      producto: "Forza Motorsport",
      precio:  30000,
      id: "5",
      active: true,
      descripcion: "Tras el sobresaliente Forza Horizon 5, nos espera otro spin-off de simulación en 2023. Forza Motorsport se ve a sí mismo como un reinicio de la serie de juegos de carreras y, desde un punto de vista técnico, tiene lo que hace falta para cambiar el género.",
      fechacard:"2023-07-24",
      fecha: new Date("2023-04-15").getTime(),
      image:
      "https://i1.wp.com/thekoalition.com/images/2017/10/forza7-main.jpg?fit=1920%2C1080&ssl=1",
      
      },
    {
      producto: "Assassin’s Creed Mirage",
      precio:  41000,
      ID: "6",
      active: true,
      descripcion: "Unos tres años después de la excursión al mundo de los vikingos con Assassin's Creed Valhalla, la serie vuelve más a sus raíces con la última entrega. Assassin's Creed Mirage quiere orientarse más hacia las primeras entregas más lineales de la serie y te lleva en la piel de Basim a Bagdad en el año 860 d.C.",
      fechacard:"2023-11-24",
      fecha:new Date("2023-04-15").getTime(),
      image:
      "https://static.actugaming.net/media/2022/09/assassins-creed-mirage.jpg",
   
      },
  
  ]

if (localStorage.getItem("initialJuegos") === null) {
    
  
    localStorage.setItem("initialJuegos", JSON.stringify(productStart)); 
  }
  