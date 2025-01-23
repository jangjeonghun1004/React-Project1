import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://newallsoft.shop/todos';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: TodoState = {
    todos: [],
    status: 'idle',
    error: null,
};

// CRUD Operations
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get(API_URL);
    return response.data.contents;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: Todo) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
});

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async ({ id, title, completed }: Todo) => {
        const response = await axios.patch(API_URL, {id, title, completed });
        return response.data;
    }
);

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Todos
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
                state.status = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch todos';
            })

            // Add Todo
            .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
                state.todos.push(action.payload);
            })

            // Update Todo
            .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
                const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
                if (index !== -1) {
                    state.todos[index] = action.payload;
                }
            })

            // Delete Todo
            .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            });
    },
});

export default todoSlice.reducer;