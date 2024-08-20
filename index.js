let inventarioDeEmocoesNome = ["medo", "angustia", "confiança", "felicidade", "raiva"];
let inventarioDeEmocoesValor = [50, 25, 10, 0, 60]; 
let diasAtéOlimpiadas = 1000;

let continuarLaço = true;
let tempoHistoria  = 1;
let escolhasHistoria;

while(continuarLaço === true) {
    mostrarMenu();
}

function mostrarMenu() {
    let opcaoMenu = Number(prompt("Escolha uma das opções abaixo: \n1) 🏃 Continuar História\n2) ⚙️ Ver inventário de emoções\n3) 📄 Ver Objetivo \n4) ❌ Desistir")); 

    switch(opcaoMenu) {
        case 1:
            continuarHistoria();
            break;
        case 2:
            mostrarInventario();
            break;
        case 3:
            mostrarObjetivo();
            break;
        case 4:
            continuarLaço = false;
            break;
        default:
            mostrarMenu();
    }
}

function continuarHistoria() {
    if (tempoHistoria === 1) {
        alert("HISTÓRIA: \n\nOlá Hadi, precisamos correr de pressa, sua jornada anual no 'taekwondo' começa semana que vem.");
        alert("Mas a situação política do local está tensa. O país está em constante agitação, com conflitos internos e tensões com outras nações. Estamos tentando manter a normalidade, mas o medo é constante.");

        let desviosEscolhaTrocarCidade = prompt("DECISÃO: \n\nESTA ESCOLHA AFETA SEU MEDO E CONFIANÇA\n\nHadi 'Tiranvapoulir', você aceita sair de sua cidade natal para outra e continuar os treinamentos em um local mais seguro dentro do Irã? \n\nTrocar de cidade? 'sim' ou 'nao'");
        escolhasHistoria = desviosEscolhaTrocarCidade;
        tempoHistoria++;
        diasAtéOlimpiadas -= 100; // 900

        if (escolhasHistoria === 'sim') {
            inventarioDeEmocoesValor[0] += 25; // Aumenta o medo
            inventarioDeEmocoesValor[2] += 30; // Aumenta a confiança
        } else if (escolhasHistoria === 'nao') {
            inventarioDeEmocoesValor[0] -= 25; // Diminui o medo
            inventarioDeEmocoesValor[2] += 40; // Aumenta a confiança
        }

    } else if (tempoHistoria === 2) {
        diasAtéOlimpiadas -= 80; // 820

        if (escolhasHistoria === 'sim') {
            alert("HISTÓRIA: \n\nSTATUS ADQUIRIDOS: +25 medo | +30 confiança\n\nSem problemas, iremos partir. Cuide-se! Você ganhará muita experiência aqui. Não se esqueça de seu sonho, você tem futuro no 'taekwondo'.");

            alert("HISTÓRIA: \n\nSemanas se passaram, e você teve que manter os treinos em casa, sem poder ir ao ginásio. Porém, ajudou várias pessoas no caminho. Infelizmente, a situação piorou e você teve que se refugiar, sendo demitido do cargo de apresentador esportivo pela violência na empresa, e foi para a Itália, Roma com seu treinador.");

            let desviosEscolhaRepresentarSelecao = prompt("DECISÃO: \n\nESTA ESCOLHA AFETA SUA RAIVA E CONFIANÇA\n\nVocê chegou na Itália e terá que escolher entre continuar representando seu antigo país (Irã) ou escolher representar a Itália e facilitar o caminho até as Olimpíadas.\n\nEscolha entre 'irã' ou 'italia'");
            escolhasHistoria = desviosEscolhaRepresentarSelecao;
            tempoHistoria++;
            
        } else if (escolhasHistoria === 'nao') {
            alert("HISTÓRIA: \n\nSTATUS ADQUIRIDOS: -25 medo | +40 confiança\n\nVocê fez a escolha certa, aqui você poderá aperfeiçoar melhor a sua técnica e ficará perto da sua família.");

            alert("HISTÓRIA: \n\nSemanas se passaram, você conheceu novas técnicas e pessoas. Porém, a situação do país piorou e você teve que se refugiar em um país mais seguro e desenvolvido no 'taekwondo'. Com o convite do seu antigo treinador, você foi para a Itália, Roma.");

            let desviosEscolhaRepresentarSelecao = prompt("DECISÃO: \n\nESTA ESCOLHA AFETA SUA RAIVA E CONFIANÇA\n\nVocê chegou na Itália e terá que escolher entre continuar representando seu antigo país (Irã) ou escolher representar a Itália e facilitar o caminho até as Olimpíadas.\n\nEscolha entre 'irã' ou 'italia'");
            escolhasHistoria = desviosEscolhaRepresentarSelecao;
            tempoHistoria++;
        }
        
    } else if (tempoHistoria === 3) {
        diasAtéOlimpiadas -= 600; // 220

        if (escolhasHistoria === 'irã') {
            alert("HISTÓRIA: \n\nSTATUS ADQUIRIDOS: +15 medo | + 20 confiança\n\nVocê escolheu representar seu país natal, uma bela atitude, mas isso dificultará seu caminho daqui para frente.");

            alert("HISTÓRIA: \n\nEstamos nos jogos pré-olímpicos. Você precisa ganhar do oponente egípcio para conseguir se classificar sem depender de outros resultados paralelos.");

            batalhaAntesOlimpiadas();

        } else if (escolhasHistoria === 'italia') {
            alert("HISTÓRIA: \n\nSTATUS ADQUIRIDOS: -10 medo | + 20 confiança\n\nVocê escolheu facilitar seu sonho. A equipe nacional italiana de taekwondo está ansiosa para treinar com você. Continue! As Olimpíadas são daqui a 2 anos.");

            alert("HISTÓRIA: Estamos nos jogos pré-olímpicos. Você precisa ganhar do oponente espanhol para conseguir se classificar em terceiro no chaveamento.");
            
            batalhaAntesOlimpiadas();
        }
    } else if (tempoHistoria === 4) {
        diasAtéOlimpiadas -= 200; // 20

        if (escolhasHistoria === 'olimpiadas') {
            alert("Parabéns, com todo seu esforço você garantiu uma vaga nas Olimpíadas.");
            alert("Preste atenção, a partir de agora os repórteres irão atrás de você.");
            tempoHistoria++;
            mostrarMenu();
            
        } else if (escolhasHistoria === 'não') {
            alert("Infelizmente, sua vaga será decidida pelo convite para as Olimpíadas. Não temos certeza se você irá conseguir.");
            let chanceAleatoriaIrOlimpiadas = ~~(Math.random() * 2); // chance de 0 ou 1
            if (chanceAleatoriaIrOlimpiadas === 1) {
                alert("Apesar de tudo, você foi convocado pela seleção de refugiados para as Olimpíadas.");
                tempoHistoria++;
                mostrarMenu();
            } else {
                alert("Infelizmente, não te convocaram para as Olimpíadas!");
                let escolhaVoltarLuta = prompt("Você deseja voltar para a luta 'sim' ou desistir do seu sonho 'desistir'");
                if (escolhaVoltarLuta === 'sim') {
                    batalhaAntesOlimpiadas();
                } else {
                    alert("Você não se classificou. Espere até a próxima Olimpíada em 2028. Boa sorte!");
                }
            }
        }
        
    } else if (tempoHistoria === 5) {
        diasAtéOlimpiadas = 0; // 0
        alert("Finalmente estamos nas Olimpíadas.");

        let escolhaReporter = prompt("Repórter: Olá, senhor Hadi. Você finalmente chegou às Olimpíadas. Como você se sente com isso? 'estou nervoso' ou 'estou determinado'");

        if (escolhaReporter === 'estou nervoso') {
            alert("Infelizmente, isso pode ter aumentado a confiança do seu oponente. Cuidado, a sua luta começa daqui a 7 dias.");
            alert("Esta semana foi cheia de treinos.");
            batalhaFinal();
        } else if (escolhaReporter === 'estou determinado') {
            alert("Que bom, essa determinação é essencial!");
            alert("Sua batalha irá começar em 7 dias.");
            batalhaFinal();
        }
    }
}

