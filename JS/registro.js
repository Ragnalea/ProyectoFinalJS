const Usuarios = [];
const Diseñador = [];

const formulario = document.querySelector(".form1"),
Name = document.querySelector("#name")
Lastname = document.querySelector("#lastname")
Email = document.querySelector("#correo")
Pass = document.querySelector("#passw")
parr = document.querySelector("#alert")
const btn = document.getElementById("btnreg")


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
    }else{
    if (persona.Correo.includes("@hotmail.com")) {
        Usuarios.push(persona);
        localStorage.setItem("usuario",JSON.stringify(Usuarios));
    }else{
        alert ("Solo se acepta @coder.com y @hotmail.com")
    }

    }
}




btn.addEventListener("click",(e)=>{
    registro();
    clearfield();
    alert ("Ya puede iniciar sesion");
    window.location.href = "../index.html";
})
