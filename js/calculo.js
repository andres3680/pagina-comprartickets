const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");

let divErrorNombre = document.getElementById("mensajeErrorNombre");

let apellido = document.getElementById("apellido");

let divErrorApellido = document.getElementById("mensajeErrorApellido");

let mail = document.getElementById("mail");

let divErrorMail = document.getElementById("mensajeErrorMail");

let cantidadTikets = document.getElementById("cantidadTickets");

let mensajeErrorCantidadTikets = document.getElementById("mensajeErrorCantidadTickets");

let categoria = document.getElementById("categoriaSelect");

let mensajeErrorCategoria = document.getElementById("mensajeErrorCategoria");

const quitarClaseError = ()=>{
    let listaNodos = document.querySelectorAll(".from-control, .form-select");
    for(let i = 0; i < listaNodos.length; i++){
        listaNodos[i].classList.remove('is-invalid');
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++){
        listaNodosdiv[i].classList.remove('propia');
    }
}

const totalAPagar = () => {
    
    quitarClaseError();

    if (nombre.value === ""){
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }
    if (apellido.value === ""){
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("propia");
        apellido.focus();
        return;
    }

    if (mail.value === ""){
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
    }
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); // esto es expresiones regulares
    }

    if(!emailValido(mail.value)){
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
    }

    if ((cantidadTikets.value == 0) || (isNaN(cantidadTikets.value))){
        cantidadTikets.classList.add("is-invalid");
        mensajeErrorCantidadTikets.classList.add("propia");
        cantidadTikets.focus();
        return;
    }

    if(categoria.value === ""){
        categoria.classList.add("is-invalid");
        mensajeErrorCategoria.classList.add("propia");
        categoria.focus();
        return;
    }

    let totalValorTickets = (cantidadTikets.value) * valorTicket;
    switch (categoria.value){
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante/100 * totalValorTickets);
            break;
        case "2":
                totalValorTickets = totalValorTickets - (descuentoTrainee/100 * totalValorTickets);
                break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior/100 * totalValorTickets);
            break;     
    
            }
            
            totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener("click", totalAPagar);

const resetTotalAPagar = () =>{
    quitarClaseError();
    totalPago.innerHTML = "";

}

btnBorrar.addEventListener('click', resetTotalAPagar);

console.log("Total");