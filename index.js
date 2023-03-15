//Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

function fromFahrenheitToCelcius(temperatura) {
    return ((temperatura - 32) * 5 / 9).toFixed(2)
}

// console.log(fromFahrenheitToCelcius(63));

//Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

function tiangleArea(base, height) {
    return (base * height) / 2
}

// console.log(tiangleArea(10,4));

//Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

function numberInReverse(number) {
    return (parseFloat(number.toString().split('').reverse().join('')))
}

// console.log(numberInReverse(5679045));

//Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

function howManyVowels(str) {
    let contador = 0
    let word = str.toLowerCase().split('')
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "a" ||
            word[i] == "e" ||
            word[i] == "i" ||
            word[i] == "o" ||
            word[i] == "u") {
            contador++
        }

    }
    console.log(contador);
}

// howManyVowels("lelelolalulelilo");

//  Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.

function returnOnInvestments(valorInicial, tempo, juros) {
    let result = (valorInicial * ((1 + juros) ** tempo)).toFixed(2)
    console.log(result);
}
// returnOnInvestments(500000, 24, 0.87);

//Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário

function factorial(number) {
    let result = 1
    for (let i = 1; i <= number; i++) {

        result = i * result
    }
    console.log(result);
}

// factorial(6)

//Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.

function multiplicationTable(num) {
    let result;
    for (let i = 1; i <= 10; i++) {
        result = num * i
        console.log(`O resultado de ${i} x ${num} é: ${result}`);
    }
}

// multiplicationTable(10);

// Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

function multiplicationTabFromOneToTen(num) {
    for (let i = 1; i <= 10; i++) {
        let result = num * i
        for (let index = 1; index <= 10; index++) {
            let intResult = result * index
            console.log(`O resultado de ${index} x ${num} é: ${intResult} `);;
        }
    }
}

// multiplicationTabFromOneToTen(10)

//Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 11 produzam resto igual a 2.

function restOfDivisionBetweenElevenIsEqualsTwo() {

    for (let i = 1000; i <= 2000; i++) {
        if (i % 11 == 2) {
            console.log(i);
        }

    }
}

// restOfDivisionBetweenElevenIsEqualsTwo()

// Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

function numberDivitedForHalfAndHalf(num) {
    let result = 0
    // let partialResult
    if (num > 0 && Number.isInteger(num)) {
        for (let i = 1; i <= num; i++) {
            result += 1 / i

        }
        console.log(result.toFixed(2));
    }
}

// numberDivitedForHalfAndHalf(20)

//Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida.  Em seguida, mostre-os em ordem crescente e decrescente.

function inOrderNaturalCrescentDecrescent(a, b, c) {
    let arrayValues = []
    arrayValues.push(a, b, c)
    console.log(arrayValues);
    let crescent = arrayValues.sort((a, b) => a - b)
    console.log(crescent);
    let decrescent = arrayValues.sort((a, b) => b - a)
    console.log(decrescent);

}

// inOrderNaturalCrescentDecrescent(4,1,15)

// Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000).  Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

let newClients = [
    {
        clienteId: 1,
        faturamento: 1000
    },
    {
        clienteId: 2,
        faturamento: 20000
    },
    {
        clienteId: 3,
        faturamento: 53000
    },
    {
        clienteId: 4,
        faturamento: 4000
    },
    {
        clienteId: 5,
        faturamento: 49000
    }
]

function invoicing(str) {
    const bStoreBilling = 45000
    for (let i = 0; i < str.length; i++) {

        if (str[i].faturamento > bStoreBilling) {
            console.log(`O faturamento da loja B foi superado pela loja ${str[i].clienteId} em: R$${str[i].faturamento - bStoreBilling}`);
        } else { console.log(`O faturamento da loja ${str[i].clienteId} não foi maior`) }
    }
    // console.log(storeBilling);
}

// invoicing(newClients)

//Uma loja tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. 

function purchaseDiscount(val) {
    const minimumToDiscount = 500
    // let percentagePerPurchase = 1
    let result
    if (val < minimumToDiscount) {
        console.log("Sem desconto!");
    } else {
        for (let i = 1; i <= 25; i++) {

            for (let index = 0; index < 100; index++) {
                if (val == minimumToDiscount + index + 100 * (i - 1)) {
                    let porcentagem = index + 100 * (i - 1)
                    result = (val * i) / 100
                    console.log(`inicial ${val}`);
                    console.log(`porcentagem do desconto ${porcentagem}`);
                    console.log(`desconto: ${result}`);
                    console.log(`valor com desconto ${val - result}`);
                    return result
                }
            }
        }
    }

}

