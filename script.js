let input = document.querySelector('#add-text');
let lista = document.querySelector('#lista-container');


 function criartarefa () {
    
        let newitem = document.createElement('li')
        newitem.className = 'item-lista';
        let divlist = document.createElement('div')
        divlist.className = 'divlista'


        let btn = document.createElement('button')
        btn.className = 'material-symbols-outlined';
        btn.innerHTML = "<button onclick = excluir() class= material-symbols-outlined>close</button>"
 
        btn.onclick = function(){
            excluir(newitem)
        }

        let newH2 = document.createElement('h2');

            let check = document.createElement('div');
            check.className = 'customcheck';
            let checkinput = document.createElement('input');
            checkinput.type = 'checkbox';
            checkinput.id = 'checkbox';
            let label = document.createElement('label');
            label.setAttribute('for', 'checkbox')
            
              
            divlist.appendChild(newH2);
            divlist.appendChild(btn);

            newitem.appendChild(divlist);
            newitem.appendChild(check);

            check.appendChild(checkinput);
            check.appendChild(label);

            newH2.innerHTML = input.value;
            lista.appendChild(newitem);
 }


 function addbutton (e) {
    if (e.key === 'Enter') {
        criartarefa()
        input.value = "";
    }
  }

 input.addEventListener('keyup', addbutton);

    
  function tarefaconcluida () {
    
 
  }
    

    function excluir (newitem) {
            newitem.remove();
    }

    function apagartudo(){
        lista.innerHTML = " ";
    }