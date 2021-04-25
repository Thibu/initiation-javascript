

 let body = document.querySelector('body')
 let txt = document.createElement('p')
 let blinkCara =':';

 
 function date() {

    let fullDate = new Date();
    let temps = fullDate.getHours() + ":"
    + fullDate.getMinutes() + blinkCara
    + fullDate.getSeconds();
    txt.textContent = `${temps}`;

    if ((fullDate.getSeconds()%2) == 1){
        blinkCara = ":"
    }else{
        blinkCara = "."
    }



    document.body.append(txt);
    txt.style.fontSize = '3rem';
    txt.style.textAlign = 'center'
    refresh();
}

function refresh() {
    setTimeout(() => {
      date()  
    }, 1000);
    
}
date();



