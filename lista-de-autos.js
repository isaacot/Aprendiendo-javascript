function Carro(Marca, Modelo, Annio, Duennio){
this.Marca = Marca;
this.Modelo = Modelo;
this.Annio = Annio;
this.Duennio = Duennio;
}
var carros = [];
for(var i = 0; i < 3 ; i++){
    let Marca = prompt(`Marca: `);
    let Modelo = prompt(`Modelo: `);
    let Annio= prompt(`Annio: `);
    let Duennio = prompt(`Duennio: `);
carros.push (new Carro(Marca, Modelo, Annio, Duennio));
}

for(let i = 0; i < carros.length; i++){
    console.log(carros[i]);
}

