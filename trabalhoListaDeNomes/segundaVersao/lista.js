const nameList = []


const botaofiltro = document.getElementById("Filtrar");
const botaoadiciona = document.getElementById("add");
const botaoremove = document.getElementById("rel");
const saida = document.getElementById("saida");
const lista = document.getElementById("list");
const searchField = document.getElementById("searchField");
const botaoseleciona = document.getElementById("selecionar");
var passa = 0;


this.fillList();

function fillList(list = nameList) {
    lista.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        if (passa == i){
            listItems.className = "Selecionado"
        }
        else{
            listItems.className = "NaoSelecionado"
        }
        listItems.innerHTML = list[i];
        lista.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

botaofiltro.addEventListener("click", inputHandler);

function adicionaNome(){
    nome = searchField.value.toLowerCase(); //pega o nome do local de pesquisa
    if (nome != ''){
        if (nameList.indexOf(nome) == -1){
            //adciona o nome ao final da lista
            nameList.push(nome);
            alert("O nome foi adicionado");
        } else {
            alert("O nome ja estava presente na lista");
        }
    
    } else {
        alert("Favor inserir um nome valido")
    }


}

botaoadiciona.addEventListener("click", adicionaNome);


function removeNome(){
    nome = searchField.value.toLowerCase();

    var index = nameList.indexOf(passa);
    if (passa > nameList.length -2) {
        nameList.splice(passa, 1);
        alert("O nome dgztyaerfoi removido ");
        passa -= 1
      } else {
        nameList.splice(passa, 1);
        alert('o nome foi removido');

      }
    fillList()
    
}

botaoremove.addEventListener("click", removeNome);


function seleciona(){
    if (nameList.length == 0) {
        alert("Não há nomes para selecionar")       // se não há tarefas, exibe alerta
        return                                        // e retorna
      }
    if (passa > nameList.length -2){
        passa = 0
    }
    else{
        passa++;
    }
    fillList()
    


    }

botaoseleciona.addEventListener("click", seleciona);