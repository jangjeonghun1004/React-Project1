
import axios from "axios";
import { atom, selector } from "recoil";


export interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

const todosRecoilState = atom<ToDo[]>({
    key: 'todosRecoilState',
    default: []
});

const todosSelector = selector<ToDo[]>({
    key: 'todosSelector',
    get: async () => {
        try {
            //const response = await axios.get('http://localhost:8080/todos');
            const response = await axios.get('https://43.201.218.59:8080/todos');
            console.log(response);
            return response.data.contents;
        } catch (error) {
            console.log('Failed to fetch todos: ', error);
            return [];
        }
    }
});

export { todosRecoilState, todosSelector }