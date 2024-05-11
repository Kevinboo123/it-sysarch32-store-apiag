import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PF9EkCMvtivK4FVO63c8WLKiugt3LhXKmt2qUdjRjj1Xc1pNSAev9CbYFokiK5hZ4lda12rfJbv7rdlKHmMktM800jM99mIvM');

const Cart = ({ cartItems }) => {
    const [error, setError] = useState(null);

    const handleClick = async () => {
        try {
            const stripe = await stripePromise;
            const response = await fetch('http://localhost:4000/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cartItems }), // Send cartItems to the backend
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const session = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 mt-10">
            <h1 className="text-3xl font-semibold text-slate-700 mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2">
                        Checkout
                    </button>
                </div>
            )}
            {error && <div>{error}</div>}
        </div>
    );
};

export default Cart;
