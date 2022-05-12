import React from 'react';

class Todo extends React.Component{

    render(){
        return (
            <div>
                <h2>
                    {this.props.todo.description}
                </h2>
                <p>
                    {this.props.todo.status}
                </p>
            </div>
        )
    }
}

export default Todo;