function enviarPedidoWhatsApp() {
  const inputs = document.querySelectorAll('input[type="number"]');
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

  // Número de teléfono de WhatsApp (modifícalo aquí)
  const numero = "59892420997";

  // Abrir WhatsApp con el mensaje
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, "_blank");
}

function enviarPedidoWhatsApp() {
  const inputs = document.querySelectorAll('input[type="number"]');
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

  // Número de teléfono de WhatsApp (modifícalo aquí)
  const numero = "59892420997";

  // Abrir WhatsApp con el mensaje
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, "_blank");
}


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


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterType = document.getElementById("filterType");
  const filterOffer = document.getElementById("filterOffer");
  const products = document.querySelectorAll("#productos .col-md-6, #productos .col-lg-3");

  function filterProducts() {
    const searchText = searchInput.value.toLowerCase().trim();
    const typeFilter = filterType.value.toLowerCase();
    const offerFilter = filterOffer.value;

    products.forEach(product => {
      const title = product.querySelector(".card-title").textContent.toLowerCase();
      const type = product.getAttribute("data-type").toLowerCase();
      const hasOffer = product.querySelector(".discount-badge") !== null;

      const matchesSearch = title.includes(searchText);
      const matchesType = typeFilter === "" || type === typeFilter;
      const matchesOffer =
        offerFilter === "" ||
        (offerFilter === "oferta" && hasOffer) ||
        (offerFilter === "normal" && !hasOffer);

      if (matchesSearch && matchesType && matchesOffer) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterProducts);
  filterType.addEventListener("change", filterProducts);
  filterOffer.addEventListener("change", filterProducts);

  filterProducts(); // filtrar al cargar la página
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