document.getElementById("onOff").onclick = function() {lightSwitch(document.getElementById("lightFigure").getElementsByTagName("img")[0])};
function lightSwitch(image) {
    if (image.src.match("img/white_lamp.png")) {
        image.src = "img/yellow_lamp.png";
        image.alt = "Luce Accesa";
    } else {
        image.src = "img/white_lamp.png";
        image.alt = "Luce Spenta";
    }
}
