const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contatos.html"))//path junta o seu endereço local junto com o arq/ o dirname recupera o local atual 
})


app.use(router)//mostra qual rota estou usando

app.listen(3333, () => { //Inicializar o servidor, para a aplic. começar a ouvir as requisiçoes
    console.log("servidor rodando")
})