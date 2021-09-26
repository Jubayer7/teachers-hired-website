import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    const addToCart = (teacher) => {
        const newCart = [...cart, teacher]
        setCart(newCart)
    }
    return (
        <div className="teacher-container">
            <div className="information">
                {
                    teachers.map(teacher => <Information
                        key={teacher.name}
                        teacher={teacher}
                        addToCart={addToCart}
                    ></Information>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Teachers;