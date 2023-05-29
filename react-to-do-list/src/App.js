import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = { id: Math.random(), todo: todo };

    setList([...list, newToDo]);

    setInput("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <div>
      <div>To Do List</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li kew={todo.id}>
            {todo.todo}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
