let age = prompt("Quel age avez vous ?")


if(age >= 16 && age < 18) {
    console.log("Tes mineur mais tu peux conduire une bagnole aux States");
}
else if (age<18) {
    console.log("Vous Etes mineur hop on dégage");
}
else if (age >=18 || age <=20) {
    console.log("Vous etes majeur !")
}