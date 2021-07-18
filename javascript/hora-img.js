function cambiar_fondo_con_class(){
    d = new Date();
    t = d.getHours();
    document.getElementById('home-header').className ='header-color'+t;
    document.getElementById('img-link').className = 'images-link img'+t;
}

cambiar_fondo_con_class();