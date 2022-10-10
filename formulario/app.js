const formulario = document.getElementById('form');
const inputs = document.querySelectorAll("#form input");

const expresiones = {
    apyno: /^[a-zA-ZÁ-ÿ\s]{1,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
 apellido: false,
 nombre: false,
 correo: false,
 comentario: false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "apellido":
            if (expresiones.apyno.test(e.target.value)){
            console.log("caracter valido");
            /*COLOCAR STYLE EXP. https://www.youtube.com/watch?v=s3pC93LgP18*/
            }else{
                console.log("carecter invalido");
                document.getElementById("apellido");
            /*COLOCAR STYLE*/
            };
        break;
    };
};
inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario);
    /*input.addEventListener('blur', validarFormulario);*/
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Formulario Enviado");
});