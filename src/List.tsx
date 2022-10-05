import React from "react";
import { IToDo } from "./api";

interface IProps {
    todos: IToDo[];
    part: string;
    id: string;
    title: string;
    query: string;
};

function List({ todos, part, id, title }: IProps) {
    return (
        <div>
            <h1>{title}</h1>
            {todos.map((todo) => (
                <div>{todo.name}</div>
            ))}
        </div>
    )
}

export default List