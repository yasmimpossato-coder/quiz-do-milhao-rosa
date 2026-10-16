const perguntas = [
  { categoria:"Biologia", pergunta:"Qual organela celular é responsável principalmente pela produção de ATP na respiração celular?", alternativas:["Ribossomo","Mitocôndria","Lisossomo","Complexo golgiense"], correta:1 },
  { categoria:"Matemática", pergunta:"Quanto é 15% de 200?", alternativas:["15","20","30","35"], correta:2 },
  { categoria:"História", pergunta:"Em que ano ocorreu a Proclamação da República no Brasil?", alternativas:["1822","1888","1889","1891"], correta:2 },
  { categoria:"Química", pergunta:"Qual é o símbolo químico do elemento sódio?", alternativas:["So","S","Na","Sd"], correta:2 },
  { categoria:"Física", pergunta:"Qual é a unidade de medida da força no Sistema Internacional?", alternativas:["Joule","Newton","Watt","Pascal"], correta:1 },
  { categoria:"Geografia", pergunta:"Qual é o maior bioma brasileiro em extensão territorial?", alternativas:["Cerrado","Caatinga","Mata Atlântica","Amazônia"], correta:3 },
  { categoria:"Literatura", pergunta:"Quem escreveu o romance 'Dom Casmurro'?", alternativas:["José de Alencar","Machado de Assis","Clarice Lispector","Aluísio Azevedo"], correta:1 },
  { categoria:"Português", pergunta:"Qual figura de linguagem está presente em 'Estou morrendo de fome'?", alternativas:["Hipérbole","Eufemismo","Ironia","Antítese"], correta:0 },
  { categoria:"Matemática", pergunta:"As soluções da equação x² − 9 = 0 são:", alternativas:["0 e 9","3 e 9","−3 e 3","−9 e 9"], correta:2 },
  { categoria:"Química", pergunta:"Uma solução com pH igual a 2 é considerada:", alternativas:["Neutra","Básica","Ácida","Sempre salina"], correta:2 },
  { categoria:"Biologia", pergunta:"Qual molécula armazena a informação genética dos seres vivos?", alternativas:["ATP","DNA","Glicose","Hemoglobina"], correta:1 },
  { categoria:"Física", pergunta:"Qual fenômeno explica a separação da luz branca em várias cores por um prisma?", alternativas:["Reflexão total","Difração sonora","Dispersão da luz","Eletrização"], correta:2 },
  { categoria:"História", pergunta:"A Lei Áurea, que aboliu oficialmente a escravidão no Brasil, foi assinada em:", alternativas:["1824","1850","1888","1889"], correta:2 },
  { categoria:"Geografia", pergunta:"Qual linha imaginária divide a Terra em hemisférios Norte e Sul?", alternativas:["Meridiano de Greenwich","Trópico de Capricórnio","Linha Internacional de Data","Linha do Equador"], correta:3 },
  { categoria:"Filosofia", pergunta:"Qual filósofo é associado à frase 'Só sei que nada sei'?", alternativas:["Platão","Sócrates","Aristóteles","Descartes"], correta:1 },
  { categoria:"Sociologia", pergunta:"O conceito de fato social é central na obra de qual sociólogo?", alternativas:["Émile Durkheim","Karl Marx","Max Weber","Auguste Comte"], correta:0 },
  { categoria:"Inglês", pergunta:"Qual é o passado simples do verbo inglês 'go'?", alternativas:["Goed","Gone","Went","Going"], correta:2 },
  { categoria:"Matemática", pergunta:"Qual é a área de um triângulo com base 10 cm e altura 6 cm?", alternativas:["16 cm²","30 cm²","60 cm²","80 cm²"], correta:1 },
  { categoria:"Química", pergunta:"Qual gás é absorvido pelas plantas durante a fotossíntese?", alternativas:["Oxigênio","Nitrogênio","Hidrogênio","Dióxido de carbono"], correta:3 },
  { categoria:"Biologia", pergunta:"Em qual estrutura das células vegetais ocorre a fotossíntese?", alternativas:["Cloroplasto","Núcleo","Vacúolo","Membrana plasmática"], correta:0 },
  { categoria:"Física", pergunta:"A velocidade média é calculada dividindo-se:", alternativas:["Tempo pela distância","Distância pelo tempo","Massa pela força","Força pela área"], correta:1 },
  { categoria:"História", pergunta:"Qual acontecimento é tradicionalmente usado como marco inicial da Revolução Francesa?", alternativas:["Batalha de Waterloo","Queda do Muro de Berlim","Queda da Bastilha, em 1789","Congresso de Viena"], correta:2 },
  { categoria:"Geografia", pergunta:"Qual é a capital do estado do Paraná?", alternativas:["Florianópolis","Porto Alegre","Curitiba","Joinville"], correta:2 },
  { categoria:"Português", pergunta:"Qual alternativa apresenta um exemplo de sujeito oculto?", alternativas:["Os alunos chegaram cedo.","Choveu durante a noite.","Preciso estudar para a prova.","A turma fez o trabalho."], correta:2 },
  { categoria:"Literatura", pergunta:"O Modernismo brasileiro teve como evento simbólico inicial a:", alternativas:["Semana de Arte Moderna de 1922","Inconfidência Mineira","Carta de Pero Vaz de Caminha","Proclamação da República"], correta:0 },
  { categoria:"Matemática", pergunta:"Qual é a média aritmética dos números 4, 6, 8 e 10?", alternativas:["6","7","8","9"], correta:1 },
  { categoria:"Química", pergunta:"Qual é a fórmula química da água?", alternativas:["CO₂","H₂O","O₂","NaCl"], correta:1 },
  { categoria:"Biologia", pergunta:"Qual tipo sanguíneo é conhecido como doador universal de hemácias, considerando o sistema ABO e Rh?", alternativas:["AB positivo","A negativo","O negativo","B positivo"], correta:2 },
  { categoria:"Física", pergunta:"Qual forma de energia está associada ao movimento de um corpo?", alternativas:["Potencial gravitacional","Cinética","Química","Nuclear"], correta:1 },
  { categoria:"Geografia", pergunta:"Qual é o oceano que banha a costa leste do Brasil?", alternativas:["Pacífico","Índico","Glacial Ártico","Atlântico"], correta:3 },
  { categoria:"Filosofia", pergunta:"Quem escreveu 'A República', obra que discute justiça e organização da cidade ideal?", alternativas:["Platão","Epicuro","Nietzsche","John Locke"], correta:0 },
  { categoria:"Sociologia", pergunta:"A socialização é o processo pelo qual as pessoas:", alternativas:["Deixam de viver em sociedade","Aprendem normas, valores e comportamentos sociais","Perdem toda identidade cultural","Passam a viver sem instituições"], correta:1 },
  { categoria:"Inglês", pergunta:"A expressão inglesa 'How often?' pergunta sobre:", alternativas:["Lugar","Quantidade de dinheiro","Frequência","Motivo"], correta:2 },
  { categoria:"Matemática", pergunta:"Se 3x + 5 = 20, qual é o valor de x?", alternativas:["3","5","7","15"], correta:1 },
  { categoria:"Química", pergunta:"A ligação iônica ocorre tipicamente por:", alternativas:["Compartilhamento igual de elétrons","Transferência de elétrons entre átomos","Compartilhamento de prótons","Fusão dos núcleos"], correta:1 },
  { categoria:"Biologia", pergunta:"Qual sistema do corpo humano transporta sangue pelo organismo?", alternativas:["Digestório","Respiratório","Circulatório","Endócrino"], correta:2 },
  { categoria:"História", pergunta:"A Revolução Industrial começou primeiro em qual país?", alternativas:["França","Inglaterra","Itália","Portugal"], correta:1 },
  { categoria:"Geografia", pergunta:"Qual é o principal gás presente na atmosfera terrestre?", alternativas:["Oxigênio","Dióxido de carbono","Nitrogênio","Hélio"], correta:2 },
  { categoria:"Português", pergunta:"Qual palavra está escrita corretamente?", alternativas:["Excessão","Exceção","Esceção","Excesssão"], correta:1 },
  { categoria:"Literatura", pergunta:"Qual obra é considerada um marco do Romantismo brasileiro, escrita por Gonçalves Dias?", alternativas:["Os Lusíadas","Canção do Exílio","O Cortiço","Vidas Secas"], correta:1 },
  { categoria:"Física", pergunta:"Qual é a velocidade aproximada da luz no vácuo?", alternativas:["300 km/s","3.000 km/s","30.000 km/s","300.000 km/s"], correta:3 },
  { categoria:"Matemática", pergunta:"Qual é a probabilidade de sair cara em um lançamento justo de moeda?", alternativas:["0%","25%","50%","100%"], correta:2 },
  { categoria:"Química", pergunta:"Qual partícula subatômica possui carga elétrica negativa?", alternativas:["Próton","Nêutron","Elétron","Núcleo"], correta:2 },
  { categoria:"Biologia", pergunta:"Qual é a função principal das hemácias?", alternativas:["Produzir hormônios","Transportar oxigênio","Combater exclusivamente vírus","Produzir bile"], correta:1 },
  { categoria:"História", pergunta:"Qual civilização antiga construiu as pirâmides de Gizé?", alternativas:["Romana","Egípcia","Fenícia","Persa"], correta:1 },
  { categoria:"Geografia", pergunta:"O processo de crescimento da população urbana e expansão das cidades é chamado de:", alternativas:["Êxodo rural","Urbanização","Desertificação","Transumância"], correta:1 },
  { categoria:"Filosofia", pergunta:"Qual filósofo é conhecido pela ideia 'Penso, logo existo'?", alternativas:["René Descartes","Karl Marx","Immanuel Kant","Thomas Hobbes"], correta:0 },
  { categoria:"Sociologia", pergunta:"Cultura, em sentido sociológico, inclui principalmente:", alternativas:["Apenas obras de arte famosas","Somente características biológicas","Valores, hábitos, conhecimentos e práticas compartilhadas","Apenas leis escritas"], correta:2 },
  { categoria:"Inglês", pergunta:"Complete a frase: 'She ___ to school every day.'", alternativas:["go","goes","going","gone"], correta:1 },
  { categoria:"Matemática", pergunta:"Qual é o valor de 2⁵?", alternativas:["10","16","25","32"], correta:3 },
  { categoria:"Ciências", pergunta:"Qual fonte de energia é renovável?", alternativas:["Carvão mineral","Petróleo","Energia solar","Gás natural"], correta:2 }
];

