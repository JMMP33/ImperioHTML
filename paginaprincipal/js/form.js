document.getElementById('boton_lanzar').addEventListener('click', registrar);


function registrar()
{
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
   
    console.log(nombre + ' ' + apellido + ' ' + correo + ' ' + telefono);

    window.location.href = `agregar/${nombre}/${apellido}/${correo}/${telefono}`;
}

