//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eEmail = document.getElementById("email")
    let vEmail = eEmail.value
    let eErroremail = document.getElementById("errorEmail")

    let fNombre = validarN(eNombre,vNombre,eErrorNombre)
    let fEmail = validarE(eEmail,vEmail,eErroremail)

    if(fNombre == "exito" && fEmail == "exito"){
        let p = {
            nombre:vNombre,
            email:vEmail
        }
        personas.push(p)
        eNombre.value = ""
        eEmail.value = ""
        cargarDatos()
    }
}

function validarE(elemento,valor,eError){
    let valido = valor.includes("@") && valor.endsWith(".cl") && valor.split("@").length === 2;
    if(!valido){
        eError.innerText = "Debe tener un solo @ y terminar en .cl"
        elemento.style.backgroundColor = "red"
        return "falla"
    }else {
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        return "exito"
    }
}

function validarN(elemento, valor, eError) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor.trim())) {
        eError.innerText = "Solo puede ingresar letras y tampoco lo puede dejar vacio";
        elemento.style.backgroundColor = "red";
        return "falla";
    }
    eError.innerText = "";
    elemento.style.backgroundColor = "green";
    return "exito";
}

function cargarDatos(){
    let mapPersona = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+
                "</td><td>"+p.email+
                "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
                "<button onclick='actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    let strcuerpoTabla = mapPersona.join("")
    cuerpoTabla.innerHTML = strcuerpoTabla
    console.log(mapPersona)
}

function eliminar(indice){
    personas = personas.filter((p,index)=>{
        if(index != indice){
            return p
        }
    })
    cargarDatos()
    console.log(personas)
}

function actualizarFormulario(indice) {
    let persona = personas[indice];
    let eNombre = document.getElementById("nombre1");
    let eEmail = document.getElementById("email1");
    let btnActualizar = document.getElementById("btnActualizar");

    eNombre.value = persona.nombre;
    eEmail.value = persona.email;
    btnActualizar.value = indice;
}

function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eEmail = document.getElementById("email1")
    let vEmail = eEmail.value

    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value

    personas = personas.map((p,index)=>{
        if(index == indice){
            return {
                nombre:vNombre,
                email:vEmail
            }
        }else {
            return p
        }
    })
    cargarDatos()
}
