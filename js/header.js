
const headerNav = document.getElementById("header-nav");
const userInfoHeader = document.getElementById("header-user");


const loguedUser = JSON.parse(localStorage.getItem("currentUser"));
if (loguedUser) {
  
  if (loguedUser.role === "ADMIN_ROLE") {
    
    const adminUserLink = document.createElement("a"); 
    adminUserLink.href = "/pages/admin/user-admin.html";
    adminUserLink.innerText = "User admin";
    adminUserLink.classList.add("nav-list");
    adminUserLink.classList.add("admin");
    headerNav.appendChild(adminUserLink);

    const productAdminLink = document.createElement("a"); 
    productAdminLink.href = "/pages/admin/product-admin.html";
    productAdminLink.innerText = "Product admin";
    productAdminLink.classList.add("nav-list");
    productAdminLink.classList.add("admin");
    headerNav.appendChild(productAdminLink);
  }

  const userNameHTML = userInfoHeader.querySelector(".user-name");
  userNameHTML.innerText = loguedUser.fullname;

  
  const userImg = document.createElement("img");
  userImg.src = loguedUser.image;
  userImg.alt = `${loguedUser.fullname} profile picture`;
  userImg.classList.add("user-profile-picture");
  userInfoHeader.appendChild(userImg);

  
  const userActionHTML = userInfoHeader.querySelector(".user-action");

  const logoutButton = document.createElement("button");
  logoutButton.classList.add("header-link");
  logoutButton.innerText = "Logout";


  logoutButton.onclick = function () {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html"; 
  };

 
  userActionHTML.append(logoutButton);
} else {
  
  const userActionHTML = userInfoHeader.querySelector(".user-action");

  const loginLink = document.createElement("a");
  loginLink.href = "/pages/login/login.html";
  
  loginLink.classList.add("header-link");

  userActionHTML.appendChild(loginLink);
}