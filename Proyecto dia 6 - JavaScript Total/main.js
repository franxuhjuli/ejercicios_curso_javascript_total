let notas = [7, 3, 8, 5, 9]

function imprimirNotas() {
    let lista = document.getElementById("listaNotas"); 
    for (let nota of notas) {
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularPromedio() {
    
}
