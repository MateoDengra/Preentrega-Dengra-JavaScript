let bday = prompt ("Ingrese su fecha de cumpleaños en el formato YYYY-MM-DD"); 
let day = new Date(bday)

if(isNaN(day)){
    let invalidSigne 
    console.log("La fecha ingresada no es valida");
    alert("La fecha ingresada no es válida, recargue la página e intente nuevamente");}
else{
    let month = day.getMonth() + 1;
    let dayNumber = day.getDate();

    let signe = horoscope(month, dayNumber);
    console.log("Tu signo zodiacal es", signe);

    let yourHoroscope = "Felicitaciones, tu signo zodiacal es " + signe; 
    alert(yourHoroscope)
}

function horoscope(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries ♈";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Tauro ♉";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Géminis ♊";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cáncer ♋";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
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
    }
}