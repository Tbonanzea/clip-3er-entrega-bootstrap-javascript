var cont = 4;

function verificar_adivinanza(elem) {
    let rta = elem.value.toLowerCase();
    let btn = document.getElementById("verificarAdivinanza");

    if (cont > 0) {
        if (rta == "") {
            document.getElementById("alertaVacio").style.display = "block";
            document.getElementById("alertaCorrecto").style.display = "none";
            document.getElementById("alertaIncorrecto").style.display = "none";
        } else {
            if (rta == "pwd") {
                btn.setAttributeNode(document.createAttribute("disabled"));
                document.getElementById("alertaCorrecto").style.display =
                    "block";
                document.getElementById("alertaVacio").style.display = "none";
                document.getElementById("alertaIncorrecto").style.display =
                    "none";
            } else {
                cont -= 1;
                document.getElementById("alertaIncorrecto").style.display =
                    "block";
                document.getElementById("alertaVacio").style.display = "none";
                document.getElementById("alertaCorrecto").style.display =
                    "none";
                if (cont == 3) {
                    document.getElementById("pista1").style.display = "block";
                }
                if (cont == 2) {
                    document.getElementById("pista2").style.display = "block";
                }
                if (cont == 0) {
                    btn.setAttributeNode(document.createAttribute("disabled"));
                    document.getElementById("alertaSinIntentos").style.display =
                        "block";
                    document.getElementById("alertaIncorrecto").style.display =
                        "none";
                    document.getElementById("alertaVacio").style.display =
                        "none";
                    document.getElementById("alertaCorrecto").style.display =
                        "none";
                }
            }
        }
    }

    document.getElementById(
        "intentosRestantes"
    ).innerHTML = "Intentos restantes: ".concat(cont.toString());
}
