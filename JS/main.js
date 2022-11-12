const mercaderia = [
    {Id: 1, Name: "ropero", Precio: 15000},
    {Id: 2, Name: "desayunador", Precio: 10000},
    {Id: 3, Name: "cartel", Precio: 5000},
    {Id: 4, Name: "esquinero", Precio: 7500},
    {Id: 5, Name: "bahiut", Precio: 3000},
    {Id: 6, Name: "botinero", Precio: 9000},
    {Id: 7, Name: "comodon", Precio: 11000},
];

console.log(mercaderia.indexOf("ropero"));





// const mayor = mercaderia.filter((mercaderia)=>{
//     return mercaderia.Precio >= 8000
// })

// const menor = mercaderia.filter((mercaderia)=>{
//     return mercaderia.Precio < 8000
// })


// let mensaje = prompt("¿Desea filtrar los precio? Y/N").toLocaleLowerCase()
// if (mensaje == "y") {
    
// let mensaje2 = prompt("¿Desea filtrar por mayor precio? Y/N").toLocaleLowerCase()
// if (mensaje2 == "y"){
//     console.log(mayor);
// }else{
// if (mensaje2 == "n") {
//     console.log(menor)
// }else{
//     alert("Por Favor usar Y o N ")
// }
// }}else{
//     if (mensaje != "y" && mensaje != "n") {
//         alert("Por Favor usar Y o N ")
//     }
// }

// let mensaje3 = prompt("¿Desea filtrar el producto por nombre?").toLocaleLowerCase()
// if (mensaje3 == "y") {
//     let pregunta = prompt("¿Que estas buscando?").toLocaleLowerCase();
// const Filtro = mercaderia.filter((el)=>{
//     return el.Name.includes(pregunta)
// })
// console.log(Filtro)
// }else{
//     if (mensaje != "y" && mensaje != "n") {
//         alert("Por Favor usar Y o N ")
//     }
// };



// function multi (a, b){
//     return a * b
// };

// let mensaje4 = prompt("¿Desea comprar?").toLocaleLowerCase();
// if (mensaje4 == "y"){
// let opcion = prompt("Elige una de estas opciones \n1- Ropero \n2- Cartel \n3- Desayunador \n4- Esquinero \n5- Bahiut \n6- Botiero \n7- Comodon" ) 
// switch(opcion) {
//     case "1":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[0].Precio,cant));
//     break;
//     case "2":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[1].Precio,cant));
//     break;
//     case "3":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[2].Precio,cant));
//     break;
//     case "4":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[3].Precio,cant));
//     break;
//     case "5":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[4].Precio,cant));
//     break;
//     case "6":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[5].Precio,cant));
//     break;
//     case "7":
//     cant = prompt("¿Cuantos desea comprar?")
//     console.log(multi(mercaderia[6].Precio,cant));
//     break;
// }}else{
//     if (mensaje != "y" && mensaje != "n") {
//         alert("Por Favor usar Y o N ")
//     }
// };