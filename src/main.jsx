import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const LAST_UPDATED = "22 de junho de 2026";

const results = [
  { group: "Grupo C", home: "Brasil", away: "Haiti", score: "3 x 0" },
  { group: "Grupo F", home: "Japão", away: "Tunísia", score: "4 x 0" },
  { group: "Grupo H", home: "Espanha", away: "Arábia Saudita", score: "4 x 0" },
  { group: "Grupo H", home: "Uruguai", away: "Cabo Verde", score: "2 x 2" },
  { group: "Grupo G", home: "Egito", away: "Nova Zelândia", score: "3 x 1" }
];

const schedule = [
  {
    date: "2026-06-22",
    label: "Hoje, 22/06",
    matches: [
      { time: "14:00", group: "Grupo J", home: "Argentina", away: "Áustria", channel: "FOX" },
      { time: "18:00", group: "Grupo I", home: "França", away: "Iraque", channel: "FOX" },
      { time: "21:00", group: "Grupo I", home: "Noruega", away: "Senegal", channel: "FOX" }
    ]
  },
  {
    date: "2026-06-23",
    label: "Terça, 23/06",
    matches: [
      { time: "00:00", group: "Grupo J", home: "Jordânia", away: "Argélia", channel: "FS1" },
      { time: "14:00", group: "Grupo K", home: "Portugal", away: "Uzbequistão", channel: "FOX" },
      { time: "17:00", group: "Grupo L", home: "Inglaterra", away: "Gana", channel: "FOX" },
      { time: "20:00", group: "Grupo L", home: "Panamá", away: "Croácia", channel: "FOX" },
      { time: "23:00", group: "Grupo K", home: "Colômbia", away: "RD Congo", channel: "FS1" }
    ]
  },
  {
    date: "2026-06-24",
    label: "Quarta, 24/06",
    matches: [
      { time: "16:00", group: "Grupo B", home: "Suíça", away: "Canadá", channel: "FOX" },
      { time: "16:00", group: "Grupo B", home: "Bósnia e Herzegovina", away: "Qatar", channel: "FS1" },
      { time: "19:00", group: "Grupo C", home: "Marrocos", away: "Haiti", channel: "FS1" },
      { time: "19:00", group: "Grupo C", home: "Escócia", away: "Brasil", channel: "FOX", highlight: true },
      { time: "22:00", group: "Grupo A", home: "África do Sul", away: "Coreia do Sul", channel: "FS1" },
      { time: "22:00", group: "Grupo A", home: "Tchéquia", away: "México", channel: "FOX" }
    ]
  },
  {
    date: "2026-06-25",
    label: "Quinta, 25/06",
    matches: [
      { time: "17:00", group: "Grupo E", home: "Curaçao", away: "Costa do Marfim", channel: "FS1" },
      { time: "17:00", group: "Grupo E", home: "Equador", away: "Alemanha", channel: "FOX" },
      { time: "20:00", group: "Grupo F", home: "Tunísia", away: "Holanda", channel: "FOX" },
      { time: "20:00", group: "Grupo F", home: "Japão", away: "Suécia", channel: "FS1" },
      { time: "23:00", group: "Grupo D", home: "Turquia", away: "Estados Unidos", channel: "FOX" },
      { time: "23:00", group: "Grupo D", home: "Paraguai", away: "Austrália", channel: "FS1" }
    ]
  },
  {
    date: "2026-06-26",
    label: "Sexta, 26/06",
    matches: [
      { time: "16:00", group: "Grupo I", home: "Noruega", away: "França", channel: "FOX" },
      { time: "16:00", group: "Grupo I", home: "Senegal", away: "Iraque", channel: "FS1" },
      { time: "21:00", group: "Grupo H", home: "Cabo Verde", away: "Arábia Saudita", channel: "FS1" },
      { time: "21:00", group: "Grupo H", home: "Uruguai", away: "Espanha", channel: "FOX" }
    ]
  },
  {
    date: "2026-06-27",
    label: "Sábado, 27/06",
    matches: [
      { time: "00:00", group: "Grupo G", home: "Nova Zelândia", away: "Bélgica", channel: "FOX" },
      { time: "00:00", group: "Grupo G", home: "Egito", away: "Irã", channel: "FS1" },
      { time: "18:00", group: "Grupo L", home: "Panamá", away: "Inglaterra", channel: "FOX" },
      { time: "18:00", group: "Grupo L", home: "Croácia", away: "Gana", channel: "FS1" },
      { time: "20:30", group: "Grupo K", home: "Colômbia", away: "Portugal", channel: "FOX" },
      { time: "20:30", group: "Grupo K", home: "RD Congo", away: "Uzbequistão", channel: "FS1" },
      { time: "23:00", group: "Grupo J", home: "Argélia", away: "Áustria", channel: "FS1" },
      { time: "23:00", group: "Grupo J", home: "Jordânia", away: "Argentina", channel: "FOX" }
    ]
  }
];

