import React, {Component} from 'react';

class Product extends Component {
  render(){
    var products = [
      {
        id: 1,
        title: 'Iphone 6',
        price: 10000000,
        img: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-64gb-likenew-didongviet.jpg',
      },
      {
        id: 2,
        title: 'Samsung Galaxy S7',
        price: 7000000,
        img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
      },
      {
        id: 3,
        title: 'google pixel ',
        price: 15000000,
        img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
      },
      {
        id: 4,
        title: 'Xiaomi Redmi Note 2',
        price: 20000000,
        img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png',
      },
    ];
    var elements = products.map((product, index) => {
    return  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="thumbnail">
                <img src={product.img} alt={product.title}/>
                <div className="caption">
                  <h3>{product.title}</h3>
                  <p>
                    {product.price} VND
                  </p>
                </div>
                <button type="button" className="btn btn-success">Mua hàng</button>
              </div>
            </div>
    });
    return(
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {elements}
        </div>
      </div>
    );
  }
}

export default Product;