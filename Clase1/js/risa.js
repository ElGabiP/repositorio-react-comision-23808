//Declarar valores por defecto de las variables
let estadoRisa = "encendido";
let bolsaEncontrada = false;
let volumenInicial = 25;

//Declarar las variables de los sonidos
let sonidoRisa = document.querySelector("#risa");
let sonidoBoton = document.querySelector("#click");
let sonidoExito = document.querySelector("#sonido_exito");
let sonidoBocina = document.querySelector("#bocina");

//Declarar las variables de los divs
let guason = document.querySelector("#guason");
let bolsaRisa = document.querySelector("#bolsa");
let areaCercana = document.querySelector("#area-cercana");

//Inicializar la risa y desdvanecer cartucho al cargar la página
window.onload = function () {
  cartucho.classList.add('desvanecer');
  ajustarVolumen(volumenInicial);
  sonidoRisa.play()
};

const controlarRisa = () => {
  (estadoRisa == "apagado") ?
    (estadoRisa = "encendido", pausarRisa()) :
    (estadoRisa = "apagado", pausarRisa())
};

const encontrarRisa = () => {
  ajustarVolumen(100);
  (bolsaEncontrada == false) ?
    (bolsaEncontrada = true, victoria()) :
    (pausarRisa());
};

const victoria = () => {
  guason.removeEventListener("click", tocarBocina);
  bolsaRisa.classList.add("bolsa_encontrada");
  sonidoExito.play();
  mensajeVictoria();
}

const pausarRisa = () => {
  (sonidoRisa.paused) ?
    (sonidoBoton.play(), sonidoRisa.play()) :
    (sonidoBoton.play(), sonidoRisa.pause(), sonidoRisa.currentTime = 0)
}

const ajustarVolumen = (volumen) => sonidoRisa.volume = volumen / 100;
const tocarBocina = () => sonidoBocina.play();

const mensajeVictoria = () => {
  const felicitaciones = document.createElement("div");
  felicitaciones.innerHTML = "<strong>¡Felicitaciones!</strong> ¿Fue para morirse de risa, verdad?";
  felicitaciones.id = "cartucho";
  guason.appendChild(felicitaciones);
}
//eventos
areaCercana.addEventListener("mouseover", () => ajustarVolumen(70));
areaCercana.addEventListener("mouseout", () => ajustarVolumen(volumenInicial));
guason.addEventListener("click", tocarBocina);
bolsaRisa.addEventListener("click", encontrarRisa)
