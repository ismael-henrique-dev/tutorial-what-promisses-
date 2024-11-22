import axios from "axios"

async function getData() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )

    console.log("Dados recebidos:", data)
  } catch (error) {
    console.error("Erro ao fazer a requisição GET:", error)
  }
}

getData()
