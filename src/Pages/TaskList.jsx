import { useState } from 'react';
import '../assets/css/Ftl.css'

export const TaskInput = () => {
  const [task, setTask] = useState({ nombre: '', descripcion: '' });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ nombre: '', descripcion: '' });
  };

  return (
    <section>
        <article className='ftl'>

          <form onSubmit={handleSubmit}>
              <div>
              <input
              type="text"
              name="nombre"
              placeholder="Nombre de la tarea"
              value={task.nombre}
              onChange={handleChange}
              />
              <input
              type="text"
              name="descripcion"
              placeholder="Descripción"
              value={task.descripcion}
              onChange={handleChange}
              />
              </div>
              <button className='btnTskl' type="submit">Add Task</button>
          </form>
        <ul className='ftlSct'>
            {tasks.map((t, index) => (
                <li key={index}>
                <strong>{t.nombre}</strong>: {t.descripcion}
            </li>
            ))}
        </ul>
        </article>
    </section>
  );
}
