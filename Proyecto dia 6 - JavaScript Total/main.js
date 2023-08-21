let notas = [6, 7, 6, 8, 4];
const botonMostrarNotas = document.getElementById("boton-mostrar");
const botonPromedioNotas = document.getElementById("boton-promedio");
const botonMasAlta = document.getElementById("boton-mas-alta");
const botonAplazo = document.getElementById("boton-aplazo");
const lista = document.getElementById("lista");
const promedio = document.getElementById("promedio");
const alta = document.getElementById("alta");
const aplazo = document.getElementById("aplazo");

// -------- BOTON MOTRAR NOTAS

function mostrarNotas() {
  let i = 1;
  for (let nota of notas) {
    const itemLista = document.createElement("li");
    itemLista.textContent = `Asignatura ${i}: ${nota}`;
    lista.appendChild(itemLista);
    i++;
  }
}

botonMostrarNotas.addEventListener("click", mostrarNotas);

// --------- BOTON CALCULAR PROMEDIO

function promedioNotas() {
  let sumaNotas = 0;
  for (let i = 0; i <= 4; i++) {
    sumaNotas = sumaNotas + notas[i];
  }
  let notaPromedio = sumaNotas / 5;

  promedio.textContent = `La nota promedio es ${notaPromedio}.`;
}

botonPromedioNotas.addEventListener("click", promedioNotas);

// --------- BOTON NOTA MAS ALTA

function notaMasAlta() {
  let notaMasAlta = 0;
  let i = 0;
  while (i <= notas.length - 1) {
    if (notas[i] > notaMasAlta) {
      notaMasAlta = notas[i];
    }
    i++;
    alta.textContent = `La nota mas alta es ${notaMasAlta}.`;
  }
}

botonMasAlta.addEventListener("click", notaMasAlta);

// --------- BOTON APLAZO

function confirmarAplazo() {
  let i = 0;
  do {
    if (notas[i] < 5) {
      aplazo.textContent = `Tienes un aplazo con ${notas[i]}.`;
      break;
    } else {
      aplazo.textContent = `No tienes aplazo.`;
      i++;
    }
  } while (i <= notas.length);
}

botonAplazo.addEventListener("click", confirmarAplazo);
