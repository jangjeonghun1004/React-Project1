import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { ToDo, todosRecoilState, todosSelector } from "../recoil/ToDoRecoil";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function ToDoList() {
    const [todos, setTodos] = useRecoilState(todosRecoilState);
    const todosRecoilValueLoadable = useRecoilValueLoadable(todosSelector);
    const [loading, setLoading] = useState<boolean>(true);

    //const API_BASE_URL = 'http://localhost:8080/todos';
    const API_BASE_URL = 'https://newallsoft.shop/todos';
    
    
    const initFormData = { id: Date.now(), title: '', completed: false };

    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, []);

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
   
    useEffect(() => {
        if (todosRecoilValueLoadable.state === 'hasValue' && todosRecoilValueLoadable.contents.length > 0) {
            setTodos(todosRecoilValueLoadable.contents);
            setLoading(false);
        } else if (todosRecoilValueLoadable.state === 'loading') {
            setLoading(true);
        }
    }, [todosRecoilValueLoadable]);

    const handleCompleted = async (id: number) => {
        const originalTodos = [...todos];
        const updatedTodos = todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item);
        const updatedTodo = updatedTodos.find((item) => item.id === id);
        const sortedTodos = updatedTodos.sort((a, b) => {
            if (a.completed === b.completed) return 0;
            return a.completed ? 1 : -1;
        });

        setTodos(sortedTodos); // Optimistic UI

        try {
            const response = await axios.patch(`${API_BASE_URL}`, updatedTodo);
            if (response.data.httpStatus !== 'OK') { throw ('500 INTERNAL SERVER ERROR'); }
        } catch (error) {
            setTodos(originalTodos); // roll-back
            console.log('Failed to update todo: ', error);
        }
    };

    const [formData, setFormData] = useState<ToDo>(initFormData);

    // formData 설정
    const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const [errors, setErrors] = useState<Partial<ToDo>>({});

    // 유효성 검사
    const validate = (): boolean => {
        const newErrors: Partial<ToDo> = {};

        if (!formData.title.trim()) {
            newErrors.title = 'title is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form 전송
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate()) {
            setFormData((prev) => ({ ...prev, id: Date.now() }));

            // Optimistic UI: 서버 요청 전에 Recoil 상태를 먼저 업데이트하여 사용자 경험을 향상.
            setTodos((prev) => [formData, ...prev]);
            if (titleRef.current) {
                titleRef.current.value = "";
            }

            try {
                const response = await axios.post(API_BASE_URL, formData);
                if (response.data.httpStatus === "OK" || response.data.contents.length > 0) {
                    setFormData(initFormData); // 데이터 초기화
                } else {
                    throw ("500 Internal Server Error.");
                }
            } catch (error) {
                console.log('Failed to create todo: ', error);

                // Rollback on error
                setTodos((prev) => prev.filter((item) => item.id !== formData.id));
            }
        } else {
            if (titleRef.current) {
                titleRef.current.focus();
            }
        }
    };

    const handleRemove = async (id: number) => {
        const originalTodos = [...todos];
        setTodos((prev) => prev.filter((item) => item.id != id)); // Optimistic UI

        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            if (response.data.httpStatus !== "OK") { throw ('500 INTERNAL SERVER ERROR'); }
        } catch (error) {
            setTodos(originalTodos); // Rollback UI
            console.log('Failed to remove todo:', error);
        }
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
                            <table >
                                <motion.tbody layout>
                                    <AnimatePresence>
                                        {todos.map((todo, index) => {
                                            return (
                                                <motion.tr
                                                    key={index}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <input type="radio" id={`${todo.id}`} checked={todo.completed} onChange={() => { }} />
                                                        <label
                                                            htmlFor={`${todo.id}`}
                                                            onClick={() => handleCompleted(todo.id)}
                                                            style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginBottom: 0 }}
                                                        > {todo.title}</label>
                                                    </td>
                                                    <td style={{ width: "10%", verticalAlign: "middle", textAlign: "center" }}>
                                                        <a
                                                            onClick={() => handleRemove(todo.id)}
                                                            className="icon solid fa-eraser"
                                                            style={{ fontSize: "1.3rem", cursor: "pointer" }}
                                                        >
                                                            <span className="label">삭제</span>
                                                        </a>
                                                    </td>
                                                </motion.tr>
                                            )
                                        })}
                                        {loading && <tr><td colSpan={2}>data loading...</td></tr>}
                                    </AnimatePresence>
                                </motion.tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2}>
                                            <form onSubmit={handleSubmit}>
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
