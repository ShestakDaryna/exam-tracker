import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date.js';

export default function Home({ exams }) {
  const next = [...exams].sort((a, b) => a.date.localeCompare(b.date))[0];
  const groups = new Set(exams.map((e) => e.group)).size;
  const teachers = new Set(exams.map((e) => e.teacher)).size;

  return (
    <>
      <section className="home-intro">
        <h1>Усі іспити сесії — в одному місці</h1>
        <p>Дивіться, коли і кому здавати екзамен, відкривайте деталі та додавайте нові записи.</p>
        <div className="buttons">
          <Link to="/items" className="btn">Переглянути іспити</Link>
          <Link to="/add" className="btn btn-light">Додати іспит</Link>
        </div>
      </section>

      {next && (
        <section className="next-exam">
          <div>
            <small>Найближчий іспит</small>
            <h2>{next.subject}</h2>
            <p>{next.teacher} · {formatDate(next.date)} · {next.group}</p>
          </div>
          <Link to={`/items/${next.id}`}>Докладніше →</Link>
        </section>
      )}

      <section className="stats">
        <div className="stat"><b>{exams.length}</b><span>іспитів</span></div>
        <div className="stat"><b>{groups}</b><span>груп</span></div>
        <div className="stat"><b>{teachers}</b><span>викладачів</span></div>
      </section>
    </>
  );
}