function getMatchStatus(day, time) {
  const [hours, minutes] = time.split(":").map(Number);
  const start = new Date(`${day}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00-03:00`);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const now = new Date();

  if (now >= end) return "encerrado";
  if (now >= start) return "ao vivo";
  return "em breve";
}

function getNextMatch() {
  const now = Date.now();

  return schedule
    .flatMap((day) =>
      day.matches.map((match) => ({
        ...match,
        date: day.date,
        dateLabel: day.label,
        startsAt: new Date(`${day.date}T${match.time}:00-03:00`).getTime()
      }))
    )
    .find((match) => match.startsAt >= now);
}

function App() {
  const nextMatch = getNextMatch();

  return (
    <main className="page-shell" aria-label="Calendário da Copa do Mundo">
      <div className="stadium-glow stadium-glow-left" />
      <div className="stadium-glow stadium-glow-right" />
      <div className="ribbon ribbon-one" />
      <div className="ribbon ribbon-two" />
      <div className="ribbon ribbon-three" />

      <section className="hero schedule-hero">
        <p className="brand-chip" aria-label="Rumo ao hexa">
          <span className="flag-mark" aria-hidden="true">
            ◆
          </span>
          Copa rolando, <strong>Brasil ligado</strong>
        </p>

        <div className="stars" aria-label="Cinco estrelas conquistadas e a sexta chegando">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="sixth">☆</span>
        </div>

        <div className="schedule-board">
          <div className="board-header">
            <div>
              <p className="kicker">Calendário</p>
              <h1>Jogos da Copa</h1>
            </div>
            <p className="updated">Atualizado em {LAST_UPDATED} · Horários de Brasília</p>
          </div>

          {nextMatch && (
            <article className="next-match" aria-label="Próximo jogo">
              <span className="next-label">Próximo jogo</span>
              <strong>
                {nextMatch.home} x {nextMatch.away}
              </strong>
              <span>
                {nextMatch.dateLabel} · {nextMatch.time} · {nextMatch.group}
              </span>
            </article>
          )}

          <div className="calendar-grid">
            {schedule.map((day) => (
              <section className="day-card" key={day.date} aria-label={`Jogos de ${day.label}`}>
                <header>
                  <span>{day.label}</span>
                  <small>{day.matches.length} jogos</small>
                </header>
                <div className="match-list">
                  {day.matches.map((match) => {
                    const status = getMatchStatus(day.date, match.time);

                    return (
                      <article className={`fixture ${match.highlight ? "fixture-brazil" : ""}`} key={`${day.date}-${match.time}-${match.home}`}>
                        <time>{match.time}</time>
                        <div className="fixture-main">
                          <strong>
                            {match.home} <span>x</span> {match.away}
                          </strong>
                          <small>
                            {match.group} · {match.channel}
                          </small>
                        </div>
                        <span className={`status ${status.replace(" ", "-")}`}>{status}</span>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="results-panel" aria-label="Resultados recentes">
          <h2>Últimos resultados</h2>
          <div className="result-list">
            {results.map((result) => (
              <article className="result-row" key={`${result.home}-${result.away}`}>
                <small>{result.group}</small>
                <strong>{result.score}</strong>
                <span>
                  {result.home} x {result.away}
                </span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <footer>
        Dados convertidos para Brasília a partir da agenda publicada em Eastern Time.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
