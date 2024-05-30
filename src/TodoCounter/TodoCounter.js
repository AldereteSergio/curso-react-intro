import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <div>
      <h1>Tus Tareas</h1>
      <h2>
        Has Completado {completed} de {total} TODOS
      </h2>
    </div>
  );
}

export { TodoCounter };
