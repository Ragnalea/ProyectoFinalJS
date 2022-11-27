const registro = document.getElementById("newAccount")
const cuenta = document.getElementById("mail")
const pass = document.getElementById("contr")
const init = document.getElementById("btninit")
const mje = document.getElementById("Advertencia")


//traer el array
let Usuario = JSON.parse(localStorage.getItem("usuario"));
//let Sesion = [];


registro.addEventListener("click",(e) =>{
    window.location.href = "pages/registro.html"
})


function mensajeError(){
    mje.innerText="Los datos son incorrectos";
}



init.addEventListener("click", (e)=>{

    const mailIndividuo = Usuario.find((usuario)=>{
        return usuario.Correo == cuenta.value})

    const nickIndividuo = Usuario.find((usuario)=>{
        return usuario.Nick == cuenta.value})

    if (mailIndividuo){ 
        let L = Usuario.indexOf(mailIndividuo);
        if (Usuario[L].Correo == cuenta.value && Usuario[L].Contraseña == pass.value) 
        {
            window.location.href = "pages/home.html";
        }else{
            mensajeError();
        }
        }else{
            if (nickIndividuo){ 
                let N = Usuario.indexOf(nickIndividuo);
                if (Usuario[N].Nick == cuenta.value && Usuario[N].Contraseña == pass.value) 
                {
                window.location.href = "pages/home.html";
                }else{
                    mensajeError();
                }
            }else{
                mensajeError();
            }        
        }

})