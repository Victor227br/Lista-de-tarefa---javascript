let input = document.querySelector("#add-text");
let lista = document.querySelector("#lista-container");

function criartarefa() {
  let novoItem = document.createElement("li");
  novoItem.className = "item";

  let btnExcluirItem = document.createElement("button");
  btnExcluirItem.className = "material-symbols-outlined";
  btnExcluirItem.innerHTML = "close";
  console.log(btnExcluirItem);

  btnExcluirItem.onclick = function () {
    excluir(novoItem);
  };

  let divEsquerda = document.createElement("div");
  divEsquerda.className = "divEsquerda";
  let novoH2 = document.createElement("h2");

  let divInput = document.createElement("div");
  divInput.className = "divCheck";

  let unicoId = `${Math.random().toString(16).slice(2)}`;
  console.log(unicoId);

  let checkInput = document.createElement("input");
  checkInput.type = "checkbox";
  checkInput.id = unicoId;
  let checkLabel = document.createElement("label");
  checkLabel.setAttribute("for", unicoId);

  checkInput.addEventListener("click", function () {
    if (checkInput.checked) {
      novoItem.style.backgroundColor = "rgb(27, 180, 103)";
      divEsquerda.style.backgroundColor = "rgb(27, 180, 103)";
      novoH2.style.backgroundColor = "rgb(27, 180, 103)";
      novoItem.style.opacity = 0.3;
    } else {
      novoItem.style.backgroundColor = "";
      divEsquerda.style.backgroundColor = "";
      novoH2.style.backgroundColor = "";
      novoItem.style.opacity = 1;
    }
  });

  divEsquerda.appendChild(novoH2);
  divEsquerda.appendChild(btnExcluirItem);

  divInput.appendChild(checkInput);
  divInput.appendChild(checkLabel);

  novoItem.appendChild(divEsquerda);
  novoItem.appendChild(divInput);

  novoH2.innerHTML = input.value;
  lista.appendChild(novoItem);
}

function addbutton (e) {
if (e.key === 'Enter') {
    let novoItem = document.createElement("li");
    novoItem.className = "item";
        // criartarefa()
        input.value = "";
      
if (novoItem) {
    novoH2.value
       
}  
}
}
  input.addEventListener('keyup', addbutton);

function excluir(novoItem) {
  novoItem.remove();
}

function apagarTudo() {
  lista.innerHTML = " ";
}

function localizarItem() {

};