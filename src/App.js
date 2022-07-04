import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Tabs, Dish, Cart, Checkout } from './components';
import styled from 'styled-components';

function App() {
    const [starters, setStarters] = useState([]);
    const [mains, setMains] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [cart, setCart] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const { loading, data } = useQuery(GET_MENU);

    useEffect(() => {
        if (data) {
            setStarters(data.menu.starters.map((starter) => ({ ...starter, type: 'starter' })));
            setMains(data.menu.mains.map((mains) => ({ ...mains, type: 'main' })));
            setDesserts(data.menu.desserts.map((dessert) => ({ ...dessert, type: 'dessert' })));
        }
    }, [data]);

    const handleChangeCart = (data) => {
        setCart([...cart, data]);
        setErrorMessage(false);
    };

    const handleRemoveDish = (dish) => {
        const index = cart.indexOf(dish);
        if (index > -1) {
            cart.splice(index, 1);
            setCart([...cart]);
        }
    };

    const handleCheckout = () => {
        const mainCount = cart.filter((dish) => dish.type === 'main').length;

        // Each diner cannot have more than one of the same course.
        const duplicatedCourse = cart.find((dish) => cart.filter((item) => item.name === dish.name).length > 2);

        const cheesecake = cart.filter((dish) => dish.name === 'Cheesecake');

        //no prawn cocktail and salmon fillet within the meal.
        const isPrawnAndSalmonInSameCourse =
            cart.filter((dish) => dish.name === 'Prawn cocktail' || dish.name === 'Salmon fillet').length > 2;

        // Each person must have at least two courses, one of which must be a main.
        if (cart.length < 2) {
            setErrorMessage('Each person must have at least two courses, one of which must be a main.');
        }

        //there must be at least two Mains within the cart
        else if (mainCount < 2) {
            setErrorMessage('There must be at least two Mains within the cart.');
        }

        // Each diner cannot have more than one of the same course.
        else if (duplicatedCourse) {
            setErrorMessage('Each diner cannot have more than one of the same course.');
        }

        //There is only one piece of cheesecake left.
        else if (cheesecake.length > 1) {
            setErrorMessage('There is only one piece of cheesecake left.');
        } else if (isPrawnAndSalmonInSameCourse) {
            setErrorMessage('You cannot have a prawn cocktail and salmon fillet in the same meal');
        } else {
            setErrorMessage(false);
        }
    };

    return (
        <Container>
            <h1>Menus</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Tabs>
                    <div title="Starters" id="starters">
                        {starters.map((dish) => (
                            <Dish key={dish.id} dish={dish} handleChangeCart={() => handleChangeCart(dish)} />
                        ))}
                    </div>
                    <div title="Mains" id="mains">
                        {mains.map((dish) => (
                            <Dish key={dish.id} dish={dish} handleChangeCart={() => handleChangeCart(dish)} />
                        ))}
                    </div>
                    <div title="Desserts" id="desserts">
                        {desserts.map((dish) => (
                            <Dish key={dish.id} dish={dish} handleChangeCart={() => handleChangeCart(dish)} />
                        ))}
                    </div>
                </Tabs>
            )}
            <Cart dishes={cart} handleRemoveDish={handleRemoveDish} />
            <Checkout handleCheckout={handleCheckout} errorMessage={errorMessage} cart={cart} />
        </Container>
    );
}

export const GET_MENU = gql`
    query {
        menu {
            starters {
                id
                name
                price
            }
            mains {
                id
                name
                price
            }
            desserts {
                id
                name
                price
            }
        }
    }
`;

const Container= styled.div`
    body {
        background-color: #f2f2f2;
        font-family: 'Courier New', Courier, monospace;
    }

    .container {
        margin: 0 auto;
        width: 75%;
        height: 100vh;
    }
`;

App.displayName = 'App';

export default App;
