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
            <div style={{ marginTop: 10 }}>
                <h3>Create New Phone</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group">
                                    <label>Name : </label>
                                    <input type="text"
                                        name="phone_name"
                                        className="form-control"
                                        value={this.state.phone_name}
                                        onChange={this.onChangenameDescription}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Model : </label>
                                    <select className="custom-select">
                                        <option value="Samsung">Samsung</option>
                                        <option value="Huawei">Huawei</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Xiaomi">Xiaomi</option>
                                        <option value="Nokia">Nokia</option>
                                        <option value="Oppo">Oppo</option>
                                        <option value="Vivo">Vivo</option>
                                        <option value="Asus">Asus</option>
                                        <option value="Lenovo">Lenovo</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Ram</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>6</option>
                                        <option>8</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Rom</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>4</option>
                                        <option>8</option>
                                        <option>16</option>
                                        <option>32</option>
                                        <option>64</option>
                                        <option>128</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-row">
                                   <div className="form-group">
                                        <label>Selfie Camera</label>
                                        <input className="form-control" type="number" placeholder="Enter MP value"></input>
                                    </div>
                                  
                                    <div className="form-group">
                                        <label>Rear Camera</label>                               
                                        <input className="form-control" type="number" placeholder="Enter MP value"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input type="submit" value="Create Todo" className="btn btn-primary" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
