const boton = document.getElementById('generarBtn');

boton.addEventListener('click', function() {
    const numero = document.getElementById('numero').value.trim();
    const mensaje = document.getElementById('mensaje');
    const resultado = document.getElementById('resultado');

    // Limpiar mensajes y resultados anteriores
    mensaje.innerHTML = '';
    resultado.innerHTML = '';

    // Validar que sea un número
    if (numero === '' || isNaN(numero)) {
        mensaje.innerHTML = '<div class="alert alert-warning">Por favor, ingresa un número válido.</div>';
        return;
    }

    const n = Number(numero);
    let i = 1;
    let tablaHTML = '';

    // Ciclo do...while para generar la tabla
    do {
        tablaHTML += `${n} x ${i} = ${n * i}<br>`;
        i++;
    } while (i <= 12);

    // Mostrar la tabla
    resultado.innerHTML = tablaHTML;
});
