import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initialExams } from './data/exams.js';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ItemsList from './pages/ItemsList.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import AddItem from './pages/AddItem.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const [exams, setExams] = useState(initialExams);

  function addExam(exam) {
    const nextId = Math.max(0, ...exams.map((e) => e.id)) + 1;
    setExams([...exams, { ...exam, id: nextId }]);
  }

  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home exams={exams} />} />
          <Route path="/items" element={<ItemsList exams={exams} />} />
          <Route path="/items/:id" element={<ItemDetails exams={exams} />} />
          <Route path="/add" element={<AddItem onAdd={addExam} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
