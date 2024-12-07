# React Native useState Hook Issue with Nested Objects/Arrays

This repository demonstrates a common issue encountered when using the `useState` hook in React Native:  incorrect state updates when modifying nested objects or arrays. The problem stems from React's shallow comparison of state updates, which fails to detect changes within nested structures.

## Problem

The `bug.js` file shows how modifying a property within a nested object or an element in an array doesn't trigger a re-render, leading to unexpected behavior.  The UI doesn't reflect the changes made to the state.

## Solution

The `bugSolution.js` file offers two solutions: 

1. **Creating a copy:** We avoid directly mutating the state by creating a new object or array with the desired modifications before updating the state. This guarantees that React detects the change. 
2. **Immer library:** The `immer` library provides a more elegant approach to immutably update state. It makes working with nested data much cleaner and less error-prone. 

## How to run

1. Clone the repository.
2. `npm install` or `yarn install`
3. Run the app using a React Native emulator or device.