var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sounds");
var botonLicuadora = document.getElementById("blender-button-sounds");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
if ( estadoLicuadora == "apagada") {
    estadoLicuadora = "encendido";
    
    licuadora.classList.add("active")
console.log("me prendiste");
} else{
    estadoLicuadora = "apagada"

    licuadora.classList.remove("active");
    console.log("me apagaste");
}
}

function hacerBrrBrr() {
    if( sonidoLicuadora.paused ){
        botonLicuadora.paused();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
