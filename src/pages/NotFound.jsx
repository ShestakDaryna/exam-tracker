import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="big">404</div>
      <div>
        <h1>Сторінку не знайдено</h1>
        <p>Схоже, такої адреси не існує. Поверніться на головну.</p>
        <div className="buttons">
          <Link to="/" className="btn">На головну</Link>
          <Link to="/items" className="btn btn-light">До списку іспитів</Link>
        </div>
      </div>
    </section>
  );
}
