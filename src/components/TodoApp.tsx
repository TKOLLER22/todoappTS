import { SetStateAction, useState } from "react"

function TodoApp(){

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function handleInputChange(event){
        setNewTodo(event.target.value);
    }   

    function addTodo(){
        if(newTodo.trim() !== ""){
            setTodos(t => {return JSON.parse(JSON.stringify(newTodo)).push(t)});
        }
    }

    function deleteTodo(index: number){
        const updatedTodos = todos.filter((_, i) => i!==index);
        setTodos(updatedTodos)
    }

    function moveTodoUp(index: number){
        if(index > 0){
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index-1]] =
            [updatedTodos[index-1], updatedTodos[index]]
            setTodos(updatedTodos);
        }
    }

    function moveTodoDown(index: number){
        if(index < todos.length - 1){
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index+1]] =
            [updatedTodos[index+1], updatedTodos[index]]
            setTodos(updatedTodos);
        }
    }

    return<>
        <div className="app-container">
            <div className="header-container">
                <h1>Todo App</h1>
            </div>

            <div className="input-container">
                <input value={newTodo} type="text" placeholder="Todo..." onChange={handleInputChange}/>
                <button
                onClick={addTodo}
                >Add</button>
            </div>
            
            <div className="todos-container">
                <ol>
                    {todos.length < 1 ? <h1 className="info-msg"><i>Looks empty...</i></h1> :
                    todos.map((todo, index) =>
                        <li key={index}>
                            <span className="text">{todo}</span>
                            <button 
                            className="delete-button"
                            onClick={() => deleteTodo(index)}
                            >
                                Delete
                            </button>

                            <button 
                            className="moveUp-button"
                            onClick={() => moveTodoUp(index)}
                            >Up
                            </button>

                            <button 
                            className="moveDown-button"
                            onClick={() => moveTodoDown(index)}
                            >Down
                            </button>
                        </li>)
                    }    
                </ol> 
            </div>

        </div>
    </>
}

export default TodoApp