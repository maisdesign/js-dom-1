document.getElementById("onOff").onclick = function() {
    lightSwitch(document.getElementById("lightFigure").getElementsByTagName("img")[0]);
    buttonSwitch(document.getElementById("onOff"));
};
/*
* Un modo alternativo per selezionare l'immagine sarebbe potuto essere: concatenare il nome del file e cambiare solo quello nel tag src
*/
function lightSwitch(image) {
    if (image.src.match("img/white_lamp.png")) {
        image.src = "img/yellow_lamp.png";
        image.alt = "Luce Accesa";
    } else {
        image.src = "img/white_lamp.png";
        image.alt = "Luce Spenta";
    }
}
function buttonSwitch(button) {
    if (button.innerHTML === "Accendi la luce") {
        button.innerHTML = "Spegni la luce";
    } else {
        button.innerHTML = "Accendi la luce";
    }
}