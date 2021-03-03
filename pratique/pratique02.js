function afficherDate(){
    const d = new Date();
    document.write("Nous sommes le " + ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear());
}
function start(){
    let div = document.getElementById("exInner");
    d = new Date();
    div.innerHTML = "<p>Nous sommes le " + ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear()+"</p>";

    let div2 = document.getElementById("exDOM");
    let p = div2.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode("Nous sommes le " + ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear()));
}