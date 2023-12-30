import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useTaskContext } from "./hooks/useTaskContext";
import { generateUUID } from "./utils";
import { toast } from "react-toastify";
import Dialog from "./components/Dialog";

function App() {
  const { tasks, deleteId, dispatch } = useTaskContext();
  const [newTask, setNewtask] = useState({ name: "", desc: "" });

  /**
   * Handles the addition of a new task.
   */
  const handleAddTask = () => {
    if (!newTask.name || newTask.name.length === 0) {
      toast("You must enter task first", { type: "error" });
      return;
    }
    const uuid = generateUUID();
    dispatch({
      type: "ADD_TASK",
      payload: {
        _id: uuid,
        ...newTask,
        status: "Not Started",
        date: new Date(),
      },
    });
    setNewtask({
      name: "",
    });
    toast("Successfully added new task", { type: "success" });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6 h-[100vh]">
        <div className="text-2xl text-primary">Task Management App</div>
        <Form>
          <Form.Input
            placeholder="New Task"
            value={newTask.name}
            onKeyUp={(e) => e.key === "Enter" && handleAddTask()}
            onChange={(e) => setNewtask({ ...newTask, name: e.target.value })}
          />
          <Form.Button title="Add" onclick={handleAddTask} />
        </Form>
        <div className="divider"></div>
        <div className="grid grid-cols-[1fr_10px_1fr_10px_1fr] gap-2">
          <TodoList>
            <TodoList.Header status="Not Started" color="green" />
            <TodoList.List
              items={tasks.filter((task) => task.status === "Not Started")}
            />
          </TodoList>

          <div className="divider divider-horizontal mx-0" />

          <TodoList>
            <TodoList.Header status="In Progress" />
            <TodoList.List
              items={tasks.filter((task) => task.status === "In Progress")}
            />
          </TodoList>

          <div className="divider divider-horizontal mx-0" />

          <TodoList>
            <TodoList.Header status="Done" />
            <TodoList.List
              items={tasks.filter((task) => task.status === "Done")}
            />
          </TodoList>
        </div>

        {/* Modal */}
        <Dialog id="my_modal_1">
          <Dialog.Content
            title="Confirm Deletion"
            message="Are you sure you want to delete this task? This action is irreversible"
          />
          <Dialog.Action
            okText="Proceed"
            onOk={() => {
              dispatch({ type: "DELETE_TASK", payload: deleteId });
              console.log("delete");
            }}
          />
        </Dialog>
      </div>
    </>
  );
}

export default App;
