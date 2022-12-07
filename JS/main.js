let Cart = localStorage.getItem('compra',JSON.parse)

const tarjeta = document.getElementById("tarjetas");

fetch('../Json/productos.json')
.then(Response=> Response.json())
.then((data =>{

data.forEach((element) => {
    
        let prod = document.createElement("div");
        prod.className = "item";
        prod.innerHTML = `
            <h3>${element.nombre}</h3>
            <img src="${element.img}">
            <p class="centrar"> $ ${element.precio}</p>
        `;
        tarjetas.append(prod);

        let btnBuy = document.createElement("button")
        btnBuy.className="compra";
        btnBuy.innerText= "Agregar al carrito";
        prod.append(btnBuy);

        btnBuy.addEventListener("click", ()=>{
            console.log("Descansa bro!")
        })
})}));