import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todoThunks";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: false,
        error: null
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true;
            state.error = null
        })

            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload
            })

            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer