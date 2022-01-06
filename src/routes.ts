import {Request, Response, Router} from "express"
import multer, { Multer } from "multer"

const router:Router = Router()
const multerConfig:Multer = multer()

router.post("/products", multerConfig.single("file"), (request: Request, response: Response) => {
  // console.log(request.file) //Desse jeito vai gerar um buffer
  console.log(request.file?.buffer.toString("utf-8")) //Para visualizarmos se os arquivos estão vindo corretamente do mercadinho.csv
  return response.send()
})

export {router}