
import  { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/axiosInstance';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Address = () => {

      
    const [addressArr , setAddressArr] = useState([])
    const [cart, setCart] = useState({})
    const [formData, setFormData] = useState({
        _id  : "",
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


    const navigate = useNavigate()

  
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


    const handleCreateCartOrder = async () =>{

        try {
            const res = await axiosInstance.post(`/order/createCartOrder?cartId=${cart._id}&addressId=${formData._id}`)
            if(res.status === 201){
                toast.success(res.data.message)
                setTimeout(() => {
                    navigate("/shop")
                }, 1000);
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
                    <h6><span className="icon_tag_alt"></span> Have a coupon? <Link>Click here</Link> to enter your code
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
                                <h4>Your Cart</h4>
                                <div className="checkout__order__products">Products <span>Total</span></div>

                                <ul>

                                    {cart.products && cart.products.map((product) =>  <li>{product.productId.name}<span>Rs {product.productId.price}</span></li> )}
                                
                                
                                </ul>


                                <div className="checkout__order__subtotal">Subtotal <span> Rs {cart.cartValue}</span></div>
                                <div className="checkout__order__total">Total <span> Rs {cart.cartValue}</span></div>


                                
                              
                                <div className="checkout__input__checkbox">
                                    <label for="cod">
                                        Cash On delivery
                                        <input type="checkbox" id="cod"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>


                                <div className="checkout__input__checkbox">
                                    <label for="onlinePay">
                                        Online Payment
                                        <input type="checkbox" id="onlinePay"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>


                                <button onClick={handleCreateCartOrder} type="button" className="site-btn">PLACE ORDER</button>
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