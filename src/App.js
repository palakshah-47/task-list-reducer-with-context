import { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";
import { DeleteDone } from "./DeleteDone";

const App = () => {
  return (
    <TasksProvider>
      <h1>day off in Kyoto</h1>
      <AddTask />
      <TaskList />
      <DeleteDone />
    </TasksProvider>
  );
};

export default App;
