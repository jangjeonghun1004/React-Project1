import PageTemplate from "../PageTemplate";

export default function ReduxToolKitPage() {
    return (
        <PageTemplate>
            <h2>Redux Toolkit</h2>
            <div className="box">
                Redux Toolkit은 Redux를 사용하여 상태 관리를 효율적으로 처리하기 위한 라이브러리입니다.
                기존 Redux의 복잡한 설정과 보일러 플레이트 코드를 대폭 줄여주며, Immer(불변성 관리), DevTools 통합, 자동 액션 생성 등의 강력한 기능을 제공합니다.
            </div>

            <h2>Redux Toolkit 설치</h2>
            <pre>
                <code>{`% npm install @reduxjs/toolkit react-redux`}</code>
                <br />

                <code>{`
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  // 최상위 컴포넌트에 Provider 연결
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
                `}</code>
            </pre>

            <h2>Redux Toolkit 구조</h2>
            <pre>
                <code>{`
src/
  ├─ store/
  │   ├─ store.js       # 스토어 설정
  │   └─ slices/        # 기능별 슬라이스 모음
          └─ counterSlice.js
                `}</code>
            </pre>

            <h2>Redux Toolkit 실행 흐름</h2>
            <img src={`${import.meta.env.BASE_URL}images/reduxToolKitProccess.png`} alt="Redux Toolkit 설치" style={{ width: "100%" }} />
            <blockquote>
                <ol>
                    <li>createAsyncThunk 호출</li>
                    <li>pending 액션 디스패치 (로딩 상태 처리)</li>
                    <li>비동기 작업 실행 (예: API 요청)</li>
                    <li>비동기 작업 완료</li>
                    <li>성공 → fulfilled 액션 디스패치 (결과 처리)</li>
                    <li>실패 → rejected 액션 디스패치 (에러 처리)</li>
                    <li>해당 액션(fulfilled 또는 rejected)을 처리하는 리듀서 실행</li>
                </ol>
            </blockquote>

            <h2>Redux Toolkit 예제 코드(Slice)</h2>
            <pre>
                <code>{`
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoType } from '../../types/TodoType';

const API_URL = 'https://newallsoft.shop/todos';

interface TodoState {
    todos: TodoType[];
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

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: TodoType) => {
    const response = await axios.post(API_URL, todo);
    return response.data.contents;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, title, completed }: TodoType) => {
    const response = await axios.patch(API_URL, { id, title, completed });
    return response.data.contents;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
    await axios.delete(\`\${API_URL}/\${id}\`);
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
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
                state.status = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch todos';
            })

            // Add Todo
            .addCase(addTodo.fulfilled, (state, action: PayloadAction<TodoType>) => {
                state.todos.push(action.payload);
            })

            // Update Todo
            .addCase(updateTodo.fulfilled, (state, action: PayloadAction<TodoType>) => {
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
                `}</code>
            </pre>

            <h2>Redux Toolkit 샘플 코드(Store)</h2>
            <pre>
                <code>{`
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
                `}</code>
            </pre>
        </PageTemplate>
    )
}