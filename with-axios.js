import axios from "axios"

const list = []

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    const data = response.data
    console.log(data)
    list.push(...data)
  })
  .catch((error) => {
    console.error("Erro na requisição:", error)
  })
  .finally(() => {
    console.log(`Mostrando axios ${JSON.stringify(list)}`)
  })
