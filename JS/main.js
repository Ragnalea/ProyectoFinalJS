const contenedor = document.getElementById("contenedor");
const verCarrito = document.getElementById("verCarro");
const modalCont = document.getElementById("modelCart");
const cantidadCarrito = document.getElementById("cantCart")
const barra = document.getElementById("busqueda")

let acumulador = 0;

if (localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach((el)=>{
        acumulador = acumulador + el.cant
        cantCart.innerText = acumulador
    })
    
}else{
    carrito = [];
    cantCart.innerText = acumulador
}

let Carro = [];


cantCart.style.display= "block"
cantCart.innerText = acumulador


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
        
        acumulador += 1 
        
        const repeat = carrito.some((repeatProduct)=> repeatProduct.id === el.id)



        if (repeat) {
            Carro.map((produc)=>{
                if (produc.id === el.id) {
                    produc.cant++;

                let producto= {id : el.id, img: el.img, nombre: el.nombre, precio: el.precio, cant: produc.cant}

                const findId = carrito.find((prod)=>{
                    return prod.id === el.id
                })

                carrito = carrito.filter((cartId)=>{
                    return cartId !== findId;
                })

                carrito.push(producto)
                localStorage.setItem('carrito',JSON.stringify(carrito))

            carritoCounter();
        }
    
    })
        }else{
            let producto= {id : el.id, img: el.img, nombre: el.nombre, precio: el.precio, cant: el.cant}
        Carro.push({
            id : el.id,
            img: el.img,
            nombre: el.nombre,
            precio: el.precio,
            cant: el.cant,
        })
        carrito.push(producto)
        localStorage.setItem('carrito',JSON.stringify(carrito))
        }
        carritoCounter();


    })




})}))
