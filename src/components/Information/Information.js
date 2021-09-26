import React from 'react';
import './Information.css'

const Information = (props) => {
    // console.log(props)
    const { name, age, gender, img, subject, salary } = props.teacher
    return (
        <div className="container">
            <div>
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
                    >Add to chart</button>
                </div>
            </div>

        </div>
    );
};

export default Information;