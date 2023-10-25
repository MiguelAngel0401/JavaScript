const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createAlert(message){
    /*
    <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
    </div>
    */
   const alerta = document.createElement('div');
   alerta.classList.add('alert');
   alerta.classList.add('alert-primary');
   alerta.setAttribute('role', 'alert');
   let buttons ='<div>'
   buttons += `<button class="btn red">Red</button>`;
   buttons += `<button class="btn yellow">Yellow</button>`;
   buttons += `<button class="btn green">Green</button>`;
   buttons += `<button class="btn x"><i class="fa fa-trash"></i></button></div>`;
   alerta.innerHTML = `<p>${ message }</p> ${ buttons }`;
   return alerta
}

function addTarea(){
    const data = inputTarea.value;
    if(data){
        tareas.appendChild(createAlert(data));
        inputTarea.value = '';
    }
}

function getButton(e){
    if(e.target.classList.contains('btn')){
        const alertActual = e.target.parentElement.parentElement;
        const action = e.target.classList[1];
        console.log(action);
        switch(action){
            case 'red':
                alertActual.classList = [];
                alertActual.classList.add('alert', 'alert-danger');
                break;
            case 'yellow':
                alertActual.classList = [];
                alertActual.classList.add('alert', 'alert-warning');
                break;
            case 'green':
                alertActual.classList = [];
                alertActual.classList.add('alert', 'alert-success');
                break;
            case 'x':
                alertActual.remove();
                break;
        }
    }
    if(e.target.classList.contains('fa')){
        const actual = e.target.parentElement.parentElement.parentElement;
        actual.remove();
    }
}

btnTarea.addEventListener('click', addTarea);
tareas.addEventListener('click', getButton);