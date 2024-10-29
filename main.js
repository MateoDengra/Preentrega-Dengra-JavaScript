document.addEventListener("DOMContentLoaded", function() {

  let savedBday = localStorage.getItem("bday");
  let day;

  if (savedBday) {
      day = new Date(savedBday);
      console.log("Fecha recuperada del localStorage:", savedBday);
      procesarSigno(day);
  } else {
      Swal.fire({
          title: 'Ingrese su fecha de cumpleaños',
          input: 'date', 
          inputPlaceholder: 'YYYY-MM-DD',
          showCancelButton: true,
          confirmButtonText: "Confirmar",
          cancelButtonText: "Cancelar",
      }).then((result) => {
          if (result.isConfirmed) {
              let bday = result.value;
              if (bday) {
                  localStorage.setItem("bday", bday);
                  day = new Date(bday);
                  console.log("Fecha ingresada:", bday);
                  procesarSigno(day);
              } else {
                  console.log("La fecha ingresada no es válida");
                  alert("La fecha ingresada no es válida, recargue la página e intente nuevamente");
              }
          }
      });
  }

  async function cargarSignos() {
      try {
          const response = await fetch("https://mateodengra.github.io/Preentrega-Dengra-JavaScript//signes.json");
          const data = await response.json();
          return data.signos;
      } catch (error) {
          console.error("Error al cargar el archivo JSON:", error);
      }
  }

  async function procesarSigno(day) {
      const signos = await cargarSignos();
      const month = day.getMonth() + 1;
      const dayNumber = day.getDate();
      let signo;

      // Condicionales para determinar el signo basado en mes y día
      if ((month === 3 && dayNumber >= 21) || (month === 4 && dayNumber <= 19)) {
          signo = "Aries";
      } else if ((month === 4 && dayNumber >= 20) || (month === 5 && dayNumber <= 20)) {
          signo = "Tauro";
      } else if ((month === 5 && dayNumber >= 21) || (month === 6 && dayNumber <= 20)) {
          signo = "Géminis";
      } else if ((month === 6 && dayNumber >= 21) || (month === 7 && dayNumber <= 22)) {
          signo = "Cáncer";
      } else if ((month === 7 && dayNumber >= 23) || (month === 8 && dayNumber <= 22)) {
          signo = "Leo";
      } else if ((month === 8 && dayNumber >= 23) || (month === 9 && dayNumber <= 22)) {
          signo = "Virgo";
      } else if ((month === 9 && dayNumber >= 23) || (month === 10 && dayNumber <= 22)) {
          signo = "Libra";
      } else if ((month === 10 && dayNumber >= 23) || (month === 11 && dayNumber <= 21)) {
          signo = "Escorpio";
      } else if ((month === 11 && dayNumber >= 22) || (month === 12 && dayNumber <= 21)) {
          signo = "Sagitario";
      } else if ((month === 12 && dayNumber >= 22) || (month === 1 && dayNumber <= 19)) {
          signo = "Capricornio";
      } else if ((month === 1 && dayNumber >= 20) || (month === 2 && dayNumber <= 18)) {
          signo = "Acuario";
      } else if ((month === 2 && dayNumber >= 19) || (month === 3 && dayNumber <= 20)) {
          signo = "Piscis";
      }

      const signoInfo = signos.find(s => s.name === signo);

      if (signoInfo) {
          const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
              },
              buttonsStyling: false
          });

          swalWithBootstrapButtons.fire({
              title: "Felicitaciones!",
              text: `Tu signo zodiacal es ${signoInfo.name} ${signoInfo.symbol}`,
              showCancelButton: true,
              confirmButtonText: "Ok!",
              cancelButtonText: "Ingresar otra fecha",
              reverseButtons: true
          }).then((result) => {
              if (result.dismiss === Swal.DismissReason.cancel) {
                  localStorage.removeItem("bday");
                  location.reload();
              }
          });

        console.log(`Tu signo zodiacal es ${signoInfo.name} ${signoInfo.symbol}`);
        console.log(`Descripción: ${signoInfo.descripcion}`);

        // Muestra la información en el HTML
        document.getElementById("YourSigne").innerText = `${signoInfo.name} ${signoInfo.symbol}`;
        document.getElementById("infoSigne").innerText = `${signoInfo.descripcion}`
        document.getElementById("YourHoroscopeMessage").innerHTML = `${signoInfo.descripcion}`;

        const luckyMessageText = luckyMessage(signoInfo.name);

        const luckyMessageElement = document.getElementById("YourHoroscopeMessage");
        if (luckyMessageElement) {
            luckyMessageElement.innerText = luckyMessageText; // Muestra el mensaje de la suerte
        } else {
            console.error("Elemento 'YourLuckyMessage' no encontrado en el DOM.");
        }
    
        // Evento de clic
        document.getElementById("YourSigne").addEventListener("click", function() {
            const infoElement = document.getElementById("infoSigne");
            infoElement.innerHTML = `<p>${signoInfo.descripcion}</p>`;
        });
    } else {
        console.log("No se pudo determinar el signo.");
    }
}
});

