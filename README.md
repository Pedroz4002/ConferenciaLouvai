# Conferência Louvai

Site estático da Conferência Louvai, com uma aba principal para a conferência e uma aba dedicada ao Movimento Louvai.

## Publicação

O projeto está pronto para GitHub Pages pelo modo mais simples: publicar a branch `main` a partir da pasta raiz (`/`). Depois de habilitado em **Settings > Pages**, o site fica disponível em:

`https://pedroz4002.github.io/ConferenciaLouvai/`

## Personalização rápida

- Atualize a chave PIX oficial em `script.js`, na constante `donationPixKey`.
- Ajuste WhatsApp, data, local e redes sociais em `index.html` quando a organização confirmar esses dados.
- Substitua as imagens em `assets/` se novas versões das logomarcas forem criadas.

## Estrutura

- `index.html`: conteúdo e abas do site.
- `styles.css`: identidade visual, layout responsivo e componentes.
- `script.js`: alternância de abas, menu mobile e botão de PIX.
- `assets/`: logomarcas da Conferência Louvai, do Movimento Louvai e recorte `louvai-wordmark.png` usado no rodapé.
- `vendor/lucide/`: biblioteca local de ícones usada na interface.
