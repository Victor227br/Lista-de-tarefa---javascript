let input = document.querySelector('#add-text');
let list = document.querySelector('ul');


 function handleKeyUp (e) {
    if (e.key === 'Enter') {
        let newitem = document.createElement('div')
        newitem.className = 'item-lista';

        let btn = document.createElement('button')
        btn.className = 'material-symbols-outlined';
        btn.innerHTML = "<button onclick = excluir() class= material-symbols-outlined>close</button>"
        let newH2 = document.createElement('h2')
        newitem.appendChild(newH2);
        newitem.appendChild(btn)
        newH2.innerHTML = input.value;
        list.appendChild(newitem);

    input.value = '';
    }
 }

 input.addEventListener('keyup', handleKeyUp);



    function excluir () {
        let removerelemento = document.querySelector('.item-lista');
        removerelemento.remove()
    }
