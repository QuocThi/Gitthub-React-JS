import React, { Component } from 'react';

class Product extends Component {
    // Tao constructor
    constructor(props)
    {
            super(props);
            this.onAddToCart = this.onAddToCart.bind(this);
    }
    onAddToCart(){
        alert(this.props.children + ' - ' + this.props.price);
        console.log(this.props.children);
    }
    // Cách 3 để bắt sự kiện
    //     onAddToCart2 = () =>{
    //     alert(this.props.children + ' - ' + this.props.price);
    //     console.log(this.props.children);
    // }

  render() {
    return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt={this.props.name} src="this.props.image" />
                        <div className="caption">
                            <h3>{this.props.children}</h3>
                            <p>
                                {this.props.price} VND
                            </p>
                            <p>
                            <a href="#index.html" className="btn btn-primary" onClick ={this.onAddToCart} >Click to Buy</a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default Product;
