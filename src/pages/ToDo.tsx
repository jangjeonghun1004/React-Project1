import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTodos, addTodo, updateTodo, deleteTodo, Todo } from '../features/todo/todoSlice';


export default function ToDoList() {
    const dispatch = useDispatch<AppDispatch>();
    const { todos, status, error } = useSelector((state: RootState) => state.todos);
    const [localTodos, setLocalTodos] = useState(todos); // 로컬 상태로 관리
    const [time, setTime] = useState<Date>(new Date());
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, []);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    // todos가 업데이트되면 localTodos도 업데이트
    useEffect(() => {
        setLocalTodos(todos);
    }, [todos]);


    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        hours = hours % 12 || 12;
        return `${hours}시 ${minutes}분 ${seconds}초`;
    };

    const formatDate = () => {
        const month = time.getMonth() + 1;
        const date = time.getDate();
        const day = time.getDay();
        const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

        return `${month}월 ${date}일 ${days[day]}`;
    };

    const handleToggleComplete = (todo: { id: number; title: string; completed: boolean }) => {
        // Optimistic UI
        setLocalTodos((prev) =>
            prev.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
        );

        dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    };

    const handleDeleteTodo = (id: number) => {
        // Optimistic UI
        setLocalTodos((prev) => prev.filter((todo) => todo.id !== id));

        dispatch(deleteTodo(id));
    };

    const handleOnSubmit = () => {
        if (validate()) {
            // Optimistic UI
            if (titleRef.current) {
                titleRef.current.value = "";
            }

            dispatch(addTodo(formData));
            setFormData({ id: Date.now(), title: '', completed: false }); // 데이터 초기화
        } else {
            if (titleRef.current) {
                titleRef.current.focus();
            }
        }
    };

    // formData 설정
    const [formData, setFormData] = useState<Todo>({ id: Date.now(), title: '', completed: false });
    const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    // formData 유효성 검사
    const [errors, setErrors] = useState<Partial<Todo>>({});
    const validate = (): boolean => {
        const newErrors: Partial<Todo> = {};

        if (!formData.title.trim()) {
            newErrors.title = 'title is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // focus
    const titleRef = useRef<HTMLInputElement>(null);


    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1 style={{ textAlign: "center" }}>To Do List</h1>
                            <h2 style={{ textAlign: "center" }}>{formatDate()}</h2>
                            <h3 style={{ textAlign: "right" }}>{formatTime()}</h3>
                        </header>

                        <div className="table-wrapper">
                            {status === 'loading' && <p>Loading...</p>}
                            {error && <p>Error: {error}</p>}
                            <table >
                                <tbody>
                                    {localTodos.map((todo, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ verticalAlign: "middle" }}>
                                                    <input type="radio" id={`${todo.id}`} checked={todo.completed} onChange={() => { }} />
                                                    <label
                                                        htmlFor={`${todo.id}`}
                                                        onClick={() => handleToggleComplete(todo)}
                                                        style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginBottom: 0 }}
                                                    > {todo.title}</label>
                                                </td>
                                                <td style={{ width: "10%", verticalAlign: "middle", textAlign: "center" }}>
                                                    <a
                                                        onClick={() => handleDeleteTodo(todo.id)}
                                                        className="icon solid fa-eraser"
                                                        style={{ fontSize: "1.3rem", cursor: "pointer" }}
                                                    >
                                                        <span className="label">삭제</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2}>
                                            <form onSubmit={handleOnSubmit}>
                                                <div className="row">
                                                    <div className="col-10 col-12-medium" style={{ marginBottom: 10 }}>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            ref={titleRef}
                                                            onChange={handleFormDataChange}
                                                            placeholder={`${errors.title ? errors.title : "메세지를 입력해 주세요."}`}
                                                        />
                                                    </div>
                                                    <div className="col-2 col-12-medium">
                                                        <button type="submit" className="button primary fit">add</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
