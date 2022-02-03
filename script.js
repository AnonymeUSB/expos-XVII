var droite = document.getElementById("fleche_droite");
var gauche = document.getElementById("fleche_gauche");
var diapo1 = document.getElementById("diapo1");

sessionStorage.setItem('diapo', 1);

function fleche_gauche(){

    var diapo = sessionStorage.getItem('diapo') - 1;

    if (diapo < 1) {
        alert("Pas de page avant.");
    }
    else {

        alert(diapo);
        diapo1.style.display = "none";
    }

}


function fleche_droite (){

    var diapo = parseInt(sessionStorage.getItem('diapo'));
    var diapo = diapo + 1;

    if (diapo > 2) {
        alert("Pas de page après. " + typeof(diapo) + diapo);
    }
    else {
        diapo1.style.display = "none";
    }
}