const VALOR_PERGUNTA = 20000;
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;
let jogoFinalizado = false;
let valorDaRodada = VALOR_PERGUNTA;
let dobrarUsado = false;
let pularUsado = false;
let eliminarUsado = false;
let respostasCorretas = 0;
let totalRespondidas = 0;
let nomeUsuario = "";
let resultadoSalvo = false;
const CHAVE_PODIO = "quizMilhaoRosaPodio";

const telaInicio = document.getElementById("inicio");
const painelJogo = document.getElementById("painel-jogo");
const formNome = document.getElementById("form-nome");
const nomeInput = document.getElementById("nome-usuario");
const jogadorAtualE = document.getElementById("jogador-atual");
const modalPodio = document.getElementById("modal-podio");
const listaPodioE = document.getElementById("lista-podio");

// Sons sintetizados no navegador, sem arquivos externos. A reprodução começa após interação do usuário.
function tocarSom(tipo) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const notas = tipo === "acerto"
      ? [{ f: 660, t: 0 }, { f: 880, t: 0.12 }]
      : [{ f: 260, t: 0 }, { f: 190, t: 0.14 }];
    notas.forEach(nota => {
      const osc = ctx.createOscillator();
      const ganho = ctx.createGain();
      osc.type = tipo === "acerto" ? "sine" : "triangle";
      osc.frequency.value = nota.f;
      ganho.gain.setValueAtTime(0.0001, ctx.currentTime + nota.t);
      ganho.gain.exponentialRampToValueAtTime(0.16, ctx.currentTime + nota.t + 0.025);
      ganho.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + nota.t + 0.22);
      osc.connect(ganho); ganho.connect(ctx.destination);
      osc.start(ctx.currentTime + nota.t);
      osc.stop(ctx.currentTime + nota.t + 0.24);
    });
    setTimeout(() => ctx.close(), 700);
  } catch (erro) {
    // Se o navegador bloquear áudio, o quiz continua funcionando normalmente.
  }
}

