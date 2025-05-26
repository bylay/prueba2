//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eEmail = document.getElementById("email")
    let vEmail = eEmail.value
    let eErroremail = getElementById("errorEmail")

    let fNombre = validarN(eNombre,vNombre,eErrorNombre)
    let fEmail = validarE(eEmail,vEmail,eErroremail)

    if(vNombre == "exito" && vEmail == "falsa"){
        personas.push(p)
        vNombre = ""
        vEmail = ""
        cargarDatos()
    }
}

function validarE(valor,elemento,eErroremail){
    if(valor.length != "@" && ".cl"){
        eErroremail.innerText = "El correo debe tener @ y .cl"
        elemento.style.backgroundColor = "red"
        return "falsa"
    }else {
        eErroremail.innerText = ""
        elemento.style.backgroundColor = "green"
        return "exito"
    }
}

function cargarDatos(index){
    let persona = personas.map((p,index)=>{
        return "<tr><td>"+p.vNombre+
                "</td><td>"+p.vEmail+
                "</td><td><button type='button' onclick=("+index+")"
    })
}

function eliminar(indice){
    persona = personas.filter((p,indice)=>{
        
    })
}

