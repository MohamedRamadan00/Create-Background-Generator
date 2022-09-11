let change = ()=>{
    let color1 = document.querySelector('#color1'),
        color2 = document.querySelector('#color2'),
        container = document.querySelector('.container'),
        fvalue= document.querySelector('#fValue');

        color1.addEventListener('input',()=>{
            container.style.backgroundImage='linear-gradient(to right , '+color1.value+' ,  '+color2.value+')';
            fvalue.value = 'background-Image : linear-gradient(to right , '+color1.value+' ,  '+color2.value+')';
        })
        color2.addEventListener('input',()=>{
            container.style.backgroundImage='linear-gradient(to right , '+color1.value+' ,  '+color2.value+')';
            fvalue.value = 'background-Image : linear-gradient(to right , '+color1.value+' ,  '+color2.value+')';
        })
}
change();