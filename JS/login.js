const registro = document.getElementById("newAccount")
const cuenta = document.getElementById("mail")
const pass = document.getElementById("contr")
const init = document.getElementById("btninit")
const mje = document.getElementById("Advertencia")


//traer el array
let Usuario = JSON.parse(localStorage.getItem("usuario"));
let Diseñador = JSON.parse(localStorage.getItem("diseñador"));
//let Sesion = [];

function SearchUser(){
    //buscar usuario
    const individuo = Usuario.find((usuario)=>{
        return usuario.Correo == correo.value;
        
    })


    if (correo.value == "" || pass.value == "") {
        mje.innerText = "Los campos no pueden estar vacios"
    }else{
    //si usuario existe, comparar la contraseña
    if (individuo) {
        let L = Usuario.indexOf(individuo);
        
        if (individuo.Contraseña == pass.value) {
        //window.location.href = "pages/home.html"
        console.log(Usuario[L].Nick)
        }else{
        mje.innerText= "Los datos son incorrectos"
        }
    }else{
        
        mje.innerText= "Este mail no esta registrado"
    }}}

function SearchDesigner(){
        //buscar usuario
        const individuo = Diseñador.find((diseñador)=>{
            return diseñador.Correo == correo.value;
            
        })
        if (correo.value == "" || pass.value == "") {
            mje.innerText = "Los campos no pueden estar vacios"
        }else{
        //si usuario existe, comparar la contraseña
        if (individuo) {
            let L = Diseñador.indexOf(individuo);
            
            if (individuo.Contraseña == pass.value) {
            //window.location.href = "pages/home.html"
            console.log(Diseñador[L].Nick)
            }else{
            mje.innerText= "Los datos son incorrectos"
            }
        }else{
            
            mje.innerText= "Este mail no esta registrado"
        }}}


registro.addEventListener("click",(e) =>{
    window.location.href = "pages/registro.html"
}

)




init.addEventListener("click", (e)=>{
    const mailIndividuo = Usuario.find((usuario)=>{
        return usuario.Correo == cuenta.value
    })
    const nickIndividuo = Usuario.find((usuario)=>{
        return usuario.Nick == cuenta.value
    })
    if (mailIndividuo || nickIndividuo) {
        window.location.href = "pages/home.html";
    }else
        mje.innerText="Los datos son incorrectos"
    }
    
)