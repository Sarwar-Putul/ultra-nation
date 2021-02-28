import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    // let totalPopulations = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulations = totalPopulations + country.population;  
    // }
    const totalPopulations = cart.reduce((sum, country)=> sum + country.population, 0);
    return (
        <div>
            <h2>This is a cart: {cart.length}</h2>
            <p>Total population: {totalPopulations}</p>
        </div>
    );
};

export default Cart;