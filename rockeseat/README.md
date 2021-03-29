# Scope

* Escopo determina a visibilidade de alguma variável no js

`var` é global e também local

se possuir uma var com um dado, mesmo estando no final, o sistema vai puxar essa variável sem valor ao topo,
aí que entra o conceito de `hoisting`
========================================
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

arrow function 
```
const sayMyName = () => {
    console.log('lucas')
}
sayMyName();
```

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


