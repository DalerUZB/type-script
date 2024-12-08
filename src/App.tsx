import React, { useState } from "react";
import Todo from "./Components/Todos";
import "./App.css";
import { useSelector } from "react-redux";
import { number } from "prop-types";

const App: React.FC = () => {
  function handleAddTodo(): void {
    console.log("add func bosildi");
  }

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="What are your plans?"
          className="input"
        />
        <button className="addButton" onClick={handleAddTodo}>
          Submit
        </button>
      </div>
      <div className="todoList">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
};

export default App;
