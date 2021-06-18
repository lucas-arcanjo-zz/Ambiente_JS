/* // Transformar notas escolares

// Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima - A
// * entre 80 - 89 - B
// * entre 70 - 79 - C
// * entre 60 - 69 - D
// * menor que 60 - F

// ### Exercicío feito
function notes(note) {

    if (note >= 90 && note <= 100) {
        console.log('Nota A')
    } else if (note >= 80 && note <= 89) {
        console.log('Nota B')
    } else if (note >= 70 && note <= 79) {
        console.log('Nota C')
    } else if (note >= 60 && note <= 69) {
        console.log('Nota D')
    } else if (note < 60 && note >= 0) {
        console.log('Nota F')
    } else {
        console.log('Nota inválida')
    }
    return note
}

notes(101)
notes(-1)
notes(0)
notes(1)
notes(45)
notes(60)
notes(61)
notes(75)
notes(85)
notes(95)

// ### Exercicío corrigido 
function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }
    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))
// ===================================== */

/* //  Sistema de gastos familiar

// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: []
//     * despesas: []
 
// Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

// ### Exercicío feito
OrganizandoAVida = {
    ganhos: [2800, 1000],
    despesas: [100, 100, 700, 300, 150, 120, 600, 12600]
}

function somar(calculo) {
    total = 0
    for (let valor of calculo) {
        total += valor
    }
    return total
}

function statusMes() {
    totalGanhos = somar(OrganizandoAVida.ganhos)
    totalDespesas = somar(OrganizandoAVida.despesas)
    total = totalGanhos - totalDespesas

    if (total > 0) {
        console.log(`Seu saldo no fim do mês é de R$ ${total.toFixed(2)}, saldo positivo`)
    } else {
        console.log(`Seu saldo no fim do mês é de R$: ${total.toFixed(2)}, saldo negativo`)
    }    
}

statusMes()

//  ### Exercicío corrigido
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00],
}

function sum(array) {
    let total= 0
    for(let value of array) {
         total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"
    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}:${total.toFixed(2)}R$`)
}

calculateBalance()
// ===================================== */

/* // Celsius em fahrenheit

// Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

// C = (F - 32) * 5/9

// F = C * 9/5 + 32

// ### Exercicio feito 
function converter(valor) {
    const existeCelsius = valor.toUpperCase().includes("C")
    const existeFahrenheit = valor.toUpperCase().includes("F")

    // mensagem de erro caso         
    if (!existeCelsius && !existeFahrenheit) {
        throw new Error('Grau não identificado')
    }

    // de Celsius para Fahrenheit
    let atualizandoGraus = Number(valor.toUpperCase().replace("C", ""));
    let formula = (celsius) => celsius * 9 / 5 + 32
    let trocandoSigla = "F"

    // de Fahrenheit para Celsius
    if (existeFahrenheit) {
        atualizandoGraus = Number(valor.toUpperCase().replace("F", ""));
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        trocandoSigla = "C"
    }

    return formula(atualizandoGraus) + trocandoSigla
}

try {
    console.log(converter('50f'))
    console.log(converter('10c'))
    console.log(converter('50G'))
} catch (error) {
    console.log(error.message)
}

// ### Exercicio corrigido

// tranformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal F --> C
    let uptadedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    // fluxo alternativo C --> F
    if (celsiusExists) {
        uptadedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(uptadedDegree) + degreeSign
}


try {
    console.log(transformDegree('10c'))
    console.log(transformDegree('50f'))
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}
// OBS: PODE HAVER UM NaN se o argumento da função for '10ef', por isso, é necessário limpar, usando a expressão regular.
// ===================================== */

/*// Buscando e contando dadas em Arrays

    // Baseado no Array de Livros por Categoria abaixo,  faça os seguintes desafios

        // Contar o número de categorias e o número de livros em categoria
        // Contar o número de autores
        // Mostrar livros do autor Augusto Cury
        // Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

// ### Exercicio corrigido
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico de Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfretntar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const countCategory = booksByCategory.length

console.log(`Existem ${countCategory} categoria(s)`)
for (let category of booksByCategory) {
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}

function countBooks() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(`Total de autores: ${authors.length}`)
}

countBooks();

function bookOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

bookOfAuthor("Augusto Cury")
*/