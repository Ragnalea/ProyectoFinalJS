const registro = document.getElementById("newAccount")
const correo = document.getElementById("mail")
const pass = document.getElementById("contr")
const init = document.getElementById("btninit")

registro.addEventListener("click",(e) =>{
    window.location.href = "pages/registro.html"
}
)

function comparar(){
    let persona = JSON.parse(localStorage.getItem("usuario"))
    if (persona.Correo == Email.value) {
        let mensaje1 = "funciona"
        console.log(mensaje1)
        
    }
}

init.addEventListener(click.(e)=>{

})
