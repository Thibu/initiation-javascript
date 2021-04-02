

let tab = [];
let caract;
 

function priseDeDonnee(){
    caract = prompt(`Entrez une chaine de caractere`)
    verification(caract);
}

function verification(n1) {
    try {  
        tab.push(n1);
    } catch (error) {
        
    }
    finally{
        if(confirm(`Effectuez une autre operation ?`)){
            priseDeDonnee();
        } else {
            alert(`Au revoir !`)
            console.log(tab)
        }   
    }
}


priseDeDonnee();