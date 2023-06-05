// 
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "./Board.module.css";
export default function Board() {
  const [todoCount, setTodoCount] = useState(1);

  const handleAddTodo = () => {
    setTodoCount(todoCount + 1);
  };

  return (
    <div className= {styles.container}>
      {[...Array(todoCount)].map((_, index) => (
        <Todo key={index} className = {styles.todocontaier} />
      ))}
      <button onClick={handleAddTodo}>Add Another Todo</button>
    </div>
  );
}
