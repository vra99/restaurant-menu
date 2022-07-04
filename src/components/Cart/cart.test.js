import React from 'react';
import { Cart } from './Cart';
import { render, screen, fireEvent } from '@testing-library/react';

const baseProps = {
    dishes: [
        {
            id: 1,
            name: 'Prawns',
            price: 10,
        },
        {
            id: 2,
            name: 'Salmon',
            price: 20,
        },
        {
            id: 3,
            name: 'Cheesecake',
            price: 30,
        },
    ],
    handleRemoveDish: jest.fn(),
};

const setup = () => {
    const { container } = render(<Cart {...baseProps} />);
    return { container };
};

describe(Cart.displayName, () => {
    it('should render correctly', () => {
        const { container } = setup();
        screen.debug();
        expect(container).toBeDefined();
    });

    it('should render a list of dishes', () => {
        const { container } = setup();
        expect(container.querySelectorAll('.dish-container')).toHaveLength(3);
    });

    it('should call handleRemoveDish when the button is clicked', async () => {
        setup();
        screen.debug();
        const button = await screen.findAllByRole('button', {
            name: 'Remove dish',
        });
        fireEvent.click(button[0]);
        expect(baseProps.handleRemoveDish).toHaveBeenCalled();
    });

    it('should display the total price of dishes in the cart', () => {
        const { container } = setup();
        const total = baseProps.dishes.reduce((acc, dish) => acc + dish.price, 0);
        expect(container.querySelector('.total').textContent).toBe(`Total: ${total}`);
    });
});
