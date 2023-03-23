var op1 ="papel";
var op2 ="tijera";
var op3 ="piedra";

var resultado = function(user, cpu) {
    if (user != cpu)
    {
    if (user === op1 && cpu === op2){
        console.log("Perdiste")
    }else if (user === op2 && cpu === op3){
        console.log("Perdiste")
    }else if (user === op3 && cpu === op1){
        console.log("Perdiste")
    }else {
        console.log("Ganaste")
    }
}else if (user === cpu){
    console.log("Empataron")
}
};
resultado (op1, op3)