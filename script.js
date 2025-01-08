let input = document.querySelector('#add-text');
let lista = document.querySelector('#lista-container');


 function criartarefa () {
    
        let newitem = document.createElement('li')
        newitem.className = 'item-lista';
    

        let btn = document.createElement('button')
        btn.className = 'material-symbols-outlined';
        btn.innerHTML = "<button onclick = excluir() class= material-symbols-outlined>close</button>"

        let newH2 = document.createElement('h2')

        newitem.appendChild(newH2);
        newitem.appendChild(btn)
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



    function excluir (btn) {
        let removeritem = btn.parentNode
        removeritem.remove()
    }

    function apagartudo(){
        lista.innerHTML = " ";
    }