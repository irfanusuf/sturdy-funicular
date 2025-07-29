import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/axiosInstance';
import { toast } from 'react-toastify';

const Address = () => {

      
    const [addressArr , setAddressArr] = useState([])
    const [cart, setCart] = useState({})
    const [formData, setFormData] = useState({
      firstName : "",
      lastName : "",
      street : "",
      city : "",
      district: "",
      state : "",
      pincode : "",
      country: "",
      email: "",
      mobile : "",
    });

  
     const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    const createAddressHandler = async () => {
      try {
        const res = await axiosInstance.post("/address/create", formData);

        if (res.status === 201) {
          toast.success(res.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Network Error!");
      }
    };


    const fetchAddress = async () =>{

        try {

        const res = await axiosInstance.get("/address/getAllAddresses");
        if(res.status === 200 ){
            setAddressArr(res.data.payload)
            setFormData(res.data.payload[0])
        }
            
        } catch (error) {
            console.error(error)
        }

    }


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



        useEffect(()=>{
            fetchAddress()
            fetchCartData()

        } , [])
           





  return (
    <div>
           <section className="checkout spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h6><span className="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                    </h6>
                </div>
            </div>



            <div className="checkout__form">
                <h4>Billing Details</h4>
                <form>
                    <div className="row">
                        <div className="col-lg-8 col-md-6">

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>First Name<span>*</span></p>
                                        <input type="text"  value={formData.firstName} name='firstName' onChange={(e)=>{handleInputChange(e)}}/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Last Name<span>*</span></p>
                                        <input type="text" value={formData.lastName} name='lastName' onChange={(e)=>{handleInputChange(e)}}/>
                                    </div>
                                </div>

                            </div>

                           


                            {/* <div className="checkout__input">
                                <p>Address<span>*</span></p>
                                <input type="text" placeholder="Street Address" className="checkout__input__add"/>
                                <input type="text" placeholder="Apartment, suite, unite ect (optinal)"/>
                            </div> */}

                            <div className="checkout__input">
                                <p>Town/City<span>*</span></p>
                                <input type="text"value={formData.city}  name='city' onChange={(e)=>{handleInputChange(e)}}/>
                            </div>

                            <div className="checkout__input">
                                <p>District<span>*</span></p>
                                <input type="text"value={formData.district}  name='district' onChange={(e)=>{handleInputChange(e)}}/>
                            </div>

                            <div className="checkout__input">
                                <p>State<span>*</span></p>
                                <input type="text" value={formData.state}  name='state' onChange={(e)=>{handleInputChange(e)}}/>
                            </div>

                            <div className="checkout__input">
                                <p>Postcode / ZIP<span>*</span></p>
                                <input type="text" value={formData.pincode}  name='pincode' onChange={(e)=>{handleInputChange(e)}}/>
                            </div>

                             <div className="checkout__input">
                                <p>Country<span>*</span></p>
                                <input type="text" value={formData.country}  name='country' onChange={(e)=>{handleInputChange(e)}}/>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input type="text"value={formData.mobile} name='mobile' onChange={(e)=>{handleInputChange(e)}}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input type="text"value={formData.email} name='email' onChange={(e)=>{handleInputChange(e)}}/>
                                    </div>
                                </div>
                            </div>


                                <div className='d-flex justify-content-end'>
                                    <button onClick={createAddressHandler} type='button' className='site-btn my-3'> Add Address</button>
                                </div>


                            <div className="checkout__input__checkbox">
                                <label for="acc">
                                    Create a new address?
                                    <input type="checkbox" id="acc"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <p>Create a  new address account by entering the information above. </p>

                            {/* <div className="checkout__input">
                                <p>Account Password<span>*</span></p>
                                <input type="text"/>
                            </div> */}


                            <div className="checkout__input__checkbox">
                                <label for="diff-acc">
                                    Ship to a different address?
                                    <input type="checkbox" id="diff-acc"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="checkout__input">
                                <p>Order notes<span>*</span></p>
                                <input type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery."/>
                            </div>
                        </div>




                        <div className="col-lg-4 col-md-6">
                            <div className="checkout__order">
                                <h4>Your Order</h4>
                                <div className="checkout__order__products">Products <span>Total</span></div>
                                <ul>
                                    <li>Vegetable’s Package <span>$75.99</span></li>
                                    <li>Fresh Vegetable <span>$151.99</span></li>
                                    <li>Organic Bananas <span>$53.99</span></li>
                                </ul>
                                <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                                <div className="checkout__order__total">Total <span>$750.99</span></div>
                                <div className="checkout__input__checkbox">
                                    <label for="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <div className="checkout__input__checkbox">
                                    <label for="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="checkout__input__checkbox">
                                    <label for="paypal">
                                        Paypal
                                        <input type="checkbox" id="paypal"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <button type="submit" className="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Address