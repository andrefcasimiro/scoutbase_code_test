function createAccount() {
  const input = {
    username: document.querySelector("#createAccountUsername").value,
    password: document.querySelector("#createAccountPassword").value,
  }

  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      "query": `mutation createUser {
        createUser(input: {
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
      const result = res && res.data && res.data.createUser

      if (!result) {
        return
      }

      const { token } = result

      if (token) {
        sessionStorage.setItem("token", token)
      }

      return window.location.assign('/')
    })
}

const createAccountButton = document.querySelector("#createAccountButton");
const createAccountForm = document.querySelector("#createAccountForm");

createAccountForm.addEventListener("submit", event => event.preventDefault());
createAccountButton.addEventListener("click", createAccount);
