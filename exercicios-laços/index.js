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
    { nome: "Caio", idade: 25 }, { nome: "Manu", idade: 23 }, { nome: "Cristina", idade: 40 },
    { nome: "Eli", idade: 32 }, { nome: "Caique", idade: 20 }, { nome: "Malu", idade: 16 },
    { nome: "Isa", idade: 21 }, { nome: "Maria", idade: 15 }, { nome: "Marcelo", idade: 20 },
    { nome: "Luiz", idade: 17 },
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
    { name: "João", age: 16 }, { name: "Maria", age: 31 }, { name: "Joaquim", age: 70 },
    { name: "Paulo", age: 58 }, { name: "Antonio", age: 35 }, { name: "José", age: 23 },
    { name: "Ana", age: 43 }, { name: "Leticia", age: 28 }, { name: "Manu", age: 15 },
    { name: "Bianca", age: 18 }, { name: "Vitoria", age: 48 }, { name: "Josefa", age: 65 },
    { name: "Lurdes", age: 42 }, { name: "Mariano", age: 52 }, { name: "Caio", age: 25 },
]

function numberOfPeopleByAgeGroup(obj) {
    // let menorQue15 = ''
    let until15 = obj.filter((user) => user.age <= 15)
    // console.log(obj.age);
    console.log(`Pessoas com menos de 15: ${until15.length}`);

    let from16To30 = obj.filter((user) => user.age > 15 && user.age <= 30)
    console.log(`Pessoas na faixa dos 16 aos 30: ${from16To30.length}`);

    let from31To45 = obj.filter((user) => user.age > 30 && user.age <= 45)
    console.log(`Pessoas na faixa dos 31 aos 45: ${from31To45.length}`);

    let from46To60 = obj.filter((user) => user.age > 30 && user.age <= 45)
    console.log(`Pessoas na faixa dos 46 aos 60: ${from46To60.length}`);

    let over60 = obj.filter((user) => user.age > 60)
    console.log(`Pessoas acima de 60 anos: ${over60.length}`);

}
// numberOfPeopleByAgeGroup(humanos)

function percentageLessThan15AndGreaterThan61(list) {

    let amountInRange = list.filter((people) => people.age <= 15 || people.age > 60).length
    let totalPercentage = (amountInRange * list.length) / 100
    console.log('Porcentagem da primeira e última faixa no total', totalPercentage);
}

// percentageLessThan15AndGreaterThan61(humanos)


// Escreva um aplicativo que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro

function evenAndOdd(int) {
    let par = []
    let impar = []
    for (let i = 1; i <= int; i++) {
        if (i % 2 == 0) {
            par.push(i)
        } else {
            impar.push(i)
        }
    }
    console.log(`Os números ${par} são pares`);
    console.log(`Os números ${impar} são impares`);
}

// evenAndOdd(15)

//Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos. Seu programa deve usar laços de repetição e funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.

function squareOfAsterisks(param) {
    let x = []
    let y = []


    if (param >= 1 && param <= 20) {

        //     for (let i = 0; i < param; i++) {
        //         y[i] = []
        //        for (let index = 0; index < param; index++) {
        //         y[i][index] = '*'
        //     }
        // }

        // Utilizando array com push

        for (let i = 1; i < param; i++) {
            for (let index = 1; index <= param; index++) {
                y.push('*')
            }
        }
        x.push(y)

    } else {
        return "Número passado não é válido para aplicação"
    }
    //console.log(x); // utilizando o push
    console.log(y); // sem utilizar o push
}

// squareOfAsterisks(5);

// Métodos dentro de objeto

let objeto = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    divisao: (a, b) => a / b,
    multiplicacao: (a, b) => a * b,
}
// console.log(objeto.soma(1,2));
// console.log(objeto.subtracao(1,2));
// console.log(objeto.divisao(1,2));
// console.log(objeto.multiplicacao(1,2));


// Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos e espaços em branco. Seu programa deve funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.

//Para lado igual a 5:
// *****
// *    *
// *    *
// *    *
// *****

