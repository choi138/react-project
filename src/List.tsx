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
    const onClick = (e: any) => {
        let writeCount = e.target.dataset.id; // 클릭한 요소의 data-id값을 가져옴
        let nowClick = e.target; // 클릭한 요소를 가져옴
        $.ajax({
            method: "DELETE",
            url: "delete",
            data: { _id: writeCount },
        }).done(() => {
            nowClick.parent('li').fadeOut(); // 클릭한 요소의 부모요소를 삭제
            console.log("삭제완료");
        }).fail((xhr, textStatus, errorThrown) => {
            console.log(xhr, textStatus, errorThrown);
        })
    };
    return (
        <>
            <div>
                <h1>{title}</h1>
                {todos.map((todo: ToDos) => (
                    <>
                        <h2>{todo._id}: {todo.제목}</h2>
                        <p>{todo.날짜}</p>
                        <button data-id={todo._id} onClick={onClick}>삭제</button>
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