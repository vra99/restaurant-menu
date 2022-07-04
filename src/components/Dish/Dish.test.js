import React from 'react';
import { Dish } from './Dish';
import { render, screen, fireEvent } from '@testing-library/react';

const baseProps = {
    dish: {
        id: 1,
        name: 'Prawns',
        price: 10,
    },
    handleChangeCart: jest.fn(),
};

const setup = () => {
    const { container } = render(<Dish {...baseProps} />);
    return { container };
};

describe(Dish.displayName, () => {
    it('should render correctly', () => {
        const { container } = setup();
        expect(container).toBeDefined();
    });

    it('should render a dish with name and price', () => {
        const { container } = setup();
        expect(container.querySelector('.dish-name').textContent).toBe(baseProps.dish.name);
        expect(container.querySelector('.dish-price').textContent).toBe(`${baseProps.dish.price}`);
    });

    it('should call handleChangeCart when the button is clicked', async () => {
        setup();
        const button = await screen.findByRole('button', { name: 'Add to Cart' });
        fireEvent.click(button);
        expect(baseProps.handleChangeCart).toHaveBeenCalled();
    });
});