function squareOfAsterisksDifferent(param) {
    for (let i = 0; i < param; i++) {
        let linha = "";
        for (let j = 0; j < param; j++) {
          if (j == 0 || j == param - 1 || i == 0 || i == param - 1) {
            // Adiciona asterisco nas bordas do quadrado
            linha += "*";
          } else {
            // Adiciona espaço em branco no interior do quadrado
            linha += " ";
          }
        }
        console.log(linha);
      }
}

// squareOfAsterisksDifferent(5)

//Faça um programa que recebe a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos. Veja o Exemplo:

//Entrada: 5

// *
// **
// ***
// ****
// *****

const triangle = (altura) => {
    let result = ''
    for (let i = 0; i < altura; i++) {
        result += '*'
        console.log(result);
    }     
}

// triangle(6)


// Uma loja utiliza o código V para transação à vista e P para transação a prazo. Faça um programa que receba código e valor de 15 transações usando laços de repetição. Calcule e mostre:  

// O valor total das compras à vista
// O valor total das compras a prazo .   
// O valor total das compras efetuadas
// O valor da primeira prestação das compras a prazo, sabendo-se que essas serão pagas em três vezes

const shopping = [
    {valor: 100, pgmt: 'P'},{valor: 200, pgmt: 'V'},{valor: 300, pgmt: 'P'},
    {valor: 400, pgmt: 'V'},{valor: 500, pgmt: 'P'},{valor: 600, pgmt: 'V'},
    {valor: 700, pgmt: 'P'},{valor: 800, pgmt: 'V'},{valor: 900, pgmt: 'P'},
    { valor: 1000, pgmt: 'P'},{ valor: 1100, pgmt: 'P'},{ valor: 1200, pgmt: 'P'},
    { valor: 1300, pgmt: 'V'},{ valor: 1400, pgmt: 'P'},{ valor: 1500, pgmt: 'V'},
]

const shoppingTransaction = (arr) => {
    
    let vendasP = arr.filter(obj => obj.pgmt === 'P');
    let vendasParceladas = []
    for (const value of arr) {
        if(value.pgmt === 'P'){
            vendasParceladas.push(value.valor)
        }     
    }

    console.log('vendasParceladas',vendasParceladas);
    let primeiraParcela
    for (const value of vendasParceladas) {
        primeiraParcela = (value/3).toFixed(2)
        console.log('primeira parcela: ', primeiraParcela);
    }

    let somaVendasP = vendasP.reduce((acumulador, { valor, pgmt}) => acumulador + valor, 0);
    console.log('soma das venda Parceladas ===>', somaVendasP);

    let vendasV = arr.filter(obj => obj.pgmt === 'V');
    let somaVendasV = vendasV.reduce((acumulador, { valor, pgmt}) => acumulador + valor, 0);
    console.log('soma das vendas a vista ===>', somaVendasV);

    let somaTotal = somaVendasP + somaVendasV
    console.log('Soma total ===> ',somaTotal);
}
// shoppingTransaction(shopping)


//Faça um programa que receba a idade, altura e o peso de 25 pessoas, Calcule e mostre:

// A quantidade de pessoas com idade superior a 50 anos;
// A média das Alturas das pessoas com idade entre 10 e 20 anos
// A porcentagem das pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.  

const pessoas2 = [
    {idade: 25, altura: 1.75, peso: 70},{idade: 25, altura: 2.0, peso: 100},{idade: 66, altura: 1.60, peso: 70},
    {idade: 29, altura: 1.55, peso: 69},{idade: 45, altura: 1.97, peso: 89},{idade: 85, altura: 1.53, peso: 59},
    {idade: 37, altura: 1.87, peso: 78},{idade: 36, altura: 1.63, peso: 55},{idade: 15, altura: 1.60, peso: 60},
    {idade: 70, altura: 1.66, peso: 90},{idade: 98, altura: 1.73, peso: 68},{idade: 25, altura: 1.80, peso: 90},
    {idade: 18, altura: 1.69, peso: 95},{idade: 54, altura: 1.89, peso: 90},{idade: 35, altura: 1.92, peso: 88},
    {idade: 10, altura: 1.40, peso: 38},{idade: 14, altura: 1.54, peso: 60},{idade: 75, altura: 1.59, peso: 90},
    {idade: 55, altura: 1.96, peso: 60},{idade: 67, altura: 1.75, peso: 70},{idade: 65, altura: 1.69, peso: 60},
    {idade: 15, altura: 1.77, peso: 89},{idade: 59, altura: 1.89, peso: 87},{idade: 35, altura: 1.80, peso: 80},
    {idade: 47, altura: 1.79, peso: 80},
]

