function TodoItem(props) {
  return (
    <li className="List">
      <span className="List-Completed">V</span>
      <p className="Task-Name">{props.text}</p>
      <span className="List-Uncompleted">X</span>
    </li>
  );
}

export { TodoItem };