function lerPodio() {
  try { return JSON.parse(localStorage.getItem(CHAVE_PODIO) || "[]"); }
  catch (erro) { return []; }
}
function salvarNoPodio() {
  if (resultadoSalvo || !nomeUsuario) return;
  resultadoSalvo = true;
  const historico = lerPodio();
  historico.push({ nome: nomeUsuario, premio: premioAtual, acertos: respostasCorretas, total: perguntas.length, data: new Date().toISOString() });
  historico.sort((a, b) => b.premio - a.premio || b.acertos - a.acertos);
  try { localStorage.setItem(CHAVE_PODIO, JSON.stringify(historico.slice(0, 10))); } catch (erro) {}
}
function mostrarPodio() {
  const historico = lerPodio();
  listaPodioE.innerHTML = "";
  if (!historico.length) {
    listaPodioE.innerHTML = '<div class="podio-vazio">Ainda não há pontuações. Jogue uma partida para inaugurar o pódio! 🌸</div>';
  } else {
    historico.slice(0, 10).forEach((registro, indice) => {
      const linha = document.createElement("div");
      linha.className = "item-podio";
      const medalhas = ["🥇", "🥈", "🥉"];
      const data = registro.data ? new Date(registro.data).toLocaleDateString("pt-BR") : "";
      const medalha = medalhas[indice] || `${indice + 1}º`;
      const nome = document.createElement("div");
      nome.className = "podio-nome"; nome.textContent = registro.nome;
      const detalhes = document.createElement("div");
      detalhes.className = "podio-data"; detalhes.textContent = `${registro.acertos || 0} acertos • ${data}`;
      const info = document.createElement("div"); info.append(nome, detalhes);
      const valor = document.createElement("div"); valor.className = "podio-valor"; valor.textContent = dinheiro(registro.premio || 0);
      const medalhaE = document.createElement("div"); medalhaE.className = "podio-medalha"; medalhaE.textContent = medalha;
      linha.append(medalhaE, info, valor); listaPodioE.appendChild(linha);
    });
  }
  modalPodio.hidden = false;
}
function fecharPodio() { modalPodio.hidden = true; }

