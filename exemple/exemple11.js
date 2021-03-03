const prenom ="thibaut";


console.log(prenom);

let salutation = "bonjour " + prenom;

console.log("Mais uqi voula ??? \n" + salutation);

console.log("****************************");

const rencontre ="je suis vraiment heureux de te rencontrer"

console.log(`Mais qui voila ??? ${salutation},\n${rencontre}`);

console.log("*******************************'\n\n");

let nombre1 = 8, nombre2 = 4, nombre3 = 12, resultat;

//ADDITION
resultat = nombre1 + nombre3;
console.log("Resultat de l'addition : " + resultat);

//SOUSTRACTION

resultat = nombre3 - nombre2;
console.log("Resultat de la soustraction : " + resultat);

//DIVISION
resultat = nombre3 / nombre2;
console.log(`${nombre3} / ${nombre2} = ${resultat}`)

//MULTIPLICATION
resultat = nombre1 * nombre3;
console.log(`${nombre1} * ${nombre3} = ${resultat}`)

//MODULO
resultat = nombre3 % nombre1;
console.log(`${nombre3} % ${nombre1} = ${resultat}`)

//EXPONENTIELLE

resultat = 5**2;
console.log(`Le resultat de 5 exp 2 est ${resultat}`)