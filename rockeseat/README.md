# Scope

* Escopo determina a visibilidade de alguma variável no js

`var` é global e também local

se possuir uma var com um dado, mesmo estando no final, o sistema vai puxar essa variável sem valor ao topo,
aí que entra o conceito de `hoisting`
=====================================================================
`const` e `let` são locais e só funcionam no escopo onde foi criado.


declaration or declaração:
`var name`

assignment or atribuição de valores:
`name = "Lucas"`

que tipo de dado foi colocado na variável:
`console.log(typeof name)`

agrupamento de declarações
```
let age, isHuman       
age = 18               
isHuman = true         
```
multiplos argumentos em uma função
`console.log(name, age, isHuman)`

concatenando os valores
`console.log('O ' + name + ' tem ' + age + ' anos.')`

interpolando valores com template literals or template strings
``console.log(`O ${name} tem ${age} anos.`)``

Utilizando objetos
```
const person = {
    name: 'Lucas',
    age: 23,
    sexo: 'M',
}

console.log(`Hello, my name is ${person.name}, have ${person.age} years.`)
```

Utilizando array
```
const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

```
acessando valores em um array
`console.log(animals[0])`
=============================================
function expression
function anonymous

parâmetros or parameters
```
const sum = function(number1, number2) {
    console.log(number1 + number2)
}
sum(2, 3) // arguments or argumentos
```
=====================================================================
arrow function 
```
const sayMyName = () => {
    console.log('lucas')
}
sayMyName();
```
=====================================================================
callback function or chamar de voltar uma função
```
function sayMyName(nome) {
    console.log('antes de entrar em uma callback')
    
    nome()

    console.log('depois de entrar em uma callback')
}
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
);
```
=====================================================================
function constructor
```
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }

}

lucas = new Person('lucas');
joao = new Person('joao')
console.log(lucas.walk())
console.log(joao.walk())
```
=====================================================================
Prototype

prototype-based language
prototype chain
__proto__

Type conversion (typecasting) vs Type coersion

alteração de um tipo de dado para outro tipo

ex de Type coersion:

`console.log('9' + 5)`
o resultado será 95, o JS fez uma concatenação de valores do tipo string e number, e
com isso, o JS forçou de maneira explicita o tipo number `5` se tranformar em uma string `'5'`.

ex de typecating:

`console.log(Number('9') + 5)`
quando explicitamente forçamento um tipo para outro

### Manipuando String e Números
=====================================================================
Transformar String em um Número
```
let string = "123"
console.log(Number(string))
```
=====================================================================
Transformar Número em String
```
let number = 321
console.log(String(number))
```
=====================================================================
Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
```
let word = "Paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)
```
=====================================================================
Transformar um número quebrado com 2 casas decimais e trocar um ponto por vírgula
```
let pi = 3.1487845641512
console.log(pi.toFixed(2).replace(".", ","))
```
=====================================================================
Transformar letra minúsculas em maiúsculas
```
let word = "Programar é muito shoow!"
console.log(word.toUpperCase())
```
=====================================================================
Transformar letra maiúsculas em minúsculas
```
let word = "Programar é muito shoow!"
console.log(word.toLowerCase())
```
=====================================================================
Verificar se o texto contém a palavra Amor
```
let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))
```
=====================================================================
Separe um texto que contem espaços, em um novo array onde cada texto é uma posição 
do array.
```
let phrase = "Eu quero viver o Amor"
let myArray = phrase.split("  ")
console.log(myArray)
```
 Depois disso, tranforme o array em um texto e onde eram espaços, coloque _
 ```
let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore)
 ```
=====================================================================
Criar um Array com construtor
```
let myArray = new Array('a', 'b')
console.log(myArray)
```
=====================================================================
Contar elementos de um Array
```
console.log(["A", 
{type: "Arraaaaay"}, 
() => "Hello"][2]())
```
=====================================================================
Transformar uma cadeia de caracteres em eletementos de um array
```
let word = "manipulação"
console.log(Array.from(word))
```
=====================================================================
// Manipular Array

```
// let techs = ["html", "css", "js"]

// 1. adicionar um item no fim
// techs.push("nodejs")
// 2. adicionar no começo
// techs.unshift("sql")
// 3. remover no fim
// techs.pop()
// 4. remover do começo
// techs.shift()
// 5. pegar somente alguns elementos do array
// console.log(techs.slice(3, 5))
// 6. remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 2)
// 7. encontrar a posição de um elemento no array
// console.log(techs)
// let index = techs.indexOf('html')
// techs.splice(index, 2)
// console.log(techs)
```
Obs: `slice()` === é um método utilizado para apagar elementos dentro de um array
Obs: `splice()` === é um método utilizado para apagar posições dentro de um array
=====================================================================
## Expressões e Operadores

- Expressions
```
let number;
```
- Operators
    Binary
