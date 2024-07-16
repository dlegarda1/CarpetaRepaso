const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.get('/', (req, res) => {
    res.send('Servidor activado');
    }
);

//************************************************************ */
//        middleware 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/pepito', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola ${nombre}!`);
  })

app.post('/peticion',(req,res)=>{
    console.log(req.body);
    const numero=req.body.numero;
    res.send('Petición recibida'+numero);
})

app.listen(port, () => {
    console.log(`Servidor ecuchando en http://localhost:${port}`);
});
