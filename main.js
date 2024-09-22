document.addEventListener("DOMContentLoaded", function() {

let bday = prompt ("Ingrese su fecha de cumpleaños en el formato YYYY-MM-DD"); 
let day = new Date(bday)
let luckyNumber = Math.round(Math.random() * 3 + 1)
console.log(luckyNumber)
// Lucky Number es el numero de la suerte para el horoscopo, generado aleatoriamente, dependiendo del valor que tenga, va a soltar un mensaje distinto dependiendo del signo zodiacal correspondiente

if(isNaN(day)){
    let invalidSigne 
    console.log("La fecha ingresada no es valida");
    alert("La fecha ingresada no es válida, recargue la página e intente nuevamente");}
else{
    let month = day.getMonth() + 1;
    let dayNumber = day.getDate();

    let signe = horoscope(month, dayNumber);
    console.log("Tu signo zodiacal es", signe);
    let message = luckyMessage(signe, luckyNumber);

    document.getElementById("YourSigne").innerText = signe;
    document.getElementById("YourHoroscopeMessage").innerHTML = `<p>${message}</p>`;
    
    let yourHoroscope = "Felicitaciones, tu signo zodiacal es " + signe; 
    alert(yourHoroscope)}

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

function luckyMessage(signe, luckyNumber) {
        let message = "";

        if (signe=== "Aries ♈") {
            if (luckyNumber === 1) {
                message = "No permita que los temas económicos interfieran negativamente en su pareja. Evite las peleas, ya que podría atravesar un mal momento con su alma gemela.";} 
                else if (luckyNumber === 2) {
                message = "Sepa que transitará un día bastante apasionado en el amor. Acérquese al ser que ama y bríndele todo su tiempo para compartir un momento muy grato.";}
                else if (luckyNumber === 3) {
                message = "Si hace días le cuesta conciliar el sueño, deje de automedicarse. Busque alguna actividad que lo relaje por las noches y póngala en practica cuanto antes.";}}
        if (signe=== "Tauro ♉") {
            if (luckyNumber === 1) {
                message = "Sepa que el Reiki puede convertirse en el gran aliado del bienestar de su vida. Asista a la invitación que le hicieron y regresará a su hogar renovado.";} 
                else if (luckyNumber === 2) {
                message = "Después de la discusión que tuvo con su alma gemela, debería evaluar cuanto de culpa tiene y resolver lo antes posible la situación de la mejor manera.";} 
                else if (luckyNumber === 3) {
                message = "Comience a librarse de ciertas ataduras que limitan su crecimiento profesional. Emprenda con confianza un nuevo proyecto y pronto obtendrá ganancias.";}}
        if (signe=== "Géminis ♊") {
            if (luckyNumber === 1) {
                message = "Momento oportuno para amar y confiar en su alma gemela. Empiece a ser usted mismo frente a su pareja, procure olvidarse de los miedos y las preocupaciones.";} 
                else if (luckyNumber === 2) {
                message = "Si siente que últimamente le faltan fuerzas, trate de combatir el decaimiento físico y anímico incorporando a su plan alimenticio cereales y fibras.";} 
                else if (luckyNumber === 3) {
                message = "Será un magnifico momento para invertir en algún proyecto. Intente hacer cuentas y revisar la confiabilidad de la propuesta que le hicieron hace unos días.";}}
        if (signe=== "Cáncer ♋") {
            if (luckyNumber === 1) {
                message = "Evite sentirse inconstante e insatisfecho en los sentimientos, de lo contrario, la relación fluctuará. Vea qué es lo que quiere y evite confundir a su alma gemela.";} 
                else if (luckyNumber === 2) {
                message = "Gracias a la audacia y el poder que posee podrá desarrollar planes a futuro. No dude y tome esa decisión financiera que tiene entre manos hace meses.";} 
                else if (luckyNumber === 3) {
                message = "Hoy su espíritu festivo le exigirá un encuentro nocturno con amigos. Deje de hacerse tantos problemas y olvídese de sus obligaciones. Trate de divertirse.";}}
        if (signe=== "Leo ♌") {
            if (luckyNumber === 1) {
                message = "Momento para que realice un equilibrio entre sus ingresos y egresos. Deje de gastar con tarjeta de crédito porque a fin de mes no podrá pagar el resumen.";} 
                else if (luckyNumber === 2) {
                message = "Intente mejorar el diálogo con su enamorado. Sepa que será la mejor manera para darle fin a esas diferencias que tienen hace tiempo y dañan el vínculo.";} 
                else if (luckyNumber === 3) {
                message = "Procure distenderse cuando llegue a su casa antes de cenar. Busque y vea una buena película, esto le hará olvidar la rutina pesada que vivió en esta jornada.";}}
        if (signe=== "Virgo ♍") {
            if (luckyNumber === 1) {
                message = "Será una magnifica jornada para saldar las deudas personales e impuestos pendientes que lo torturan hace tiempo. No permita que se sigan acumulando los intereses.";} 
                else if (luckyNumber === 2) {
                message = "Ponga más atención a los reclamos que le hace su alma gemela. No crea que usted es el único que tiene problemas en la vida, traten de ayudarse entre ambos.";} 
                else if (luckyNumber === 3) {
                message = "Hoy en su familia podrá relajarse y así encontrará la atmosfera más adecuada para sobrellevar todas las dificultades que ha transitado en su día laboral.";}}
        if (signe=== "Libra ♎") {
            if (luckyNumber === 1) {
                message = "Acepte la propuesta fuera de lo común que le hizo su pareja y así podrán salir de la clásica rutina. Sepa que será la opción más inteligente para este día.";} 
                else if (luckyNumber === 2) {
                message = "Tranquilícese, los tramites vinculados con el exterior podría tener complicaciones. No sea impaciente, todo se resolverá en el tiempo que tiene que ser.";} 
                else if (luckyNumber === 3) {
                message = "Si bien se siente cansado, acepte esa invitación que le hicieron para esta noche. Comprenda que le hará bien despejarse un poco de la rutina diaria.";}}
        if (signe=== "Escorpio ♏") {
            if (luckyNumber === 1) {
                message = "Hoy las responsabilidades laborales lo reclamaran. Hágase cargo de sus obligaciones y deje de delegar en los compañeros de trabajo cada unas de sus tareas.";} 
                else if (luckyNumber === 2) {
                message = "Teniendo un buen descanso en las noches, podrá reponer sus fuerzas y recuperar su lucidez mental. No asuma más responsabilidades de las que puede afrontar.";} 
                else if (luckyNumber === 3) {
                message = "Jornada apta para sincerarse con la persona que ama, trate de expresar sus verdaderos sentimientos. Anímese a dar un paso más si es que se encuentra en pareja.";}}
        if (signe=== "Sagitario ♐") {
            if (luckyNumber === 1) {
                message = "Procure no descuidar la alimentación, trate de almorzar, merendar y cenar como corresponde. Comprenda que comer poco no es cuidarse con la comida.";} 
                else if (luckyNumber === 2) {
                message = "Teniendo la Luna en oposición, hará que se sienta presionado a dar una respuesta apresurada en el plano profesional. Piense bien antes de definir la situación.";} 
                else if (luckyNumber === 3) {
                message = "Intente comentarle a su pareja con naturalidad sus dudas, así podrá alcanzar el entendimiento con su alma gemela. Mantengan un dialogo activo entre ambos.";}}
        if (signe=== "Capricornio ♑") {
            if (luckyNumber === 1) {
                message = "Trate de actuar con más decisión en lo profesional. Restablezca nuevas relaciones sociales que le permitirán iniciar renovados acuerdos comerciales.";} 
                else if (luckyNumber === 2) {
                message = "Propónganse en cuanto pueda cambiar el estilo de su rutina. Intente practicar de forma sistemática alguna actividad física que sea de su agrado.";} 
                else if (luckyNumber === 3) {
                message = "Esa persona que lo ama pretenderá mantenerlo sujeto a su lado. Evite sentirse esclavo de su alma gemela, ya que usted es una persona independiente.";}}
        if (signe=== "Acuario ♒") {
            if (luckyNumber === 1) {
                message = "Trate de no abusar de los postres, si lo hace terminará perjudicando su silueta. Necesitará hacer una dieta y controlar la elección de los alimentos que consume.";} 
                else if (luckyNumber === 2) {
                message = "Comprenda que escuchando a ese amigo que siempre lo acompaña en la adversidad, lo ayudará a recapacitar y ver la vida desde otra perspectiva.";} 
                else if (luckyNumber === 3) {
                message = "Será un período oportuno para las inversiones y los negocios. No se demore pero recuerde que debe utilizar la prudencia cuando tenga que tomar la decisión.";}}
        if (signe=== "Piscis ♓") {
            if (luckyNumber === 1) {
                message = "Modifique la forma de relacionarse con su pareja. Trate de compartir junto a su alma gemela algunos de sus intereses y será agradable para ambos.";} 
                else if (luckyNumber === 2) {
                message = "Prepárese, ya que los buenos negocios necesitan si o si de usted. Gracias a su voluntad podrá definir el rumbo y el resultado que tendrá el proyecto.";} 
                else if (luckyNumber === 3) {
                message = "En esta jornada, se sentirá una poco indeciso. Será bueno que se deje llevar por sus deseos y que disfrute del presente sin preocuparse por su futuro.";}}
                return message;
        }
    });