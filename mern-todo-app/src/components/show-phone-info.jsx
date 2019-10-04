import React, { Component } from 'react';
import axios from 'axios';
import Pic from "../pic/mobile.png"
import FontAwesome from "@fortawesome/fontawesome-free"

const phonePic={
    height:300,
    width:"auto"
}

export default class ShowPhoneInfo extends Component {

    constructor(props){
        super(props);
        
        this.titleCase = this.titleCase.bind(this);
        this.getstores = this.getstores.bind(this);

        this.state={
            shops:null,
            phoneName:"",
            numofShops:0,
            prices:[],
            model:"",
            ram:0,
            rom:0,
            rearCamera:0,
            selfieCamera:0,
            YearOfProduce:0,
            battery:0,
            network:0,
            duelSim:false,

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/phones/'+this.props.match.params.id)
            .then(response => {
                let result = this.getstores(response.data.availableShops);
                this.setState({
                    shops: response.data.availableShops,
                    phoneName: response.data.phone_name,
                    numofShops:response.data.availableShops.length,
                    prices:result,
                    model: response.data.model,
                    ram: response.data.ram,
                    rom: response.data.rom,
                    rearCamera: response.data.rear_camera,
                    selfieCamera: response.data.selfie_camera,
                    YearOfProduce: response.data.year,

                }, ()=>{console.log(response.data)})   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    titleCase (str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }

    getstores(shops){
       let result = shops.map(a => a.phone_price)
        return result;
    }

    render() {

        const rows = this.state.shops && this.state.shops.map((record,index) => {   
            
            return (
                <tr key={index}>
                <th width="150px">{record.shop_name}</th>
                    <td>{record.phone_color}</td>
                    <td>{record.phone_price}</td>
                </tr>  

            );
        });

        return (
            <div>
                <div className="container"  style={{marginTop:20}}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Pic} className="img-fluid" alt="Responsive image" style={phonePic}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                            <div className="col-md-12 Heading">
                            <h2 style={{marginBottom:0}}>{this.titleCase(this.state.phoneName)}</h2>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                <div>Buyer Ratings
                               
                               <i className="fa fas-star"></i>&nbsp;&nbsp;
                               <i className="fa fa-star"></i>&nbsp;
                               <i className="fa fa-star"></i>&nbsp;
                               <i className="fa fa-star"></i>&nbsp;
                               <i className="fa fa-star"></i>
                               </div>
                               <div>
                                   <h5 style={{display:"inline", color:"#4CC417"}}>Available at</h5>&nbsp;&nbsp;
                                   <h3  style={{display:"inline", color:"#38ACEC"}}>{this.state.numofShops} {this.state.numofShops>1?"stores":"store"}</h3>&nbsp;                                                                
                               </div> 
                                </div>
                                
                                <div className="col-md-7"  style={{padding:12}} >
                                    <h6 style={{display:"inline"}} >{this.state.prices.length>1?"from ":"at "} Rs. </h6>
                                    <h1 style={{display:"inline", color:"#4CC417", fontFamily:"fantasy"}} >{this.state.prices[0]}</h1>
                                    {this.state.prices.length>1?
                                    <div style={{display:"inline"}}>
                                   <h6 style={{display:"inline"}}> to</h6>
                                    <h1 style={{color:"#FFC321", fontFamily:"fantasy"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.prices[this.state.prices.length-1]}</h1></div>
                                    :""
                                }
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <table className="table">
                                        <tbody>
                                              {rows}                                      
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                           
                                              
                        </div>
                    </div>
                    <div className="row"  style={{marginTop:40}}>
                        <div className="col-md-12">
                            <div className="heading">
                                <h4>Specification</h4>
                            </div>
                        <table className="table table-striped">
                        <tbody>
                            <tr>
                            <th width="200px">Model</th>
                                <td>{this.state.model}</td>
                            </tr>
                            <tr>
                            <th>Ram</th>
                                <td>{this.state.ram}</td>                               
                            </tr>
                            <tr>
                            <th>Rom</th>
                                <td>{this.state.rom}</td>                                
                            </tr>
                            <tr>
                            <th>Rear Camera</th>
                                <td>{this.state.rearCamera}</td>                                
                            </tr>
                            <tr>
                            <th>Selfie Camera</th>
                                <td>{this.state.selfieCamera}</td>                                
                            </tr>
                            <tr>
                            <th>Year of produce</th>
                                <td>{this.state.YearOfProduce}</td>                                
                            </tr>
                            <tr>
                            <th>Battery</th>
                                <td>johncarter@mail.com</td>                                
                            </tr>
                            <tr>
                            <th>Sim slots</th>
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
