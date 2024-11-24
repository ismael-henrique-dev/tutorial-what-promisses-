const list = []

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then((res) => res.json()) // Converte a resposta para JSON
  .then((data) => {
    list.push(...data)
    // o pq desses 3 pontinhos ?
  })
  .catch((error) => {
    console.error("Erro na requisição:", error)
  })


console.log(`Mostrando a data: `, list)

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

getData()

const btnSubmit = document.getElementById("btnSubmit")

async function postData() {
  const payload = {
    title: "foo",
    body: "bar",
    userId: 1,
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indica que o corpo será enviado como JSON

      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

btnSubmit.addEventListener("click", () => postData())
