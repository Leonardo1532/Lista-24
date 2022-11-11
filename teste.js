/*
Um hotel deve possuir: id, nome, categoria, endereço e telefone;
Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e
dia de saída;
1. Criar funções para cadastrar um hotel e uma reserva;
*/

let continuar = "s"

let iDShotel = []
let nomesHotel = []
let categoriasHotel = []
let enderecosHotel = []
let telefonesHotel = []

let idsReserva = []
let idsHotelReserva = []
let nomesReserva = []
let diasEntradaReserva = []
let diasSaidaReserva = []

function CadastrarHotel() {

    let idHotel = parseInt(prompt("Insira o (ID) do HOTEL"))
    iDShotel.push(idHotel)

    let nomeHotel = prompt("Insira o (NOME) do HOTEL")
    nomesHotel.push(nomeHotel)

    let categoriaHotel = prompt("Insira a (Classificação do Hotel em estrelas de 1 a 5 do HOTEL")
    categoriasHotel.push(categoriaHotel)

    let enderecoHotel = prompt("Insira o (ENDEREÇO) do HOTEL")
    enderecosHotel.push(enderecoHotel)

    let telefoneHotel = prompt("Insira o (TELEFONE) do HOTEL")
    telefonesHotel.push(telefoneHotel)

}

function CadastrarReserva() {

    let idReserva = parseInt(prompt("Insira o (ID) da reserva"))
    idsReserva.push(idReserva)

    let idHotelReserva = parseInt(prompt("Insira o (ID) do hotel para reserva"))
    idsHotelReserva.push(idHotelReserva)

    let nomeReserva = prompt("Insira o (NOME DO RESPONSÁVEL) da reserva")
    nomesReserva.push(nomeReserva)

    let diaEntradaReserva = parseInt(prompt("Insira o (Dia da Entrada) da reserva"))
    diasEntradaReserva.push(diaEntradaReserva)

    let dia = true
    while (dia) {
        let diaSaidaReserva = parseInt(prompt("Insira o (Dia da Saída) da reserva"))

        if (diaSaidaReserva < diaEntradaReserva) {
            console.log("ERRO")
        } else {
            dia = false
            diasSaidaReserva.push(diaSaidaReserva)
        }
    }
}

/*
2. Criar uma função que recebe como parâmetro o id do hotel e exibe na tela todas as
reservas neste hotel com as seguintes informações: nome do hotel - nome do
responsável da reserva - dia de entrada - dia de saída
*/




function ExibirReserva(idHotel2) {

    for (let contador = 0; contador < idsHotelReserva; contador++) {

        if (idsHotelReserva[contador] == idHotel2) {

            console.log("Nome do hotel: " + nomesHotel[contador])

            console.log("Nome do responsável: " + nomesReserva[contador])

            console.log("Dia de Entrada: " + diasEntradaReserva[contador])

            console.log("Dia de Saída: " + diasSaidaReserva[contador])
        }
    }
}

/*
3. Criar uma função que recebe como parâmetro o id de uma reserva e exibe no
console: nome do hotel - endereço - dia de entrada - dia de saída
*/

function ExibirHotel(idReservaExibir) {

    for (let contador = 0; contador < idsReserva; contador++) {

        if (idsReserva[contador] == idReservaExibir) {

            console.log("Nome do hotel: " + nomesHotel[contador])

            console.log("Endereço: " + enderecosHotel[contador])

            console.log("Dia de Entrada: " + diasEntradaReserva[contador])

            console.log("Dia de Saída: " + diasSaidaReserva[contador])
        }
    }
}


/*
4. Criar uma função que recebe como parâmetro o nome de uma pessoa e exibe na
tela todas as suas reservas;
*/

function ExibirPorNome(nomeResponsavelExibir) {

    for (let contador = 0; contador < nomesReserva.length; contador++) {

        if (nomesReserva[contador] == nomeResponsavelExibir) {

            console.log("Nome do hotel: " + nomesHotel[contador])

            console.log("Dia de Entrada: " + diasEntradaReserva[contador])

            console.log("Dia de Saída: " + diasSaidaReserva[contador])
        }
    }
}

/*
5. Criar uma função que recebe como parâmetro uma categoria e retorna um array
com todos os hotéis nessa categoria;
*/

let todosNomesHotel = []
let index = 0

function ExibirCategoria(avaliacaoExibir) {

    for (let contador = 0; contador < categoriasHotel.length; contador++) {

        if (categoriasHotel[contador] == avaliacaoExibir) {

            todosNomesHotel[index] = nomesHotel[contador]

            index++
        }
    }
    return todosNomesHotel
}

/*
6. Criar uma função que recebe o id de um hotel e um telefone como parâmetro, a
função deve atualizar o telefone de cadastro com o do parâmetro
Algumas validações devem ser feitas na hora de fazer os cadastros:
● O id não pode ser igual a nenhum outro já existente;
● O dia de entrada não pode ser maior que o de saída;
● No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir
o cadastro de um hotel que não esteja no sistema;
*/

function Atualizar(idAtualizar, telefoneAtualizar) {

    for (let contador = 0; contador < iDShotel.length; contador++) {

        if (idAtualizar == iDShotel[contador]) {
            telefonesHotel[contador] = telefoneAtualizar
        }
    }
}

while (continuar == "s") {

    let opcao = prompt("Insira uma opção para ser executada, Cadastrar Hotel(1), Cadastrar Reserva(2), Exibir as Reservas pelo ID do hotel(3), Exibir informações do hotel pelo ID da reserva(4), Exibir as reservas pelo nome do responsável(5), Exibir hoteis pela Avaliação(6), Atualizar um número de telefone(7)")

    switch (opcao) {
        case "1":
            CadastrarHotel()
            console.log("Hotel Cadastrado com sucesso!")
            break;

        case "2":
            CadastrarReserva()
            console.log("Reserva Cadastrada com sucesso!")
            break;

        case "3":
            let idHotel2 = parseInt(prompt("Insira o ID do hotel para exibir as reservas"))
            ExibirReserva(idHotel2)
            break;

        case "4":
            let idReservaExibir = parseInt(prompt("Insira o ID da reserva para exibir as informações do hotel"))
            ExibirHotel(idReservaExibir)
            break;

        case "5":
            let nomeResponsavelExibir = prompt("Insira um nome para exibir as suas reservas")
            ExibirPorNome(nomeResponsavelExibir)
            break;

        case "6":
            let avaliacaoExibir = prompt("Insira uma avaliação de 1 a 5 para exibir todo Hoteis com a mesma avaliação")
            console.log(ExibirCategoria(avaliacaoExibir))
            break;

        case "7":
            let idAtualizar = parseInt(prompt("Insira um ID Hotel para atualizar o telefone"))
            let telefoneAtualizar = prompt("Insira o telefone atualizado")
            Atualizar(idAtualizar, telefoneAtualizar)
            console.log("Telefone atualizado com sucesso!")
            break;

        default:
            console.log("Opção Inválida")
            break;
    }
    let desejaContinuar = prompt("Deseja continuar fazendo execuções?  s ou n")
    if(desejaContinuar != "s"){
        continuar = "n"
    }
}