function mostrarInventario() {
    alert(`Suas emoções atualmente estão:\n${inventarioDeEmocoesNome[0]} ${inventarioDeEmocoesValor[0]}\n${inventarioDeEmocoesNome[1]} ${inventarioDeEmocoesValor[1]}\n${inventarioDeEmocoesNome[2]} ${inventarioDeEmocoesValor[2]}\n${inventarioDeEmocoesNome[3]} ${inventarioDeEmocoesValor[3]}\n${inventarioDeEmocoesNome[4]} ${inventarioDeEmocoesValor[4]}`);
}

function mostrarObjetivo() {
    alert(`No dia atual faltam ${diasAtéOlimpiadas} dias até as Olimpíadas. Você precisa evoluir sua confiança e felicidade.`);
}

function batalhaAntesOlimpiadas() {
    for(let i = 3; i > 0; i--) {
        alert(`O jogo começará em ${i}`);
    }
    let vidaRestante = 100;
    let vidaOponente = 100;
    let suaVez = true;
    let continuarBatalha = true;

    while (continuarBatalha) {
        if (vidaOponente <= 0) {
            alert("Parabéns! Você venceu a batalha!");
            continuarBatalha = false;
            escolhasHistoria = 'olimpiadas';
            tempoHistoria++;
            mostrarMenu();
            break;
        }

        if (vidaRestante <= 0) {
            alert("Você perdeu a batalha. Tente novamente!");
            let escolhaCheckpoint = prompt("Você deseja voltar para o início da batalha 'sim' ou seguir com a derrota 'não'");
            if (escolhaCheckpoint === 'sim') {
                batalhaAntesOlimpiadas();
            } else {
                escolhasHistoria = escolhaCheckpoint;
                tempoHistoria++;
                mostrarMenu();
            }
            continuarBatalha = false;                
            break;
        }

        let escolhaLuta = Number(prompt(`Sua vida ${vidaRestante}%\nO oponente está com ${vidaOponente}%.\n\nEscolha uma das opções abaixo:\n1) Atacar\n2) Defender\n3) Finalizar (golpe arriscado)\nR: `));
       
        switch (escolhaLuta) {
            case 1:
                if (suaVez) {
                    atacarLuta();
                    suaVez = false;
                } else {
                    alert("Se defenda ou tente um golpe crítico. Agora é vez do oponente atacar.");
                }                  
                break;
            case 2:
                if (!suaVez) {
                    defenderLuta();
                    suaVez = true;
                } else {
                    alert("Agora é sua vez de atacar. Escolha outra opção!");
                }
                break;
            case 3:
                finalizarLuta();
                break;
        }
        
        function atacarLuta() {
            let chanceAleatoria = ~~(Math.random() * 6);
            let danoAtaque = 0;
            if (chanceAleatoria < 2) {
                danoAtaque = 20;
                alert("Você acertou um bom golpe!");
            } else {
                danoAtaque = 10;
                alert("Você acertou o oponente!");
            }
            alert(`A vida do oponente saiu de ${vidaOponente} para ${vidaOponente - danoAtaque}`);
            vidaOponente -= danoAtaque;
        }

        function defenderLuta() {
            let chanceAleatoria = ~~(Math.random() * 6);
            let danoDefesa = 0;
            if (chanceAleatoria < 4) {
                danoDefesa = 10;
                alert("Você conseguiu se defender bem!");
            } else {
                danoDefesa = 20;
                alert("Você se defendeu, mas o golpe foi forte!");
            }
            alert(`Sua vida saiu de ${vidaRestante} para ${vidaRestante - danoDefesa}`);
            vidaRestante -= danoDefesa;
        }

        function finalizarLuta() {
            let chanceAleatoria = ~~(Math.random() * 2);
            let danoAtaque = 0;
            let danoDefesa = 0;
            if (chanceAleatoria === 1) {
                danoAtaque = 50;
                alert("Você acertou um golpe crítico que causou 50 de dano no oponente!");
                alert(`A vida do oponente saiu de ${vidaOponente} para ${vidaOponente - danoAtaque}`);
                vidaOponente -= danoAtaque;
            } else {
                danoDefesa = 40;
                alert("Você deu azar e o inimigo te deu um contra-golpe de 40 de dano");
                alert(`Sua vida saiu de ${vidaRestante} para ${vidaRestante - danoDefesa}`);
                vidaRestante -= danoDefesa;
            }
        }
    }
}

