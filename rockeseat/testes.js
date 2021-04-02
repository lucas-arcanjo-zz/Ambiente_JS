// var names = "Lucas"
// var age, isHuman
// age = 23
// isHuman = true

// console.log('O ' + names + ' tem ' + age + ' anos.')

// const person = {
//     name: 'Lucas',
//     age: 23,
//     sexo: 'M',
// }

// console.log(`Hello, my name is ${person.name}, have ${person.age} years.`)

//
// const animals = [
//     'Lion',
//     'Monkey',
//     'Cat'
// ]
// console.log(animals[0])

// const sayMyName = () => {
//     console.log('lucas')
// }
// sayMyName();

// function sayMyName(nome) {
//     console.log('antes de entrar em uma callback')
    
//     nome()

//     console.log('depois de entrar em uma callback')
// }
// sayMyName(
//     () => {
//         console.log('estou em uma callback')
//     }
// );
// ==================================

// function Person(name) {
//     this.name = name
//     this.walk = function() {
//         return this.name + " está andando"
//     }
// }

// lucas = new Person('lucas');
// joao = new Person('joao')
// console.log(lucas.walk())
// console.log(joao.walk())

// ==================================   

// let string = "123"
// console.log(Number(string))

// let number = 321
// console.log(String(number))

// let word = "Paralelepipedo"
// console.log(word.length)

// let number = 1234
// console.log(String(number).length)

// let pi = 3.1487845641512
// console.log(pi.toFixed(2).replace(".", ","))

// let word = "Programar é muito shoow!"
// console.log(word.toLowerCase())

// let phrase = "Eu quero viver o Amor"
// console.log(phrase.includes("Amor")) 

// let phrase = "Eu quero viver o Amor"
// let myArray = phrase.split(" ")

// let phraseWithUnderScore = myArray.join("_")
// console.log(phraseWithUnderScore.toUpperCase())

// let myArray = new Array('a', 'b')
// console.log(myArray)

// console.log(["A", 
// {type: "Arraaaaay"}, 
// () => "Hello"][2]())

// let word = "manipulação"
// console.log(Array.from(word))


// Manipular Array

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

// let name = new String('Lucas')
// name.surName = "Sousa"
// let age = new Number(23)
// console.log(name.surName, age)

// let date = new Date('2021-04-01')
// console.log(date)

// const person = {
//     FirstName: 'Lucas',
//     age: 23,
// }

// delete person.age
// console.log(person)

// console.log(10 * 2)
// console.log(10 / 2)
// console.log(10 + 2)
// console.log(10 - 2)

// let remainder;
// remainder = 10 % 2
// console.log(remainder)

// let increment = 0
// increment++
// console.log(increment)

// let decrement = 0
// decrement--
// console.log(decrement)

// console.log(3 ** 3)

// let total = (2 + 3) * 5
// console.log(total)

// let one = 1
// let two = 2
// console.log(one == two)

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