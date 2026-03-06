const input = document.querySelector("#pesquisar")
const statusApi = document.querySelector("#statusApi");
const botao = document.querySelector("#btnEstado")
const resultado =document.querySelector("#resultado")

botao.addEventListener('click',()=> verificarEstado())


//Verificao de Status do sistema

function consultarStatus (){
    fetch("https://covid19-brazil-api.now.sh/api/status/v1", {
  "method": "GET"
})
.then(resposta => resposta.json() )
.then(dados => {

    if(dados.status =="ok"){
        statusApi.innerHTML="ONLINE"

    }else{
        statusApi.innerHTML="OFFILINE"

    }
           //console.log(dados)
        })

.catch(error => console.error(error));

}

consultarStatus();

//Verificação de caso do covid nos estados brasileiro
function verificarEstado(){
    const nome = input.value.toLowerCase().trim();

    if (nome === "") {
        resultado.innerHTML = "Digite um Estado válido!";
        return;
    }
fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${nome}`, {
  "method": "GET"
})
.then(resposta => resposta.json())
.then(dados => {
    //const estado = dados.state ;

    resultado.innerHTML = `
    <p>Estado:   ${dados.state} - ${dados.uf}</p>
    <p>Casos:   ${dados. cases}</p>
    <p>Mortes:  ${dados.deaths}</p>
    <p>Refutados:  ${dados.refuses}</p>
    ` 

    //console.log(nome, dados.state)
})
.catch(error => console.error(error));

}
