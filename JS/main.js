const contenedor = document.getElementById("contenedor");
const verCarrito = document.getElementById("verCarro");
const modalCont = document.getElementById("modelCart");
const cantidadCarrito = document.getElementById("cantCart")
const barra = document.getElementById("busqueda")

if (localStorage.getItem("carrito")){
    Carro = JSON.parse(localStorage.getItem("carrito"));
}else{
    Carro = [];
}






fetch('../Json/productos.json')
.then(Response=> Response.json())
.then((data =>{

    data.forEach((el) => {
        let producto = document.createElement("div");
        producto.className= "card";
        producto.innerHTML = `
        <img src="${el.img}">
        <h3">${el.nombre}</h3>        
        <p class="price"> $ ${el.precio}</p>
    `;
        contenedor.append(producto);

    let btnBuy = document.createElement("button")
    btnBuy.className= "comprar";
    btnBuy.id= el.id;
    btnBuy.innerText= "Agregar al carrito";
    
    producto.append(btnBuy);

        btnBuy.addEventListener("click",() => {


            const repeat = Carro.some((repeatProduct)=> repeatProduct.id === el.id)
            if (repeat) {
                Carro.map((produc)=>{
                    if (produc.id === el.id) {
                        produc.cant++;
                    }
                })
            }else{

            Carro.push({
                id : el.id,
                img: el.img,
                nombre: el.nombre,
                precio: el.precio,
                cant: el.cant,
            })}
            carritoCounter();
        })




})}))
