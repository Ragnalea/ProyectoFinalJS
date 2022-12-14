let Usuarios;
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



function clearfield (){
    Name.value=""
    Lastname.value=""
    nick.value=""
    Email.value=""
    Pass.value=""
}



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
        if (persona.Correo.includes("@hotmail.com")) {
            Usuarios.push(persona);
            localStorage.setItem("usuario",JSON.stringify(Usuarios));
            parr.innerText = "Bienvenido Usuario. Intente iniciar sesion"
        }else{
            parr.innerText = "Solo se acepta @hotmail.com"
        }
        }
    }}




btn.addEventListener("click", (e)=>{
    registro();
    
    clearfield();
});

btnlog.addEventListener("click",(e)=>{
    window.location.href = "../index.html";
    
})

