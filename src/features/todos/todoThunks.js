import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTodos } from "../../services/todoService";

export const fetchTodos = createAsyncThunk("todos/fetchTodos",

    async () => {
        const todos = await getTodos();

        return todos
    }
)