import { Link, NavLink } from 'react-router-dom';

// Бічне меню (на вузьких екранах стає верхнім)
export default function Navbar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="logo">Сесія</Link>
      <nav>
        {/* end — щоб «Головна» не була активною на всіх сторінках */}
        <NavLink to="/" end>Головна</NavLink>
        <NavLink to="/items">Іспити</NavLink>
        <NavLink to="/add">Додати іспит</NavLink>
        <NavLink to="/about">Про додаток</NavLink>
      </nav>
    </aside>
  );
}
