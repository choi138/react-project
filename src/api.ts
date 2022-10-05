export interface IToDo {
    name: string;
}

export function getToDo() {
    return fetch('/detail').then(res => res.json());
};