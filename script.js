// ATENÇÃO: Você precisará salvar essas imagens na pasta 'img'
// ou substituir os URLs por URLs de imagens reais/links que você encontrar.
const historia = {
    entrada: {
        texto: "Você encontra o portal de Aetheria. O gigantesco arco de pedra está envolto em cipós e musgo. Você ouve um murmúrio fraco vindo de dentro.",
        imagem: "img/cena1_portal.jpg",
        opcoes: [
            { texto: "Entrar pela abertura escura no centro.", proximo: "fosso_morte" },
            { texto: "Analisar o pequeno altar com cristais à direita.", proximo: "altar_cristal" }
        ]
    },
    
    altar_cristal: {
        texto: "Ao tocar nos cristais, eles acendem com uma luz azul suave. Um mapa estelar no chão se ilumina, revelando a Câmara da Constelação.",
        imagem: "img/cena2_cristais.jpg",
        opcoes: [
            { texto: "Seguir o caminho que os cristais iluminam.", proximo: "camara_enigma" }
        ]
    },
    
    camara_enigma: {
        texto: "Você está na Câmara. Uma inscrição diz: 'O que aponta para o Coração do Dragão mostra o caminho'. Há três alavancas marcadas com 'SOL', 'LUA' e 'ESTRELA'.",
        imagem: "img/cena3_enigma.jpg",
        opcoes: [
            { texto: "Puxar a alavanca 'SOL'.", proximo: "fosso_morte" },
            { texto: "Puxar a alavanca 'LUA'.", proximo: "fosso_morte" },
            { texto: "Puxar a alavanca 'ESTRELA'. (A escolha correta!)", proximo: "praca_central" }
        ]
    },
    
    praca_central: {
        texto: "Parabéns! Você resolveu o enigma. A porta se abre para a Praça Central. Você encontrou Aetheria, e a grande piscina de água cristalina está intacta. Você alcançou o seu objetivo.",
        imagem: "img/cena4_vitoria.jpg",
        opcoes: [
            { texto: "Recomeçar a Aventura.", proximo: "entrada" }
        ]
    },
    
    fosso_morte: {
        texto: "Um fosso se abre sob seus pés! Sua aventura termina abruptamente. Aetheria continua perdida.",
        imagem: "img/cena5_derrota.jpg",
        opcoes: [
            { texto: "Tentar novamente.", proximo: "entrada" }
        ]
    }
};

let estadoAtual = 'entrada'; // Começa o jogo no ponto de entrada

// Função principal que desenha a cena na tela
function carregarCena(idCena) {
    const cena = historia[idCena];
    
    // Elementos do DOM
    const textoElemento = document.getElementById('texto-historia');
    const imagemElemento = document.getElementById('cena-imagem');
    const opcoesContainer = document.getElementById('opcoes-container');
    
    // 1. Atualiza o texto e a imagem
    textoElemento.textContent = cena.texto;
    // O JavaScript usa a imagem como background-image para o CSS controlar o 'cover'
    imagemElemento.style.backgroundImage = `url('${cena.imagem}')`;
    
    // 2. Limpa e cria novos botões de opção
    opcoesContainer.innerHTML = '';
    
    cena.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.textContent = opcao.texto;
        
        // Define a ação do clique: carregar a próxima cena
        botao.onclick = () => {
            estadoAtual = opcao.proximo;
            carregarCena(estadoAtual);
        };
        
        opcoesContainer.appendChild(botao);
    });
}

// Inicia o jogo quando o HTML estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    carregarCena(estadoAtual);
});