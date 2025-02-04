//Importando o servidor

const express = require('express')

//Inicializando o servidor
const app = express()

const port = 3000

// Rota Principal
app.get('/', (requisicao, resposta) => {
  resposta.send('Raiz do servidor')
})

app.get('/Hello', (requisicao, resposta) => {
    resposta.send('Hello World!')
  })


//Ouvindo a porta 3000 e exibindo uma mensagem de retorno no console
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})