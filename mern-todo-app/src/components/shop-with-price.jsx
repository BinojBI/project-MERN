import React, { Component } from 'react';

class ShopWithPrices extends Component {
         constructor(props) {
           super(props);

           this.handleInputChange = this.handleInputChange.bind(this);

           this.state = {
            phone_price:0,
            shop_name:null,
            phone_color:null
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

      createShops(e){

        e.preventDefault();
        let shopName = this.state.shop_name;
        let phonePrice = this.state.phone_price;
        let phoneColor = this.state.phone_color;
    
        const phoneInfo = {'shop_name':shopName, 'phone_price':phonePrice, 'phone_color':phoneColor};
    
        this.props.createShops(phoneInfo);  //This will update the state in parent component.
    }      

         render() {

        const rows = this.props.availableShops && this.props.availableShops.map((record,index) => {   
            
            return (
                  <tr key={index}>
                    <td>{record.shop_name}</td>
                    <td>{record.phone_color}</td>
                    <td>{record.phone_price}</td>                    
                    <td>
                      <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() =>this.props.deleteShop(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
            );
        });

           return (
             <div>
               <label>Add shops that phone already available...</label>
               <div className="row">
                 <div className="col-md-3">
                   <div className="form-group">
                     <select
                       name="shop_name"
                       className="form-control select2"
                       onChange={this.handleInputChange}
                     >
                       <option hidden>Select shop</option>
                       {this.props.shops.map((shops) => (
                         <option key={shops.shop_id} value={shops.name}>
                           {shops.name}
                         </option>
                       ))}
                       ;
                     </select>
                   </div>
                 </div>
                 <div className="col-md-3">
                   <div className="form-group">
                     <select
                       className="form-control"
                       name="phone_color"
                       onChange={this.handleInputChange}
                       placeholder="Color"
                     >
                       <option hidden>Color</option>
                       <option value="black">Black</option>
                       <option value="red">Red</option>
                       <option value="blue">Blue</option>
                       <option value="white">White</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-md-4">
                   <div className="form-group">
                     <input
                       type="number"
                       name="phone_price"
                       placeholder="Price"
                       className="form-control"
                       value={this.state.phone_price}
                       onChange={this.handleInputChange}
                     />
                   </div>
                 </div>
                 <div className="col-md-2">
                   <button
                     type="button"
                     className="btn btn-primary"
                     onClick={this.createShops.bind(this)}
                   >
                     Add
                   </button>
                 </div>
               </div>
               <br />
               <table className="table table-striped">
                 <thead>
                   <tr>
                     <th scope="col">Shop name</th>
                     <th scope="col">Color</th>
                     <th scope="col">Price</th>
                     <th scope="col">Remove</th>
                   </tr>
                 </thead>
                 <tbody>{rows}</tbody>
               </table>
             </div>
           );
         }
       }

export default ShopWithPrices;

