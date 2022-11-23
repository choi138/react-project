export interface ToDos {
    제목: string;
    날짜: string;
    _id: number;
}
export interface IToDo {
    name: ToDos[];
}

export interface IDetail {
    _id: number;
    제목: string;
    날짜: string;
    id: string;
    password: string;
}

export function getToDo() {
    return fetch('/post').then(res => res.json());
};

export function getDetail(id?: string) {
    return fetch(`/postdetail/${id}`).then(res => res.json());
}