var saludo =alert("Hola! Soy tu lista de tareas");

    let nombreUsuario = prompt("Ingresa tu nombre de Usuario");

        if (nombreUsuario == "") {
            alert("No ingresaste el nombre de usuario");
    }
        else {
            alert("Nombre de usuario ingresado " + nombreUsuario);
    }
    
    let tarea= prompt("Ingresa una tarea")

        while(tarea != "terminar"){
            console.log("Ingrasaste una tarea" + tarea);
                tarea= prompt("Ingresa la tarea . si quieres salir escribe terminar")
    }