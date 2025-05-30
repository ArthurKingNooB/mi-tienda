


document.querySelectorAll('.input-number').forEach(wrapper => {
  const input = wrapper.querySelector('input[type="number"]');
  const btnInc = wrapper.querySelector('.btn-increment');
  const btnDec = wrapper.querySelector('.btn-decrement');

  btnInc.addEventListener('click', () => {
    input.value = parseInt(input.value || "0") + 1;
    input.dispatchEvent(new Event('change'));
  });

  btnDec.addEventListener('click', () => {
    let val = parseInt(input.value || "0");
    if (val > parseInt(input.min || "0")) {
      input.value = val - 1;
      input.dispatchEvent(new Event('change'));
    }
  });
});

document.querySelectorAll('.input-number-mobile').forEach(wrapper => {
  const input = wrapper.querySelector('input[type="number"]');
  const btnInc = wrapper.querySelector('.btn-increment');
  const btnDec = wrapper.querySelector('.btn-decrement');

  btnInc.addEventListener('click', () => {
    input.value = parseInt(input.value || "0") + 1;
    input.dispatchEvent(new Event('change'));
  });

  btnDec.addEventListener('click', () => {
    let val = parseInt(input.value || "0");
    if (val > parseInt(input.min || "0")) {
      input.value = val - 1;
      input.dispatchEvent(new Event('change'));
    }
  });
});




function enviarPedidoWhatsApp() {
  const inputs = document.querySelectorAll('input[type="number"]');
  const observaciones = document.getElementById('observaciones').value.trim();
  let mensaje = 'Hola, quiero hacer el siguiente pedido:%0A';
  let total = 0;
  let hayPedido = false;

  inputs.forEach(input => {
    const cantidad = parseInt(input.value);
    const nombre = input.dataset.nombre;
    const precio = parseFloat(input.dataset.precio);

    if (cantidad > 0) {
      const subtotal = cantidad * precio;
      mensaje += `• ${nombre} x ${cantidad} = $${subtotal.toFixed(2)}%0A`;
      total += subtotal;
      hayPedido = true;
    }
  });

  if (!hayPedido) {
    alert("No has seleccionado ningún producto.");
    return;
  }

  mensaje += `%0ATotal: $${total.toFixed(2)}`;

  if (observaciones !== '') {
    mensaje += `%0A%0A📌 Observaciones: ${encodeURIComponent(observaciones)}`;
  }

  const numero = "59892420997";
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, "_blank");}




  // Eventos para activar el filtro

   document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador-nombre");
    const filtroTipo = document.getElementById("filtro-tipo");
    const filtroOferta = document.getElementById("filtro-oferta");

    const tarjetas = document.querySelectorAll(".col-md-4.col-lg-3.mb-4");

    function obtenerTipoPorContenido(tarjeta) {
      const titulo = tarjeta.querySelector(".card-title")?.textContent.toLowerCase() || "";
      const alt = tarjeta.querySelector("img")?.alt.toLowerCase() || "";

      if (titulo.includes("atun") || titulo.includes("mazapan") || alt.includes("mazapan") || alt.includes("atun")) {
        return "comida";
      } else if (titulo.includes("limpiapisos") || alt.includes("limpiapisos")) {
        return "limpieza";
      }
      return "";
    }

    function estaEnOferta(tarjeta) {
      return tarjeta.querySelector(".discount-badge") !== null;
    }

    function filtrar() {
      const textoBuscado = buscador.value.toLowerCase();
      const tipoSeleccionado = filtroTipo.value;
      const ofertaSeleccionada = filtroOferta.value;

      tarjetas.forEach(tarjeta => {
        const nombreProducto = tarjeta.querySelector(".card-title")?.textContent.toLowerCase() || "";
        const tipo = obtenerTipoPorContenido(tarjeta);
        const esOferta = estaEnOferta(tarjeta) ? "si" : "no";

        const coincideNombre = nombreProducto.includes(textoBuscado);
        const coincideTipo = tipoSeleccionado === "" || tipo === tipoSeleccionado;
        const coincideOferta = ofertaSeleccionada === "" || ofertaSeleccionada === esOferta;

        tarjeta.style.display = (coincideNombre && coincideTipo && coincideOferta) ? "block" : "none";
      });
    }

    buscador.addEventListener("input", filtrar);
    filtroTipo.addEventListener("change", filtrar);
    filtroOferta.addEventListener("change", filtrar);
  });





