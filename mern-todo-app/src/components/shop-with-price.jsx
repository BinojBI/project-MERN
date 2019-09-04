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
                   ...this.state.avalilableShops, selectedShop
               ]
           });
       }

         render() {

        const rows = this.state.avalilableShops.map((record,index) => {
            
            return (
                  <tr key={index}>
                    <td>{record}</td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Price"
                      />
                    </td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        Delete
                      </button>
                    </td>
                  </tr>

            );
        });

           return (
             <div>
               <label>
                 Add shops that phone already available...
               </label>
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
               <br/>  
               <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Shop name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
            {rows}   
            </tbody>
              </table>        
             </div>
            
           );
         }
       }

