var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre:"Television", costo: 2500},
    {nombre:"Libro", costo: 4200},
    {nombre:"Celular", costo: 2000},
    {nombre:"laptop", costo: 5000},
    {nombre:"Teclado", costo: 120},
    {nombre:"Audifonos", costo: 200},
];
//este es un anexo al array de articulos y sirve como filtro para el primero//
var articulosfiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
//este es un anexo al array de articulos y sirve como filtro para el primero, pero es independiente de segundo//
var nombrearticulo = articulos.map(function(articulo){
    return articulo.nombre
});