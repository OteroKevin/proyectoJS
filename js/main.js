function sistemaBancario() {
    let saldo = 0;
    let transacciones = [];

    while (true) {
        const opcion = prompt(`Bienvenido al Banco Otero. Tu saldo actual es: ${saldo}\n\n¿Qué operación deseas realizar?\n1. Depositar\n2. Retirar\n3. Mostrar transacciones\n4. Buscar transacciones\n5. Salir`);

        switch (opcion) {
            case '1':
                // Depositar
                const deposito = parseFloat(prompt("Ingrese la cantidad que desea depositar:"));
                if (!isNaN(deposito) && deposito > 0) {
                    saldo += deposito;
                    transacciones.push({ tipo: "Depósito", cantidad: deposito });
                    console.log(`Se depositaron ${deposito} unidades. Tu saldo actual es: ${saldo}`);
                } else {
                    console.log("Cantidad inválida. Por favor, ingrese un número válido mayor que 0.");
                }
                break;

            case '2':
                // Retirar
                const retiro = parseFloat(prompt("Ingrese la cantidad que desea retirar:"));
                if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
                    saldo -= retiro;
                    transacciones.push({ tipo: "Retiro", cantidad: retiro });
                    console.log(`Se retiraron ${retiro} unidades. Tu saldo actual es: ${saldo}`);
                } else {
                    console.log("Cantidad inválida o saldo insuficiente.");
                }
                break;

            case '3':
                // Mostrar transacciones
                console.log("Transacciones:");
                transacciones.forEach((transaccion, index) => {
                    console.log(`${index + 1}. ${transaccion.tipo}: ${transaccion.cantidad}`);
                });
                break;

            case '4':
                // Buscar transacciones
                const filtro = prompt("Ingrese una palabra para buscar en las transacciones:");
                const transaccionesFiltradas = transacciones.filter(transaccion => transaccion.tipo.toLowerCase().includes(filtro.toLowerCase()));
                if (transaccionesFiltradas.length > 0) {
                    console.log("Transacciones encontradas:");
                    transaccionesFiltradas.forEach((transaccion, index) => {
                        console.log(`${index + 1}. ${transaccion.tipo}: ${transaccion.cantidad}`);
                    });
                } else {
                    console.log("No se encontraron transacciones que coincidan con la búsqueda.");
                }
                break;

            case '5':
                // Salir
                console.log("Gracias por utilizar nuestros servicios.");
                return;

            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
                break;
        }
    }
}

sistemaBancario();
