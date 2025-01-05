import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import ToDoList from "../widgets/toDo/ToDoList";

export default function ToDo() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <ToDoList />
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
