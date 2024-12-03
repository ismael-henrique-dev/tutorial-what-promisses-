import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com"

const list = []

axios
  .get(`${baseURL}/posts`)
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
