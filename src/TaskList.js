import { useState } from "react";
import { useTasksContext } from "./TasksContext";
export default TaskList = () => {
  const { tasks } = useTasksContext();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task}></Task>
        </li>
      ))}
    </ul>
  );
};

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const { dispatch } = useTasksContext();
  let taskContent;
  if (editing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: { ...task, text: e.target.value }
            })
          }
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked }
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({ type: "deleted", id: task.id });
        }}
      >
        Delete
      </button>
    </>
  );
};
