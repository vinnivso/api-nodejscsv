import {Request, Response, Router} from "express"
import multer from "multer"
import { Readable } from "stream" //Pacote no nodejs
import readline from "readline" //pacote no nodejs
import { Product } from "./interfaces/Product"
import { client } from "./database/client"

const router = Router()
const multerConfig  = multer()

router.post("/products", multerConfig.single("file"), async (request: Request, response: Response) => {
  try {
    // console.log(request.file) //Desse jeito vai gerar um buffer
    // console.log(request.file?.buffer.toString("utf-8")) //Para visualizarmos se os arquivos estão vindo corretamente do mercadinho.csv
    const {file} = request
    const {buffer} = file

    const readableFile = new Readable()
    readableFile.push(buffer)
    readableFile.push(null)

    const productsLine = readline.createInterface({
      input: readableFile
    })

    //Array criado para fazer leitura e desestruturação linha a linha
    const products: Product[] = []

    //Fazendo leitura e desestruturação linha a linha
    for await (let line of productsLine) {
      const productsLineSplit = line.split(",")
      products.push({
        code_bar: productsLineSplit[0],
        description: productsLineSplit[1],
        price: +(productsLineSplit[2]), //Convertendo string p/ number
        quantity: +(productsLineSplit[3]) //Convertendo string p/ number
      })
    }

    //Inserindo os dados no DB
    for await (let {code_bar, description, price, quantity} of products) {
      await client.products.create({
        data: {code_bar, description, price, quantity}
      })
    }
    return response.json({message:`Produtos inseridos com sucesso no Banco de Dados`})

  } catch (e) {
    const error = e as Error
    console.log(error)
    response.json({message: error.message})
  }
})

export {router}