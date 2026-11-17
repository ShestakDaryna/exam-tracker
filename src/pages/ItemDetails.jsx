import { Link, useParams } from 'react-router-dom';
import { dayAndMonth, formatDate } from '../utils/date.js';

export default function ItemDetails({ exams }) {
  const { id } = useParams();
  const exam = exams.find((e) => e.id === Number(id));

  // Якщо іспиту з таким id немає
  if (!exam) {
    return (
      <div className="panel">
        <h1>Іспит не знайдено</h1>
        <Link to="/items">← До списку</Link>
      </div>
    );
  }

  const { day, month } = dayAndMonth(exam.date);

  return (
    <>
      <Link to="/items" className="back">← До списку</Link>
      <article className="panel details">
        <div className="date-badge">
          <b>{day}</b>
          <span>{month}</span>
        </div>
        <div>
          <h1>{exam.subject}</h1>
          <dl className="info">
            <div>
              <dt>Викладач</dt>
              <dd>{exam.teacher}</dd>
            </div>
            <div>
              <dt>Дата складання</dt>
              <dd>{formatDate(exam.date)}</dd>
            </div>
            <div>
              <dt>Шифр групи</dt>
              <dd>{exam.group}</dd>
            </div>
          </dl>
        </div>
      </article>
    </>
  );
}
