const elementoResposta = document.querySelectorr("#resposta")
const inputPergunta = document.querySelector("#inputPerguntaErrado") 


const respostas = [
  'Com certeza!',
  'Não tenho tanta certeza.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem que não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Sinais apontam que sim.'
]


console.log("Acessando resposta em índice inválido:", respostas[999])



function fazerPergunta() {

  
  if (inputPergunta.value = "") {
    alrt("Digite sua pergunta") 
   
    return
  }

  const perguntaDigitada = inputPergunta.value.trim() 
  console.log("Valor da pergunta:", perguntaDigitada)


  const pergunta = "<div>" + inputPergunta.value + "</div>"


  const totalRespostas = respostas.lenght


  const numeroAleatorio Math.floor(Math.random() * totalRespostas) 


  console.log("Número aleatório:", numeroAleatorio)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opaccity = 1;

  setTimeout(function() {
    elementoResposta.style.opacity = 0;

limparPergunta(); 



const elementoInexistente = document.querySelector("#inexistente")
console.warn("Elemento inexistente no DOM:", elementoInexistente) 
console.log(elementoInexistente.textContent)
