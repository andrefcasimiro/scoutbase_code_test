const moviesList = document.querySelector("#moviesList")

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
          year
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
        const content = result.map(result => `
          <div style='min-width: 16rem; float: left; padding: 0.5rem; border: 0.05rem solid grey; margin: 0.5rem;'>
            <p><strong>Title: </strong> ${result.title}</p>
            <p><strong>Year: </strong> ${result.year}</p>
            ${result.scoutbase_rating !== null ? `<p><strong>Scoutbase Rating: </strong> ${result.scoutbase_rating}</p>` : ``}
            <p><strong>Actors: </strong>
              ${result.actors.map(actor =>
                `<ul style='border-top: 0.05rem dotted gray; padding-top: 1rem;'>
                  <li><strong>Name: </strong> ${actor.name}</li>
                  <li><strong>Birthday: </strong> ${actor.birthday}</li>
                  <li><strong>Country: </strong> ${actor.country}</li>
                </ul>`
              ).join('')}
            </p>
          </div>`
        )
        moviesList.innerHTML = content.join('')
      }
    })
}

fetchMovies()
