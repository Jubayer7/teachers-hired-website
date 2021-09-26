import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const teacher of cart) {
        total = total + teacher.salary;
    }

    return (
        <div>
            <h4> Favourite Teacher: {props.cart.length}</h4>
            <h4>Total Budger:{total} </h4>
            <button className="btn">Hire</button>

        </div>
    );
};

export default Cart;