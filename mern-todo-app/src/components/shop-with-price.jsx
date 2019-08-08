import React, { Component } from 'react';

export default class ShopWithPrices extends Component {
         constructor(props) {
           super(props);
           this.state = {
             shops:this.props.shops,
              avalilableShops:[]
           }
         }

         createShops(e){

          let selectedShop = e.target.value;
         
   
           this.setState({
            avalilableShops: [
                   ...this.state.avalilableShops, 
               ]
           });
       }

         render() {

        const rows = this.state.avalilableShops.map((record) => {

            return (
              <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  value={this.props.selectedShop}
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Enter Price"
                />
              </div>
              <div className="col-md-2">
              <button type="button" class="btn btn-primary">Delete</button>
              </div>
            </div>
            );
        });

           return (
             <div>
             <div className="row">
               <form className="col-md-12">
                 <select
                   className="form-control select2"
                   onChange={this.createShops.bind(this)}
                 >
                   <option>Select</option>
                   <option>Car</option>
                   <option>Bike</option>
                   <option>Scooter</option>
                   <option>Cycle</option>
                   <option>Horse</option>
                 </select>
                
               </form>
               </div>
               );
               <br/>               
            {rows}           
             </div>
            
           );
         }
       }

