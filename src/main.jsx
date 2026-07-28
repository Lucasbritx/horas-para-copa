import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const LAST_UPDATED = "27 de julho de 2026";

const finalMatch = {
  champion: "Espanha",
  runnerUp: "Argentina",
  score: "1 x 0",
  detail: "após a prorrogação",
  venue: "New York New Jersey Stadium",
  date: "20 de julho de 2026",
  winner: "Ferran Torres marcou o gol do título espanhol."
};

const podium = [
  { place: "Campeã", team: "Espanha", note: "2º título mundial", medal: "ouro" },
  { place: "Vice", team: "Argentina", note: "finalista em New Jersey", medal: "prata" },
  { place: "3º lugar", team: "Inglaterra", note: "6 x 4 sobre a França", medal: "bronze" }
];

const closingStats = [
  { label: "Final", value: "Espanha 1 x 0 Argentina" },
  { label: "Decisão", value: "Prorrogação" },
  { label: "Sede", value: "EUA, Canadá e México" },
  { label: "Formato", value: "48 seleções" }
];

function App() {
  return (
    <main className="page-shell" aria-label="Resumo final da Copa do Mundo">
      <div className="stadium-glow stadium-glow-left" />
      <div className="stadium-glow stadium-glow-right" />
      <div className="ribbon ribbon-one" />
      <div className="ribbon ribbon-two" />
      <div className="ribbon ribbon-three" />

      <section className="hero closing-hero">
        <p className="brand-chip" aria-label="A Copa terminou">
          <span className="flag-mark" aria-hidden="true">
            ◆
          </span>
          Copa encerrada, <strong>olho no próximo hexa</strong>
        </p>

        <div className="stars" aria-label="Cinco estrelas do Brasil e a sexta ainda no sonho">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="sixth">☆</span>
        </div>

        <section className="champion-board" aria-label="Campeã da Copa 2026">
          <div className="board-header">
            <div>
              <p className="kicker">Campeã da Copa 2026</p>
              <h1>{finalMatch.champion}</h1>
            </div>
            <p className="updated">Atualizado em {LAST_UPDATED}</p>
          </div>

          <article className="final-card" aria-label="Resultado da final">
            <div className="team team-left">
              <span className="flag" aria-hidden="true">
                🇪🇸
              </span>
              <strong>{finalMatch.champion}</strong>
              <small>campeã</small>
            </div>

            <div className="score-box">
              <span>Final</span>
              <strong>{finalMatch.score}</strong>
              <small>{finalMatch.detail}</small>
            </div>

            <div className="team team-right">
              <span className="flag" aria-hidden="true">
                🇦🇷
              </span>
              <strong>{finalMatch.runnerUp}</strong>
              <small>vice-campeã</small>
            </div>
          </article>

          <p className="final-note">
            {finalMatch.date} · {finalMatch.venue}. {finalMatch.winner}
          </p>

          <div className="stats-grid" aria-label="Resumo do torneio">
            {closingStats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <small>{stat.label}</small>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <aside className="podium-panel" aria-label="Pódio da Copa">
          <h2>Pódio final</h2>
          <div className="podium-list">
            {podium.map((item) => (
              <article className={`podium-row ${item.medal}`} key={item.place}>
                <span>{item.place}</span>
                <strong>{item.team}</strong>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <footer>
        Fonte: FIFA, classificação final publicada após a decisão da Copa do Mundo 2026.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
