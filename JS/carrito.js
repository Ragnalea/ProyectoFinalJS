const pintarCarrito =() => {
    modalCont.innerHTML="";
    modalCont.style.display = "flex";
    modalCont.innerHTML = "";    const modalheader = document.createElement("div")
    modalheader.className = "modalHeader"
    modalheader.innerHTML =`
    <h2 class="modalHeaderTitle">Su lista en el carrito:</h2>
    `
    modalCont.append(modalheader);

    const modalbutton = document.createElement("botton")
    
    modalbutton.innerHTML = "X";
    modalbutton.className = "modalHeaderButton"
    modalheader.append(modalbutton)

    modalbutton.addEventListener("click",() => {
        modalCont.style.display = "none";
    })


    Carro.forEach(el => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modalContent"
        carritoContent.innerHTML = `
        <img src="${el.img}">
        <h3>${el.nombre}</h3>
        <p>$ ${el.precio}</p>
        <p>Cantidad: ${el.cant}</p>
        <p>Total: ${el.cant * el.precio}</p>
        `;

        modalCont.append(carritoContent);



        let eliminar = document.createElement("button")
        eliminar.innerText = "❌";
        eliminar.className = "Eliminar"
        carritoContent.append(eliminar)

        eliminar.addEventListener("click", eliminarProducto)
    });

    const total = Carro.reduce((acc, el)=> acc + el.precio * el.cant,0)

    const totBuy= document.createElement("div")
    totBuy.className = "totalContent";
    totBuy.innerHTML = `<h2 class="importeTot">Total a pagar: $ ${total}</h2>`;
    modalCont.append(totBuy);
    
};


verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () =>{
    const foundId = Carro.find((element) => element.id)

    Carro = Carro.filter((cartId)=>{
        return cartId !== foundId;
    })
    carritoCounter();
    pintarCarrito();

}

const carritoCounter = () => {
    cantCart.style.display= "block"
    cantCart.innerText = Carro.length
}