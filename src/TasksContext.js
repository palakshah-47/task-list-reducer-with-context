import { useContext, useReducer, createContext } from "react";

const TasksContext = createContext(null);

// const TaskDispatchContext = createContext(null);

export const useTasksContext = () => useContext(TasksContext);

// export const useTaskDispatchContext = () => useContext(TaskDispatchContext);

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {/* <TaskDispatchContext.Provider value={dispatch}> */}
      {children}
      {/* </TaskDispatchContext.Provider> */}
    </TasksContext.Provider>
  );
};

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "clear": {
      return action.tasks;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false }
];
