
let nom;
let prenom;

do {
    nom = prompt("Quel est votre nom ?")
    prenom = prompt("Quel est votre prenom ?")

    console.log("ans ma boucle " + nom);
    console.log("dans ma boucle " + prenom);

} while (nom == "" || prenom == "");

console.log("En dehors de la boucle");


