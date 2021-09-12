# SuperM React Webstore

## About
With provided back-end API, I built this web store with **React** and its latest features like **Hooks**.

## How to Deploy?
Clone to your own host and run `npm ci`, then run `npm start`. 

It's basically the same as [Create React App](https://create-react-app.dev/docs/deployment/) since this app is built by it.

## Highlights
- Created a simple UI Kit via `Button.js`, `Input.js` and `Loader.js`,
- Used custom hook feature in `useFetch.js`,
- Integrated with *Stripe Checkout*, using card numebr `4242 4242 4242 4242` to try it out, 
- Used `localStorage` to temporarily save users' products in the shopping cart.

## Other Modules Used
- clsx
- React Router

## Page Stucture
```plain
-App
    -Navbar
    -Home
    -Products
        --Product
    -About
    -ProductDetails
        --ProductDetailInfo
        --ProductDetailNutrition
        --ProductDetailStorage
    -Cart
```

## Todos
- [ ] Deploy to Netlify
- [ ] Add dark mode support
