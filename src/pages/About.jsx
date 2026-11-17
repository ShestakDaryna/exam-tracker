export default function About() {
  return (
    <>
      <h1>Про додаток</h1>
      <p className="muted">
        «Сесія» допомагає тримати під рукою графік здачі екзаменів: предмет, викладач,
        дата складання та шифр групи.
      </p>

      <div className="about-grid">
        <section className="panel">
          <h2>Що вміє додаток</h2>
          <ul>
            <li>показує всі іспити списком</li>
            <li>відкриває окрему сторінку для кожного іспиту</li>
            <li>дозволяє додати новий іспит через форму</li>
            <li>повідомляє, якщо адреса не існує</li>
          </ul>
        </section>

        <section className="panel">
          <h2>Технології</h2>
          <div className="chips">
            <span className="chip">React</span>
            <span className="chip">React Router</span>
            <span className="chip">Vite</span>
          </div>
        </section>
      </div>
    </>
  );
}
