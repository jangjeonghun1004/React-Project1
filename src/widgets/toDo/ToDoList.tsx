import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { ToDo, todosRecoilState, todosSelector } from "../../recoil/ToDoRecoil";
import axios from "axios";

export default function ToDoList() {
    const [todos, setTodos] = useRecoilState(todosRecoilState);
    const todosRecoilValueLoadable = useRecoilValueLoadable(todosSelector);
    const [loading, setLoading] = useState<boolean>(true);
    const API_BASE_URL = 'http://localhost:8080/todos';


    useEffect(() => {
        if (todosRecoilValueLoadable.state === 'hasValue' && todosRecoilValueLoadable.contents.length > 0) {
            setTodos(todosRecoilValueLoadable.contents);
            setLoading(false);
        } else if (todosRecoilValueLoadable.state === 'loading') {
            setLoading(true);
        }
    }, [todosRecoilValueLoadable]);

    const handleCompleted = (id: number) => {
        setTodos((prev) => prev.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
    };

    const [formData, setFormData] = useState<ToDo>({
        id: Date.now(),
        title: "",
        completed: false
    });

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
            if(titleRef.current) {
                titleRef.current.value = "";
            }

            try {
                const response = await axios.post(API_BASE_URL, formData);
                if(response.data.httpStatus !== "OK" || response.data.contents.length <= 0) {
                    throw("500 Internal Server Error.");
                }
            }catch(error) {
                console.log('Failed to create todo: ', error);

                // Rollback on error
                setTodos((prev) => prev.filter((item) => item.id !== formData.id));
            }
        } else {
            if (titleRef.current) {
                titleRef.current.focus();
            }

            console.log('there are some error.');
        }
    };

    // focus
    const titleRef = useRef<HTMLInputElement>(null);

    return (
        <section>
            <header className="main">
                <h1>ToDo List</h1>
            </header>
            <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

            <div className="table-wrapper">
                <table >
                    <tbody>
                        {todos.map((todo, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="radio" id={`${todo.id}`} checked={todo.completed} onChange={() => { }} />
                                        <label
                                            htmlFor={`${todo.id}`}
                                            onClick={() => handleCompleted(todo.id)}
                                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                        > {todo.title}</label>
                                    </td>
                                    <td style={{ width: "10%", verticalAlign: "middle", textAlign: "center" }}>
                                        <a href="#" className="icon solid fa-eraser" style={{ fontSize: "1.3rem" }}>
                                            <span className="label">Twitter</span>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}

                        {loading && <tr><td colSpan={2}>data loading...</td></tr>}
                    </tbody>
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
    );
}