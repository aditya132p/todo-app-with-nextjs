import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Add PayloadAction
import { RootState } from "./index";

interface Todo {
  id: number;
  title: string;
  isCheck: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    todoAdd: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    todoRemove: (state , action) => {
        state.todos = state.todos.filter(item => item.id !== action.payload.id);
    },

    todoComplete:(state , action) => {
        let todo = state.todos.find(todo => todo.id === action.payload.id);
        if(todo){
        todo.isCheck =!todo.isCheck
        }
    },
  },
});

export const { todoAdd, todoRemove } = todoSlice.actions;
export default todoSlice.reducer;
