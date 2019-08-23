const token = sessionStorage.getItem("token")

function fetchMovies() {
  fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({
      "query": `query listMovies {
        listMovies {
          id
          title
          scoutbase_rating
          rating
          actors {
            name
            birthday
            country
            directors {
              name
              country
              birthday
            }
          }
        }
      }`,
    }),
  })
    .then(res => res.json())
    .then(res => {
      const result = res && res.data && res.data.listMovies

      if (result) {
        console.log(result)
      }
    })
}

fetchMovies()
