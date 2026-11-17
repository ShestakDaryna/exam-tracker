import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const emptyForm = { subject: '', teacher: '', date: '', group: '' };

export default function AddItem({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    for (const key in form) {
      if (!form[key].trim()) newErrors[key] = 'Заповніть це поле';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onAdd(form);
    navigate('/items'); 
  }

  return (
    <>
      <h1>Додати іспит</h1>
      <p className="muted">Усі поля обов'язкові.</p>

      <form className="panel form-grid" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="subject">Предмет</label>
          <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Наприклад, Вебтехнології" />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="field">
          <label htmlFor="teacher">Викладач</label>
          <input id="teacher" name="teacher" value={form.teacher} onChange={handleChange} placeholder="Прізвище та ініціали" />
          {errors.teacher && <span className="error">{errors.teacher}</span>}
        </div>

        <div className="field">
          <label htmlFor="date">Дата складання</label>
          <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="field">
          <label htmlFor="group">Шифр групи</label>
          <input id="group" name="group" value={form.group} onChange={handleChange} placeholder="Наприклад, ІПЗ-31" />
          {errors.group && <span className="error">{errors.group}</span>}
        </div>

        <div className="buttons form-buttons">
          <button type="submit" className="btn">Додати іспит</button>
          <Link to="/items" className="btn btn-light">Скасувати</Link>
        </div>
      </form>
    </>
  );
}
