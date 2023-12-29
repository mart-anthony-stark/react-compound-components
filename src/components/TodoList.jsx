import { useTaskContext } from "../hooks/useTaskContext";
import Card from "./Card";

const TodoList = ({ children }) => {
  return <div className="container h-[83vh] mx-auto p-2 ">{children}</div>;
};

TodoList.Header = ({ status }) => {
  return status === "Not Started" ? (
    <div className={`text-gray-500 text-end`}>{status} </div>
  ) : status === "In Progress" ? (
    <div className={`text-green-500 text-end`}>{status} </div>
  ) : (
    <div className={`text-blue-500 text-end`}>{status} </div>
  );
};

TodoList.List = ({ items }) => {
  const { dispatch } = useTaskContext();
  return (
    <div className="flex flex-col items-center gap-2 py-2 overflow-auto h-[100%]">
      {items.map((card) => (
        <Card key={card._id}>
          <Card.Actions
            date={card.date}
            onDelete={() => {
              dispatch({ type: "STAGE_DELETE_ID", payload: card._id });
              document.getElementById("my_modal_1").showModal();
            }}
            // onDelete={() => {
            //   dispatch({ type: "DELETE_TASK", payload: card._id });
            // }}
          />
          <Card.Content
            card={card}
            changeStatus={(s) => {
              dispatch({ type: "EDIT_TASK", payload: { ...card, status: s } });
            }}
          />
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
