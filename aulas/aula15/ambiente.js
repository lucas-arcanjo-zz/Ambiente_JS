let num = [ 2, 6, 3 ]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} elementos!`)
num.sort()
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(10)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}