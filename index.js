const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('Hola mundo')
})

app.get('/home', (req,res) =>{
    res.json({message: 'Hola mundo'})
})

app.get('/views/users',(req,res)=>{
    res.sendFile(__dirname + 'users.html')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})