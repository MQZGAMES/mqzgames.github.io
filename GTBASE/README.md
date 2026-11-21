# GTBASE

Jogo 3D original de ação em mundo aberto, ambientado no bairro fictício Vila Brasa. A partida começa em exploração livre.

## Prompt da atualização

> Expanda GTBASE como um sandbox 3D original de Vila Brasa, com exploração livre desde o início e foco em toque, teclado e mouse e controle Xbox. Corrija a combinação de mirar e disparar, permita elevar a mira, alinhe pistola e empunhadura à mão direita e faça o tiro sair do cano. Mostre mira durante o disparo, quantidade de balas e barra de vida. Permita alternar pistola e punhos e dar um pulo curto nos três esquemas.
>
> Substitua o estande por uma delegacia com três viaturas, policiais que embarcam e saem conforme o nível de procurado, perseguições a pé ou de carro e reação a crimes de NPCs. Use dano por área atingida e velocidade de impacto. Pedestres rendidos entregam dinheiro após cinco segundos sob a mira pela frente. Pedestres mortos deixam dinheiro se não foram assaltados e policiais deixam arma ou munição. Use uma poça estilizada sem a sombra vertical dos personagens caídos. Permita recrutar até três pedestres armados, com munição ilimitada, que seguem o jogador e reagem às agressões e aos alvos marcados.
>
> Inclua um modelo original de moto com inclinação, manobrabilidade, frenagem e quedas, além de animações para tirar motoristas e pilotos de veículos ocupados. Faça o trânsito desviar de veículos parados e pedestres quando houver espaço. Revise proporções e interseções de portas, janelas, letreiros, toldos, postes e árvores. Crie uma casa acessível no mesmo mapa, com sala, cozinha, banheiro, quarto e salvamento na cama. Verifique as mecânicas e a interface em telas de PC e celular, publique no catálogo da MQZGames e confirme o link público.

## Salvamento

Na cama, use o comando de interação. O navegador mantém vida, saldo, pistola, balas e integrantes recrutados em Vila Brasa. A carga começa no quarto. Trânsito, perseguições e posição dos NPCs são recriados ao abrir o jogo.

## Prompt desta rodada de correções

> Corrija GTBASE mantendo Vila Brasa em exploração livre e os controles de toque, teclado e mouse e Xbox. Refaça a pose da moto com mãos no guidão, quadril apoiado no banco, joelhos dobrados, pés nas pedaleiras e inclinação nas curvas. Ao descer, restaure a postura de caminhada. Apoie cada roda na superfície sob o pneu, corrija a peça extra na janela do cupê e verifique o contato com meio-fio, paredes, objetos, veículos e pedestres.
>
> Ajuste corrida, pulo e soco. Permita socar pelo ataque principal com os punhos, aplique reação de impacto e faça veículos em movimento poderem atingir o jogador, com empurrão, queda e dano proporcionais à velocidade. Faça a IA identificar uma faixa livre, completar o desvio ou a ultrapassagem e retornar à rota. Exiba saldo e integrantes da gangue no HUD.
>
> Feche o telhado da casa, instale portas e acabamentos e dê à delegacia uma recepção acessível onde os policiais aguardam. Mostre os disparos policiais saindo da arma e seguindo na direção real do alvo. Guarda-costas devem reagir mesmo quando um tiro direcionado ao jogador errar, perder o alvo assim que ele morrer e voltar a defendê-lo se houver nova agressão. Policiais que presenciarem um ataque de aliados revidam contra o atirador. Teste os cenários e publique no catálogo da MQZGames.

## Prompt da expansão de Vila Brasa

> Refaça Vila Brasa como um bairro original e contínuo, com praça, ruas largas, residências, pontos comerciais e apartamentos. Dê a cada edifício uma entrada e um interior com escala urbana, pé-direito alto e mobiliário. Ligue os andares por escadas praticáveis e dê a cada apartamento sala, cozinha, banheiro e quarto. Use moradores com rotina, visitantes em estabelecimentos e um atendente por loja. A porta privada só abre para o dono, para quem estiver saindo ou quando já estiver aberta. A fechadura pode ser destruída pelo sistema de tiro do jogo. Permita render o atendente por cinco segundos e recolher o dinheiro que ele larga.
>
> Implemente mira e recrutamento com os punhos e a pistola, formação de guarda-costas sem teto fixo e uma animação de soco com transferência de peso. O nível de procurado deve começar ou aumentar somente se uma viatura ou policial enxergar o crime. Inclua patrulha, busca pelo último ponto visto, embarque e desembarque sem atravessar o carro e revide quando a gangue atacar. Faça a trajetória partir do cano e coincidir com o ponto apontado, com marcas temporárias de impacto.
>
> Faça carros recuarem e manobrarem quando bloqueados e motos usarem espaços mais estreitos com a roda traseira alinhada ao chassi. Revise navegação nas quinas e portas, sombras, materiais urbanos, arquitetura, iluminação, sinalização e a leitura de rua. Preserve controles de toque, teclado e Xbox, o salvamento e a exploração livre. Valide o resultado e publique no catálogo da MQZGames.

## Desenvolvimento

Execute `npm ci` e `npm run build` neste diretório. Rode `npm run lint`, `npm run typecheck` e `npm test`. Sirva os arquivos estáticos por HTTP. O catálogo usa o bundle `game.js` versionado neste diretório.
