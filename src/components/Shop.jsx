import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, fetchProducts } from "../redux/userActions";
import { Link } from "react-router-dom";

const Shop = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((user) => user.user)

    const { user } = useSelector((user) => user.user)

    useEffect(() => {


   
        if (products.length === 0) {
            dispatch(fetchProducts());
        }

        dispatch(fetchCart())

    }, [dispatch]);

    return (
        <div>
            <h1> this is a shop page  welccome {user.username}</h1>

            <Link to="/user/register"> REgister </Link>

            <div>
                {products &&
                    products.map((product) => (
                        <div>
                            <h2> {product.name} </h2>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shop;
