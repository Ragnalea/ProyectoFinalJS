const registro = document.getElementById("newAccount")
const correo = document.getElementById("mail")
const pass = document.getElementById("contr")
const init = document.getElementById("btninit")
const mje = document.getElementById("Advertencia")




registro.addEventListener("click",(e) =>{
    window.location.href = "pages/registro.html"
}

)

//traer el array
    let persona = JSON.parse(localStorage.getItem("usuario"))
;
init.addEventListener("click", (e)=>{
    //buscar usuario
    const individuo = persona.find((usuario)=>{
        return usuario.Correo == correo.value;
        
    })
    if (correo.value == "" || pass.value == "") {
        mje.innerText = "Los campos no pueden estar vacios"
    }else{
    //si usuario existe, comparar la contraseña
    if (individuo) {
        let L = persona.indexOf(individuo);
        
        if (individuo.Contraseña == pass.value) {
        window.location.href = "pages/home.html"
        }else{
        mje.innerText= "Los datos son incorrectos"
        }
    }else{
        
        mje.innerText= "Este mail no esta registrado"
    }
}})