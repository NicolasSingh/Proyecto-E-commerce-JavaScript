const usersStart = [
    {
      fullname: "Nicolas Singh ",
      age: 27,
      email: "admin@admin.com",
      id: "1",
      active: true,
      password: "admin",
      bornDate: new Date("1993-01-01").getTime(),
      location: "Salta Capital",
       image:"/assets/images/image/avatars/hombre.jpg",
      role:'ADMIN_ROLE'
      },
    {
      fullname: "Jane Doe",
      age: 25,
      email: "jane.doe@example.com",
      id: "2",
      active: false,
      password: "password456",
      bornDate: new Date("1998-05-05").getTime(),
      location: "La Pampa",
      image:
      "/assets/images/image/avatars/hombre2.jpg",
      role:'CLIENT_ROLE'
      },
    {
      fullname: "Alice Johnson",
      age: 35,
      email: "alice.johnson@example.com",
      id: "3",
      active: true,
      password: "password789",
      bornDate: new Date("1988-08-08").getTime(),
      location: "Cordoba",
      image:
      "/assets/images/image/avatars/mujer.jpg",
      role:'CLIENT_ROLE'
      },
    {
      fullname: "Michael Smith",
      age: 40,
      email: "michael.smith@example.com",
      id: "4",
      active: false,
      password: "password101",
      bornDate: new Date("1983-04-10").getTime(),
      location: "Buenos Aires",
      image:
      "/assets/images/image/avatars/hombre3.jpg",
      role:'CLIENT_ROLE'
      },
    {
      fullname: "Emily Johnson",
      age: 28,
      email: "emily.johnson@example.com",
      id: "5",
      active: true,
      password: "password202",
      bornDate: new Date("1995-02-15").getTime(),
      location: "La Pampa",
      image:
      "/assets/images/image/avatars/mujer2.jpg",
      role:'c_ROLE'
      },
    {
      fullname: "Daniela Lee",
      age: 34,
      email: "daniel.lee@example.com",
      id: "6",
      active: false,
      password: "password303",
      bornDate: new Date("1989-07-07").getTime(),
      location: "San Luis",
      image:
      "/assets/images/image/avatars/mujer3.jpg",
      role:'CLIENT_ROLE'
      },
    {
      fullname: "Samantha Davis",
      age: 22,
      email: "samantha.davis@example.com",
      id: "7",
      active: true,
      password: "password404",
      bornDate: new Date("2001-11-11").getTime(),
      location: "Rosario",
      image:
      "/assets/images/image/avatars/mujer4.jpg",
      role:'CLIENT_ROLE'
      },
    {
      fullname: "James Moore",
      age: 45,
      email: "james.moore@example.com",
      id: "8",
      active: false,
      password: "password505",
      bornDate: new Date("1978-12-19").getTime(),
      location: "La Pampa",
      image: 
      "/assets/images/image/avatars/hombre4.jpg",
      role:'CLIENT_ROLE'
    },
    {
      fullname: "Isabella Taylor",
      age: 29,
      email: "isabella.taylor@example.com",
      id: "9",
      active: true,
      password: "password606",
      bornDate: new Date("1994-06-24").getTime(),
      location: "San Luis",
      image:
      "/assets/images/image/avatars/mujer5.jpg",
        role:'CLIENT_ROLE'
      },
    {
      fullname: "Ethan Johnson",
      age: 31,
      email: "ethan.johnson@example.com",
      id: "10",
      active: false,
      password: "password707",
      bornDate: new Date("1992-03-03").getTime(),
      location: "Rosario",
      image:
      "/assets/images/image/avatars/hombre5.jpg",
      role:'CLIENT_ROLE'
      },
  ];
  
  
  
  
  if (localStorage.getItem("users") === null) {

  
    localStorage.setItem("users", JSON.stringify(usersStart)); /
  }
  