```
let number = 1;
console.log(number + 1)
```
    Unary
```
let number = 1;
console.log(number ++)
```
    Ternary
```
console.log(true ? 'alo' : 'nada')
```
=====================================================================
new (criar um novo objeto)
```
let name = new String('Lucas')
name.surName = "Sousa"
let age = new Number(23)
console.log(name.surName, age)
```
outro ex:
```
let date = new Date('2021-04-01')
console.log(date)
```
=====================================================================
Operadores Unários
typeof
delete
```
const person = {
    FirstName: 'Lucas',
    age: 23,
}

delete person.age
console.log(person)
```
=====================================================================
Operadores Aritiméticos
multiplicação *
`console.log(10 * 2)`
divisão /
`console.log(10 / 2)`
soma +
`console.log(10 + 2)`
subtração -
`console.log(10 - 2)`
resto da divisão %
```
let remainder;
remainder = 10 % 2
console.log(remainder)
```
incremento ++
```
let increment = 0
increment++
console.log(increment)
```
decremento --
```
let decrement = 0
decrement--
console.log(decrement)
```
exponencial **
```
console.log(3**3)
```
=====================================================================
Grouping operator ( )
```
let total = (2 + 3) * 5
console.log(total)
```
=====================================================================
Operadores de comparação
Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2
`console.log(one == two)`
    == Igual
    != diferente
    === estritamente igual
    !== estritamente diferente
    > Maior
    >= Maior igual
    < Menor
    <= Menor igual
=====================================================================
Operadores de atribuição (Assignment)

```
let x 

// assignment
x = 1
// addition assignment
x +=2
// subtraction assignment
x -=2
// multiplication assignment
x *= 2
// division assignment
x /= 2
console.log(x)
```
=====================================================================
Operadores lógicos (logical operators)
2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

```
let pao = true
let queijo = true
```

AND `&&` 
`console.log(pao && queijo)`

OR `||`
`console.log(pao && queijo)`

NOT `!`
`console.log(!pao)`
=====================================================================
Operador Condicional Ternário 
Dependendo da condição, nós receberemos valores diferentes

Condição então `valor 1` se não `valor 2`
`condition ? value1 : value2`

```
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

Maior de 18

let age = 16
const canDrive = age >= 18 ? 'can drive' : "cant't drive"
console.log(canDrive) 
```
=====================================================================
FALSY
    Quando um valor é considerado false em contextos onde um booleano é 
    obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    underfined
    NaN
```
console.log(0 ? "verdadeiro" : "falso")
```
TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é 
    obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
```
console.log( {} ? "verdadeiro" : "falso")
```
=====================================================================
Operator precedence
    Precedência de operadores

grouping `()`
negação e incremento` ! ++ --`
multiplicação e divisão `* /`
adição e subtração `+ -`
relacional `< <= > >=`
igualdade `== != === !==`
AND `&&`
OR `||`
condicional `?:`
assignment (atribuição) `= += -= *=`

```
console.log((2 + 5) * 10 )
```
=====================================================================
if ... else
```
let temperature = 37.4

if(temperature >= 37.5) {
    console.log('febre alta')
} else if(temperature < 37.5 && temperature >= 37){
    console.log('febre moderada')
} else {
    console.log('saudável')
}
```
=====================================================================
switch
```
expression = ''

switch(expression) {
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo para expressão b
        console.log('b')
        break
    default:
        console.log('default')
        break  
}
```
=====================================================================
```
// throw === disparar/lançar

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')
}
// try...catch === tentar...pegar/capturar  

try {
    sayMyName()
} catch(e) {
    console.log(e)
}
```
=====================================================================
Estrutura de repetição
for 
```
  for (let i = 0; i <= 10; i++) {
      console.log(i)
  }
```
 
existem dois tipos de controle: 
`break` - para a execução do loop
 ```
 for (let i = 10; i > 0; i--) {
     if(i === 5) {
         break;
     }
     console.log(i)
 }
 ```
 
`continue` - pula a execução do momento
```
 for (let i = 10; i > 0; i--) {
     if (i === 5) {
         continue;
     }
     console.log(i)
 }
```
=====================================================================
while
utilizasse quando não sabemos o ponto de parada
```
let c = 1

while(c < 10) {
    console.log(c)
    c++
}
```
=====================================================================
for...of
usada para criar um loop apartir de uma variável
(lembrando que uma string é uma cadeia de caracteres)
```
let name = "Lucas"
let names = ['João', 'Pedro', 'Aline']

for(name of names) {
    console.log(name)
}
```
=====================================================================
for...in
usado para criar um loop em um objeto, pegando suas propriedades
```
let person = {
    name: "Lucas",
    age: 23,
    weight: 72.3,
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
```
=====================================================================

```
```
=====================================================================

```
```
=====================================================================

```
```
=====================================================================