document.addEventListener("DOMContentLoaded", function() {

    let savedBday = localStorage.getItem("bday");
    let day;
  
    if (savedBday) {
      day = new Date(savedBday);
      console.log("Fecha recuperada del localStorage:", savedBday);
      mostrarHoroscopo(day);
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
  
    function mostrarHoroscopo(day) {
      let luckyNumber = Math.floor(Math.random() * 3);
      console.log("Lucky number:", luckyNumber);
  
      let month = day.getMonth() + 1;
      let dayNumber = day.getDate();
  
      let signe = horoscope(month, dayNumber);
      console.log("Tu signo zodiacal es:", signe);
  
      let message = luckyMessage(signe, luckyNumber);
      let info = infoSigne(signe);
      console.log("Información de tu signo:", info);
  
      // Actualización de HTML
      document.getElementById("YourSigne").innerText = signe;
      document.getElementById("YourHoroscopeMessage").innerHTML = `<p>${message}</p>`;
  
      // Agregar listener para mostrar información del signo
      document.getElementById("YourSigne").addEventListener("click", function() {
        document.getElementById("infoSigne").innerHTML = `<p>${info}</p>`;
      });
  
      // SweetAlert de confirmación de signo
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
        title: "Felicitaciones!",
        text: `Tu signo zodiacal es ${signe}`,
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
    }

function horoscope(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries ♈";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Tauro ♉";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Géminis ♊";
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
        return "Piscis ♓";
    }}
    });