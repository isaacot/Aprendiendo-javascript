var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre:"Television", costo: 2500},
    {nombre:"Libro", costo: 4200},
    {nombre:"Celular", costo: 2000},
    {nombre:"Laptop", costo: 5000},
    {nombre:"Teclado", costo: 120},
    {nombre:"Audifonos", costo: 200},
];
//Manera de utilizar el find//
var encuentraarticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" 
});

//Manera de utilizar el foreach//
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
//Maner de utilizar el some//
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});