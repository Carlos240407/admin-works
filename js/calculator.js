const calculator = ()=>{
    let v1;
    let v2;
    const btns = document.querySelectorAll(".btns");
    const display = document.getElementById("display");
    btns.forEach(btn => {
        btn.addEventListener('click', ()=>{
            var txt = btn.textContent;
            var dis = display.value;
            if(dis === '0' || dis === 0){
                display.value = txt;
            }else{
                display.value += txt;
            }
            if(txt === 'C' || txt === 'c'){
                clear()
            }
            if(txt === '+'){
                console.log(guarda() + guarda())
                if(v1 > 0){
                    console.log(suma())
                }
            }
        })

    });

    function clear(){
        return display.value = 0;
    }

    function suma(){
        // v1 = guarda();
        v2 = display.value;
        return parseFloat(v1) + parseFloat(v2);
    }

    function resta(){
        return parseFloat(v1) - parseFloat(v2);
    }

    function multiplica(){
        return parseFloat(v1) * parseFloat(v2);
    }

    function division(){
        return parseFloat(v1) / parseFloat(v2);
    }

    function igual(){
        return true;
    }
    function guarda(){
        let values = []
        values.push(display.value)
        v1 = parseFloat( values[0]);
        return v1;
    }
}

calculator()