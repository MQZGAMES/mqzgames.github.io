# GTBASE · Vila Brasa

## Briefing revisado

Manter a exploração livre, sem missões, com controles por toque, teclado e Xbox. Só os comércios têm interior. Casas, prédios e delegacia são volumes fechados com fachada completa. Nenhum elemento pode flutuar, avançar sobre a calçada ou atravessar outro.

### Veículos

Onze carros de quatro categorias:

- dia a dia: Brasa (sedã), Pulga (hatch), Perua e Táxi;
- utilitários: Picape e Furgão;
- luxo: Jipão (SUV), Imperador e Brisa (conversível);
- esportivos: Faísca e Trovão.

Há também quatro motos: Rua, Raio (esportiva), Estradeira (chopper) e Mobilete (scooter).

Cada modelo tem tamanho, peso, velocidade máxima, aceleração, aderência e número de assentos próprios. As cores variam por paleta do modelo.

O motorista, o passageiro da frente e os dois de trás aparecem sentados atrás do vidro fumê. A gangue ocupa primeiro o banco do passageiro e depois o banco de trás.

### Dano

- Batidas soltam faíscas. O para-choque do lado atingido primeiro pendura e depois cai no chão. O capô amassa e levanta.
- O motor solta fumaça cinza e depois preta. Abaixo de 12% de integridade, o veículo pega fogo e explode depois de alguns segundos.
- A explosão arremessa pessoas em ragdoll, fere quem está perto, empurra e danifica outros carros e deixa a carcaça queimada.
- Tiro na roda fura o pneu, que fica murcho e faz o carro puxar para o lado e perder velocidade.
- Tiro no vidro deixa uma trinca e fere quem está sentado ali.
- Derrapagens e freadas fortes deixam marcas de pneu e fumaça.
- Atropelamentos acima de cerca de 23 km/h arremessam o corpo. Quem sobrevive se levanta.

### Trânsito

Os 16 cruzamentos têm semáforos voltados para quem chega, com 7 s de verde, 2 s de amarelo e 1 s com todos no vermelho, alternando os eixos. O trânsito para antes da faixa no vermelho, e também no amarelo quando há espaço para frear. Ninguém tenta ultrapassar a fila parada no sinal.

Os motoristas têm temperamento (cauteloso, profissional ou apressado), sinalizam com as setas antes de virar ou ultrapassar e dão a vez a quem já está no cruzamento. Param antes da faixa quando um pedestre está nela. Quando ficam presos, dão ré e fazem retorno em três manobras ou contornam o quarteirão por outra rota. Alguns procuram uma vaga rente ao meio-fio, dentro da pista, esperam e voltam ao trânsito. As motos têm circuitos próprios, mais perto do meio-fio.

O guincho para ao lado do carro abandonado ou destruído, se posiciona de ré, abaixa o braço, engata o cabo, levanta a frente e leva o carro ao ferro-velho; as rodas dianteiras do rebocado acompanham as curvas.

### Oficina do Bigode

Fica em uma das lojas da cidade. Cobra por peça: lataria e para-choque dianteiros, traseiros, vidros, pneus e mecânica. Instala motor (3 níveis), pneus esportivos (2 níveis) e acessórios (aerofólio, bagageiro e quebra-mato). O carro na garagem mantém as peças ao salvar.

### Casa da Vila das Lajes

Sala, cozinha, quarto e banheiro, com luz própria em cada cômodo, cortinas, TV, geladeira, fogão, chuveiro, vaso e pia (E para usar). O mapa marca com um anel dourado a casa do último save. Para testar no navegador, abra o jogo com `?debug` no endereço e use `window.__gtbase`.

### Pessoas

- Os pedestres variam em roupa, cabelo, barba, acessórios, tom de pele, altura e porte.
- Correm de tiros, inclusive de tiros entre NPCs, e de explosões.
- Uma testemunha que vê um crime longe da polícia liga em cerca de 3,5 s e dá à polícia a última posição conhecida. Matar a testemunha antes impede a ligação.
- Pedestres agredidos ou motoristas tirados do carro podem revidar com socos e desistem quando estão feridos.
- Atravessam a rua só nas faixas, viram o ombro ao se cruzar e, em becos estreitos, um espera o outro passar.

### Lojas

- **Moda Brasa:** camiseta, regata, camisa social e sem camisa, com cores; calça e bermuda; tênis, chinelo e sapato; óculos escuros, correntes, brincos, relógios e anéis de prata, ouro ou diamante.
- **Barbearia do Zé:** sete cortes de cabelo, com tinta, e seis opções de barba.
- **Mercado negro, nos fundos da Penhores 24h:** fuzil, munição de fuzil, pistola e drogas no atacado em lotes de 10 unidades: maconha a R$ 100, pó a R$ 300 e ecstasy a R$ 200.

### Venda de drogas

O ponto de venda do jogador abre com B, pelo direcional para baixo ou pelo botão Vender. Os pedestres vêm comprar no varejo: maconha a R$ 20, pó a R$ 55 e ecstasy a R$ 35 a unidade. Venda vista pela polícia gera procurado, e uma testemunha pode ligar.

### Gangue

As ordens são seguir, esperar aqui, atacar o alvo mirado e virar ponto de venda.

- **Teclado:** teclas 1 a 4.
- **Controle:** direcional para a esquerda, LB e RB.
- **Toque:** botão Gangue.

O integrante que vira ponto de venda vende o seu estoque e o dinheiro vai para você. Se a polícia o vê, tenta matá-lo. Ele revida enquanto está bem, foge quando está ferido e volta ao ponto se sobreviver.

### Garagem e outros

- A garagem ao lado de casa guarda um veículo, que fica no save e sai pela mesma porta.
- A mira tem uma leve correção automática no toque e no controle.
- Uma seta vermelha indica de onde veio o dano.

## Desenvolvimento

Execute `npm ci`, `npm run lint`, `npm run typecheck`, `npm test` e `npm run build`. Sirva esta pasta por HTTP para jogar.
