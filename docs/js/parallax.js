let elementsParallax =  document.querySelectorAll(".efecteParallax");

window.addEventListener("load", () => {
    elementsParallax.forEach(element =>{
        //console.log("YPare: " + element.parentNode.getBoundingClientRect().top);          
    })
    //console.log(window.innerHeight);

});

window.addEventListener('scroll', () => {

    let scrollPos = document.scrollingElement.scrollTop;
    let screenHeight = window.innerHeight;

    elementsParallax.forEach(element =>{
        // Recupero el height del css
        let elementStyle = window.getComputedStyle(element);
        // El "parsejo" per treure-li el "px" final
        let elementHeightTotal = parseInt(elementStyle.getPropertyValue('Height'), 10);
        // Recupero el nom de l'element
        let nom = element.dataset.nom;   
        // Guardo en una variable el pare de l'element i el preparo per aconseguir la seva posició, altura...
        let pare = element.parentNode.getBoundingClientRect();
        // Recupero el valor top
        let pareTop = pare.top;
        // Recupero el valor height
        let pareHeight = pare.height;
        // let pareExtraImg=((pareHeight*30)/100)/2;
        // Calculo la sang de la imatge
        let pareExtraImg=(elementHeightTotal - pareHeight)/2;    
        // Creo una variable de velocitat ---> Max. 5
        let velocitat = 1;
        // Calculo el desplaçament: Si poso el negatiu les imatges baixen (es mou de manera natural), si el trec les imatges pugen
        let desplacament = (-pareTop*(pareExtraImg/screenHeight))*velocitat;
        // Bo --- let desplacament = (scrollPos - pare - pare)*0.1;
        // Bo --- let desplacament = -pareTop*0.5;
        // BONISSIM   let desplacament = -(pareTop - pareHeight + screenHeight)*0.15;

        // Comprovem si la imatge està visible al navegador
        if(pare.top < screenHeight && pare.bottom > 0){
            element.style.transform='translateY('+desplacament+'px)';            
        }
            
    })

});


