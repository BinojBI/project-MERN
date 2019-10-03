import React, { Component } from 'react';
import axios from 'axios';
import Pic from "../pic/mobile.png"
import FontAwesome from "@fortawesome/fontawesome-free"

const phonePic={
    height:300,
    width:"auto"
}


export default class ShowPhoneInfo extends Component {

    componentDidMount() {
        axios.get('http://localhost:4000/phones/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="container"  style={{marginTop:20}}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Pic} className="img-fluid" alt="Responsive image" style={phonePic}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="Heading">
                                <h3 style={{marginBottom:0}}>Nokia 6.1Plus</h3>
                            </div>
                            <div>Buyer Ratings
                                <div>
                                <FontAwesome name='rocket' />
                                </div>
                               </div>
                        </div>
                    </div>
                    <div className="row"  style={{marginTop:40}}>
                        <div className="col-md-12">
                        <table className="table table-striped">
                        <tbody>
                            <tr>
                            <th width="200px">Row</th>
                                <td>1</td>
                            </tr>
                            <tr>
                            <th>First Name</th>
                                <td>John</td>                               
                            </tr>
                            <tr>
                            <th>Last Name</th>
                                <td>Carter</td>                                
                            </tr>
                            <tr>
                            <th>Email</th>
                                <td>johncarter@mail.com</td>                                
                            </tr>
                        </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
