let mot = "bonjour";
let entreeUser =""
let lettreTrouvee = []










function start(){
    
    entreeUser = prompt(`Entrez une lettre :`)
}



function affTab() {
    for(i=0; i <= (mot.length -1); i++){
        lettreTrouvee.push('-');
    }
    
}



function chercheLettre() {
    for(i=0; i <= (mot.length -1); i++){
        // console.log(mot[i])
        if(entreeUser == mot[i]){
            // console.log("trouvé");
            lettreTrouvee[i] = entreeUser;
        }
    }
    
}

start();
