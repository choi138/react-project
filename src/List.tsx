import React from "react";
import { IToDo, ToDos } from "./api";
import { Link } from 'react-router-dom';
import styled from "styled-components";

interface IProps {
    todos: ToDos[];
    part: string;
    id: string;
    title: string;
    query: string;
};

const Input = styled.input`

`;

function List({ todos, part, id, title }: IProps) {
    return (
        <>
            <div>
                <h1>{title}</h1>
                {todos.map((todo: ToDos) => (
                    <>
                        <h2>{todo.제목}</h2>
                        {/* <h2>{todo.날짜}</h2> */}
                    </>
                ))}
            </div>
            <form action="/add" method="POST">
                <Input type="text" name="title" />
                <Input type="text" name="date" />
                <button>추가</button>
            </form>
        </>
    )
}

export default List