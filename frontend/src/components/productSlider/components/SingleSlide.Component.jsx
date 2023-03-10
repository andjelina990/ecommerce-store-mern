import React from 'react';
import CartBoxOnHoverComponent from './CartBoxOnHover.Component';
import VoteStarsComponent from './VoteStars.Component';

function SingleSlideComponent({ad}) {
    return (
        <div className='card slider-card'>
            <div className="imgWrapper">
                <a href="">
                    <span>
                        <img src={ad.imgUrl || "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"} />                        
                    </span>
                    <span className='imgHover'>
                        <img src={ad.imgUrl || "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"} />                        
                    </span>
                </a>
                <CartBoxOnHoverComponent/>   
            </div>            
            <a href=""><h3 className='title'>{ad.title.slice(0, 25)}</h3></a>
            <div className="price-stars-wrapper">
                <div className="price-content">                                
                    <h4 className='price'>${ad.price}</h4>
                </div>
                <div className="comment-note">
                    <VoteStarsComponent/>
                </div>
            </div>
            <button className='addToCart'>Add To Cart</button>
        </div>
    );
}

export default SingleSlideComponent;