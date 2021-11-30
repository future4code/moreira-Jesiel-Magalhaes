//exercicio 01

/* let a = 10
let b = 10

console.log(b)

b = 5

console.log(a, b) */
// O console vai imprimir o primeiro valor de b que era 10, depois o segundo valor impresso será o de A que era igual a 10 e o valor alterado de b que virou 5. Gerando a **primeira visualização** 10 e a **segunda** 10 5. let permite alteração dos valores atribuidos posteriormente.

//exercicio 02

/* let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) */
// os valores antes declarados mudaram, pois antes let a = 10, let b = 20, foram alterados da seguinte forma: "c" passou a ser 10 valor de "a", "b" passou a ser "c" que virou 10 por causa do valor de "a" e "a" passou a ser 10 por causa do novo valor atribuido a "b". resultado será 10 10 10.
// Esse resultado só foi possível, pois a variável let permite que seu valor seja alterado.

//Exercício 03

/* let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let valorDaHoraTrabalhada = prompt("Quanto você recebe por dia")
alert("você recebe ${horasTrabalhadasPorDia/valorDaHoraTrabalhada} por hora") */

//foi usado no presente exercício o formato camelCase, para dar nomes intuitivos e dentro do padrão as variáveis.

//Exercícios de Escrita 01

/* const nome = prompt('Olá, qual o seu nome')
const idade = prompt('Qual a sua idade')

console.log(nome, idade) */

// Na primeira quando não há valor atribuido retorna a mensagem de erro, na segunda quanto o valor é atribuido retorna String e String. O último exercício coloquei os valores juntos para aparecer no console.

//Exercício de Escrita 02

/* let voceEstuda = true
let usandoChinelo = false
let comeu = true

console.log('você estuda?', voceEstuda)
console.log('Você usa Chinelo?', usandoChinelo)
console.log('Você comeu?', comeu) */

//o primeiro exercício foi atribuído os valores das variáveis, no segundo exercício foi impresso no console as perguntas e suas respectivas respostas.

// Exercício de Escrita 03

/* let a = 10
let b = 25
// Aqui faremos uma lógica para trocar os valores
let c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log('O novo valor de a é', a) // O novo valor de a é 25
console.log('O novo valor de b é', b) // O novo valor de b é 10 */

//foi usada nessa questão como mostrado nas dicas um copo vazio chamado "c", com o auxílio dele, conseguimos repassar os valores contidos de a para b e de b para c.
