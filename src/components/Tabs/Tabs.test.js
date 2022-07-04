import React from 'react'
import { Tabs } from './Tabs'
import { render, screen, fireEvent } from '@testing-library/react';


const setup=() => {
    const { container }= render(
        <Tabs>
            <div title="Starters">
                <div>Starter 1</div>
            </div>
            <div title="Mains">
                <div>Main 1</div>
            </div>
        </Tabs>                       
    );
    return { container };
}

describe(Tabs.displayName, () => {
    it('should render correctly', () => {
        const { container } = setup();
        expect(container).toBeDefined();
    })

    // should render two tabs
    it('should render two tabs', () => {
        const { container } = setup();
        expect(container.querySelectorAll('.tabs button').length).toBe(2);
    });

    // should render activeTab?.props.children
    it('should render active tab children', async () =>{
        setup();
        expect(screen.queryByText('Starter 1')).toBeDefined();

        const button = await screen.findByRole('button', {
            name: 'Mains',
        });

        fireEvent.click(button);
        // expect Starter 1 not to be defined
        expect(screen.queryByText('Starter 1')).toBeNull();
        expect(screen.queryByText('Main 1')).toBeDefined();
    });

});

