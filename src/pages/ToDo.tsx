import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../store/slices/todoSlice';
import Timer from "../shared/Timer";
import SubmitButton from "../shared/buttons/SubmitBtn";
import Loader1 from "../shared/loaders/Loader1";
import { TodoType } from "../types/TodoType";


export default function ToDoList() {
    const dispatch = useDispatch<AppDispatch>();
    const { todos, status, error } = useSelector((state: RootState) => state.todos);
    const titleRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);


    const handleToggleComplete = (todo: { id: number; title: string; completed: boolean }) => {
        dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const handleAddTodo = (formData: FormData) => {
        if (validateFormData(formData)) {
            dispatch(addTodo({
                id: Date.now(),
                title: formData.get("title") as string,
                completed: false
            }));
        } else {
            if (titleRef.current) {
                titleRef.current.focus();
            }
        }
    };

    // 유효성 검사(formData)
    const [validateFormDataErrors, setValidateFormDataErrors] = useState<Partial<TodoType>>({});
    const validateFormData = (formData: FormData): boolean => {
        const newErrors: Partial<TodoType> = {};

        formData.forEach((value, key) => {
            if (key === 'title' && !value) {
                newErrors.title = `${key} is required`;
            }
        });

        setValidateFormDataErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1 style={{ textAlign: "center" }}>To Do List</h1>
                            <Timer />
                        </header>

                        <div className="table-wrapper">

                            <table >
                                <tbody>
                                    {todos.map((todo, index) => {
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

                                    {status === 'loading' && <tr><td colSpan={2} style={{ textAlign: "center" }}><Loader1 /></td></tr>}
                                    {error && <tr><td colSpan={2} style={{ textAlign: "center" }}>Error: {error}</td></tr>}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2}>
                                            <form action={handleAddTodo}>
                                                <div className="row">
                                                    <div className="col-10 col-12-medium" style={{ marginBottom: 10 }}>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            ref={titleRef}
                                                            placeholder={validateFormDataErrors.title || "메세지를 입력해 주세요."}
                                                        />
                                                    </div>
                                                    <div className="col-2 col-12-medium">
                                                        <SubmitButton title='ADD' />
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
