let aDelet = document.getElementById('a-supprimer').remove();

let header = document.createElement('header');

header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.textAlign = "center"
header.style.fontSize = "2rem"
header.innerHTML ="<h1 style=\" margin:0; font-weight: normal;\">Bienvenue</h1>";

document.body.append(header);

let SousHeader = document.createElement('section');

SousHeader.style.backgroundColor ="#f1d6ab"
SousHeader.innerHTML ='<p style =\"margin: 0; padding: 1rem;\"><a style=\"text-decoration: none; color:blue;\" href="#">Acceuil </a> /  <a style=\"text-decoration: none; color:blue;\" href="#"> Une autre page</a></p>';
document.body.append(SousHeader);

let paragraphe = document.createElement('p')

paragraphe.innerHTML='Ceci est un paragraphe créé avec JavaScript'
document.body.append(paragraphe);

