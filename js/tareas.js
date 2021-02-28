const todoList = ()=>{
    const tarea = document.getElementById("tarea");
    const crear = document.querySelector("#crear");
    let salida = document.querySelector(".work")
    crear.addEventListener('click', creaTarea)

    function creaTarea(){
        // let work = tarea.value;
        if(tarea.value != ''){
            salida.innerHTML += `<div class="borde">${tarea.value.toUpperCase()} <div class="check btn">hecho</div><div class="edit btn">Editar</div></div>`;
            tarea.value = '';
            // console.log()
        }
    }

}

todoList()

// const crear = document.querySelector("#crear");
// var salida;
// var pendiente;
// var creadorTareas;
// var tareas;
// //Crear tareas
// crear.addEventListener('click', () => {
//     var alerta = document.getElementById('alerta');
//     creadorTareas = document.getElementById('tareas').value;
//     salida = document.getElementById('out');
//     if (document.getElementById('tareas').value != '') {
//         salida.innerHTML += `<div class="borde">${tarea.value.toUpperCase()} <input type="checkbox" id="check"><div class="edit">Editar</div></div>`;
//         borrarEntrada();
//         var prueba = document.querySelectorAll('.estado');
//         prueba.forEach(element => {
//             element.addEventListener('click', ()=>{
//                 element.className += "\n" + 'hecho';
//             })
//             element.addEventListener('dblclick', ()=>{
//                 element.className -= "\n" + 'hecho';
//             })
//         });
//     }else{
//         alert('ingrese una tarea'.toUpperCase(''));
//     }
// })
// function validar(e) {
//     var tecla = (document.all) ? e.keyCode : e.which;
//     creadorTareas = document.getElementById('tareas').value
//     salida = document.getElementById('out');
//     if (tecla == 13) {
//         if (document.getElementById('tareas').value != '') {
//             salida.innerHTML += `<div class="borde">${tarea.value.toUpperCase()} <input type="checkbox" id="check"><div class="edit">Editar</div></div>`;
//             // var estado = document.getElementById('pendiente').value = false;
//             borrarEntrada();
//             var prueba = document.querySelectorAll('.estado');
//             prueba.forEach(element => {
//                 element.addEventListener('click', ()=>{
//                     element.className += "\n" + 'hecho';
//                 })
//                 element.addEventListener('dblclick', ()=>{
//                     element.className -= "\n" + 'hecho';
//                 })
//             });
//         } else {
//             alert('ingrese una tarea'.toUpperCase(''))
//         }
//     }
// }


// // }

// function borrarEntrada() {
//     creadorTareas = document.getElementById('tareas').value = '';
// }
// // tareas();