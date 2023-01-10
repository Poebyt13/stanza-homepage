


const backgroundWeb = document.getElementById("background-grande");
const tastoSinistro = document.getElementById("button-sinistro");
const tastoDestro = document.getElementById("button-destro");

const tastoSinistroSpeciale = document.getElementById("button-sinistro-especial");
const tastoDestroSpeciale = document.getElementById("button-destro-especial");


var imagenes = ["primaImagine","secondaImagine" ,"terzaImagine"];
var position = 0;

const primoTesto = document.getElementById("primoTesto");
const secondoTesto = document.getElementById("secondoTesto");
const terzoTesto = document.getElementById("terzoTesto");

var testo = [primoTesto,secondoTesto,terzoTesto]

tastoDestro.addEventListener("click",()=>{
    funcionBotonDerecho();
})

tastoSinistro.addEventListener("click",()=>{
    funcionBotonIsquierdo();
})

tastoDestroSpeciale.addEventListener("click",()=>{
    
    funcionBotonDerecho();
})

tastoSinistroSpeciale.addEventListener("click",()=>{
    funcionBotonIsquierdo();
})

const desaparecer = (array, posizione)=>{   
    array[posizione].style.visibility = "hidden";
    array[posizione].style.position = "absolute";
}

const aparecer = (array, posizione)=>{
    array[posizione].style.visibility = "visible";
    array[posizione].style.position = "relative";
}


const funcionBotonDerecho = ()=>{
    desaparecer(testo, position);
    tastoDestro.disabled = true;
    tastoSinistro.disabled = true;
    tastoDestroSpeciale.disabled = true;
    tastoSinistroSpeciale.disabled = true;

    backgroundWeb.classList.remove(imagenes[position]);
    position++;

    if (position == 3) {
        position = 0;
    }

    aparecer(testo, position);
    backgroundWeb.classList.add(imagenes[position]);
    setTimeout(() => {
        tastoDestro.disabled = false;
        tastoSinistro.disabled = false;
        tastoDestroSpeciale.disabled = false;
        tastoSinistroSpeciale.disabled = false;
    }, 500);
}


const funcionBotonIsquierdo = ()=>{
    desaparecer(testo, position);
    tastoDestro.disabled = true;
    tastoSinistro.disabled = true;
    tastoDestroSpeciale.disabled = true;
    tastoSinistroSpeciale.disabled = true;

    backgroundWeb.classList.remove(imagenes[position]);
    position--;
    
    if (position == -1) {
        position = 2;
    }

    aparecer(testo, position);
    backgroundWeb.classList.add(imagenes[position]);
    
    setTimeout(() => {
        tastoDestro.disabled = false;
        tastoSinistro.disabled = false;
        tastoDestroSpeciale.disabled = false;
        tastoSinistroSpeciale.disabled = false;
    }, 500);
    
}


















const openMenu = document.getElementById("button-menu");
const menu_responsive = document.getElementById("menu-responsive");
const closeMenu = document.getElementById("close-menu");
const oscura = document.getElementById("oscura");
const links = document.querySelectorAll(".links");

openMenu.addEventListener("click",()=>{
    menu_responsive.style.top = "0px";
    menu_responsive.style.transitionProperty = "top";
    menu_responsive.style.transitionDuration = ".5s";
    oscura.style.opacity = "70%"
    oscura.style.zIndex = "-1";
    oscura.style.transitionProperty = "opacity";
    oscura.style.transitionDuration = ".4s"
    oscura.style.top = "0px"
})

closeMenu.addEventListener("click",()=>{
    cerrarMenu();
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click",()=>{
        console.log(links);
        cerrarMenu();
    })
    
}

oscura.addEventListener("click",()=>{
    cerrarMenu();
})


const cerrarMenu = ()=>{
    menu_responsive.style.top = "-1000px";
    oscura.style.opacity = "0%";
    menu_responsive.style.transitionProperty = "top";
    menu_responsive.style.transitionDuration = ".5s";
    oscura.style.zIndex = "500";
    oscura.style.transitionProperty = "opacity";
    oscura.style.transitionDuration = ".4s"
    oscura.style.top = "-1000px";
}