function mostrarResumenProductos() {
  const inputs = document.querySelectorAll('input[type="number"]');
  let resumen = '';
  let total = 0;

  inputs.forEach(input => {
    const cantidad = parseInt(input.value);
    const nombre = input.dataset.nombre;
    const precio = parseFloat(input.dataset.precio);

    if (!isNaN(cantidad) && cantidad > 0) {
      const subtotal = cantidad * precio;
      resumen += `${nombre} x ${cantidad} = $${subtotal}<br>`;
      total += subtotal;
    }
  });

  const contenedor = document.getElementById('resumenProductos');
  contenedor.innerHTML = resumen
    ? `<strong>Productos seleccionados:</strong><br>${resumen}<br><strong>Total: $${total}</strong>`
    : 'No agregaste productos aún.';
}


// Función para mostrar el resumen al instante al hacer clic
function mostrarResumenProductos() {
  const inputs = document.querySelectorAll('input[type="number"]');
  let resumenHTML = '';
  let total = 0;

  inputs.forEach(input => {
    const cantidad = parseInt(input.value);
    const nombre = input.dataset.nombre;
    const precio = parseFloat(input.dataset.precio);

    if (!isNaN(cantidad) && cantidad > 0) {
      const subtotal = cantidad * precio;
      resumenHTML += `${nombre} x ${cantidad} = $${subtotal}<br>`;
      total += subtotal;
    }
  });

  const contenedor = document.getElementById('resumenProductos');
  contenedor.innerHTML = resumenHTML
    ? `<strong>Productos seleccionados:</strong><br>${resumenHTML}<br><strong>Total: $${total}</strong>`
    : 'No agregaste productos aún.';
}

// Ejecutar al hacer clic en el botón
document.getElementById('botonResumen').addEventListener('click', mostrarResumenProductos);






// boton flotante


const contenedor = document.getElementById('botonContenedor');
const mensaje = document.getElementById('mensajeWsp');
let isDragging = false, offsetX, offsetY;

// Mostrar mensaje
document.getElementById('botonWsp').addEventListener('click', () => {
  mensaje.classList.add('visible');
  setTimeout(() => mensaje.classList.remove('visible'), 3000);
});

// Touch y Drag
contenedor.addEventListener('touchstart', dragStart);
contenedor.addEventListener('touchmove', dragMove);
contenedor.addEventListener('touchend', dragEnd);

function dragStart(e) {
  isDragging = true;
  const rect = contenedor.getBoundingClientRect();
  offsetX = e.touches[0].clientX - rect.left;
  offsetY = e.touches[0].clientY - rect.top;

  contenedor.style.transition = 'none';
}

function dragMove(e) {
  if (!isDragging) return;
  const x = e.touches[0].clientX - offsetX;
  const y = e.touches[0].clientY - offsetY;

  contenedor.style.top = `${y}px`;
  contenedor.style.left = `${x}px`;
  contenedor.style.right = 'auto';
  contenedor.style.bottom = 'auto';
}

function dragEnd(e) {
  isDragging = false;
  contenedor.style.transition = 'all 0.9s ease';

  const x = e.changedTouches[0].clientX;
  const y = e.changedTouches[0].clientY;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const toLeft = x < screenWidth / 2;
  const toTop = y < screenHeight / 2;

  // Reset clases
  contenedor.classList.remove(
    'esquina-inferior-derecha',
    'esquina-superior-izquierda',
    'esquina-superior-derecha',
    'esquina-inferior-izquierda'
  );

  // Posicionar
  if (toTop && toLeft) {
    contenedor.classList.add('esquina-superior-izquierda');
    mensaje.classList.remove('mensaje-izquierda');
    mensaje.classList.add('mensaje-derecha');
  } else if (toTop && !toLeft) {
    contenedor.classList.add('esquina-superior-derecha');
    mensaje.classList.remove('mensaje-derecha');
    mensaje.classList.add('mensaje-izquierda');
  } else if (!toTop && toLeft) {
    contenedor.classList.add('esquina-inferior-izquierda');
    mensaje.classList.remove('mensaje-izquierda');
    mensaje.classList.add('mensaje-derecha');
  } else {
    contenedor.classList.add('esquina-inferior-derecha');
    mensaje.classList.remove('mensaje-derecha');
    mensaje.classList.add('mensaje-izquierda');
  }

  // Limpiar estilos manuales
  contenedor.style.top = '';
  contenedor.style.left = '';
  contenedor.style.right = '';
  contenedor.style.bottom = '';
}

