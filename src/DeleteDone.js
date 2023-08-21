import { useTasksContext } from "./TasksContext";
export const DeleteDone = () => {
  const { tasks, dispatch } = useTasksContext();
  const handleClearDone = () => {
    let remainingTasks = tasks.filter((t) => !t.done);
    dispatch({ type: "clear", tasks: remainingTasks });
  };
  return tasks?.length ? (
    <button onClick={handleClearDone}>Clear Completed</button>
  ) : null;
};
