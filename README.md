# Front-end coding challenge

Thank you for accepting our coding challenge. Please take as much time as required to give us a good indication of your coding strengths, as your application will provide many topics of conversation in the next interview stage.

However, in this challenging time, we understand that not everyone has the luxury of sitting down to work on a test uninterrupted. Therefore if you don't manage to implement all of the rules, please describes how you would achieve them or any improvement you would make in the email.

## The task

We would like you to build a web application.

-   The application will allow one user to select dishes on behalf of two diners.
-   The application will present a menu that will be provided and may later require adjustment by a restaurant.
-   The application will enforce some restrictions provided by the restaurant. (see [#rules](#rules))

We have prepared a basic application structure for you using React and Webpack. Please add **any** additional libraries that you think are suitable, for example for data fetching, CSS, and testing.

The menu data is served via GraphQL (http://localhost:3000/graphql) or the API (http://localhost:3000/api/v1/menu). The client application is in `src/App.js`.

**IMPORTANT!** Please use either the GraphQL (preferred) or API approach to fetch menu data on your application, write as clean and maintainable code as possible, and make sure that it's covered by test cases.

## Rules

_To recap, you will build an interface that allows a user to select dishes for a fixed party of **two diners**._\
This restaurant, unfortunately, has a number of rules about the meals that can be ordered.

-   Each person must have at least two courses, one of which must be a main.
-   Each diner cannot have more than one of the same course.
-   There is only one piece of cheesecake left.
-   Pierre the snobby waiter will not let you have a prawn cocktail and salmon fillet in the same meal.

## Acceptance criteria

-   The total bill amount is displayed when at least one dish has been selected.
-   An error message is displayed when I try to select an invalid menu combination.