const calculateWeightHeightAndAge = (obj) => {
    
    let peopleOver50 = obj.filter(arr => arr.idade >= 50 ).length
    console.log('Quantidade de pessoas com mais que 50 anos ===>',peopleOver50);

    let peopleBetween10And20 = obj.filter(arr => arr.idade >= 10 && arr.idade <= 20)
    console.log('entre 10 e 20 anos',peopleBetween10And20);

    let averageHeightBettewen10And20 = peopleBetween10And20.reduce((acumulador, {valor, altura}) => acumulador + altura, 0 )/peopleBetween10And20.length

    console.log('A média de altura das pessoas entre 10 e 20 anos é de: ',averageHeightBettewen10And20);
    
    // averageHeightBettewen10And20 = peopleBetween10And20.altura

    let peopleWeigthLess40 = obj.filter(arr => arr.peso < 40).length
    console.log('pessoas com menos de 40 kg ==> ',peopleWeigthLess40);
    let percentageWeigthLess40 = (peopleWeigthLess40*obj.length)/100
    console.log('A porcentagem de pessoas com menos de 40 kg é de ===> ',percentageWeigthLess40);

}

// calculateWeightHeightAndAge(pessoas2)

//Faça um programa que receba a idade e o peso de sete pessoas. Calcule e mostre:

// A quantidade de pessoas com mais de 90 quilos;
// A média das idades das sete pessoas;  

const pessoas3 = [
    {idade: 55, peso: 120},{idade: 67, peso: 70},{idade: 65, peso: 60},
    {idade: 15, peso: 89},{idade: 59, peso: 110},{idade: 35, peso: 88},
    {idade: 47, peso: 90},
]

const toFindOver90Kg = (obj) => {
    const peopleOver90 = obj.filter(prop => prop.peso >= 90).length
    console.log('A quantidade de pessoas acima dos 90Kg é de ===>',peopleOver90);
    let averageAge = obj.reduce((acumulador, {idade, peso})=>acumulador + idade, 0)/obj.length
    console.log('A média de idade entre o grupo selecionado é de ===>', averageAge);

}

// toFindOver90Kg(pessoas3)


// Faça um programa que receba a idade, o peso, a altura, a cor dos olhos (A – Azul, P- Preto, V- Verde e C- Castanho) e a cor dos cabelos (P – Preto, C- Castanho, L – Louro e R-Ruivo) de 20 pessoas e que calcule e mostre: A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 quilos;

// A média das idades das pessoas com altura inferior a 1,50;
// A porcentagem de pessoas com olhos azuis entre a s pessoas analisadas;
// A quantidade de pessoas ruivas que não possuem olhos azuis;  

