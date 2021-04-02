let operation, n1, n2, resultat;

function calculatrice(){
    do {
        operation = prompt(`Choisissez votre operation\n
        1 - Addition\n
        2 - Soustraction\n
        3 - Multiplication\n
        4 - Division`);
    } while (operation != `1` && operation != `2` && operation != `3` && operation != `4`);

    do {
        n1 = parseInt(prompt(`Entrez le premier nombre`));
    } while (isNaN(n1));

    do {
        n2 = parseInt(prompt(`Entrez le premier nombre`));
    } while (isNaN(n2));

    calcul(n1, n2);
}

function Addition(nombre1, nombre2){
    
    return nombre1 + nombre2 ;
}
function Soustraction(nombre1, nombre2){
    
    return nombre1 - nombre2 ;
}
function Multiplication(nombre1, nombre2){
    
    return nombre1 * nombre2 ;
}
function Division(nombre1, nombre2){
    if(nombre2 == 0) {
        alert(`La division par 0 c'est pas possible\nRecommencez en entrant des valeurs correctes`);
        calculatrice();
    }else{
        return nombre1 / nombre2 ;       
    }
}

function calcul(nombreN1, nombreN2){

    try {
        switch (operation) {
            case '1':
                alert(`${nombreN1} + ${nombreN2} = ${Addition(nombreN1, nombreN2)}`);
                break;
            case '2':
                alert(`${nombreN1} - ${nombreN2} = ${Soustraction(nombreN1, nombreN2)}`);
                break;
            case '3':
                alert(`${nombreN1} * ${nombreN2} = ${Multiplication(nombreN1, nombreN2)}`);
                break;
            case '4':
                alert(`${nombreN1} / ${nombreN2} = ${Division(nombreN1, nombreN2)}`);
                break;
            default:
                throw new Error(`Une erreur est survenue, on relance la machine`)
                break;
        }
    } catch (e) {
        alert(e);
        calculatrice();
    } finally{
        if(confirm(`Effectuez une autre operation ?`)){
            calculatrice();
        } else {
            alert(`Au revoir !`)
        }
    }
}
    



calculatrice();