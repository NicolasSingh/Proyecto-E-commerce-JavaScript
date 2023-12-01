const usersArray = JSON.parse(localStorage.getItem("users"));


const userForm = document.querySelector("form#user-form");
const submitBtn = userForm.querySelector("button[type=submit].btn-form");


userForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const el = evt.target.elements;

  
  if (el.password.value !== el.password2.value) {
    alert(`Las contraseñas no coiciden`);
    return;
  }

  
  const emailExist = usersArray.find((user) => {
    if (user.email === el.email.value) {
      return true;
    }
  });

  if (emailExist && el.id.value !== emailExist.id) {
    Swal.fire({
      title: "El correo ya existe",
      icon: "error",
    });
    return;
  }

  
  const id = el.id.value ? el.id.value : new Date().getTime();

  const user = {
    fullname: el.fullname.value,
    age: el.age.valueAsNumber, 
    email: el.email.value,
    password: el.password.value,
    active: el.active.checked,
    bornDate: new Date(el.bornDate.value +'T00:00:00-03:00').getTime(),
    location: el.location.value,
    id: id,
    image: el.image.value,
    
  };

  if (el.id.value) {
    
    const indice = usersArray.findIndex((usuario) => {
      if (usuario.id === el.id.value) {
        return true;
      }
    });
   
    usersArray[indice] = user;
    Swal.fire({
      title: "Usuario Editado",
      icon: "success",
      timer: 3000,
    });
  
    
  } else {
   
    usersArray.push(user);
    Swal.fire({
      title: "Usuario Agregado",
      icon: "success",
      timer: 3000,
    });
  }

 
  actualizarLocalStorage(usersArray);

  resetearFormulario();
});

function resetearFormulario() {
  userForm.reset(); 
  userForm.elements.password.disabled = false; 
  userForm.elements.password2.disabled = false;
  submitBtn.classList.remove("btn-edit"); 
  submitBtn.innerText = "Agregar usuario"; 
  userForm.elements.fullname.focus();
}

function actualizarLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray));
  }
  