export interface ToDos {
    제목: string;
    날짜: string;
    _id: string;
}
export interface IToDo {
    name: ToDos[];
}

export function getToDo() {
    return fetch('/detail').then(res => res.json());
};