function login() {
  const input = {
    username: document.querySelector("#loginUsername").value,
    password: document.querySelector("#loginPassword").value,
  }

  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      "query": `mutation login {
        login(input: {
          username: "${input.username}",
          password: "${input.password}",
        }) {
          user {
            username
          }
          token
        }
      }`,
    }),
  })
    .then(res => res.json())
    .then(res => {
      const result = res && res.data && res.data.login
      const errors = res && res.errors && res.errors.map(error => error.message)

      if (errors) {
        loginErrors.innerHTML = errors.join('')
      }

      if (result) {
        const { token } = result

        if (token) {
          sessionStorage.setItem("token", token)
        }

        return window.location.assign('/')
      }
    })
}

const loginButton = document.querySelector("#loginButton");
const loginForm = document.querySelector("#loginForm");
const loginErrors = document.querySelector("#errors");

loginForm.addEventListener("submit", event => event.preventDefault());
loginButton.addEventListener("click", login);
