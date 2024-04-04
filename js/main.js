document.addEventListener("DOMContentLoaded", async function() {
    let saldo = 0;
    let transacciones = [];
    const outputDiv = document.getElementById("output");

    while (true) {
        const opcion = await Swal.fire({
            title: `Bienvenido al Banco Otero. Tu saldo actual es: ${saldo}`,
            text: "¿Qué operación deseas realizar?",
            input: 'select',
            inputOptions: {
                '1': 'Depositar',
                '2': 'Retirar',
                '3': 'Mostrar transacciones',
                '4': 'Buscar transacciones',
                '5': 'Salir'
            },
            inputPlaceholder: 'Selecciona una opción',
            showCancelButton: false,
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes seleccionar una opción';
                }
            }
        });

        switch (opcion.value) {
            case '1':
                // Depositar
                const deposito = await Swal.fire({
                    title: 'Ingrese la cantidad que desea depositar:',
                    input: 'number',
                    inputAttributes: {
                        min: 0
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Depositar',
                    showLoaderOnConfirm: true,
                    preConfirm: (deposito) => {
                        if (!deposito || deposito <= 0) {
                            Swal.showValidationMessage('Cantidad inválida. Por favor, ingrese un número válido mayor que 0.');
                        }
                        return deposito;
                    }
                });

                if (deposito.isConfirmed) {
                    saldo += parseFloat(deposito.value);
                    transacciones.push({ tipo: "Depósito", cantidad: parseFloat(deposito.value) });
                    outputDiv.innerHTML += `Se depositaron ${deposito.value} unidades. Tu saldo actual es: ${saldo}<br>`;
                }
                break;

            case '2':
                // Retirar
                const retiro = await Swal.fire({
                    title: 'Ingrese la cantidad que desea retirar:',
                    input: 'number',
                    inputAttributes: {
                        min: 0,
                        max: saldo
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Retirar',
                    showLoaderOnConfirm: true,
                    preConfirm: (retiro) => {
                        if (!retiro || retiro <= 0 || retiro > saldo) {
                            Swal.showValidationMessage('Cantidad inválida o saldo insuficiente.');
                        }
                        return retiro;
                    }
                });

                if (retiro.isConfirmed) {
                    saldo -= parseFloat(retiro.value);
                    transacciones.push({ tipo: "Retiro", cantidad: parseFloat(retiro.value) });
                    outputDiv.innerHTML += `Se retiraron ${retiro.value} unidades. Tu saldo actual es: ${saldo}<br>`;
                }
                break;

            case '3':
                // Mostrar transacciones
                let transaccionesHTML = "<strong>Transacciones:</strong><br>";
                transacciones.forEach((transaccion, index) => {
                    transaccionesHTML += `${index + 1}. ${transaccion.tipo}: ${transaccion.cantidad}<br>`;
                });
                await Swal.fire({
                    title: 'Transacciones',
                    html: transaccionesHTML
                });
                break;

            case '4':
                // Buscar transacciones
                const filtro = await Swal.fire({
                    title: 'Ingrese una palabra para buscar en las transacciones:',
                    input: 'text',
                    showCancelButton: true,
                    confirmButtonText: 'Buscar',
                    showLoaderOnConfirm: true,
                    preConfirm: (filtro) => {
                        const transaccionesFiltradas = transacciones.filter(transaccion => transaccion.tipo.toLowerCase().includes(filtro.toLowerCase()));
                        if (transaccionesFiltradas.length > 0) {
                            let transaccionesEncontradasHTML = "<strong>Transacciones encontradas:</strong><br>";
                            transaccionesFiltradas.forEach((transaccion, index) => {
                                transaccionesEncontradasHTML += `${index + 1}. ${transaccion.tipo}: ${transaccion.cantidad}<br>`;
                            });
                            Swal.fire({
                                title: 'Transacciones encontradas',
                                html: transaccionesEncontradasHTML
                            });
                        } else {
                            Swal.fire({
                                title: 'Transacciones encontradas',
                                text: 'No se encontraron transacciones que coincidan con la búsqueda.'
                            });
                        }
                    }
                });
                break;

            case '5':
                // Salir
                await Swal.fire({
                    title: 'Gracias por utilizar nuestros servicios.',
                    icon: 'success'
                });
                return;

            default:
                await Swal.fire({
                    title: 'Opción inválida',
                    text: 'Por favor, seleccione una opción válida.',
                    icon: 'warning'
                });
                break;
        }
    }
});
