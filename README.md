# Horas para a Copa

Uma agenda em clima brasileiro para acompanhar os jogos da Copa do Mundo 2026.

O projeto começou como um contador para a abertura e foi atualizado após o início do torneio. Agora a homepage mostra o calendário da fase de grupos, resultados recentes e destaque para o próximo jogo do Brasil, mantendo o visual rumo ao hexa: verde, amarelo, azul, estrelas do penta e uma sexta estrela em contorno.

## Link publicado

[horas-para-copa.vercel.app](https://horas-para-copa.vercel.app)

## O que tem aqui

- Calendário de jogos em horário de Brasília.
- Destaque para o próximo jogo.
- Selo especial para jogo do Brasil.
- Resultados recentes da fase de grupos.
- Layout responsivo para desktop e celular.
- Design estático e leve, sem backend.

## Dados da agenda

Os jogos foram organizados a partir da agenda publicada em Eastern Time e convertidos para o horário de Brasília. A última atualização manual registrada no app é **22 de junho de 2026**.

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

## Observação

Este é um projeto estático. Para manter resultados e horários sempre atuais, é preciso atualizar a lista de jogos em `src/main.jsx`.
