let Usuarios;
let Diseñador;


const formulario = document.querySelector(".form1"),
Name = document.querySelector("#name")
Lastname = document.querySelector("#lastname")
Email = document.querySelector("#correo")
Pass = document.querySelector("#passw")
parr = document.querySelector("#alert")
const btn = document.getElementById("newAccount")
const btnlog = document.getElementById("logbtn")

if (localStorage.getItem("usuario")){
    Usuarios = JSON.parse(localStorage.getItem("usuario"));
}else{
    Usuarios = [];
}
console.log (Usuarios)
if (localStorage.getItem("diseñador")){
    Diseñador = JSON.parse(localStorage.getItem("diseñador"));
}else{
    Diseñador = [];
}
console.log(Diseñador)

//construir Usuario
// class Usuario{
//     constructor(Name,Lastname,Email,Pass){
//         this.Name = Nombre;
//         this.Lastname = Apellido;
//         this.Email = Correo;
//         this.Pass = Contraseña;
//     }
// }

//limpiar campos
function clearfield (){
    Name.value=""
    Lastname.value=""
    Email.value=""
    Pass.value=""
}





//almacenar en el local/session
function registro(){
    let persona ={Nombre: Name.value, Apellido: Lastname.value, Correo: Email.value, Contraseña: Pass.value}
    if (persona.Correo.includes("@coder.com")) {
        Diseñador.push(persona);
        localStorage.setItem("diseñador",JSON.stringify(Diseñador));
        parr.innerText = "Bienvenido Diseñador. Intente iniciar sesion"
    }else{
    if (persona.Correo.includes("@hotmail.com")) {
        Usuarios.push(persona);
        localStorage.setItem("usuario",JSON.stringify(Usuarios));
        parr.innerText = "Bienvenido Usuario. Intente iniciar sesion"
    }else{
        parr.innerText = "Solo se acepta @coder.com y @hotmail.com"
    }

    }
}




btn.addEventListener("click", (e)=>{
    registro();
    
    clearfield();
});

btnlog.addEventListener("click",(e)=>{
    window.location.href = "../index.html";
})
