var op1 = "tijera" 
var op2 = "papel" 
var op3 = "piedra"
function ganador(cpu, user) {
switch(true){
        case (cpu === op1 && user === op1) :
        console.log("empate");
        break;
        case (cpu === op2 && user === op2) :
        console.log("empate");
        break;
        case (cpu === op3 && user === op3) :
        console.log("empate");
        break;
        case (cpu === op1 && user === op2):
        console.log("perdiste");
        break;
        case (cpu === op2 && user === op3):
        console.log("perdiste");
        break;
        case (cpu === op3 && user === op1):
        console.log("perdiste");
        break;
        case (cpu === op3 && user === op2):
        console.log("ganaste");
        break;
        case (cpu === op1 && user === op3):
        console.log("ganaste");
        break;
        case (cpu === op2 && user === op1):
        console.log("ganaste");
        break;
        default:
        console.log("Asi no se puede jugar");
       
}
};
ganador (op1, op3)