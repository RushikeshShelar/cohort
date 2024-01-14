import { useState, useEffect } from "react";

import Todos from "./Todos";

const CreateTodo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    let debouncedFetch = (delaytime) => {
        let timeoutId;
        return function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                
            }, delaytime);
        }
    }

  
    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(async (res) => {
                console.log("Called")
                const json = await res.json();
                setTodos(json);
            })
    }, []);

    const addTodo = () => {
        fetch("http://localhost:3000/todo", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description
            })
        })
            .then(() => {
                alert('Todo Added');
            })

    }

    return (
        <>
            <div>
                <input
                    style={{
                        padding: 10,
                        margin: 10,
                    }}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" placeholder="Title" /> <br />
                <input
                    style={{
                        padding: 10,
                        margin: 10,
                    }}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text" placeholder="Description" /> <br />

                <button
                    style={{
                        padding: 10,
                        marginLeft: 10
                    }}

                    onClick={addTodo}
                >Add a Todos</button>
            </div>
            <Todos todos={todos} />
        </>
    );
}

export default CreateTodo;