# backend-nodejs-csv-api
API para receber Request de "file.csv" - Typescript Back End

#### Funcionalidades

- **Cadastrar Produtos**

    Um cliente pode de um mercadinho possui uma planilha em .csv e gostaria de cadastrar seus produtos em seu respecitov Back End, porém ele não deseja fazer isso manualmente em seu banco de dados, criando um item após o outro. Sua tarefa será criar uma API que possibilite a leitura do .csv e enviar para o banco de dados, os produtos que forem selecionados no arquivo.csv de seu respectivo cliente.


==========================


#### Configurando um banco de dados para testar a solução
- Criar um arquivo .env na root do projeto, ou seja, onde encontra-se o package.json.
- Inserir as informações abaixo no arquivo .env com seus respectivos valores:

DATABASE_URL= "URL do DB (Postgres)"<br/>
SHADOW_DATABASE_URL = "URL de uma SHADOW DB, utilize isso caso esteja usando o Heroku"<br/>

#### Solução
Rode os seguintes comandos dentro da pasta que estiver com o package.json.
- npm i
- npm run dev or npm start

#### Link da Documentação
- https://documenter.getpostman.com/view/16818323/UVXeqxBd

## O que temos aqui?
- [x]  NodeJS
- [x]  TypeScript
- [x]  Express
- [x]  Nodemon
- [x]  UUID
- [x]  Prisma
- [x]  PostgreSQL
- [x]  Multer

## INTEGRANTE
Perfil      | Link do perfil no GITHUB
--------- | ------
[<img src="https://avatars.githubusercontent.com/u/52759918?v=4" width="75px;"/>](https://github.com/vinnivso) | [Vinícius Oliveira](https://github.com/vinnivso)
