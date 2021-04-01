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

```
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