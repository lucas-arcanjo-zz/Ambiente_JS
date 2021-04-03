/*
Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

// Exercicío feito
// function notes(note) {

//     if (note >= 90 && note <= 100) {
//         console.log('Nota A')
//     } else if (note >= 80 && note <= 89) {
//         console.log('Nota B')
//     } else if (note >= 70 && note <= 79) {
//         console.log('Nota C')
//     } else if (note >= 60 && note <= 69) {
//         console.log('Nota D')
//     } else if (note < 60 && note >= 0) {
//         console.log('Nota F')
//     } else {
//         console.log('Nota inválida')
//     }
//     return note
// }

// notes(101)
// notes(-1)
// notes(0)
// notes(1)
// notes(45)
// notes(60)
// notes(61)
// notes(75)
// notes(85)
// notes(95)

// Exercicío corrigido 
// function getScore(score) {
//     let scoreA = score >= 90 && score <= 100
//     let scoreB = score >= 80 && score <= 89
//     let scoreC = score >= 70 && score <= 79
//     let scoreD = score >= 60 && score <= 69
//     let scoreF = score < 60 && score >= 0

//     let scoreFinal;

//     if (scoreA) {
//         scoreFinal = "A"
//     } else if (scoreB) {
//         scoreFinal = "B"
//     } else if (scoreC) {
//         scoreFinal = "C"
//     } else if (scoreD) {
//         scoreFinal = "D"
//     } else if (scoreF) {
//         scoreFinal = "F"
//     } else {
//         scoreFinal = "Nota inválida"
//     }
//     return scoreFinal
// }

// console.log(getScore(101))
// console.log(getScore(-1))
// console.log(getScore(0))
// console.log(getScore(1))
// console.log(getScore(45))
// console.log(getScore(60))
// console.log(getScore(61))
// console.log(getScore(75))
// console.log(getScore(85))
// console.log(getScore(95))