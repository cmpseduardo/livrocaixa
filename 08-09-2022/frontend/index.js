var datasLancamentos = document.querySelector(".datas-lancamento")
var itemLancamento = document.querySelector(".linha-tabela")
var totalCredito = 0
var totalDebito = 0

function carregar(){

    //FETCH DATAS
    // fetch("http://localhost:3000/livrocaixa/lancamentos/datas")
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     data.forEach(lancamentos => {

    //         let novoItem = datasLancamentos.cloneNode(true)
    //         opcaoData = novoItem.querySelector(".opcao-data")
    //         opcaoData.innerHTML = lancamentos.data_lancamento

    //         if(opcaoData !== lancamentos.data_lancamento){
    //             document.querySelector(".datas-lancamento").appendChild(novoItem)
    //         }
            
    //     })
    // })

    //FETCH DÉBITOS
    fetch("http://localhost:3000/livrocaixa/lancamentos/debitos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(lancamentos => {

            let novoItem = itemLancamento.cloneNode(true)


            novoItem.classList.remove("modelo")

    
            numeroLancamento = novoItem.querySelector("#n-lancamento")
            dataLancamento = novoItem.querySelector("#data-lancamento")
            descricaoLancamento = novoItem.querySelector("#descricao-lancamento")
            valorLancamento = novoItem.querySelector("#valor-lancamento")
            tipoLancamento = novoItem.querySelector("#tipo-lancamento")
           
            numeroLancamento.innerHTML = lancamentos.n_lancamento
            dataLancamento.innerHTML = lancamentos.data_lancamento.slice(0, 10)
            descricaoLancamento.innerHTML = lancamentos.descricao
            valorLancamento.innerHTML = "R$" + lancamentos.valor
            tipoLancamento.innerHTML = "Saída"

        
            document.querySelector(".tabela-debitos").appendChild(novoItem);
            
        })
    })


    //FETCH CRÉDITOS
    fetch("http://localhost:3000/livrocaixa/lancamentos/creditos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(lancamentos => {

            let novoItem = itemLancamento.cloneNode(true)


            novoItem.classList.remove("modelo")

    
            numeroLancamento = novoItem.querySelector("#n-lancamento")
            dataLancamento = novoItem.querySelector("#data-lancamento")
            descricaoLancamento = novoItem.querySelector("#descricao-lancamento")
            valorLancamento = novoItem.querySelector("#valor-lancamento")
            tipoLancamento = novoItem.querySelector("#tipo-lancamento")
           
            numeroLancamento.innerHTML = lancamentos.n_lancamento
            dataLancamento.innerHTML = lancamentos.data_lancamento.slice(0, 10)
            descricaoLancamento.innerHTML = lancamentos.descricao
            valorLancamento.innerHTML = "R$" + lancamentos.valor
            tipoLancamento.innerHTML = "Entrada"

            document.querySelector(".tabela-creditos").appendChild(novoItem);
         
        })
    })
}

function adicionarLancamento(){
    let descricao = document.querySelector("#descricao-lancamento-modal").value
    let tipo = document.querySelector("#tipo-lancamento-modal").value
    let valor = document.querySelector("#valor-lancamento-modal").value

    if(valor != "" && tipo != ""){
    let lancamento = {
        "descricao": descricao,
        "valor": valor,
        "tipo": tipo
    }


    fetch("http://localhost:3000/livrocaixa/lancamentos", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(lancamento)

    })
    .then(res => {return res.json()})
    .then(resp => {
        
        if(resp.descricao !== undefined){
            alert("Lançamento cadastrado com sucesso!")
            window.location.reload()
        } else {
            alert("Falha ao cadastrar o lançamento")
        }
    })
    } else {
        alert("Preencha todos os campos!")
    }
}

function carregarData(){
    fetch("http://localhost:3000/livrocaixa/lancamentos/datas")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(lancamentos => {
            let novoItem = itemLancamento.cloneNode(true)

            novoItem.classList.remove("modelo")

            opcaoDataLancamento = novoItem.querySelector(".opcao-data-lancamento")

            opcaoDataLancamento.innerHTML = lancamentos.data_lancamento.slice(0, 10)

          

            document.querySelector(".datas-lancamento").appendChild(novoItem)
        })
    })
}

function showModal(){
    let buttonModal = document.querySelector(".modal")
    buttonModal.classList.toggle("modelo")
}
