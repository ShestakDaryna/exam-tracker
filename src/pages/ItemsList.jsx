import { Link } from 'react-router-dom';
import { dayAndMonth } from '../utils/date.js';

export default function ItemsList({ exams }) {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Іспити</h1>
          <p className="muted">Усього в списку: {exams.length}</p>
        </div>
        <Link to="/add" className="btn">+ Додати іспит</Link>
      </div>

      <ul className="exam-list">
        {exams.map((exam) => {
          const { day, month } = dayAndMonth(exam.date);
          return (
            <li key={exam.id}>
              <Link to={`/items/${exam.id}`} className="exam-row">
                <div className="date-badge">
                  <b>{day}</b>
                  <span>{month}</span>
                </div>
                <div className="exam-info">
                  <h3>{exam.subject}</h3>
                  <p>{exam.teacher}</p>
                </div>
                <span className="chip">{exam.group}</span>
                <span className="arrow">→</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
