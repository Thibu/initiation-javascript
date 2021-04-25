
let button = document.querySelector("button");
let buttonVal = document.querySelector("button").value;
let texte = document.createElement("p")
    texte.textContent = "Yo salut ça va bien ou quoi";

button.addEventListener('click', () => {

    if (buttonVal == true){
        buttonVal = false;
        button.value = false;
        checkEtat();
    }else{
        buttonVal = true;
        button.value = true;
        checkEtat();
    }
})


function checkEtat() {
    if (buttonVal == true){
        console.log(`true est l'état de button`)
        button.textContent = "Cacher";
        document.body.append(texte);
    }else{
        console.log(`false est l'état de button`)
        button.textContent = "Afficher"
        texte.remove();
    }
}

checkEtat();