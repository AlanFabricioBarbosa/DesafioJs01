//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let day = "dia"

if(day == "dia") {
    console.log("01 - O dia está claro")
}else{
    console.log("01 - O dia está noite")
}

//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let i = 2; i <= 20; i += 2) {
    console.log(`02 - Contagem de numeros pares ${i}`);
}

//03 - crie uma função que exiba uma mensagem no console

function showingMessage() {
    console.log("03 - Olá pessoal do vai na web.")
}

showingMessage()

//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function name (userName) {
    console.log(`04 - O meu nome é ${userName}.`);
}

name("Alan")

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function aboutMe(name, age, musicalStyle) {
    console.log(`05 - Olá  meu nome é ${name}, minha idade é ${age} e meu estilo musical é ${musicalStyle}.`);
}

aboutMe("Alan", 24, "Rock")

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function aboutMidia(film, music) {
    console.log(`06 - Meu filme preferido é "${film}" e uma música é preferida é "${music}".`)
}

aboutMidia("06 - O Guia do Mochileiro das Galáxias", "its a long way to the top")

//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function threefold(num){
    const thereefold = num * 3 
    const message = `07 - O triplo de ${num} é igual a ${thereefold}.`

    return message
}

console.log(threefold(5))

//08 - crie uma função que  verifique se uma  variável é true ou false

function trueOrFalse(params) {
    return params == true ? console.log("08 - Essa variável é true (verdadeira)!!") : console.log("08 - Essa variável é false (falsa)!!")

    // return chechking
}

trueOrFalse(true)

//09 - Crie um array que receba 5 itens e exiba no console.

let items = [
    "item_01",
    "item_02",
    "item_03",
    "item_04",
    "item_05",
]

console.log("09 - Criando um array")

//10 - Utilize um método para adicionar um nome ao inicio do array.
items.unshift("item_06")
console.log("10 - Adicionando um novo item no inicio do array(item_06)")

//11 - Utilize um método para remover o último nome do array.

items.pop()
console.log("11 - Removendo o ultimo array dos itens(item_05)")

//12 - Utilize um método para adicionar dois nomes ao fim do array.

items.push("item_07", "item_08")
console.log("12 - Adicionando dois novos itens no final do array")

//13 - Utilize um método para remover o primeiro nome do array.

items.shift()
console.log("13 - Removendo o primeiro array dos itens")
console.log(items)

//14 - Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log("14 - Organizando o array numbers em ordem numérica")

console.log(numbers)


//15 - Crie um objeto que receba ao menos três propriedades sobre você.

let aboutMeObject = {
    name: "Alan",
    age: 24,
    adress: {
        street: "Rua das Flores",
        city: "Maceió",
        state: "Alagoas",
        country: "Brasil",
        mainAddress: true
    },
}

console.log("15 - Criando o objeto sobre mim")

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.

aboutMeObject.i="i wanna rock"
console.log("16 - Adicionando uma nova propriedade ao objeto sobre mim")

//17 - Remova uma propriedade desse objeto.
delete aboutMeObject.age
console.log("17 - Removendo uma propriedade do objeto sobre mim (age)")

//18 - Mostre no console todas as propriedades desse objeto.
console.log("18 - Mostrando o objeto no console")
console.log(aboutMeObject)

//19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.Na propriedade amigos, adicione ao menos 4 amigos.

let cadastre = [
    {
        name: "Alan",
        idade: 24,
        phone: 99999999,
        friends: [
            "Jonatha", 
            "Andre",
            "Sergio", 
            "Rosangela"
        ]
    },
    {
        name: "Jonatha",
        idade: 24,
        phone: 888888888,
        friends: [
            "Alan", 
            "Sergio", 
            "Andre", 
            "Rosangela"
        ]
    },
    {
        name: "Sergio",
        idade: 45,
        phone: 777777777,
        friends: [
            "jonatha",
            "Alan",   
            "Rosangela",
            "Andre"
        ]
    },
    {
        name: "Andre",
        idade: 50,
        phone: 666666666,
        friends: [
            "Alan", 
            "Sergio", 
            "jonatha", 
            "Rosangela"
        ]
    },
    {
        name: "Rosangela",
        idade: 40,
        phone: 555555555,
        friends: [
            "Andre", 
            "Alan", 
            "Sergio", 
            "Rosangela"
        ]
    }
]

console.log("19 - Obejeto cadastro")
console.log(cadastre)


//20 - Mostre no console o nome de um amigo de cada lista.

for (let i = 0; i < cadastre.length; i++) {
    const amigos = cadastre[i];
    console.log(`O amigo de ${amigos.name} é ${amigos.friends[2]}`);
}