var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarestudiantes(estudiante){
    console.log(`Hola ${estudiante}`);

}while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarestudiantes(estudiante);
}