var numero = prompt("Por favor, ingresa un número:");

numero = parseInt(numero);

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        alert(numero + " es un número par.");
    } else {
        alert(numero + " es un número impar.");
    }
} else {
    alert("Por favor, ingresa un número válido.");
}