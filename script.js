let input = document.querySelector('#add-text');
let lista = document.querySelector('#lista-container');


 function criartarefa () {

    
        let novoItem = document.createElement('li')
        novoItem.className = 'item-lista';

        let btnExcluirItem = document.createElement('button')
        btnExcluirItem.className = 'material-symbols-outlined';
        btnExcluirItem.innerHTML = "close"
        console.log(btnExcluirItem)

 
        btnExcluirItem.onclick = function(){
            excluir(novoItem)
        }

        let divEsquerda = document.createElement('div')
        divEsquerda.className = 'divEsquerda'
        let novoH2 = document.createElement('h2');
        
        let divInput = document.createElement ('div');
        divInput.className = 'divCheck'

        let unicoId = `${Math.random().toString(18).slice(2)}`
        console.log(unicoId)

        let checkInput = document.createElement('input')
        checkInput.type = 'checkbox'
        checkInput.id = unicoId;
        let checkLabel = document.createElement('label')
        checkLabel.setAttribute('for', unicoId)

        checkInput.addEventListener('click', function (){
         novoItem.style.backgroundColor = '#FFFA00'
         divEsquerda.style.backgroundColor ='#FFFA00'
        novoH2.style.backgroundColor = '#FFFA00'
        })
        //adicionar uma função ao clicar no checkbox
        // a função tem que mudar o css do checkbox e do item lista de cada item
        // ao ser clicado de novo voltar a função ao original 
                       
            divEsquerda.appendChild(novoH2);
            divEsquerda.appendChild(btnExcluirItem);

            divInput.appendChild(checkInput)
            divInput.appendChild(checkLabel)

            novoItem.appendChild(divEsquerda);
            novoItem.appendChild(divInput);

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