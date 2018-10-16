import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'
class App extends Component {

    onClick(){
        console.log('Day la app component!');
    }

  render() {
        var products = [
        {
            id : 1,
            name : 'HTC U12 Plus',
            price : 15000000,
            image : 'https://xdavn.com/images/201805/thumb_img/488-gthumb-HTC_U12_plus.jpg',
            status : true 
        },
        {
            id : 2,
            name : 'HTC U Ultra',
            price : 12000000,
            image : 'https://images.airehon.com/products/2017/3/21142/thumbnail/dien-thoai-htc-u-ultra-gia-tot-nhat.jpg',
            status : true
        },
        {
            id : 3,
            name : 'HTC 10',
            price : 10000000,
            image : 'https://pipe.tikicdn.com/cache/200x200/media/catalog/product/h/t/htc10silver1.u425.d20160524.t163116.jpg',
            status : true
        }
    ];

    let elements = products.map((product,index) =>
    {
        let result = '';
        if(product.status)
        {
        result =  <Product   
            key={product.id} 
            price= {product.price}
            image={product.image}
            > 
            {product.name}
            </Product>
        }
        return result;
    });

    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/index.html">Props</a>
                </div>
            </nav>
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {elements}
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="button" className="btn btn-warning" onClick={ this.onClick }>
                                Click Me!
                                </button>
                            </div>
                        </div>
                    </div>
        </div>
        );
  }
}

export default App;
