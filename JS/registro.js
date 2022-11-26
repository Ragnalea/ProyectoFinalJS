let Usuarios;
let Diseñador;
let Perfil;

//const formulario = document.querySelector(".form1"),
const Name = document.querySelector("#name")
const Lastname = document.querySelector("#lastname")
const Email = document.querySelector("#correo")
const Pass = document.querySelector("#passw")
const parr = document.querySelector("#alert")
const btn = document.getElementById("newAccount")
const btnlog = document.getElementById("logbtn")
const nick = document.getElementById("nickname")
const Cuenta = document.getElementById("Account")

if (localStorage.getItem("usuario")){
    Usuarios = JSON.parse(localStorage.getItem("usuario"));
}else{
    Usuarios = [];
}


if (localStorage.getItem("diseñador")){
    Diseñador = JSON.parse(localStorage.getItem("diseñador"));
}else{
    Diseñador = [];
}

//limpiar campos
function clearfield (){
    Name.value=""
    Lastname.value=""
    nick.value=""
    Email.value=""
    Pass.value=""
}


//almacenar en el local
function registro(){
    const mailIndividuo = Usuarios.find((usuario)=>{
        return usuario.Correo == Email.value
    })

    const nickIndividuo = Usuarios.find((usuario)=>{
        return usuario.Nick == nick.value
    })
    
    if (mailIndividuo){
        parr.innerText = "Este mail ya fue registrado"
    }else{
        if (nickIndividuo) {
            parr.innerText = "Ese nick ya fue tomado, por favor elija otro"
        }else{
        let persona ={Nombre: Name.value, Apellido: Lastname.value,Nick: nick.value, Correo: Email.value, Contraseña: Pass.value}
        if(individuo){
            
        }else{
        if (persona.Correo.includes("@coder.com")) {
            Diseñador.push(persona);
            localStorage.setItem("diseñador",JSON.stringify(Diseñador));
            parr.innerText = "Bienvenido Diseñador. Intente iniciar sesion"
            sessionStorage.setItem("perfil",JSON.stringify(Diseñador))
        }else{
        if (persona.Correo.includes("@hotmail.com")) {
            Usuarios.push(persona);
            localStorage.setItem("usuario",JSON.stringify(Usuarios));
            parr.innerText = "Bienvenido Usuario. Intente iniciar sesion"
            sessionStorage.setItem("perfil",JSON.stringify(Usuarios))
        }else{
            parr.innerText = "Solo se acepta @coder.com y @hotmail.com"
        }
        }
    }}}}




btn.addEventListener("click", (e)=>{
    registro();
    
    clearfield();
});

btnlog.addEventListener("click",(e)=>{
    window.location.href = "../index.html";
    
})

