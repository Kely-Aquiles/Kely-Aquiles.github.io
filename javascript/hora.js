function cambiar_fondo_con_class(){
    d = new Date();
    t = d.getHours() +2;
    document.getElementById('main').className ='home-main fondo'+t;
    document.getElementById('home-header').className ='header-color'+t;
    document.getElementById('pingu').className='pingu pingu'+t;
    document.getElementById('main-text').className ='home-main-text h1-'+t;
    document.getElementById('img-link').className = 'images-link img'+t;
    document.getElementById('home-main-a').className = 'home-main-a a'+t;
    
     if (t >= 5 && t <= 10) {
      document.getElementById('main-text').innerHTML = "¡BUENOS DÍAS MI PRINCESITA! <br> TE AMO";
       } else if (t >= 11 && t <= 15) {
        document.getElementById('main-text').innerHTML = "ESPERO QUE ESTES TENIENDO UN MARAVILLOSO DÍA";
       } else if (t >= 16 && t <= 19) {
        document.getElementById('main-text').innerHTML = "ERES MÁS HERMOSA QUE UN ATARDECER";
       } else if (t >= 20) {
        document.getElementById('main-text').innerHTML = "BUENAS NOCHES MI AMOR, <br> GRACIAS POR SER MI NOVIA";
       } else {
        document.getElementById('main-text').innerHTML = "SUEÑO CONTIGO TODAS LAS NOCHES MI VIDA";
       }
}

cambiar_fondo_con_class();
    
