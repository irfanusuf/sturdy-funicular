import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/axiosInstance'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';


const Cart = () => {


    const [cart, setCart] = useState({})
    const [loadData , setLoadData] = useState(false)


    const fetchCartData = async () => {
        try {
            const res = await axiosInstance.get("/cart/getCart")

            if (res.status === 200) {
                setCart(res.data.payload)
            }
        } catch (error) {
            console.error(error)
        }
    }



       const handleRemoveFromCart = async (productId) => {
            try {
                const res = await axiosInstance.get(`/cart/removeFromCart/${productId}`)
                if (res.status === 200) {
                    setLoadData(!loadData)
                  toast.success(res.data.message)

                }
            } catch (error) {
                console.error(error)
            }
        }
    

    useEffect(() => {
        fetchCartData()
    }, [loadData])






    return (
        <section class="shoping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart && cart.products && cart.products.map(

                                            (product) => <tr>
                                                <td class="shoping__cart__item">
                                                    <img src="img/cart/cart-1.jpg" alt="" />
                                                    <h5>{product && product.productId.name}</h5>
                                                </td>
                                                <td class="shoping__cart__price">
                                                    Rs {product.productId.price}
                                                </td>
                                                <td class="shoping__cart__quantity">
                                                    <div class="quantity">
                                                        <div class="pro-qty">
                                                            <input type="text" value= {product.quantity} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="shoping__cart__total">
                                                   Rs {product.productId.price * product.quantity}
                                                </td>
                                                <td >
                                                  <MdDelete style={{color : "red" , fontSize :20}} onClick={()=>{
                                                    handleRemoveFromCart(product.productId._id)
                                                  }}/>
                                                </td>
                                            </tr>
                                        )
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__btns">
                            <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                Upadate Cart</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__continue">
                            <div class="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" class="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__checkout">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span> Rs {cart.cartValue}</span></li>
                                <li>Total <span> Rs {cart.cartValue}</span></li>
                            </ul>
                            <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart