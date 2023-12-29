import { useContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useTaskContext } from "./hooks/useTaskContext";

function App() {
  const { tasks, dispatch } = useTaskContext();
  const [newTask, setNewtask] = useState("");

  const handleAddTask = () => {
    if (!newTask || newTask.length === 0) {
      return;
    }
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewtask("");
  };
  return (
    <>
      <div className="container mx-auto px-4 py-6 h-[100vh]">
        {tasks.length}
        <Form>
          <Form.Input
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewtask(e.target.value)}
          />
          <Form.Button title="Add" onclick={handleAddTask} />
        </Form>

        <div className="divider"></div>

        <div className="grid grid-cols-[1fr_10px_1fr_10px_1fr] gap-2">
          <TodoList>
            <TodoList.Header status="Not Started" />
          </TodoList>

          <div className="divider divider-horizontal mx-0" />

          <TodoList>
            <TodoList.Header status="In Progress" />
          </TodoList>

          <div className="divider divider-horizontal mx-0" />

          <TodoList>
            <TodoList.Header status="Done" />
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
