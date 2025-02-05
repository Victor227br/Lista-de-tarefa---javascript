let input = document.querySelector("#add-text");
let lista = document.querySelector("#lista-container");


function criarTarefa() {
 
    if (input.value.trim() === "") {
        return;
    } 

 let itemLista = document.createElement("li");
  itemLista.className = "item";

  let btnExcluirItem = document.createElement("button");
  btnExcluirItem.className = "material-symbols-outlined";
  btnExcluirItem.innerHTML = "close";
  

  btnExcluirItem.onclick = function () {
    excluir(itemLista);
  };

  let divH2 = document.createElement("div");
  divH2.className = "divH2";
  let novoH2 = document.createElement("h2");
  

  let divBotoes = document.createElement("div");
  divBotoes.className = "divBtns";
  
  let divCheck = document.createElement("div")
  divCheck.className = "divCheckBox"

  let unicoId = `${Math.random().toString(16).slice(2)}`;
  console.log(unicoId);

  let checkInput = document.createElement("input");
  checkInput.type = "checkbox";
  checkInput.id = unicoId;
  let checkLabel = document.createElement("label");
  checkLabel.setAttribute("for", unicoId);

  checkInput.addEventListener("click", function () {
    if (checkInput.checked) {
      itemLista.style.backgroundColor = "rgb(27, 180, 103)";
      divH2.style.backgroundColor = "rgb(27, 180, 103)";
      novoH2.style.backgroundColor = "rgb(27, 180, 103)";
      divBotoes.style.backgroundColor = "rgb(27, 180, 103)"
      divCheck.style.background = "rgb(27, 180, 103)"
      itemLista.style.opacity = 0.3;
 } else {
      itemLista.style.backgroundColor = "";
      divH2.style.backgroundColor = "";
      novoH2.style.backgroundColor = "";
     divBotoes.style.backgroundColor = ""
      divCheck.style.background = ""
      itemLista.style.opacity = 1;
    }
  });

  divH2.appendChild(novoH2);
  divCheck.appendChild(checkInput);
  divCheck.appendChild(checkLabel);
  divBotoes.appendChild(btnExcluirItem);
  divBotoes.appendChild(divCheck)
  itemLista.appendChild(divH2);
  itemLista.appendChild(divBotoes);
  novoH2.innerHTML = input.value;
  lista.appendChild(itemLista);
}

function adicionarTarefa (e) {
if (e.key === 'Enter'){
  if (input.value.trim() === "") {
    return;
} 
    criarTarefa();
    input.value = ""; 
}
}
input.addEventListener('keyup', adicionarTarefa)

function excluir(novoItem) {
  novoItem.remove();
}

function apagarTudo() {
  lista.innerHTML = " ";
}

const searchInput = document.getElementById('search')

searchInput.addEventListener('input', (event) =>{

    const value = formateString(event.target.value);
    const itens = document.querySelectorAll('#lista-container .item')
    itens.forEach(item=> {
if(formateString(item.textContent).indexOf(value) !== -1  ){

item.style.display = 'flex';
} else {
    item.style.display = 'none';
  }
}) 
})

function formateString(value){
return value.toLowerCase().trim()
}