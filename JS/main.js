
let Id = 0;
let Carro;
let product;




if (localStorage.getItem("carrito")){
    Carro = JSON.parse(localStorage.getItem("carrito"));
}else{
    Carro = [];
}

const tarjeta = document.getElementById("tarjetas");
const countCart = document.getElementById("contador");
let Total = 0

Carro.forEach((el)=>{
    Total = Total + el.Cantidad
    
    countCart.innerText = (Total) 
})


fetch('../Json/productos.json')
.then(Response=> Response.json())
.then((data =>{

data.forEach((el) => {
    let prod = document.createElement("div");
    prod.className = "item";
    prod.innerHTML = `
    <h3>${el.nombre}</h3>
    <img src="${el.img}">
    <p class="centrar"> $ ${el.precio}</p>
    `
    tarjeta.append(prod);

    let btnBuy = document.createElement("button")
    btnBuy.className="compra";
    btnBuy.id= Id += 1;
    btnBuy.innerText= "Agregar al carrito";
    prod.append(btnBuy);


    btnBuy.addEventListener('click',() => {

        const ticket = Carro.find((mercad)=>{
            return data[btnBuy.id-1].nombre == mercad.Desc
    })
    if(ticket){
        let T = Carro.indexOf(ticket)
        let C = ticket.Cantidad += 1
        let P = data[btnBuy.id-1].precio * C
        Carro[T].Cantidad= C
        Carro[T].Precio= P

        localStorage.setItem("carrito",JSON.stringify(Carro))
        

}else{
    let product ={Desc: data[btnBuy.id-1].nombre, Precio: data[btnBuy.id-1].precio, Cantidad: 1}
    Carro.push(product)
    localStorage.setItem("carrito",JSON.stringify(Carro))


}

Total = 0
Carro.forEach((el)=>{
    Total = Total + el.Cantidad
countCart.innerText = (Total) 
})



})})}))