const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const categoriaE = document.getElementById("etiqueta-categoria");
const proximaBtnE = document.getElementById("proxima");
const barraE = document.getElementById("barra-progresso");
const dobrarBtn = document.getElementById("dobrar");
const pularBtn = document.getElementById("pular");
const eliminarBtn = document.getElementById("eliminar");
const manterBtn = document.getElementById("manter");

function dinheiro(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function atualizarStatus() {
  numeroPerguntaE.textContent = `${Math.min(perguntaAtual + 1, perguntas.length)} de ${perguntas.length}`;
  premioE.textContent = dinheiro(premioAtual);
  barraE.style.width = `${(perguntaAtual / perguntas.length) * 100}%`;
}

function carregarPergunta() {
  if (perguntaAtual >= perguntas.length) return finalizarJogo();
  respondeu = false;
  valorDaRodada = VALOR_PERGUNTA;
  proximaBtnE.disabled = true;
  proximaBtnE.textContent = "Confirmar e continuar →";
  mensagemE.textContent = "";
  mensagemE.className = "mensagem";
  alternativasE.innerHTML = "";
  const item = perguntas[perguntaAtual];
  perguntaE.textContent = item.pergunta;
  categoriaE.textContent = item.categoria;
  atualizarStatus();

  item.alternativas.forEach((texto, indice) => {
    const botao = document.createElement("button");
    botao.className = "alternativa";
    botao.innerHTML = `<span class="letra">${String.fromCharCode(65 + indice)}</span><span>${texto}</span>`;
    botao.addEventListener("click", () => verificarResposta(indice, botao));
    alternativasE.appendChild(botao);
  });
  pularBtn.disabled = pularUsado || respondeu;
  eliminarBtn.disabled = eliminarUsado || respondeu;
  dobrarBtn.disabled = dobrarUsado || respondeu;
}

function verificarResposta(indiceEscolhido, botaoEscolhido) {
  if (respondeu || jogoFinalizado) return;
  respondeu = true;
  const item = perguntas[perguntaAtual];
  const botoes = [...alternativasE.querySelectorAll(".alternativa")];
  botoes.forEach(botao => botao.disabled = true);
  totalRespondidas++;

  if (indiceEscolhido === item.correta) {
    botaoEscolhido.classList.add("correta");
    premioAtual += valorDaRodada;
    respostasCorretas++;
    tocarSom("acerto");
    mensagemE.textContent = `Resposta correta! Você ganhou ${dinheiro(valorDaRodada)} nesta rodada. ✨`;
    mensagemE.classList.add("sucesso");
  } else {
    tocarSom("erro");
    botaoEscolhido.classList.add("errado");
    botoes[item.correta].classList.add("correta");
    mensagemE.textContent = `Não foi dessa vez! A resposta correta era: ${item.alternativas[item.correta]}.`;
    mensagemE.classList.add("erro");
  }
  atualizarStatus();
  barraE.style.width = `${((perguntaAtual + 1) / perguntas.length) * 100}%`;
  proximaBtnE.disabled = false;
  proximaBtnE.textContent = perguntaAtual === perguntas.length - 1 ? "Ver resultado final →" : "Próxima pergunta →";
  pularBtn.disabled = true;
  eliminarBtn.disabled = true;
  dobrarBtn.disabled = true;
}

function proximaPergunta() {
  if (jogoFinalizado) {
    reiniciarJogo();
    return;
  }
  if (!respondeu) return;
  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) finalizarJogo();
  else carregarPergunta();
}

