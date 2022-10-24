/* 
CRUD STANDS FOR: 
create / read/ update / delete
*/

// voy a montar un entorno de express

const express = require('express');

const app = express();

const port = 3000;

//Middlewares

app.use(express.json());  // Indicamos que la aplicación puede trabajar con json

//Endpoints

/* 
    El endpoint en este caso entraría en la dirección localhost:3000/(valor parámetro variable). 
    En el método GET siempre se pasan dos argumentos como parámetro
*/

app.get('/saludo/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    res.send(`Hola, ${nombre} bienvenido a mi API`);
});

app.get('/', (req, res) => {    //This is the root route
    res.send('Hola bienvenido a mi API');
});

app.get('/login', (req, res) => {
    res.send("Ahora estás en login");
    res.json({
        mensaje: 'Bienvenido, gracias por logearte'
})});

//POST

app.post('/register', (req, res) => {
    //obtengo los datos del body
    
    let usuario = req.body;
    res.send(`Hola ${usuario.nombre}, sé que tu email es ${usuario.email} y tienes ${usuario.edad} anios.`)
});

//Levantamos el server en escucha

app.listen(port, () => console.log(`Servidor levantado en puerto...${port}`));  //server up and listening