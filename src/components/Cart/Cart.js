import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let techerSearch = [];
    for (const teacher of cart) {
        total = total + teacher.salary;
        techerSearch = techerSearch + teacher.name + ', ';
    }


    return (
        <div className="cart">
            <h4> Favourite Teacher: {props.cart.length}</h4>
            <h4>Total Cost:    {total} </h4>
            <h4>Teacher's Name:{techerSearch} </h4>
            <button className="btn">Hire</button>

        </div>
    );
};

export default Cart;