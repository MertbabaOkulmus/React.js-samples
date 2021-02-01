import React, { useState } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";
const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");
  const handleSumbit = (event) => {
    event.preventDefault(); //event fonksiyonu her tetiklendiğinde sayfayı yenileme

    if (!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 428674),
      content,
      isCompleted: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSumbit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <button className="todo-button">Ekle</button>
      </form>

      {/*Todo Listesi*/}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
