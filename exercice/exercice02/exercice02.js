




function start(){
    
        let nb = Number(prompt("Quel type d'opération souhaitez vous effectuer ?\n1 - Addition\n2 - Soustraction\n3 - Multiplication\n4 - Division"));

        switch (nb) {
        case 1:
            Addition();
            break;
        case 2:
            Soustraction();
            break;
        case 3:
            Multiplication();
            break;
        case 4:
            Division();
            break;

            default: alert("Incorrect, recommencez")
            break;
        }
    }

function Addition(){
    let premierNombre = Number(prompt("Premier nombre :"));
    let deuxiemmeNombre = Number(prompt("Deuxiemme nombre :"));
    let resultat = premierNombre + deuxiemmeNombre;
    document.write("Le calcul est : " + premierNombre + " + " + deuxiemmeNombre + " = " + resultat);
}
function Soustraction(){
    let premierNombre = Number(prompt("Premier nombre :"));
    let deuxiemmeNombre = Number(prompt("Deuxiemme nombre :"));
    let resultat = premierNombre - deuxiemmeNombre;
    document.write("Le calcul est : " + premierNombre + " - " + deuxiemmeNombre + " = " + resultat);
}
function Multiplication(){
    let premierNombre = Number(prompt("Premier nombre :"));
    let deuxiemmeNombre = Number(prompt("Deuxiemme nombre :"));
    let resultat = premierNombre * deuxiemmeNombre;
    document.write("Le calcul est : " + premierNombre + " * " + deuxiemmeNombre + " = " + resultat);
}
function Division(){
    let premierNombre = Number(prompt("Premier nombre :"));
    let deuxiemmeNombre = Number(prompt("Deuxiemme nombre :"));
    let resultat = premierNombre / deuxiemmeNombre;
    document.write("Le calcul est : " + premierNombre + " / " + deuxiemmeNombre + " = " + resultat);

}