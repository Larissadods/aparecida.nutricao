var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; // muda o titulo

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc")
if(peso > 1000 && altura > 3.00) {
  tdImc.textContent = "Erro";
} else {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
