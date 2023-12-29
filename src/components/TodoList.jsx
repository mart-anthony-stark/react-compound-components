import { useTaskContext } from "../hooks/useTaskContext";
import Card from "./Card";

const TodoList = ({ children }) => {
  return <div className="container h-[83vh] mx-auto p-2 ">{children}</div>;
};

TodoList.Header = ({ status, color }) => {
  const statusColor = {
    "Not Started": "gray",
    "In Progress": "green",
    Done: "blue",
  };

  return (
    <div className={`text-${statusColor[status]}-500 text-end`}>{status} </div>
  );
};

TodoList.List = ({ items }) => {
  const { dispatch } = useTaskContext();
  return (
    <div className="flex flex-col items-center gap-2 py-2 overflow-auto h-[100%]">
      {items.map((card) => (
        <Card key={card._id}>
          <Card.Actions
            onDelete={() => {
              dispatch({ type: "DELETE_TASK", payload: card._id });
            }}
          />
          <Card.Content name={card.name} />
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