function batalhaFinal() {
    diasAtéOlimpiadas = 0; // 0
    let SuaPontuacao = 0;
    let adversarioPontuacao = 0;
    let possuiGanhador = false;

    alert("Repórter: Hoje finalmente chegamos à batalha tão esperada entre TIRANVALIPOUR, Hadi e YASER ISMAIL, Omar");
    while (!possuiGanhador) {
        if (adversarioPontuacao === 2 || SuaPontuacao === 2) {
            possuiGanhador = true;
        }
        
        let round = (SuaPontuacao + adversarioPontuacao) + 1;
        alert(`PONTUAÇÃO ATUAL:\nTIRANVALIPOUR, Hadi ${SuaPontuacao} X ${adversarioPontuacao} YASER ISMAIL, Omar`);
        let escolhaUltimaBatalha = Number(prompt(`O oponente está se saindo melhor na batalha. Temos que tentar atingir um ponto fraco dele.\n\nATINGIR PONTO FRACO DO ROUND ${round}: \n1. Perna\n2. Tronco\n3. Cabeça`));

        switch (escolhaUltimaBatalha) {
            case 1:
                if (round === 1) {
                    alert("Você escolheu o ponto fraco do round.");
                    alert("Você pontuou.");
                    SuaPontuacao++;
                } else if (round === 2) {
                    alert("O adversário estava preparado desta vez. Ele conseguiu contra-atacar.");
                    adversarioPontuacao++;
                } else if (round === 3) {
                    alert("O adversário não cai mais nessa. Ele atingiu você com força!");
                    adversarioPontuacao++;
                }
                break;
            case 2:
                if (round === 1) {
                    alert("Ele conseguiu se defender. Escolhemos errado.");
                    adversarioPontuacao++;
                } else if (round === 2) {
                    alert("Boa! O adversário estava prestando atenção demais nas pernas.");
                    alert("Você pontuou.");
                    SuaPontuacao++;
                } else if (round === 3) {
                    alert("O adversário não esperava por mais um golpe no tronco!");
                    alert("Você conseguiu pontuar!");
                    SuaPontuacao++;
                }
                break;
            case 3:
                if (round === 1) {
                    alert("Ele desviou e se defendeu. Escolhemos errado.");
                    adversarioPontuacao++;
                } else if (round === 2) {
                    alert("Você errou este golpe e levou a pior.");
                    adversarioPontuacao++;
                } else if (round === 3) {
                    alert("O adversário é especialista em defender esse tipo de golpe!");
                    adversarioPontuacao++;
                }
                break;
        
            default:
                alert("Você perdeu sua chance.");
                adversarioPontuacao++;
                break;
        }
    }

    if (SuaPontuacao === 2) {
        alert("Parabéns, você conseguiu vencer seu oponente.");
        alert("Hadi, você está nas oitavas de final das Olimpíadas.");
        alert("Seu oponente é o Tae-Joon Park.");
        alert("Você começou bem a partida, porém ele é um dos melhores das Olimpíadas e acaba vencendo você por 2 x 0.");
        alert("Seu sonho está adiado para 2028!");
    } else {
        alert("Você se esforçou bastante, mas infelizmente não conseguiu.");
        alert("O oponente era um ótimo lutador.");
        alert("Seu sonho está adiado para 2028!");
    }
}
