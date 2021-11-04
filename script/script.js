const input_text = document.querySelector(".input-text");
const boton_invertir = document.querySelector(".boton-invertir");
const boton_limpiar = document.querySelector(".boton-limpiar");
const container_result = document.querySelector(".container-result-text");

boton_invertir.addEventListener("click",invertirTexto);
boton_limpiar.addEventListener("click",limpiarCampos);

function invertirTexto(){
    container_result.innerText = input_text.value.split("").reverse().join("");
}
function limpiarCampos(){
    input_text.value = "";
    container_result.innerHTML = "";
}