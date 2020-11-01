import React, {Component} from 'react';

class Todo extends Component {
   state={status:this.props.todoItem.status}
    constructor(props) {
        super(props);
        this.setState({status:this.props.todoItem.status})
    }

    render() {
        let {todoItem}=this.props
        return (
            <div>{ todoItem.status&&
               (<div>
                    { todoItem.id}-{todoItem.name}-{todoItem.age}-{todoItem.status.toString()}
                </div>)}

                {!todoItem.status&& (<div> <b>
                    { todoItem.id}-{todoItem.name}-{todoItem.age}-{todoItem.status.toString()}
                </b>

                </div>)}
            </div>
        );
    }
}

export default Todo;
