function aleatorio() {
    let r = Math.floor((Math.random() * 79.99));
    let t = Math.floor((Math.random() * 79.99));
    let y = Math.floor((Math.random() * 79.99));
    let h = Math.floor((Math.random() * 79.99));
    let mar = Math.floor(Math.random()*5);
    
    document.getElementById('i1').className='i'+r+' ma'+mar;
    document.getElementById('i2').className='i'+t+' ma'+mar;
    document.getElementById('i3').className='i'+y+' ma'+mar;
    document.getElementById('i4').className='i'+h+' ma'+mar;
}
aleatorio();