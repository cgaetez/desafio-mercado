const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const PORT = 3000;


//Configuración del motor de plantillas
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname + '/views'))

app.engine('handlebars', 
exphbs.engine({
    defaultLayout: "main",
    //layoutsDir: __dirname + "/view/layouts",
}));


app.get('/', (req,res) => {
    res.render('home',{
    title: '::: Home :::'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: '::: Acerca de nosotros:::'
    })
})

app.get('/contact', (req,res) => {
    res.render('contact',{
        title: '::: Contact :::'
        })
    })

app.get('/products', (req,res) => {
        res.render('products',{
            title: '::: Productos :::'
            })
})

/*
app.get('/home', (req,res) =>{
    res.json({message: 'Hola mundo'})
})*/


/*
app.get('/views/users',(req,res)=>{
    res.sendFile(__dirname + 'users.html')
})*/

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})