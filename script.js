var droite = document.getElementById("fleche_droite");
var gauche = document.getElementById("fleche_gauche");
var diapo1 = document.getElementById("diapo1");
var count = 0;

function fleche_gauche(){

    if (count === 0) {
        alert("Pas de page avant.");
    }
    else {
        diapo1.style.display = "none";
        var count = count - 1;
    }

}


function fleche_droite (){
    diapo1.style.display = "none";
    var count = count + 1;
}