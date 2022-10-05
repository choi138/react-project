import React from "react";
import { IToDo, ToDos } from "./api";

interface IProps {
    todos: ToDos[];
    part: string;
    id: string;
    title: string;
    query: string;
};

function List({ todos, part, id, title }: IProps) {
    return (
        <div>
            <h1>{title}</h1>
            {todos.map((todo: ToDos) => (
                <>
                    <h2>{todo.제목}</h2>
                    {/* <h2>{todo.날짜}</h2> */}
                </>
            ))}
        </div>
    )
}

export default List