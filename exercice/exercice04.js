    let secondes = 10;
    
    let btn = document.querySelector('.bouton');
    btn.addEventListener("click", start);

    
    
    function start() {
        let intervalle = setInterval(() => {
            decompte();
            if(secondes == 'fin') clearInterval(intervalle);
        }, 1000);
    }
    
    function decompte() {
        let txt = document.createElement('p')
        txt.textContent = `Il reste ${secondes} secondes`
        txt.style.margin = '0px'
        document.body.append(txt)
        if (secondes > 0){
            secondes--;
            }else{
                document.body.append(txt);
                stop();
            }
    }
    
    function stop() {
        let txt = document.createElement('p')
        txt.textContent = 'Stop !'
        secondes = 'fin';
        document.body.append(txt)
    }



