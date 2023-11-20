
document.addEventListener("DOMContentLoaded", function () {
// Menu lateral
let menuVisible = false;
const menu = document.getElementById("nav") as HTMLDivElement;

function mostrarOcultarMenu() {
    if (!menuVisible) { // Si está oculto
        menu.style.display = "block";
        menuVisible = true;
    } else {
        menu.style.display = "none";
        menuVisible = false;
    }
}

// Oculto el menú una vez que selecciono una opción
const links = document.querySelectorAll("nav a");

for (let x = 0; x < links.length; x++) {
    const link = links[x];

    if (link instanceof HTMLAnchorElement) {
        link.onclick = function () {
            menu.style.display = "none";
            menuVisible = false;
        };
    }
}

// Creo las barritas de una barra particular identificada por su id
function crearBarra(idBarra: HTMLElement) {
    for (let i = 0; i <= 16; i++) {
        const div = document.createElement("div");
        div.className = "e";
        idBarra.appendChild(div);
    }
}

// Selecciono todas las barras generales para luego manipularlas
const html = document.getElementById("html") as HTMLElement;
crearBarra(html);
const javascript = document.getElementById("javascript") as HTMLElement;
crearBarra(javascript);
const wordpress = document.getElementById("wordpress") as HTMLElement;
crearBarra(wordpress);
const photoshop = document.getElementById("photoshop") as HTMLElement;
crearBarra(photoshop);
const php = document.getElementById("php") as HTMLElement;
crearBarra(php);
const ilustrator = document.getElementById("ilustrator") as HTMLElement;
crearBarra(ilustrator);

// Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
// Para eso utilizo un arreglo, cada posición pertenece a un elemento
// Comienzan en -1 porque no tiene ninguna pintada al iniciarse
const contadores: number[] = [-1, -1, -1, -1, -1, -1];
// Esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const habilidades = document.getElementById("habilidades") as HTMLElement;
    const distanciaSkills = window.innerHeight - habilidades.getBoundingClientRect().top;

    if (distanciaSkills >= 300 && !entro) {
        entro = true;

        const intervalHtml = setInterval(function () {
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);

        const intervalJavascript = setInterval(function () {
            pintarBarra(javascript, 11, 1, intervalJavascript);
        }, 100);

        const intervalWordpress = setInterval(function () {
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        }, 100);

        const intervalPhotoshop = setInterval(function () {
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        }, 100);

        const intervalPhp = setInterval(function () {
            pintarBarra(php, 16, 4, intervalPhp);
        }, 100);

        const intervalIlustrator = setInterval(function () {
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        }, 100);
    }
}

// Lleno una barra particular con la cantidad indicada
function pintarBarra(idBarra: HTMLElement, cantidad: number, indice: number, interval: NodeJS.Timeout) {
    contadores[indice]++;
    const x = contadores[indice];

    if (x < cantidad) {
        const elementos = idBarra.getElementsByClassName("e") as HTMLCollectionOf<HTMLDivElement>;
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}

// Detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
    efectoHabilidades();
}
});
