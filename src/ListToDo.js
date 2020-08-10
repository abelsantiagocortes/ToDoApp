import React from 'react';

const ListTodo = ({ todos , mark}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{mark(todo.id)}}>{todo.content}</span>
                </div>
            )

        })
    ) :  (
            <p className="center">You Finished all your Tasks</p>
        );
    return (
        <div >
            {todoList}
        </div>
    )
}

export default ListTodo;