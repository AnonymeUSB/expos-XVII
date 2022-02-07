var droite = document.getElementById("fleche_droite");
var gauche = document.getElementById("fleche_gauche");
var diapo1 = document.getElementById("diapo1");

sessionStorage.setItem('diapo', 1);

function fleche_gauche(){

    var diapo = sessionStorage.getItem('diapo');
    var diapo = diapo - 1;

    if (diapo < 1) {
        alert("Pas de page avant.");
        var diapo = 1;
    }
    else {
        diapo1.style.display = "none";
    }
    
    if (diapo1 === 1){
        diapo1.style.display = "block";
    }
    sessionStorage.setItem('diapo', diapo);
}


function fleche_droite (){

    var diapo = parseInt(sessionStorage.getItem('diapo'));
    var diapo = diapo + 1;


    if (diapo > 2) {
        alert("Pas de page après. ");
        var diapo = 2;
    }
    else {
        diapo1.style.display = "none";
    }

    sessionStorage.setItem('diapo', diapo);
}