var droite = document.getElementById("fleche_droite");
var gauche = document.getElementById("fleche_gauche");
var diapo1 = document.getElementById("diapo1");

sessionStorage.setItem('diapo', 1);

function fleche_gauche(){

    var diapo2 = document.getElementById("diapo2");
    var diapo = sessionStorage.getItem('diapo');
    var diapo = diapo - 1;

    if (diapo < 1) {
        alert("Pas de page avant.");
        var diapo = 1;
    }
    else {
            if (diapo === 1){
                diapo1.style.display = "block";
                diapo2.style.display = "none";
            }
            if (diapo === 2) {
                diapo2.style.display = "block";
                diapo1.style.display = "none";
            }
            if (diapo === 3) {
                diapo3.style.display = "block";
                diapo2.style.display = "none";
                diapo1.style.display = "none";
            }
    }
    
    sessionStorage.setItem('diapo', diapo);
}


function fleche_droite (){
    
    var diapo2 = document.getElementById("diapo2");
    var diapo3 = document.getElementById("diapo3");
    var diapo = parseInt(sessionStorage.getItem('diapo'));
    var diapo = diapo + 1;


    if (diapo > 3) {
        alert("Pas de page après. ");
        var diapo = 3;
    }
    else {
        if (diapo === 1){
            diapo1.style.display = "block";
            diapo2.style.display = "none";
        }
        if (diapo === 2) {
            diapo2.style.display = "block";
            diapo1.style.display = "none";
        }
        if (diapo === 3) {
            diapo3.style.display = "block";
            diapo2.style.display = "none";
            diapo1.style.display = "none";
        }
    }

    sessionStorage.setItem('diapo', diapo);
}