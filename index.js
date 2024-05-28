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
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
     
}));

//static
app.use(express.static('assets'))

app.get('/', (req,res) => {
    res.render('home',{
    title: '::: Home :::'
    })
})
/*
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

*/
//npm install jsonfile
const jsonfile = require('jsonfile');
const pathjson = './assets/productos.json';

jsonfile.readFile(pathjson, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  //console.log('test');    
    app.get('/products', (req,res) => {
        res.render('products',{
            title: '::: Productos :::',
            productos: data.productos
            })
    })

    app.use('/product/:producto', function (req, res, next) { 
       // JSON.parse(data.productos).includes(req.params.producto)
       let nombre = req.params.producto.toString();
       //console.log('entrada');
       let resp=0;
        Object.entries(data.productos).forEach(([key, value]) => {
            console.log('resp: ' + resp);
            if(value.nombre == req.params.producto){
                //console.log(value.nombre);
                resp=1;
                return false;
            }

      });
        if(resp===1){
            //console.log(value.nombre);
            next();
        }else{
            console.log('else');
            res.sendFile(__dirname + '/assets/img/noproduct.jpeg');
        }

    })

    app.get("/product/:producto", (req, res) => {
        console.log(req.params.producto);
        res.render('product',{
            title: '::: Producto :::',
            producto: req.params.producto
        })
    });

 });



 



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