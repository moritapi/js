let agregarNombre = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + agregarNombre)

let agregarTarea= prompt("Ingresa una tarea") 

    function solicitarTarea(){
        let agregarTarea= prompt("Ingresa otra tarea")
    } 
        solicitarTarea(agregarTarea);

let tarea= prompt("Ingresa otra tarea")

    while(tarea != "terminar"){
        console.log("Ingrasaste una tarea" + tarea);
            tarea= prompt("Ingresa la tarea . si quieres salir escribe terminar")
}

