// elementos del dom //
var active = document.getElementById('darkMode');
var container = document.getElementById('container');

// fin elementos del dom //

// funciones del modo oscuro //
active.addEventListener('click', ()=>{
    darkMode();
})
active.addEventListener('dblclick', ()=>{
    exitDarkMode()
})
function darkMode(){
    container.style.backgroundColor = '#1c1e21';
    active.style.backgroundColor = '#1c1e21';
    active.style.color = '#fff';
    active.style.border = 'solid 1px rgb(197, 21, 21)';
    active.innerHTML = 'Salir Del Modo Oscuro';
    var body = document.getElementById('body');
    body.style.backgroundColor = '#1c1e21';
    body.style.color = '#fff';
    var btns = document.querySelectorAll('.btn');
    btns.forEach(element => {
        element.className += "\n" + 'colorBtn';
    });
    return true;
}

function exitDarkMode(){
    container.style.backgroundColor = 'rgb(17, 196, 228)';
    active.style.backgroundColor = '#333';
    active.style.color = '#fff';
    active.style.border = 'solid 1px #fff';
    active.innerHTML = 'Activar Modo Oscuro';
    var body = document.getElementById('body');
    body.style.backgroundColor = 'white';
    body.style.color = '#333';
    return true;
}
// fin funciones del modo oscuro //