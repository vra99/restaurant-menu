import React from 'react';
import styled from 'styled-components';

export const Cart = ({ dishes, handleRemoveDish }) => {
    const total = dishes?.length && dishes.reduce((acc, dish) => acc + dish.price, 0);

    return (
        <StyledCart>
            <h1> Cart </h1>
            {dishes?.map((dish) => (
                <div className="dish-container" key={Math.random()}>
                    <div className="dish-details">
                        <div className="dish-name">{dish.name}</div>
                        <div className="dish-price">{dish.price}</div>
                    </div>
                    <div>
                        <button onClick={() => handleRemoveDish(dish)}> Remove dish</button>
                    </div>
                </div>
            ))}
            {dishes?.length > 0 ? (
                <div>
                    <h1 className="total">Total: {total}</h1>
                </div>
            ) : (
                <div>
                    <h1> No dishes in cart </h1>
                </div>
            )}
        </StyledCart>
    );
};

Cart.displayName = 'Cart';

const StyledCart = styled.div`
    .dish-container {
        display: flex;
        justify-content: space-between;
    }

    .dish-details {
        display: flex;
    }

    .dish-name {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .dish-price {
        font-size: 1.3rem;
        font-weight: bold;
        margin-left: 1rem;
    }

    button {
        border: 1px solid #222831;
        border-radius: 4px;
        color: #222831;
        text-align: center;
        cursor: pointer;
    }
`;