const pessoas4 = [
    {idade: 85, altura: 1.53, peso: 59, corCabelo: 'C', corOlhos: 'C'},
    {idade: 37, altura: 1.87, peso: 78, corCabelo: 'P', corOlhos: 'A'},
    {idade: 36, altura: 1.63, peso: 55, corCabelo: 'C', corOlhos: 'C'},
    {idade: 15, altura: 1.60, peso: 60, corCabelo: 'R', corOlhos: 'A'},
    {idade: 70, altura: 1.66, peso: 90, corCabelo: 'L', corOlhos: 'C'},
    {idade: 98, altura: 1.73, peso: 58, corCabelo: 'C', corOlhos: 'C'},
    {idade: 25, altura: 1.50, peso: 50, corCabelo: 'R', corOlhos: 'A'},
    {idade: 18, altura: 1.69, peso: 95, corCabelo: 'C', corOlhos: 'P'},
    {idade: 54, altura: 1.89, peso: 90, corCabelo: 'C', corOlhos: 'C'},
    {idade: 35, altura: 1.92, peso: 88, corCabelo: 'P', corOlhos: 'V'},
    {idade: 10, altura: 1.40, peso: 38, corCabelo: 'C', corOlhos: 'C'},
    {idade: 14, altura: 1.54, peso: 60, corCabelo: 'P', corOlhos: 'A'},
    {idade: 75, altura: 1.59, peso: 90, corCabelo: 'C', corOlhos: 'V'},
    {idade: 55, altura: 1.96, peso: 60, corCabelo: 'L', corOlhos: 'A'},
    {idade: 67, altura: 1.75, peso: 70, corCabelo: 'L', corOlhos: 'V'},
    {idade: 65, altura: 1.69, peso: 60, corCabelo: 'R', corOlhos: 'A'},
    {idade: 15, altura: 1.47, peso: 60, corCabelo: 'R', corOlhos: 'P'},
    {idade: 59, altura: 1.89, peso: 87, corCabelo: 'C', corOlhos: 'C'},
    {idade: 35, altura: 1.80, peso: 80, corCabelo: 'L', corOlhos: 'A'},
    {idade: 47, altura: 1.79, peso: 80, corCabelo: 'P', corOlhos: 'C'},
]

const aLotOfThings = (obj) => {
    const over50 = obj.filter(prop => prop.idade > 50 && prop.peso < 60).length
    console.log('A quantidadede pessoas com mais de 50 anos e menos de 60 kg é de ==>',over50);
    const heightLessThan1_5 = obj.filter(prop => prop.altura < 1.5)

    const averageOfAgeOfTheHeightLessThan1_5 = heightLessThan1_5.reduce((acumulator , {idade})=> acumulator + idade, 0)/ heightLessThan1_5.length
    console.log('A média de idade entre as pessoas com menos de 1,5 de altura é de ===>',averageOfAgeOfTheHeightLessThan1_5);
    const amountOfPeopleWithBlueEyes = obj.filter(prop => prop.corOlhos === 'A').length
    // console.log(amountOfPeopleWithBlueEyes);
    const percentageOfPeopleWithBlueEyes = (amountOfPeopleWithBlueEyes*obj.length)/100
    console.log('A porcentagem de pessoas com olhos azuis ie de ===>',percentageOfPeopleWithBlueEyes);

    const amountOfRedheadedPeopleWithoutBlueEyes = obj.filter(prop => prop.corCabelo === "R" && prop.corOlhos !== "A").length
    console.log('A quantidade de pessoas ruivas sem olhos azuis é de ==>',amountOfRedheadedPeopleWithoutBlueEyes);

} 
// aLotOfThings(pessoas4)


// Faça um programa que receba dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.  

const numbers = [10,32,89,69,80,12,9,74,55,94,]

const numbersBetween30and90 = (arr) => {
    let between30and90 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 30 && arr[i] <= 90) {
            between30and90.push(arr[i])
        }
        
    }
    console.log('A quantidade de números entre 30 e 90 é de ===>',between30and90.length);
}

// numbersBetween30and90(numbers)

//Faça um programa que receba dez idades, pesos e Alturas e que calcule e mostre:

// A média das idades das dez pessoas;
// A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 1,50;
// A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90; 

const pessoas5 = [
    {idade: 10, altura: 1.40, peso: 38,},{idade: 14, altura: 1.54, peso: 60,},{idade: 75, altura: 1.59, peso: 90,},
    {idade: 17, altura: 1.96, peso: 60,},{idade: 67, altura: 1.75, peso: 70,},{idade: 65, altura: 1.69, peso: 60,},
    {idade: 15, altura: 1.77, peso: 89,},{idade: 28, altura: 1.99, peso: 87,},{idade: 35, altura: 1.48, peso: 95,},
    {idade: 47, altura: 1.49, peso: 91,},
]