// console.log(purchaseDiscount(1000));

function calcularDesconto(valorCompra) {
    if (valorCompra < 500) {
        return 0;
    } else {
        const valorAcimaDe500 = valorCompra - 500;
        let percentualDesconto = 0;
        for (let i = 0; i <= valorAcimaDe500 / 100; i++) {
            if (i <= 25) {
                percentualDesconto += 1;
            }
        }
        // console.log(percentualDesconto);
        return percentualDesconto / 100 * valorCompra;
    }
}

const valorCompra = 1000;
const desconto = calcularDesconto(valorCompra);
// console.log(`Valor da compra: R$${valorCompra.toFixed(2)}`);
// console.log(`Desconto: R$${desconto.toFixed(2)}`);
// console.log(`Valor com desconto: R$${(valorCompra - desconto).toFixed(2)}`);


//Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

let pessoas = [
    {
        nome: "Caio",
        idade: 25
    },
    {
        nome: "Manu",
        idade: 23
    },
    {
        nome: "Cristina",
        idade: 40
    },
    {
        nome: "Eli",
        idade: 32
    },
    {
        nome: "Caique",
        idade: 20
    },
    {
        nome: "Malu",
        idade: 16
    },
    {
        nome: "Isa",
        idade: 21
    },
    {
        nome: "Maria",
        idade: 15
    },
    {
        nome: "Marcelo",
        idade:20
    },
    {
        nome: "Luiz",
        idade: 17
    },
]

function findTheBigger(obj) {
    let result = ''
    for (let prop in obj) {
        if (obj[prop].idade >= 18) {
            result = obj[prop]
            console.log(result);
        }
    }
}

// findTheBigger(pessoas);

// Faça um programa que receba a idade de 15 pessoas e que calcule e mostre:
// a) A quantidade de pessoas em cada faixa etária;
// b) A percentagem de pessoas na primeira e na última faixa etária, com relação ao total de pessoas: 

// Até 15 anos
// De 16 a 30 anos
// De 31 a 45 anos
// De 46 a 60 anos
// Acima de 61 anos

const humanos = [
    {name: "João", age: 16}, {name: "Maria", age: 31}, {name: "Joaquim", age: 70}, 
    {name: "Paulo", age: 58}, {name: "Antonio", age: 35}, {name: "José", age: 23},
    {name: "Ana", age: 43}, {name: "Leticia", age: 28}, {name: "Manu", age: 15}, 
    {name: "Bianca", age: 18}, {name: "Vitoria", age: 48}, {name: "Josefa", age: 65},
    {name: "Lurdes", age: 42}, {name: "Mariano", age: 52}, {name: "Caio", age: 25},
]

function numberOfPeopleByAgeGroup(obj) {
    // let menorQue15 = ''
    let until15 = obj.filter((user) => user.age <= 15 )
    // console.log(obj.age);
    console.log(`Pessoas com menos de 15: ${until15.length}`);

    let from16To30 = obj.filter((user) => user.age > 15 && user.age <= 30)
    console.log(`Pessoas na faixa dos 16 aos 30: ${from16To30.length}`);

    let from31To45 = obj.filter((user) => user.age > 30 && user.age <= 45 )
    console.log(`Pessoas na faixa dos 31 aos 45: ${from31To45.length}`);

    let from46To60 = obj.filter((user) => user.age > 30 && user.age <= 45 )
    console.log(`Pessoas na faixa dos 46 aos 60: ${from46To60.length}`);

    let over60 = obj.filter((user) => user.age > 60 )
    console.log(`Pessoas acima de 60 anos: ${over60.length}`);

}
// numberOfPeopleByAgeGroup(humanos)

function percentageLessThan15AndGreaterThan61(list) {

    let amountInRange = list.filter((people) => people.age <= 15 || people.age > 60).length
    let totalPercentage = (amountInRange * list.length)/100
    console.log('Porcentagem da primeira e última faixa no total',totalPercentage);
}

// percentageLessThan15AndGreaterThan61(humanos)