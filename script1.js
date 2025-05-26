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
