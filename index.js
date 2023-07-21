const express = require("express");//almacena la libreria con el comando require de node.js en la constante 

const app = express(); //crea una instancia de express como servidor

const jugadores []//array para crear jugadores, se crea vacio.
class Jugador {
    constructor(id){
    this.id = this.id
    }
}


app.get("/unirse", (req, res)=>{ //metodo de solicitud de datos el "/" se refiere a la direccion url, solo base, req y res es requeired and response
    const id = `${Math.random()}`      // permite responder con el comando send el mensaje descrito.
    const jugador = new jugador(id)
})

app.listen(8080, ()=> { //abre la escucha del puerto 8080 en el servidor
    console.log(' ! Servidor funcionando¡ ') // imprime el mensaje, se ejecuta con node 'nombre del archivo.js'
}) // al ejecutar el servidor con node 'nombre archivo.js' el navegador nos impime el mensaje "Hola" a través de la url: localhost:8080 
