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
