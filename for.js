var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarestudiantes(estudiante){
    console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
   saludarestudiantes(estudiantes[i]);
}