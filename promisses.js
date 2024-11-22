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
