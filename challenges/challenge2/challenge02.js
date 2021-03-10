let gareDepart = prompt("Votre gare de départ ?");
let gareArrivée = prompt("Votre gare d'arrivée'") || "Mons";
let chauffeur = "Jean-Claude";

if (gareDepart && gareArrivée && chauffeur) {
    console.log("ON DEMARRE TICH");
    console.log(gareDepart);
    console.log(gareArrivée);
}
else {
    console.log("On reste à quai tich")
    console.log(gareDepart);
    console.log(gareArrivée);
}