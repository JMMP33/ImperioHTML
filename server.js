import express from 'express';
import {consultar_tabla, insertar_datos} from './db.js';

const app = express();

app.listen('3000', function()
    {
        console.log("Se ha iniciado correctamente");
    }
)

app.use(express.static("paginaprincipal"));

app.get('/', function(peticion, respuesta)
    {
        respuesta.sendFile(__dirname + "/paginaprincial/Index.html");
    }
);

app.get(`/agregar/:nombre/:apellido/:correo/:telefono` , function(peticion, respuesta)
    {
        let nombre = peticion.params.nombre;
        let apellido = peticion.params.apellido;
        let correo = peticion.params.correo;
        let telefono = peticion.params.telefono;

        console.log(nombre + apellido + correo + telefono);

        insertar_datos(nombre,apellido,correo,telefono);
        respuesta.redirect('/')
    }
);

app.get(`/recibir`, function(peticion, respuesta)
    {
        consultar_tabla();
        respuesta.redirect(`/consultar`);
    }

 
);

app.get(`/consultar`, function(peticion,respuesta)
    {
        var registros = consultar_tabla();
        console.log(registros);
    }

);