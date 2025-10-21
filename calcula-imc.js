var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; // muda o titulo

var pacientes = document.querySelectorAll(".paciente");

  for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
      console.log("Peso Invalido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso Invalido!";
      paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
      console.log("Altura Invalida!");
      alturaEhValida = false;
      tdImc.textContent = "Altura Invalida!";
      paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
    }
}

function validaPeso(pesoEhValido) {

  if(peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
