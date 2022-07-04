import React from 'react';
import { Checkout } from './Checkout';
import { render, screen, fireEvent } from '@testing-library/react';

const baseProps = {
    handleCheckout: jest.fn(),
    errorMessage: false,
};

const setup = () => {
    const { container } = render(<Checkout {...baseProps} />);
    return { container };
};

describe(Checkout.displayName, () => {
    it('should render correctly', () => {
        const { container } = setup();
        expect(container).toBeDefined();
    });

    it('should call handleCheckout when the button is clicked', async () => {
        setup();
        const button = await screen.findByRole('button', { name: 'Checkout' });
        fireEvent.click(button);
        expect(baseProps.handleCheckout).toHaveBeenCalled();
    });
});
