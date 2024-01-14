const Todos = ({
    todos
}) => {
    return (
        <div id="Todos">
            {todos.map((todo, idx) => (
                <div key={idx}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                </div>
            ))}
        </div>
    );
}

export default Todos;