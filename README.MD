# Tipos de variáveis, operadores, condicionais e repetição em JavaScript ES6

Tipos e variáveis

- string            - Object 
- number            - Function 
- boolean           - Array
- null
- undefined 
- symbol

# Operadores 

- Aritméticos
- Atribuição 
- Comparação 
- Condicional
- Lógicos
- Spread

`Aritimético`
No JS existem dois tipos de operadores aritméticos,
`Operador binário`
número1 operador número2
(1 + 2)

`Operador unário`
número1 operador
operador número 1
11+
+11

# Estruturas condicionais
if
else 
else if
switch

# Estrutura de repetição
- for             - continue
- while           - break
- do...while
- for...in

`//` 
Utilizado para fazer comentários em uma linha em `JS`
`/**/`
Utilizado para fazer mais comentários em várias linhas `JS` e `CSS`

#### Orientação a objetos e Design Patterns com a linguagem ES6

# Aula5 - Variáveis e tipos primitivos
Identificadores
- Podem começar com letra, $ ou _
- Não podem começar com números
- É possível usar letras ou números
- É possível usar acentos e símbolos
- Não podem conter espaços
- Não podem ser palavras reservadas
 
Dicas para Identificadores

- Maiúsculas e minúsculas fazem diferença
- Tente escolher nomes coerentes para variáveis
Evite se tornar um 'programador alfabeto' ou um 'programador contador'

O JS não diferencia tipos primitivos como `int`,`float`, todos o números em JS é classificado como `number`
## number
Infinity
NaN
## string
## boolean
## null
## undefined
## object
## function

# Aula6 Tratamento de Dados
`Number.parseInt(n)`
para converter tipos primitivos em inteiro
`Number.parseFloat(n)`
para converter tipos primitivos em real
`Number(n)`
para converter conforme tanto real, como inteiro
`String(n)` ou `n.toString`
para converter em uma string
(um ponto importante, o "N" de number, e o "I" de int, o "F" de float e o "S" de string devem ser maiúsculo)

`${}` (templates string)
para formatação de textos é necessário utilizar "``" no texto colocar a variável nas chaves.
ex
var nome = 'Lucas'
`Olá, meu nome é ${nome}`

`s.length`
Quantos caracteres a string tem

`s.toUpperCase()`
tudo para MAIÚSCULO

`s.toLowerCase()`
tudo para minúsculo

`toFixed()`
quantidade de números depois do ponto(.)

`replace()`
utilizado para substituir componentes

`toLocalsString()`
localiza variável local ou do mundo.
`var n1 = 1550.5`
`n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})`


# Aula7 Operadores parte1

## Operador aritméticos
5 + 2 == 7
5 - 2 == 3
5 * 2 == 10
5 / 2 == 2.5
5 % 2 == 1
5 ** 2 == 25

ordem de precedência
()
**
* / % 
+ -
## Operadores de atribuição
var n = 3
n = n + 4 
n = 7
para simplificar é n+=4

### Incremento
var n = 10
n++
n = 11

## Operadores relacionais
>   maior
<   menos
>=  maior ou igual
<=  menor ou igual 
==  igual
!=  diferente

### Identidade
5 == 5 true
5 == '5' true
o JS analisa o que é sua grandeza
para ter mais precisão é necessário utilizar `===`

## Operadores lógicos
ordem de precedência completa
()
**
* / % 
+ -
!   negação     (oposto)
&&  conjunção   (e)
||  disjunção   (ou)

## Operador ternário
? condição apos verdadeiro
: condição apos falso
exemplo
`media = 5.5`
`media > 7?'APROVADO':'REPROVADO'`
`REPROVADO`

# Aula9 - Introdução ao DOM
DOM (Document Object Model)
É usado na web em html
existe uma arvore DOM no navegador...

selecionando elementos

## TagName
getElementByTagName()
## ID
getElementById()
## Name
getElementsByName()
## ClassName
getElementsByClass()
## querySelector
querySelector()
querySelectorAll()

# Aula10 - Eventos DOM

Eventos são coisas que podem acontecer com elementos

exemplos de eventos mouse

- mouseenter         - mousemove
- mousedown          - mouseup
- click              - mouseout

blocos em JS é utilizado como `{}`
`addEventListener` é um comando que presta atenção aos eventos 

# Aula11
No JS, existem condições
condição simples que só utiliza o `ìf`
condição composta que utiliza `if` e `else`

# Aula12
No JS, existe outra condição
uma condinção aninhada, que vem de ninho, com o comando `else if`
Um macete utilizado na aula é a utilização da hora atual, utilizando `new Date` podendo escolher minutos, data etc.
existe também a Condição Múltipla
`switch()` é o metodo utilizado, esse é bem mais útil para casos mais robustos, com números inteiros e strings, mais usado em funções já feitas.
importante lembrar que é obrigatório utilizar o metodo `break` 
EXEMPLO NO ARQUIVO EX013.JS

um site de imagens de alta qualidade para referências
https://www.pexels.com/pt-br/

# Aula13
Estrutura de repetição com teste lógico inicial
exemplo:
`c = 1`
`while (c < 6) {`
`   console.log(testando)`
`   c++`
`}`
Estrutura de repetição com teste lógico no final
exemplo:
`c = 1`
`do {`
`   console.log(testando)`
`   c++`
`} while (c < 6)`

# Aula14
estrutura de repetição com variável de controle
- inicialização
- teste lógico
- incremento
exemplo:
`console.log('Vai começar')`
`for (c = 1; c <= 6 ; c++) {`
`    console.log(`${c}x`)`
`}`
`console.log('FIM')`

# Aula14Exec

https://unicode.org/emoji/charts/full-emoji-list.html
Utilizado para colocar emojis no código, já no JS, utilizasse `\u{}` e o codigo dentro das chaves

# Aula15
Funções:
Métodos:push()
Método interno: sort()
Atributo:length
Eventos:
Parâmetros:
Vetores ou array
existem variáveis simples e composta

variável simples suporta apenas 1 
variável composta suporta mais que 1

um vetor é composto por elementos

frase 
um array/vetor/variavel composta, é uma variavel
que tem varios elementos, cada elementos é composto 
por seu valor e por uma chave de identificação.
`indexOf()` Utilizado para encontrar o elemento dentro de um array
e mostra o indice de onde está, se der `-1` é o por que não foi encotrado
JS é uma linguagem funcional
![k](https://user-images.githubusercontent.com/61436988/103154499-615b0480-4776-11eb-8397-033268cf4b56.png)


# Aula16

    
