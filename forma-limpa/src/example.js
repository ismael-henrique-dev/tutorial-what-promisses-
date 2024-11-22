import { api } from "./services/api"

async function getData() {
  try {
    // passo só a rota que eu quero
    const { data } = await api.get("/posts")

    console.log("Dados recebidos:", data)
  } catch (error) {
    console.error("Erro ao fazer a requisição GET:", error)
  }
}

getData()
