import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getToDo, IToDo } from "./api";
import List from "./List";

interface TodoProp {
    title: string;
}

interface TodosProp {
    name: TodoProp[];
}

function ToDo() {

    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState([]);
    const getTodo = async () => {
        const json = await (await fetch("/detail")).json();
        setTodo(json.name.제목);
        setLoading(false);
        console.log(json.name);
        console.log(todo);
        return (
            <div>{json.name}</div>
        )
    };

    useEffect(() => {
        getTodo();
    }, [])

    return (
        <>
            {
                loading ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <h1>hello</h1>
                    </>
                )
            }
        </>
    )
};

export default ToDo;