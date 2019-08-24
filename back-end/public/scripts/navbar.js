const loginLink = document.querySelector("#loginLink");
const logoutLink = document.querySelector("#logoutLink");
const createAccountLink = document.querySelector("#createAccountLink");

if (sessionStorage.getItem("token")) {
  loginLink.style.display = "none";
  createAccountLink.style.display = "none";
  logoutLink.style.display = "inline";
} else {
  loginLink.style.display = "inline";
  createAccountLink.style.display = "inline";
  logoutLink.style.display = "none";
}

function logout() {
  sessionStorage.removeItem("token")

  window.location.assign('/')
}

if (logoutLink) {
  logoutLink.addEventListener("click", logout)
}
