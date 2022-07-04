import React from 'react';
import styled from 'styled-components';

export const Checkout = ({ handleCheckout, errorMessage }) => {
    return (
        <div>
            <Button onClick={handleCheckout}>Checkout</Button>
            {errorMessage && <Error>{errorMessage}</Error>}
        </div>
    );
};

Checkout.displayName = 'Checkout';

const Button = styled.button`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;

const Error = styled.div`
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
`;
