import { createContext, useReducer } from "react";

export const TaskContext = createContext();

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [action.payload, ...state.tasks] };
      break;
    case "EDIT_TASK":
      return {
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          }
          return task;
        }),
      };
      break;
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
      break;
    default:
      return state;
  }
};

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [
      {
        _id: "asd",
        name: "as",
        status: "Not Started",
        date: new Date(),
      },
    ],
  });

  return (
    <TaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
