import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Information.css'

const Information = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, age, gender, img, subject, salary } = props.teacher

    return (
        <div className="container">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="inform">
                <h3>Name: {name}</h3>
                <h4>Gender: {gender}</h4>
                <h4>Subject: {subject}</h4>
                <h4>Salary: {salary}</h4>
                <button
                    onClick={() => props.addToCart(props.teacher)}
                    className="button"
                >{element} Add to chart</button>
            </div>

        </div>
    );
};

export default Information;