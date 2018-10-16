import React, { Component } from 'react';
class Product extends Component {
  render() {
    return (
           <div className="col-xs-13 col-sm-13 col-md-13 col-lg-13">
           	<div className="thumbnail">
           		<img alt="HTC 12 Plus" data-src="https://cdn.pricekart.com/mobile/htc-u12.jpg"/>
           		<div className="Name">
           			<h6>HTC U12 Plus</h6>
           			<p>
           				20.000.000 VND
           			</p>
           			<p>
           				<a href="/index.html" className="btn btn-Name_Of_Button">Click to Buy</a>
 
           			</p>
           		</div>
           	</div>
           </div>
    );
  }
}

export default Product;
