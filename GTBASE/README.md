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

## Desenvolvimento

Execute `npm ci` e `npm run build` neste diretório. Rode `npm run lint`, `npm run typecheck` e `npm test`. Sirva os arquivos estáticos por HTTP. O catálogo usa o bundle `game.js` versionado neste diretório.