const aboutAGroup = (obj) => {
    let averageAge = obj.reduce((acumulator, {idade})=> acumulator + idade,0)/obj.length
    console.log('A média de idade do grupo é de ===>',averageAge, 'anos');
    let amountOfPeopleWithWeightOver90 = obj.filter(prop => prop.peso > 90 && prop.altura < 1.5).length
    console.log('A quantidade de pessoas com mais de 90 kg e menos de 1.5 de altura é de ===>',amountOfPeopleWithWeightOver90);
    let percentageOfPeopleWithMoreThan10andthan30YearsAndMoreThan1_9Tall = (obj.filter(prop => prop.idade > 10 && prop.idade < 30 && prop.altura > 1.9).length)/obj.length
    console.log('A porcentagem de pessoas com mais de 10 e menos que 30 anos com mais de 1.9 de altura é de ===>',percentageOfPeopleWithMoreThan10andthan30YearsAndMoreThan1_9Tall, '%');
}
// aboutAGroup(pessoas5)

//Faça um programa que receba a idade e o sexo de sete pessoas e que calcule e mostre:

// A idade média do grupo;
// A idade média das mulheres;
// A idade média dos homens; 


const pessoas6 = [
    {idade: 55, sexo: 'M'},{idade: 67, sexo: 'M'},{idade: 65, sexo: 'F'},
    {idade: 15, sexo: 'F'},{idade: 59, sexo: 'F'},{idade: 35, sexo: 'M'},
    {idade: 47, sexo: 'M'},
]

const averageAgeAndGender = (arr) =>{
    let averageGroupAge = arr.reduce((acumulator,{idade})=>acumulator + idade,0)/arr.length
    console.log('A idade média do grupo é de ==>',averageGroupAge, 'anos');
    let amountWomen = arr.filter(prop => prop.sexo === 'F')
    let averageOfWomen = amountWomen.reduce((acumulator, {idade})=>acumulator + idade,0)/amountWomen.length
    console.log('A idade média das mulheres do grupo é de ==>', averageOfWomen.toFixed(2), 'anos');
    let amountMen = arr.filter(prop => prop.sexo === 'M')
    let averageOfMen = amountMen.reduce((acumulator, {idade})=>acumulator + idade,0)/amountMen.length
    console.log('A idade média dos homens do grupo é de ==>', averageOfMen.toFixed(2), 'anos');

}
// averageAgeAndGender(pessoas6)


//Faça um programa que receba o valor de um carro e mostre uma tabela com os seguintes dados: preço final, quantidade de parcelas e valor da parcela. Considere o seguinte:

// O preço final para compra à vista tem um desconto de 20%;
// A quantidades de parcelas pode ser: 6, 12, 18, 24, 30, 36, 42, 48, 54 e 60.
// Os percentuais de acréscimo seguem a tabela a seguir. 

// Quantidade de parcelas	Percentual de acréscimo sobre o preço final
// 6	                    3%
// 12	                    6%
// 18	                    9%
// 24	                    12%
// 30	                    15%
// 36	                    18%
// 42	                    21%
// 48	                    24%
// 54	                    27%
// 60	                    30% 


const carFinancing = (value) =>{
    const parcelas = [6,12,18,24,30,36,42,48,54,60]
    let valorCarro = `O valor do carro é R$ ${value}`
    console.log(valorCarro);
    let table = `O valor total á vista é R$ ${value- (value*0.2 )}\n`

    for (let i = 0; i < parcelas.length; i++) {
        table += `O valor total parcelado por ${parcelas[i]} é de: R$ ${(parcelas[i]/200) * value + value} e cada parcela sai por R$ ${(((parcelas[i]/200) * value + value)/parcelas[i]).toFixed(2)}\n`
    }
    return table
}
// console.log(carFinancing(25000));


//Faça um programa que receba um conjunto de valores inteiros e positivos, com o intervalo formado pelo número imprima na tela todos os números primos existentes

const nums = [1,30,27,90,77,54]

const primeNumbersInInterval =(arr)=>{

}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false
        };
    return num > 1;
}














