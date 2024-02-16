// Definimos una función para manejar el sistema bancario
function sistemaBancario() {
    
    let saldo = 0;

    while (true) {
        // Mostramos las opciones disponibles al usuario
        const opcion = prompt("Bienvenido al Banco Otero. Tu saldo actual es: ${saldo}\n\n¿Qué operación desea realizar?\n 1. Depositar\n 2. Retirar\n 3. Salir");

        // Verificamos la opción seleccionada por el usuario
        switch (opcion) {
            case '1':
                // Depositar
                const deposito = parseFloat(prompt("Ingrese la cantidad que desea depositar:"));
                if (!isNaN(deposito) && deposito > 0) {
                    saldo += deposito;
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
                    console.log(`Se retiraron ${retiro} unidades. Tu saldo actual es: ${saldo}`);
                } else {
                    console.log("Cantidad inválida o saldo insuficiente.");
                }
                break;

            case '3':
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

