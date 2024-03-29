import React, { Component } from 'react';
import axios from 'axios';
import ShopWithPrice from './shop-with-price';

export default class CreateTodo extends Component {
                 constructor(props) {
                   super(props);

                   this.handleInputChange = this.handleInputChange.bind(this);
                   this.onSubmit = this.onSubmit.bind(this);
                   this.toggleChangeIsAvailable = this.toggleChangeIsAvailable.bind(
                     this
                   );
                   this.createShops = this.createShops.bind(this);
                   this.deleteShop = this.deleteShop.bind(this);

                   this.state = {
                     phone_name: "",
                     model: "",
                     ram: 1,
                     rom: 1,
                     selfie_camera: 2,
                     rear_camera: 2,
                     year: 2019,
                     availableShops: [],
                     phoneImage:null,
                     shops: [
                       {
                         shop_id: 1,
                         name: "idealz",
                         price: 0
                       },
                       {
                         shop_id: 2,
                         name: "dialcom",
                         price: 0
                       },
                       {
                         shop_id: 3,
                         name: "greenware",
                         price: 0
                       }
                     ]
                   };
                 }

              imageHandler = event => {
                this.setState({
                  phoneImage: event.target.files[0]
                });

                var formData = new FormData();
                formData.append("phoneImage", event.target.files[0]);

                axios.post("http://localhost:4000/phones/uploads", formData, { // receive two parameter endpoint url ,form data 
                })
                .then(res => { // then print response status
                  console.log(res.statusText)
                })
               
              }

                 handleInputChange(e) {
                   const target = e.target;
                   const name = target.name;
                   const value = target.value;

                   this.setState({
                     [name]: value
                   });
                 }

                 createShops = phoneInfo => {
                   this.setState(
                     {
                       availableShops: [...this.state.availableShops, phoneInfo]
                     },
                     () => {
                       console.log(this.state.availableShops);
                     }
                   );
                 };

                 deleteShop = index => {
                   
                   var array = [...this.state.availableShops]; // make a separate copy of the array
                   if (index !== -1) {
                     array.splice(index, 1);
                     this.setState({ availableShops: array });
                   }
                 };

                 toggleChangeIsAvailable() {
                   this.setState(prevState => ({
                     is_Available: !prevState.is_Available
                   }));
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
                     availableShops: this.state.availableShops,
                     phoneImage: this.state.phoneImage
                   };

                   axios
                     .post("http://localhost:4000/phones/add", newPhone)
                     .then(res => console.log(res.data));

                   this.setState({
                     phone_name: "",
                     model: "",
                     ram: "",
                     rom: 0,
                     selfie_camera: 2,
                     rear_camera: 2,
                     year: 2019,
                     is_Available: false,
                     availableShops: [],
                     phoneImage:null
                   });
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
                                 <input
                                   type="text"
                                   name="phone_name"
                                   className="form-control"
                                   value={this.state.phone_name}
                                   onChange={this.handleInputChange}
                                 />
                               </div>
                               <div className="form-group">
                                 <label>Model : </label>
                                 <select
                                   className="custom-select"
                                   name="model"
                                   onChange={this.handleInputChange}
                                 >
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
                                 <label htmlFor="exampleFormControlSelect1">
                                   Ram
                                 </label>
                                 <select
                                   className="form-control"
                                   name="ram"
                                   onChange={this.handleInputChange}
                                 >
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4</option>
                                   <option value="6">6</option>
                                   <option value="8">8</option>
                                 </select>
                               </div>
                               <div className="form-group">
                                 <label htmlFor="exampleFormControlSelect1">
                                   Rom
                                 </label>
                                 <select
                                   className="form-control"
                                   name="rom"
                                   onChange={this.handleInputChange}
                                 >
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="4">4</option>
                                   <option value="8">8</option>
                                   <option value="16">16</option>
                                   <option value="32">32</option>
                                   <option value="64">64</option>
                                   <option value="128">128</option>
                                 </select>
                               </div>
                             </div>
                             <div className="col-sm">
                               <div className="form-group">
                                 <label>Selfie Camera</label>
                                 <input
                                   className="form-control"
                                   name="selfie_camera"
                                   type="number"
                                   placeholder="Enter MP value"
                                   value={this.state.selfie_camera}
                                   onChange={this.handleInputChange}
                                 ></input>
                               </div>
                               <div className="form-group">
                                 <label>Rear Camera</label>
                                 <input
                                   className="form-control"
                                   name="rear_camera"
                                   type="number"
                                   placeholder="Enter MP value"
                                   value={this.state.rear_camera}
                                   onChange={this.handleInputChange}
                                 ></input>
                               </div>
                               <div className="form-group">
                                 <label htmlFor="exampleFormControlSelect1">
                                   Year
                                 </label>
                                 <select
                                   className="form-control"
                                   name="year"
                                   onChange={this.handleInputChange}
                                 >
                                   <option value="2017">2017</option>
                                   <option value="2018">2018</option>
                                   <option value="2019">2019</option>
                                 </select>
                               </div>
                               <div><label htmlFor="phoneImage">Phone Image</label>
                                 </div>  
                               <div className="input-group">                        
                                 <div className="input-group-prepend">
                                   <span
                                     className="input-group-text"
                                     id="inputGroupFileAddon01"
                                   >
                                     Upload
                                   </span>
                                 </div>
                                 <div className="custom-file">
                                 <form id="imageUpload" encType="multipart/form-data">
                                   <input
                                     type="file"
                                     accept="image/*"
                                     className="custom-file-input"
                                     name="phoneImage"
                                     id="inputGroupFile01"
                                     aria-describedby="inputGroupFileAddon01"
                                     onChange={this.imageHandler}
                                     onClick={(event)=> {event.target.value = null}}
                                   />
                                   </form>
                                   <label
                                     className="custom-file-label"
                                     htmlFor="inputGroupFile01"
                                   >
                                     {this.state.phoneImage ? this.state.phoneImage.name : "Choose file"}
                                   </label>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <ShopWithPrice
                             shops={this.state.shops}
                             createShops={this.createShops}
                             deleteShop={this.deleteShop}
                             availableShops={this.state.availableShops}
                           />
                           <div className="row">
                             <div className="form-group">
                               <input
                                 type="submit"
                                 value="Submit phone"
                                 className="btn btn-primary"
                               />
                             </div>
                           </div>
                         </div>
                       </form>
                     </div>
                   );
                 }
               }
