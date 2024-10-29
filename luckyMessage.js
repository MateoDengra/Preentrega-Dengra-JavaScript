const messages = {
    Aries:
             ["No permita que los temas económicos interfieran negativamente en su pareja. Evite las peleas, ya que podría atravesar un mal momento con su alma gemela." ,
             "Sepa que transitará un día bastante apasionado en el amor. Acérquese al ser que ama y bríndele todo su tiempo para compartir un momento muy grato.",
             "Si hace días le cuesta conciliar el sueño, deje de automedicarse. Busque alguna actividad que lo relaje por las noches y póngala en practica cuanto antes."],
      Tauro: 
            [ "Sepa que el Reiki puede convertirse en el gran aliado del bienestar de su vida. Asista a la invitación que le hicieron y regresará a su hogar renovado.",
             "Después de la discusión que tuvo con su alma gemela, debería evaluar cuanto de culpa tiene y resolver lo antes posible la situación de la mejor manera.",
             "Comience a librarse de ciertas ataduras que limitan su crecimiento profesional. Emprenda con confianza un nuevo proyecto y pronto obtendrá ganancias."],
      Géminis:
            [ "Momento oportuno para amar y confiar en su alma gemela. Empiece a ser usted mismo frente a su pareja, procure olvidarse de los miedos y las preocupaciones.",
             "Si siente que últimamente le faltan fuerzas, trate de combatir el decaimiento físico y anímico incorporando a su plan alimenticio cereales y fibras.",
             "Será un magnico momento para invertir en algún proyecto. Intente hacer cuentas y revisar la confiabilidad de la propuesta que le hicieron hace unos días."],
      Cáncer:
             ["Evite sentirse inconstante e insatisfecho en los sentimientos, de lo contrario, la relación fluctuará. Vea qué es lo que quiere y evite confundir a su alma gemela.",
             "Gracias a la audacia y el poder que posee podrá desarrollar planes a futuro. No dude y tome esa decisión financiera que tiene entre manos hace meses.",
             "Hoy su espíritu festivo le exigirá un encuentro nocturno con amigos. Deje de hacerse tantos problemas y olvídese de sus obligaciones. Trate de divertirse."],
      Leo:
             ["Momento para que realice un equilibrio entre sus ingresos y egresos. Deje de gastar con tarjeta de crédito porque a fin de mes no podrá pagar el resumen.", 
             "Intente mejorar el diálogo con su enamorado. Sepa que será la mejor manera para darle fin a esas derencias que tienen hace tiempo y dañan el vínculo.", 
             "Procure distenderse cuando llegue a su casa antes de cenar. Busque y vea una buena película, esto le hará olvidar la rutina pesada que vivió en esta jornada."],
      Virgo:
             ["Será una magnífica jornada para saldar las deudas personales e impuestos pendientes que lo torturan hace tiempo. No permita que se sigan acumulando los intereses.", 
             "Ponga más atención a los reclamos que le hace su alma gemela. No crea que usted es el único que tiene problemas en la vida, traten de ayudarse entre ambos.",
             "Hoy en su familia podrá relajarse y así encontrará la atmosfera más adecuada para sobrellevar todas las dicultades que ha transitado en su día laboral."],
      Libra:
             ["Acepte la propuesta fuera de lo común que le hizo su pareja y así podrán salir de la clásica rutina. Sepa que será la opción más inteligente para este día.", 
             "Tranquilícese, los tramites vinculados con el exterior podría tener complicaciones. No sea impaciente, todo se resolverá en el tiempo que tiene que ser.", 
             "Si bien se siente cansado, acepte esa invitación que le hicieron para esta noche. Comprenda que le hará bien despejarse un poco de la rutina diaria."],
      Escorpio: 
             ["Hoy las responsabilidades laborales lo reclamaran. Hágase cargo de sus obligaciones y deje de delegar en los compañeros de trabajo cada unas de sus tareas.", 
             "Teniendo un buen descanso en las noches, podrá reponer sus fuerzas y recuperar su lucidez mental. No asuma más responsabilidades de las que puede afrontar.", 
             "Jornada apta para sincerarse con la persona que ama, trate de expresar sus verdaderos sentimientos. Anímese a dar un paso más si es que se encuentra en pareja."],
      Sagitario:
             ["Procure no descuidar la alimentación, trate de almorzar, merendar y cenar como corresponde. Comprenda que comer poco no es cuidarse con la comida.", 
             "Teniendo la Luna en oposición, hará que se sienta presionado a dar una respuesta apresurada en el plano profesional. Piense bien antes de definir la situación.", 
             "Intente comentarle a su pareja con naturalidad sus dudas, así podrá alcanzar el entendimiento con su alma gemela. Mantengan un dialogo activo entre ambos."],
      Capricornio:
             ["Trate de actuar con más decisión en lo profesional. Restablezca nuevas relaciones sociales que le permitirán iniciar renovados acuerdos comerciales.", 
             "Propónganse en cuanto pueda cambiar el estilo de su rutina. Intente practicar de forma sistemática alguna actividad física que sea de su agrado.", 
             "Esa persona que lo ama pretenderá mantenerlo sujeto a su lado. Evite sentirse esclavo de su alma gemela, ya que usted es una persona independiente."],
      Acuario:
             ["Trate de no abusar de los postres, si lo hace terminará perjudicando su silueta. Necesitará hacer una dieta y controlar la elección de los alimentos que consume.", 
             "Comprenda que escuchando a ese amigo que siempre lo acompaña en la adversidad, lo ayudará a recapacitar y ver la vida desde otra perspectiva.",
             "Será un período oportuno para las inversiones y los negocios. No se demore pero recuerde que debe utilizar la prudencia cuando tenga que tomar la decisión."],
      Piscis:
             ["Modique la forma de relacionarse con su pareja. Trate de compartir junto a su alma gemela algunos de sus intereses y será agradable para ambos.",
             "Prepárese, ya que los buenos negocios necesitan si o si de usted. Gracias a su voluntad podrá definir el rumbo y el resultado que tendrá el proyecto.",
             "En esta jornada, se sentirá una poco indeciso. Será bueno que se deje llevar por sus deseos y que disfrute del presente sin preocuparse por su futuro."],
}

function luckyMessage(sign) {
       let signKey = sign.split(" ")[0]; 
       let signMessages = messages[signKey]; 
   
       if (signMessages) {
           // Genera un número de suerte aleatorio dentro del rango de mensajes
           const luckyNumber = Math.floor(Math.random() * signMessages.length);
           return signMessages[luckyNumber]; // Retorna el mensaje de suerte aleatorio
       } else {
           console.error("No se encontraron mensajes para el signo:", sign);
           return "No hay mensaje de suerte disponible."; 
       }
   }