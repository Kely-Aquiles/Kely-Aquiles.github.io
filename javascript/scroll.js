// we will add this content, replace for anything you want to add
var more = '<div id="i1"></div> <div id="i2"></div> <div id="i3"></div> <div id="i4"></div>';
    
var wrapper = document.getElementById("wrapper");
var content = document.getElementById("content");
var test = document.getElementById("test");
content.innerHTML = more;

// cross browser addEvent, today you can safely use just addEventListener
function addEvent(obj,ev,fn) {
  if(obj.addEventListener) obj.addEventListener(ev,fn,false);
  else if(obj.attachEvent) obj.attachEvent("on"+ev,fn);    
}

// this is the scroll event handler
function scroller() {
  // print relevant scroll info
//   test.innerHTML = wrapper.scrollTop+"+"+wrapper.offsetHeight+"+100>"+content.offsetHeight;

  // add more contents if user scrolled down enough
  if(wrapper.scrollTop+wrapper.offsetHeight+100>content.offsetHeight) {
    let u = Math.floor(Math.random() * 168.99);
    let v = Math.floor(Math.random() * 168.99);
    let w = Math.floor(Math.random() * 168.99);
    let q = Math.random() * 100000;
    let CIH = '<div id="i' + q + '"></div><div id="i' + q + 1 + '"></div><div id="i' + q + 2 + '"></div>';
    let iq = 'i'+q;
    let eq = 'i'+q+1;
    let uq = 'i'+q+2;
    content.innerHTML+= CIH;
    document.getElementById(iq).className='i'+u;
    document.getElementById(eq).className='i'+v;
    document.getElementById(uq).className='i'+w;
              }
            }

// hook the scroll handler to scroll event
addEvent(wrapper,"scroll",scroller);