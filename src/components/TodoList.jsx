const TodoList = ({ children }) => {
  return <div className="container h-[80vh] mx-auto p-2">{children}</div>;
};

TodoList.Header = ({ status = "Not Started" }) => {
  const statusColor = {
    "Not Started": "grey",
    "In Progress": "green",
    Done: "blue",
  };

  return (
    <div className={`text-${statusColor[status]}-500 text-end`}>{status}</div>
  );
};

TodoList.List = ({ list }) => {};

export default TodoList;
