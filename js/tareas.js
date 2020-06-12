// const tareas = ()=>{
var crear = document.getElementById('crear');
var salida;
var pendiente;
var creadorTareas;
var tareas;
//Crear tareas
crear.addEventListener('click', () => {
    var alerta = document.getElementById('alerta');
    creadorTareas = document.getElementById('tareas').value;
    salida = document.getElementById('out');
    if (document.getElementById('tareas').value != '') {
        salida.innerHTML += `<label name="tareas" id="pendiente" class="estado"><input type="checkbox" class="estado"  id="valida">${creadorTareas}</label>`;
        borrarEntrada();
        var prueba = document.querySelectorAll('.estado');
        prueba.forEach(element => {
            element.addEventListener('click', ()=>{
                element.className += "\n" + 'hecho';
            })
            element.addEventListener('dblclick', ()=>{
                element.className -= "\n" + 'hecho';
            })
        });
    }else{
        // creadorTareas.style.backgroundColor = 'black';
        document.getElementById('tareas').value = 'INGRESE UNA TAREA';
    }

})
function validar(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    creadorTareas = document.getElementById('tareas').value
    salida = document.getElementById('out');
    if (tecla == 13) {
        if (document.getElementById('tareas').value != '') {
            salida.innerHTML += `<label name="tareas" id="pendiente" class="estado"><input type="checkbox" class="estado"  id="valida">${creadorTareas}</label>`;
            // var estado = document.getElementById('pendiente').value = false;
            borrarEntrada();
            var prueba = document.querySelectorAll('.estado');
            prueba.forEach(element => {
                element.addEventListener('click', ()=>{
                    element.className += "\n" + 'hecho';
                })
                element.addEventListener('dblclick', ()=>{
                    element.className -= "\n" + 'hecho';
                })
            });
        } else {
            alert('Primero ingrese una tarea')
        }
    }
}


// }

function borrarEntrada() {
    creadorTareas = document.getElementById('tareas').value = '';
}
// tareas();