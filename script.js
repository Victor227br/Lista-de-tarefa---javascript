let input = document.querySelector('#add-text');
let lista = document.querySelector('#lista-container');


 function criartarefa () {

    // let divlist = document.createElement('div')
    // divlist.className = 'divlista'

        let novoItem = document.createElement('li')
        novoItem.className = 'item-lista';

        let btnExcluirItem = document.createElement('button')
        btnExcluirItem.className = 'material-symbols-outlined';
        btnExcluirItem.innerHTML = "close"
        console.log(btnExcluirItem)

 
        btnExcluirItem.onclick = function(){
            excluir(novoItem)
        }

        let divH2 = document.createElement('div')
        divH2.className = 'divH2'
        let novoH2 = document.createElement('h2');
        
        let divBtns = document.createElement ('div');
        divBtns.className = 'divbotoes'
        
        let checkInput = document.createElement('input')
        checkInput.type = 'checkbox'
        checkInput.id = 'checkbox'
        let checkLabel = document.createElement('label')
        checkLabel.setAttribute('for','checkbox')

            // let checkdiv = document.createElement('div');
            // checkdiv.className = 'customcheck';
            // let checkinput = document.createElement('input');
            // checkinput.type = 'checkbox';
            // checkinput.id = 'checkbox';
            // let label = document.createElement('label');
            // label.setAttribute('for', 'checkbox')
                          
            divH2.appendChild(novoH2);
            divBtns.appendChild(btnExcluirItem);
            divBtns.appendChild(checkInput)
            divBtns.appendChild(checkLabel)
            novoItem.appendChild(divH2);
            novoItem.appendChild(divBtns);

            // checkdiv.appendChild(checkinput);
            // checkdiv.appendChild(label); 

            novoH2.innerHTML = input.value;
            lista.appendChild(novoItem);
 }


 function addbutton (e) {
    if (e.key === 'Enter') {
        criartarefa()
        input.value = "";
    }
  }

 input.addEventListener('keyup', addbutton);


    

    function excluir (novoItem) {
            novoItem.remove();
    }

    function apagartudo(){
        lista.innerHTML = " ";
    }