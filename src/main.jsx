import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const OPENING_MATCH_ISO = "2026-06-11T16:00:00-03:00";

function getTimeLeft() {
  const target = new Date(OPENING_MATCH_ISO).getTime();
  const now = Date.now();
  const totalMs = Math.max(target - now, 0);

  const totalHours = Math.floor(totalMs / 3_600_000);
  const days = Math.floor(totalMs / 86_400_000);
  const hours = Math.floor((totalMs % 86_400_000) / 3_600_000);
  const minutes = Math.floor((totalMs % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMs % 60_000) / 1_000);

  return { totalMs, totalHours, days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const matchDate = useMemo(
    () =>
      new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo"
      }).format(new Date(OPENING_MATCH_ISO)),
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hasStarted = timeLeft.totalMs === 0;

  return (
    <main className="page-shell" aria-label="Contador para a Copa do Mundo">
      <div className="stadium-glow stadium-glow-left" />
      <div className="stadium-glow stadium-glow-right" />
      <div className="ribbon ribbon-one" />
      <div className="ribbon ribbon-two" />
      <div className="ribbon ribbon-three" />

      <section className="hero">
        <p className="brand-chip" aria-label="Rumo ao hexa">
          <span className="flag-mark" aria-hidden="true">
            ◆
          </span>
          Rumo ao <strong>Hexa</strong>
        </p>

        <div className="stars" aria-label="Cinco estrelas conquistadas e a sexta chegando">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="sixth">☆</span>
        </div>

        <div className="scoreboard">
          <div className="scoreboard-ring" />
          <p className="kicker">Faltam</p>
          <h1>{hasStarted ? "0" : timeLeft.totalHours.toLocaleString("pt-BR")}</h1>
          <p className="subtitle">horas para a Copa começar</p>

          <div className="match-card" aria-label="Jogo de abertura">
            <span className="team-badge">🇲🇽</span>
            <strong>México x África do Sul</strong>
            <span className="team-badge">🇿🇦</span>
          </div>

          <p className="match-time">
            {matchDate} (Brasília) · 11/06 às 13h na Cidade do México
          </p>

          <div className="mini-countdown" aria-label="Contagem detalhada">
            <span>
              <strong>{timeLeft.days}</strong>
              dias
            </span>
            <span>
              <strong>{pad(timeLeft.hours)}</strong>
              horas
            </span>
            <span>
              <strong>{pad(timeLeft.minutes)}</strong>
              min
            </span>
            <span>
              <strong>{pad(timeLeft.seconds)}</strong>
              seg
            </span>
          </div>
        </div>

        <p className="chant">É tetra, é penta, agora é hexa.</p>
      </section>

      <footer>
        Feito para brasileiros. Sonhado por 200 milhões.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
