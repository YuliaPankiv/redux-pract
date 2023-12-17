import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, { payload }) => { state.todos = [...state.todos, payload] },
        deleteTodo: (state, { payload }) => { state.todos = state.todos.filter(todo => todo.id !== payload) },
    },
})

export const { addTodo, deleteTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer

export const selectTodos = state => state.todos