const statusApi = document.querySelector("#statusApi");


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