const statusApi = document.querySelector("#statusApi");
const botao = document.querySelector("#btnEstado")
const resultado =document.querySelector("#resultado")

botao.addEventListener('click', consultarStatus)


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
           console.log(dados)
        })

.catch(error => console.error(error));

}

consultarStatus();

//Verificação de caso do covid nos estados brasileiro