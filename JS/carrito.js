    const carritoCounter = () => {
    cantCart.style.display= "block"

    cantCart.innerText = acumulador
    };


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


    carrito.forEach(el => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modalContent"
        carritoContent.innerHTML = `
        <img src="${el.img}" class= "imgCart">
        <h3 class="titCart">${el.nombre}</h3>
        <p class="desCart">$ ${el.precio}</p>
        <p class="desCart">Cantidad: ${el.cant}</p>
        <p class= "desCart">Total: ${el.cant * el.precio}</p>
        `;

        modalCont.append(carritoContent);



        let eliminar = document.createElement("button")
        eliminar.innerText = "❌";
        eliminar.id = el.id
        eliminar.className = "eliminar"
        carritoContent.append(eliminar)
        
        eliminar.addEventListener("click", () =>{
        
            carrito = carrito.filter((el)=>{
                return el.id != eliminar.id;
            })

            console.log(carrito)
            pintarCarrito();
            }) 
    });
    
    const total = carrito.reduce((acc, el)=> acc + el.precio * el.cant,0)
    
    const totBuy= document.createElement("div")
    totBuy.className = "totalContent";
    totBuy.innerHTML = `<h2 class="importeTot">Total a pagar: $ ${total}</h2>`;
    modalCont.append(totBuy);
    
    let btnBuy = document.createElement("button")
    btnBuy.innerText = "Comprar";
    btnBuy.className = "btnCompra"
    modalCont.append(btnBuy)

    btnBuy.addEventListener("click", () =>{
        Swal.fire({
            position: 'Center',
            icon: 'success',
            title: 'Gracias por confiar en nosotros :)',
            showConfirmButton: false,
            timer: 2500,
        })
        carrito = []
        acumulador=0;
        pintarCarrito();
        carritoCounter();
    })
    
    
    


};







verCarrito.addEventListener("click", pintarCarrito)




