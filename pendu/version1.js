//VARIABLES DU JEU

let mot = "bonjour";
let tableauLettre = ['-', '-', '-', '-', '-', '-', '-'];
let score = 10;
let lettreJoueur = "";
let trouvé = false;



function choisirLettre(){
    lettreJoueur = prompt(`Le mot à trouver est ${tableauLettre.join(" ")}\nIl vous reste ${score} essais. \nChoisissez une lettre`)
    console.log(lettreJoueur);
    verifierLettre(lettreJoueur);
}

function verifierLettre(x){
    for(i=0; i <= 6; i++){
        if (mot[i] == x) {
            trouvé = true;
            tableauLettre[i] = x;
        }
    }
    if (trouvé == false) {
        score--;
    }
    checkTableau();
}

function checkTableau() {
    trouvé = false;
    if (score == 0) {
        alert(`Vous avez perdu, le mot à trouver était ${mot}`);
    }else{
        let reponse = 0;
        for(i=0; i < tableauLettre.length; i++){
            if (tableauLettre[i] != '-') {
                reponse++;
            }
        }
        if (reponse == mot.length) {
            alert(`Bravo, vous avez gagné, le mot à trouver était bien ${mot}`);
        }
        else{
            choisirLettre();
        }
    }
}












choisirLettre();
