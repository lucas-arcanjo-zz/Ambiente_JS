# Scope

* Escopo determina a visibilidade de alguma variável no js

`var` é global e também local

se possuir uma var com um dado, mesmo estando no final, o sistema vai puxar essa variável sem valor ao topo,
aí que entra o conceito de `hoisting`
========================================
`const` e `let` são locais e só funcionam no escopo onde foi criado.


## Praticando e avançando

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


