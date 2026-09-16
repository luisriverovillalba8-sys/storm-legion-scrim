const URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbzbptPF6I9sgstkf-O_S77qYoXuWqvqtbt6WFAsYWkbPIuPx3pDH4AB0CA1OuuMM0mnMw/exec";

document.getElementById("form-inscripcion").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const datos = {
    equipo: document.getElementById("equipo") ? document.getElementById("equipo").value : "",
    capitan: document.getElementById("capitan") ? document.getElementById("capitan").value : "",
    j2: document.getElementById("j2") ? document.getElementById("j2").value : "",
    j3: document.getElementById("j3") ? document.getElementById("j3").value : "",
    j4: document.getElementById("j4") ? document.getElementById("j4").value : ""
  };

  fetch(URL_APPS_SCRIPT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(datos)
  })
  .then(() => {
    alert("¡Inscripción enviada con éxito!");
    document.getElementById("form-inscripcion").reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Hubo un problema al enviar la inscripción.");
  });
});
