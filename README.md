# Horas para a Copa

Um contador em clima brasileiro para acompanhar quantas horas faltam para o jogo de abertura da Copa do Mundo 2026.

O projeto foi feito como uma homepage simples, vibrante e responsiva, com visual inspirado no Brasil rumo ao hexa: verde, amarelo, azul, estrelas do penta e uma sexta estrela em contorno.

## Link publicado

[horas-para-copa.vercel.app](https://horas-para-copa.vercel.app)

## O que tem aqui

- Contador principal com as horas completas restantes.
- Contagem detalhada em dias, horas, minutos e segundos.
- Data do jogo de abertura em horário de Brasília.
- Layout responsivo para desktop e celular.
- Design estático e leve, sem backend.

## Jogo de referência

O contador usa como alvo o jogo de abertura:

**México x África do Sul**  
**11 de junho de 2026, às 16:00 (horário de Brasília)**  
**11 de junho de 2026, às 13:00 na Cidade do México**

## Tecnologias

- React
- Vite
- CSS puro
- Vercel

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço exibido no terminal.

## Build de produção

```bash
npm run build
```

O resultado fica na pasta `dist`.

## Estrutura

```text
.
├── index.html
├── package.json
├── src
│   ├── main.jsx
│   └── styles.css
└── README.md
```

## Observação sobre o contador

O número grande mostra horas completas restantes. Por exemplo, se faltam `22h 12min`, o contador principal mostra `22`, enquanto os cards detalham os minutos e segundos.
