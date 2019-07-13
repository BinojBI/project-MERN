import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phone_name: '',
            model: '',
            ram: '',
            rom: 0,
            selfie_camera:0,
            rear_camera:0,
            year:2019,
            is_Available:false,
            shops:[]
        }
    }

    handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
     
        const newPhone = {
            phone_name: this.state.phone_name,
            model: this.state.model,
            ram: this.state.ram,
            rom: this.state.rom,
            selfie_camera: this.state.selfie_camera,
            rear_camera: this.state.rear_camera,
            year: this.state.year,
            is_Available: this.state.is_Available,
            shops: this.state.shops
            
        };

        axios.post('http://localhost:4000/phones/add', newPhone)
            .then(res => console.log(res.data));

        this.setState({
            phone_name: '',
            model: '',
            ram: '',
            rom: 0,
            selfie_camera:0,
            rear_camera:0,
            year:2019,
            is_Available:false,
            shops:[]
        })
    }
      render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Phone</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name : </label>
                        <input  type="text"
                                name="phone_name"
                                className="form-control"
                                value={this.state.phone_name}
                                onChange={this.onChangenameDescription}
                                />
                    </div>
                    <div className="form-group">
                    <label>Model : </label>
                        <select class="custom-select">                            
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
