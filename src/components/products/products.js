import React from 'react';
import './products.css';
import product1 from '../../imgs/product1.png';
import product2 from '../../imgs/product2.png';
import product3 from '../../imgs/product3.png';
import product4 from '../../imgs/product4.png';

function Products() {

    let products = [
        {
            img: product1,
            name: "The Life Lessons",
            description: "The Life Lessons is the book about self education and...",
            price: "$65 00"
        },
        {
            img: product2,
            name: "The Untold Tales",
            description: "One of the biggest art projects in the world of...",
            price: "$62 00"
        },
        {
            img: product3,
            name: "Hobbye Lobbye",
            description: "A great story about politicians and their secret private life...",
            price: "$49 00"
        },
        {
            img: product4,
            name: "Where They Sing",
            description: "The best selling novel of all times about love and...",
            price: "$58 00"
        },
    ] 

    let newProducts = products.map((item, i) => (
        <div key={i} className="product_item">
            <div className="product_img">
                <img style={{width: "100%"}} src={item.img} alt="book" />
                <div className="product_img_inner">
                    <div className="product_img_inner_icons">
                        <div className="product_img_inner_icon_block">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div className="product_img_inner_icon_block">
                            <i class="fas fa-link"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_text">
                <a href="#">{item.name}</a>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
            </div>
        </div>
    ));
        
    return (
        <div className="products_block">
            <div className="products_title"> 
                <h2>New & Notable</h2>
            </div>
            <div className="products_wrap">
                {newProducts}
            </div>
        </div>
    )
}

export default Products;