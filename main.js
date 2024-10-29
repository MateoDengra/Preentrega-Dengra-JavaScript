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
            mostrarHoroscopo(day);
          } else {
            console.log("La fecha ingresada no es válida");
            alert("La fecha ingresada no es válida, recargue la página e intente nuevamente");
          }
        }
      });
    }

    async function cargarSignos() {
      try {
          const response = await fetch("./signes.json");
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
      }
      else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cáncer ♋";
    }
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo ♌";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo ♍";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra ♎";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Escorpio ♏";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagitario ♐";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricornio ♑";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Acuario ♒";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Piscis ♓";}

      const signoInfo = signos.find(s => s.name === signo);

      if (signoInfo) {
          console.log(`Tu signo zodiacal es ${signoInfo.name} ${signoInfo.symbol}`);
          console.log(`Descripción: ${signoInfo.descripcion}`);

          // Muestra la información en el HTML
          document.getElementById("YourSigne").innerText = `${signoInfo.name} ${signoInfo.symbol}`;
          document.getElementById("YourHoroscopeMessage").innerHTML = `<p>${signoInfo.descripcion}</p>`;
      } else {
          console.log("No se pudo determinar el signo.");
      }
  }
});