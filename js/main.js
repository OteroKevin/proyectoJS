document.addEventListener("DOMContentLoaded", function() {
    let saldo = 0;
    let transacciones = [];
    const outputDiv = document.getElementById("output");

    while (true) {
        const opcion = prompt(`Bienvenido al Banco Otero. Tu saldo actual es: ${saldo}\n\n¿Qué operación deseas realizar?\n1. Depositar\n2. Retirar\n3. Mostrar transacciones\n4. Buscar transacciones\n5. Salir`);

        switch (opcion) {
            case '1':
                // Depositar
                const deposito = parseFloat(prompt("Ingrese la cantidad que desea depositar:"));
                if (!isNaN(deposito) && deposito > 0) {
                    saldo += deposito;
                    transacciones.push({ tipo: "Depósito", cantidad: deposito });
                    outputDiv.innerHTML += `Se depositaron ${deposito} unidades. Tu saldo actual es: ${saldo}<br>`;
                } else {
                    outputDiv.innerHTML += "Cantidad inválida. Por favor, ingrese un número válido mayor que 0.<br>";
                }
                break;

            case '2':
                // Retirar
                const retiro = parseFloat(prompt("Ingrese la cantidad que desea retirar:"));
                if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
                    saldo -= retiro;
                    transacciones.push({ tipo: "Retiro", cantidad: retiro });
                    outputDiv.innerHTML += `Se retiraron ${retiro} unidades. Tu saldo actual es: ${saldo}<br>`;
                } else {
                    outputDiv.innerHTML += "Cantidad inválida o saldo insuficiente.<br>";
                }
                break;

            case '3':
                // Mostrar transacciones
                outputDiv.innerHTML += "<strong>Transacciones:</strong><br>";
                transacciones.forEach((transaccion, index) => {
                    outputDiv.innerHTML += `${index + 1}. ${transaccion.tipo}: ${transaccion.cantidad}<br>`;
                });
                break;

            case '4':
                // Buscar transacciones
                const filtro = prompt("Ingrese una palabra para buscar en las transacciones:");
                const transaccionesFiltradas = transacciones.filter(transaccion => transaccion.tipo.toLowerCase().includes(filtro.toLowerCase()));
                if (transaccionesFiltradas.length > 0) {
                    outputDiv.innerHTML += "<strong>Transacciones encontradas:</strong><br>";
                    transaccionesFiltradas.forEach((transaccion, index) => {
                        outputDiv.innerHTML += `${index + 1}. ${transaccion.tipo}: ${transaccion.cantidad}<br>`;
                    });
                } else {
                    outputDiv.innerHTML += "No se encontraron transacciones que coincidan con la búsqueda.<br>";
                }
                break;

            case '5':
                // Salir
                outputDiv.innerHTML += "Gracias por utilizar nuestros servicios.<br>";
                return;

            default:
                outputDiv.innerHTML += "Opción inválida. Por favor, seleccione una opción válida.<br>";
                break;
        }
    }
});
