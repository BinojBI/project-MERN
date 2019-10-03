import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const sort_buttons = {
    marginRight:20,
    marginBottom:20,
  };

const Todo = props => (
    <tr>
         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/phones/')
            .then(response => {
                console.log(response.data);
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {

        const cards = this.state.todos.map( (currentPhone, i) => { 
            return (
                <div key={i} className="col-md-3 col-sm-6 col-xs-12" style={{paddingLeft:0}}>
                <div className="card" style={{ width: 200, textAlign: "center", marginBottom:20, padding:0 }} >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{currentPhone.phone_name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={"/info/"+currentPhone._id}>Info</Link>
                    </div>
                </div>
                </div>

            )
        })
    
    return(
        <div className="container">
            <div className="row">
            <button type="button" className="btn btn-info" style={sort_buttons}>Latest</button>
            <button type="button" className="btn btn-info" style={sort_buttons}>Price</button>
            <button type="button" className="btn btn-info" style={sort_buttons}>Samsung</button>
            <button type="button" className="btn btn-info" style={sort_buttons}>Apple</button>
            <button type="button" className="btn btn-info" style={sort_buttons}>Huawei</button>
            <button type="button" className="btn btn-info" style={sort_buttons}>Xiaomi</button>
            </div>
            <div className="row">
                {cards}
            </div>     
        </div>
    )
    }
}