formNome.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = nomeInput.value.trim().replace(/\s+/g, " ");
  if (!nome) { nomeInput.focus(); return; }
  nomeUsuario = nome.slice(0, 20);
  jogadorAtualE.textContent = nomeUsuario;
  telaInicio.hidden = true;
  painelJogo.hidden = false;
  carregarPergunta();
});
document.getElementById("abrir-podio-inicio").addEventListener("click", mostrarPodio);
document.getElementById("abrir-podio").addEventListener("click", mostrarPodio);
document.getElementById("fechar-podio").addEventListener("click", fecharPodio);
modalPodio.addEventListener("click", (evento) => { if (evento.target === modalPodio) fecharPodio(); });
document.getElementById("limpar-podio").addEventListener("click", () => {
  if (confirm("Deseja apagar todas as pontuações salvas neste navegador?")) {
    try { localStorage.removeItem(CHAVE_PODIO); } catch (erro) {}
    mostrarPodio();
  }
});

function pularPergunta() {
  if (pularUsado || respondeu || jogoFinalizado) return;
  pularUsado = true;
  mensagemE.textContent = "Pergunta pulada! Você não ganha nem perde dinheiro nesta rodada.";
  mensagemE.className = "mensagem";
  respondeu = true;
  proximaBtnE.disabled = false;
  proximaBtnE.textContent = perguntaAtual === perguntas.length - 1 ? "Ver resultado final →" : "Próxima pergunta →";
  pularBtn.disabled = true;
  eliminarBtn.disabled = true;
  dobrarBtn.disabled = true;
}

function eliminarDuas() {
  if (eliminarUsado || respondeu || jogoFinalizado) return;
  eliminarUsado = true;
  const correta = perguntas[perguntaAtual].correta;
  const erradas = [...alternativasE.querySelectorAll(".alternativa")].filter((_, i) => i !== correta);
  // Elimina duas alternativas incorretas aleatórias, mantendo sempre a correta.
  for (const botao of erradas.sort(() => Math.random() - 0.5).slice(0, 2)) {
    botao.classList.add("eliminada");
    botao.disabled = true;
  }
  eliminarBtn.disabled = true;
  mensagemE.textContent = "Duas alternativas incorretas foram eliminadas. Boa sorte! 💗";
  mensagemE.className = "mensagem";
}

