document.addEventListener("DOMContentLoaded", function() {

let savedBday = localStorage.getItem("bday");
let day 

if (savedBday) {
    day = new Date(savedBday);
    console.log("Fecha recuperada del localStorage:", savedBday);
  } else {
    let bday = prompt("Ingrese su fecha de cumpleaños en el formato YYYY-MM-DD");
    day = new Date(bday)
    const enJSON = JSON.stringify(bday);

    if (isNaN(day)) {
      console.log("La fecha ingresada no es válida");
      alert("La fecha ingresada no es válida, recargue la página e intente nuevamente");
    } else {
      localStorage.setItem("bday", bday, enJSON);
    }
  }
  if (!isNaN(day)) {
    let luckyNumber = Math.floor(Math.random() * 3) + 1;
    console.log(luckyNumber)
    // Lucky Number es el numero de la suerte para el horoscopo, generado aleatoriamente, dependiendo del valor que tenga, va a soltar un mensaje distinto dependiendo del signo zodiacal correspondiente
    
    let month = day.getMonth() + 1;
    let dayNumber = day.getDate();

    let signe = horoscope(month, dayNumber); 
    console.log("Tu signo zodiacal es", signe);

    let message = luckyMessage(signe, luckyNumber); 

    let info = infoSigne(signe)
    console.log("Información de tu signo:", info);


    document.getElementById("YourSigne").innerText = signe;
    document.getElementById("YourHoroscopeMessage").innerHTML = `<p>${message}</p>`;

    let giveInfo = document.getElementById("YourSigne")
    giveInfo.addEventListener("click", handleClick)

    function handleClick() {
        let darInfo = document.getElementById("infoSigne").innerHTML = `<p>${info}</p>`;
    }

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
        function infoSigne(signe) {
            let info = "";
    
            if (signe=== "Aries ♈") {
                    info = "Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.";}
            if (signe=== "Tauro ♉") {
                    info = "Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas.";}
            if (signe=== "Géminis ♊") {
                    info = "Géminis es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio.";}
            if (signe=== "Cáncer ♋") {
                    info = "Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.";}
            if (signe=== "Leo ♌") {
                    info = "El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.";}
            if (signe=== "Virgo ♍") {
                    info = "Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa.";}
            if (signe=== "Libra ♎") {
                    info = "Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble.";}
            if (signe=== "Escorpio ♏") {
                    info = "Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis, fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno.";}
            if (signe=== "Sagitario ♐") {
                    info = "Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña.";}
            if (signe=== "Capricornio ♑") {
                    info = "Capricornio es un signo cardinal y de tierra, y uno de los signos del zodíaco más constante, sólido y apacible. También se caracteriza por ser prudente y práctico en todos los asuntos que le conciernen. Sus aspectos más negativos tienden hacia el pesimismo, la fijeza y la melancolía.";}
            if (signe=== "Acuario ♒") {
                    info = "Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual. Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema.";}
            if (signe=== "Piscis ♓") {
                    info = "Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones, así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado.";}
                    return info;
                    
            }
    });
