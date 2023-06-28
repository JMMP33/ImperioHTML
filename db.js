import mysql from 'mysql';

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'formulario_db',
    user: 'Ruger',
    password: "",
})

conexion.connect(function(error){
    if (error) {
         throw error;
    } else {
        console.log('El server esta ready');
    }

});


function consultar_tabla()
{
    let registros;
conexion.query('SELECT * from usuarios', function(error, resultados){
    if(error){
    throw error;
    } else{
        registros= resultados;
  
    }   
             
})
return registros;
}

function insertar_datos (nombre, apellido, correo, telefono)
{
    conexion.query("INSERT INTO usuarios(nombre, apellido, correo, telefono) VALUES ('"+nombre+"', '"+apellido+"', '"+correo+"', '"+telefono+"')", 
    function(error){
        if(error)
        {
            throw error;
        } 
        else
        {
            console.log("registro exitoso"); 
        }
    });
};

export{consultar_tabla, insertar_datos};


