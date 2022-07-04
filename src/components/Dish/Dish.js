import React from 'react';
import styled from 'styled-components';

export const Dish = ({ dish, handleChangeCart }) => {
    return (
        <Container>
            <div className="dish-details">
                <div className="dish-name">{dish.name}</div>
                <div className="dish-price">{dish.price}</div>
            </div>
            <Button onClick={handleChangeCart}>Add to Cart</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .dish-details {
        display: flex;
    }

    .dish-price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #00adb5;
        margin-left: 10px;
    }
`;

const Button = styled.button`
    background-color: #00adb5;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1.15rem;
    cursor: pointer;
`;
