import React, { Component } from 'react';

export default class ShopWithPrices extends Component {
         constructor(props) {
           super(props);
         }

         render() {
           return (       
                   <div class="wrapper">
                   <div class="form-group col-md-6">
                     <input type="email" class="form-control" id="inputEmail4" value={this.props.selectedShop}/>
                   </div>
                   <div class="form-group col-md-6">
                     <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                   </div>
                 </div>
           );
         }
       }

