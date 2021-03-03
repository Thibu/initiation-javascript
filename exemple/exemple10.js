


// part 1


var nom = "Ramiro"; // variable globale, peut etre utliser dans tout le code
let prenom = "Thibaut"; // variable globale, n'est accessible qu'a certains endroit du code
console.log(nom);
console.log(prenom);

const registreNational = "68464648-545-65"; // numéro constant, identique toute la vie 
console.log(registreNational); // affichage du registre dans le debugger du navigateur
// registreNational = "5468746346-659-14"; // essaye de réaffectation de la variable a une autre valeur
// console.log(registreNational); // affichage du registre dans le debugger du navigateur

console.log("****************************************")

// PARTIE 2


let rue ="Place de la concorde"; // chaine de caractere
console.log(rue)
let age = 18; //nombre
console.log(age)
let majeur = true; // boolean
console.log(majeur)
let personne = {// objet
    nom: "ramiro",
    prenom: "thibaut"

}
console.log(personne.nom + " " + personne.prenom)

function direBonjour(){console.log("Bonjour");} // déclare une fonction

direBonjour(); // appel de ma fonction