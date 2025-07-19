import React from 'react'
import { Link } from 'react-router-dom'
import { featuredProductsArr } from '../../data/featuredProductsArr'

const FeaturedProduct = () => {
    
// api call to get featured products from backend

  return (
   <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div class="featured__controls">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row featured__filter">
                 {featuredProductsArr.map(product => <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" style={{backgroundImage : `url(${product.image})`}}>
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><Link to={`/product/${product.id}`}> {product.name}</Link></h6>
                            <h5>Rs {product.price}</h5>
                        </div>
                    </div>
                </div> )}
            </div>
        </div>
    </section>
  )
}

export default FeaturedProduct