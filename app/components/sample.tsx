// import Image from "next/image";
// import Tasktext from "../ui/tasktext";
// import { useDispatch } from "react-redux";
// import { useState } from "react";

// export default function Home() {
//   const dispatch = useDispatch();
//   const [todo, setTodo] = useState({ title: "", isCheck: false });

//   const handleChange = (e) => {
//     setTodo({ ...todo, title: e.target.value, isCheck: false });
//   };

//   const handleSubmit = () => {
//     dispatch(todoSlice.actions.todoAdd(todo));
//     setTodo({ title: "", isCheck: false });
//   };

//   const allTask = [
//     { title: "Get a new helmet", isCheck: false },
//     { title: "Purchase Milk & Corn Flakes", isCheck: true },
//     { title: "Pay mortgage", isCheck: false },
//     { title: "Complete Assignments", isCheck: false },
//   ];

//   return (
//     <>
//       <div className="bg-white w-full h-screen flex">
//         <div className="w-[20%] flex flex-col items-center px-16 h-full justify-center gap-5 border-2">
//           <span className="text-2xl text-red-400">All</span>
//           <span className="text-2xl text-gray-700 hover:text-red-400">Active</span>
//           <span className="text-2xl text-gray-700 hover:text-red-400">Completed</span>
//         </div>
//         <div className="w-[80%] bg-white">
//           <div className="px-14 py-12 flex flex-col gap-6">
//             <h1 className="text-3xl font-semibold">All Task</h1>
//             <input
//               className="py-2 px-2 rounded-md border-none outline-none bg-slate-100 w-full"
//               placeholder="Add a new task inside ‘All’ category"
//               type="text"
//               value={todo.title}
//               onChange={handleChange}
//             />
//             <button onClick={handleSubmit}>Add Task</button>
//             <div className="all-task">
//               {allTask && allTask.map((data, idx) => (
//                 <Tasktext key={idx} title={data.title} isCheck={data.isCheck} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
// import { RootState } from "./index";

// interface Todo {
//   text: string;
//   completed: boolean;
// }

// interface TodoState {
//   todos: Todo[];
// }

// const initialState: TodoState = {
//   todos: []
// };

// export const todoSlice = createSlice({
//   name: "Todo",
//   initialState,
//   reducers: {
//     todoAdd: (state, action: PayloadAction<Todo>) => {
//       state.todos.push(action.payload);
//       console.log(state.todos);
//     },
//     todoRemove: (state, action: PayloadAction<{ text: string; completed: boolean }>) => {
//       state.todos = state.todos.filter(todo => !(todo.text === action.payload.text && todo.completed === action.payload.completed));
//       console.log(state.todos);
//     }
//   }
// });

// export const { todoAdd, todoRemove } = todoSlice.actions;
// export default todoSlice.reducer;

