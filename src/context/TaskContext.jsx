/**
 * Creates a TaskContext and taskReducer for managing tasks.
 *
 * @module TaskContext
 *
 * @summary
 * The code snippet is a part of a React component that creates a context and a reducer for managing tasks. It exports the TaskContext and taskReducer, and also provides a TaskContextProvider component that wraps its children with the TaskContext.Provider and passes the state and dispatch function to the value prop.
 *
 * @example
 * import { TaskContextProvider } from "./TaskContext";
 *
 * function App() {
 *   return (
 *     <TaskContextProvider>
 *     </TaskContextProvider>
 *   );
 * }
 *
 * @exports TaskContext
 * @exports taskReducer
 * @exports TaskContextProvider
 */

import { createContext, useReducer } from "react";

/**
 * The context for managing tasks.
 *
 * @type {object}
 * @property {object[]} tasks - The array of tasks.
 */
export const TaskContext = createContext();

/**
 * The reducer function for managing tasks.
 *
 * @param {object} state - The current state.
 * @param {object} action - The action object.
 * @returns {object} - The updated state.
 */
export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [action.payload, ...state.tasks] };
    case "EDIT_TASK":
      return {
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          }
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case "STAGE_DELETE_ID":
      return {
        ...state,
        deleteId: action.payload,
      };
    default:
      return state;
  }
};

/**
 * The provider component for the TaskContext.
 *
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} - The rendered component.
 */
export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    deleteId: null,
  });

  return (
    <TaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
