var p1 = 'El día es tan largo <br>que al tiempo tengo que engañar <br>y las noches se hacen eternas <br>sólo porque tu no estás.';
var p2 = 'Aunque pase el tiempo <br>y no estes junto a mi, <br>recuerda que siempre <br>me acordaré de ti';
var p3 = 'He buscado flores <br>bellas y hermosas, <br>hasta que lo encontré <br>en el jardin de mi bella novia'; 
var p4 = 'Chupa piña, <br>chupa limón…<br>chupa mis labios <br>que saben mejor';
var p5 = 'Como me gustaria <br>ser un mosquito, <br>Para rondarte <br>por todo el cuerpito';
var p6 = 'Las flores al verte, <br>celosas están, <br>no comprenden como una de ellas, <br>caminando va';
var p7 = '¡Naranjas naranjas!, <br>¡Limones, limones!, <br>daria la vida <br>por estrujarte los melones';
var p8 = 'En mi corazón llevo tu nombre <br>cosido en hilo dorado, <br>para que no se olvide nunca, <br>lo que contigo he amado.';
var p9 = 'Estas más buena que el pan <br>y más rica que el chorizo, <br>si estuvieras a mi lado <br>serías mi único capricho.';
var p10 = 'yes, yes te digo en inglés, <br>oui, oui te digo en francés, <br>piano piano te digo en italiano <br>pero yo te digo TE AMO en castellano';
var p11 = 'Esas piernas que tú tienes <br>son fuente de mis antojos, <br>por la calle van y vienen <br>y se me salen los ojos';
var p12 = 'La madre que te parió <br>tenia que ser artista <br>empezó una obra de arte <br>y el final está a la vista';
var p13 = 'Azul es el cielo, verdes son las plantas,cafés son los ojos de la chica que me mata';
var p14 = 'Me gustaria ser microfono <br>para que puedas susurrar, <br>esas canciones tan bonitas <br>que solo tu sabes cantar';
var p15 = 'Aunque vaya a la China,<br>aunque vaya al Perú, <br>nunca encontraré <br>a una mujer como tú.';
var p16 = 'El Amor <br>sin un beso <br>es como comer <br>espaguetti sin queso.';
var p17 = 'Quisiera ser fosforito <br>y que tú fueras la vela, <br>para verte derretir, <br>cuando te de candela…';
var p18 = 'Siempre pensé que todo lo que soñaba <br>no se cumpliría jamás,<br>pero desde que tomaste mis manos <br>sentí que eras una realidad';
var p19 = 'Si yo fuera un barco, <br>y tú un puerto, <br>atracaría cada día <br>en ese maravilloso cuerpo.'; 
var p20 = 'Si tu fueras árbol, <br>yo seria enredadera, <br>para tenerte en mis brazos <br>hasta el día que me muera';
var p21 = 'Quisiera ser hormiguita <br>para subir por tu balcón <br>y decirte al oido: <br>guapa, bonita, bombón';
var p22 = 'Si escuchas mil campanitas <br>repicando sin control, <br>es que al verte a ti, <br>me retumba el corazón <br>al ritmo de una canción';
var p23 = 'que hermoso es el cielo <br>cuando esta claro <br>pero más hermoso es el amor <br>cuando te tengo a mi lado.';
var p24 = 'Si me duele el estómago <br>cuando me como un bombón, <br>seguro que si te como, <br>me muero de indigestión.';
var p25 = 'Una rosa es una flor, <br>un tesoro, una fortuna. <br>Y una chica como tú <br>no la cambio por ninguna.';
var p26 = 'Es lindo ver el mar, <br>subiéndose a las rocas, <br>pero es más lindo alcanzar, <br>con un besito, tu boca.';
var p27 = 'Cinco calles he cruzado, <br>seis con el callejón, <br>sólo me falta una <br>para llegar a tu corazón.';
var p28 = 'Si el ser pobre es mi mala suerte, <br>y el conocerte es mi suerte, <br>entonces voy a amarte, <br>hasta más allá de la misma muerte.';
var p29 = 'Adiós corazón de maní: <br>la que me cuelga es para ti.';
var p30 = 'El camello muere en la arena, <br>el águila muere en la roca <br>y yo me quiero morir <br>terminando en tu boca.';
var p31 = 'Por 1 beso de tu boca, <br>2 caricias te daría, <br>3 abrazos que demuestran, <br>4 veces mi alegría, <br>y en la 5ta sinfonía <br>de mi 6to pensamiento, <br>7 veces te diría, <br>8 letras de un Te Quiero, <br>porque 9 veces por ti vivo <br>y 10 veces por ti muero.';
var pa = "Piropo del día: <br><br>"

function cambiar_piropo(){
    let z = new Date();
    let day = z.getDate() + 0;

    if (day == 1) {pir = pa + p1;} 
    else if (day == 2){pir = pa + p2;}
    else if (day == 3){pir = pa + p3;}
    else if (day == 4){pir = pa + p4;}
    else if (day == 5){pir = pa + p5;}
    else if (day == 6){pir = pa + p6;}
    else if (day == 7){pir = pa + p7;}
    else if (day == 8){pir = pa + p8;}
    else if (day == 9){pir = pa + p9;}
    else if (day == 10){pir = pa + p10;}
    else if (day == 11){pir = pa + p11;}
    else if (day == 12){pir = pa + p12;}
    else if (day == 13){pir = pa + p13;}
    else if (day == 14){pir = pa + p14;}
    else if (day == 15){pir = pa + p15;}
    else if (day == 16){pir = pa + p16;}
    else if (day == 17){pir = pa + p17;}
    else if (day == 18){pir = pa + p18;}
    else if (day == 19){pir = pa + p19;}
    else if (day == 20){pir = pa + p20;}
    else if (day == 21){pir = pa + p21;}
    else if (day == 22){pir = pa + p22;}
    else if (day == 23){pir = pa + p23;}
    else if (day == 24){pir = pa + p24;}
    else if (day == 25){pir = pa + p25;}
    else if (day == 26){pir = pa + p26;}
    else if (day == 27){pir = pa + p27;}
    else if (day == 28){pir = pa + p28;}
    else if (day == 29){pir = pa + p29;}
    else if (day == 30){pir = pa + p30;}
    else if (day == 31){pir = pa + p31;}

    document.getElementById('piropo').innerHTML = pir;
}

cambiar_piropo();