function dobrarDinheiro() {
  if (dobrarUsado || respondeu || jogoFinalizado) return;
  dobrarUsado = true;
  // O prêmio acumulado até o momento é dobrado uma única vez.
  premioAtual *= 2;
  atualizarStatus();
  dobrarBtn.disabled = true;
  mensagemE.textContent = `Poder ativado! Seu prêmio acumulado foi dobrado para ${dinheiro(premioAtual)}.`;
  mensagemE.className = "mensagem sucesso";
}

function desistirEManter() {
  if (jogoFinalizado) return;
  jogoFinalizado = true;
  finalizarJogo(true);
}

function finalizarJogo(desistiu = false) {
  jogoFinalizado = true;
  salvarNoPodio();
  const percentual = Math.round((respostasCorretas / perguntas.length) * 100);
  let titulo, texto, emoji;
  if (percentual >= 90) {
    titulo = "Incrível! Você brilhou!"; emoji = "🏆";
    texto = "Seu desempenho foi extraordinário. Você mostrou muito conhecimento em diversas áreas do Ensino Médio!";
  } else if (percentual >= 70) {
    titulo = "Parabéns, excelente resultado!"; emoji = "🌟";
    texto = "Você foi muito bem! Continue estudando e seu conhecimento vai ficar ainda mais forte.";
  } else if (percentual >= 50) {
    titulo = "Muito bem, continue assim!"; emoji = "💖";
    texto = "Você já tem uma boa base. Revise os temas das perguntas e tente novamente para melhorar sua pontuação.";
  } else {
    titulo = "Toda jornada começa assim!"; emoji = "🌸";
    texto = "O importante é aprender. Reveja os assuntos, pratique e volte para buscar um resultado ainda melhor!";
  }

  document.querySelector(".progresso").style.display = "none";
  document.querySelector(".pergunta-area").style.display = "none";
  alternativasE.innerHTML = `
    <div class="resultado">
      <div class="trofeu">${desistiu ? "💝" : emoji}</div>
      <h2>${desistiu ? "Você decidiu parar!" : (perguntaAtual >= perguntas.length ? titulo : "Jogo encerrado")}</h2>
      <p>${desistiu ? "Você saiu do jogo mantendo todo o prêmio acumulado." : texto}</p>
      <div class="total">${dinheiro(premioAtual)}</div>
      <p><strong>${respostasCorretas}</strong> respostas corretas de <strong>${totalRespondidas}</strong> respondidas.</p>
      <p>Você chegou à pergunta ${Math.min(perguntaAtual + (desistiu ? 1 : 0), perguntas.length)} de ${perguntas.length}.</p>
    </div>`;
  numeroPerguntaE.textContent = desistiu ? "Você parou" : "Quiz concluído";
  premioE.textContent = dinheiro(premioAtual);
  barraE.style.width = "100%";
  mensagemE.textContent = "";
  [dobrarBtn, pularBtn, eliminarBtn, manterBtn].forEach(btn => btn.disabled = true);
  proximaBtnE.disabled = false;
  proximaBtnE.textContent = "Jogar novamente ↻";
}

function reiniciarJogo() {
  perguntaAtual = 0; premioAtual = 0; respondeu = false; jogoFinalizado = false;
  nomeUsuario = ""; resultadoSalvo = false;
  painelJogo.hidden = true; telaInicio.hidden = false; nomeInput.value = "";
  valorDaRodada = VALOR_PERGUNTA; dobrarUsado = false; pularUsado = false;
  eliminarUsado = false; respostasCorretas = 0; totalRespondidas = 0;
  document.querySelector(".progresso").style.display = "";
  document.querySelector(".pergunta-area").style.display = "";
  [dobrarBtn, pularBtn, eliminarBtn, manterBtn].forEach(btn => btn.disabled = false);
}

proximaBtnE.addEventListener("click", proximaPergunta);
pularBtn.addEventListener("click", pularPergunta);
eliminarBtn.addEventListener("click", eliminarDuas);
dobrarBtn.addEventListener("click", dobrarDinheiro);
manterBtn.addEventListener("click", desistirEManter);
