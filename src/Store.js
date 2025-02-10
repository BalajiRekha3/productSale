import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg:[
                { "name": "Potato", "price": 100.99, "image": "Potato.jpg" },
                { "name": "Tomato", "price": 50.87, "image": "tomato.jpg" },
                { "name": "Paneer", "price": 500.65, "image": "Paneer.jpg" },
                { "name": "Carrot", "price": 200, "image": "carrots.webp" },
                { "name": "Capsicum", "price": 150, "image": "Capsicum.avif" },
                { "name": "Cabbage", "price": 80.5, "image": "cabbage.jpg" },
                { "name": "Cauliflower", "price": 120.75, "image": "cauliflower.jpg" },
                { "name": "Onion", "price": 90.25, "image": "onion.jpg" },
                { "name": "Garlic", "price": 250.5, "image": "garlic.jpg" },
                { "name": "Spinach", "price": 60.99, "image": "spinach.jpg" },
                { "name": "Broccoli", "price": 300.45, "image": "broccoli.jpg" },
                { "name": "Brinjal", "price": 70.99, "image": "brinjal.jpg" },
                { "name": "Pumpkin", "price": 110.3, "image": "pampkin.jpg" },
                { "name": "Radish", "price": 95.6, "image": "radish.jpg" },
                { "name": "Beetroot", "price": 130.25, "image": "beetroot.jpg" },
                { "name": "Bitter Gourd", "price": 85.5, "image": "bitter_gaurd.jpg" },
                { "name": "Bottle Gourd", "price": 60.75, "image": "bottle_gourd.jpg" },
                { "name": "Cucumber", "price": 55.99, "image": "cucumber.jpg" },
                { "name": "Zucchini", "price": 200.65, "image": "zucchini.jpg" },
                { "name": "Green Beans", "price": 150.75, "image": "green_beans.jpg" },
                { "name": "Peas", "price": 180.5, "image": "peas.jpg" },
                { "name": "Corn", "price": 130.45, "image": "corn.webp" },
                { "name": "Mushroom", "price": 400.99, "image": "mushroom.jpg" },
                { "name": "Sweet Potato", "price": 170.3, "image": "sweet_potato.jpg" },
                { "name": "Ladyfinger", "price": 140.25, "image": "ladyfinger.jpg" },
                { "name": "Celery", "price": 160.75, "image": "celery.jpg" },
                { "name": "Spring Onion", "price": 120.65, "image": "spring-onion.webp" },
                { "name": "Turnip", "price": 110.55, "image": "turnip.jpg" },
                { "name": "Asparagus", "price": 450.25, "image": "asparagus.jpg" },
                { "name": "HybridTomato", "price": 70.87, "image": "tomato.jpg" },
                { "name": "Lettuce", "price": 90.99, "image": "lettuce.jpg" }
        ],
        
        nonVeg: [
                { name: "Chicken", price: 200, image: "chicken2.webp" },
                { name: "Mutton", price: 800, image: "mutton2.png" },
                { name: "Prawns", price: 500, image: "prawns.jpg" },
                { name: "Egg", price: 100, image: "egg.jpg" },
                { name: "Fish", price: 150, image: "fishes.avif" },
                { name: "Crab", price: 600, image: "crab.jpg" },
                { name: "Lobster", price: 1200, image: "lobster.png" },
                { name: "Turkey", price: 900, image: "turkey.jpg" },
                { name: "Quail", price: 300, image: "quail.jpg" },
                { name: "Salmon", price: 1000, image: "salmon.jpg" },
                { name: "Tuna", price: 750, image: "tuna.jpg" },
                { name: "Squid", price: 400, image: "squid.jpg" },
                { name: "Octopus", price: 900, image: "octopus.jpg" },
                { name: "Goat Meat", price: 850, image: "goat.jpg" },
                { name: "Bacon", price: 550, image: "bacon.jpg" },
                { name: "Duck", price: 700, image: "duck.jpg" },
                { name: "Ham", price: 650, image: "ham.jpg" }
        ],
        milk: [
            { name: "Jercy", price: 400, image:"jersey.jpg" },
            { name: "Hatsun", price: 500 , image:"hatsun.jpg"},
            { name: "Vishaaka", price: 700, image:"vishakha.jpg" },
            { name: "Sangam", price: 200, image:"sangam.jpg" },
            { name: "SriKrishna", price: 1500, image:"krishna.webp" }
        ]
    },
    reducers: {}
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(item => item.name !== action.payload.name);
                }
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearCart:() =>[]
    }
});
const purchaseDetailsSlice = createSlice({
    name:'purchaseDetails',
    initialState:[],
    reducers:{
        addPurchaseDetails:(state, action) => {
            state.push(action.payload);
        }
    }
});
// Create the auth slice
const authSlice = createSlice({
        name: "auth",
        initialState: {
            isAuthenticated: localStorage.getItem("username") ? true : false,
            user: localStorage.getItem("username") || " ",
        },
        reducers: {
            login: (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                localStorage.setItem("username", action.payload);
            },
            logout: (state) => {
                state.isAuthenticated = false;
                state.user = " ";
                localStorage.setItem("username", "");
            }
        }
    });
    // Configure the store 
    const store = configureStore({
        reducer: { 
            products: productSlice.reducer,
            cart: cartSlice.reducer,
            purchaseDetails: purchaseDetailsSlice.reducer,
            auth: authSlice.reducer 
        },
    });
    // Export the reducers
    export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions; // Include all actions
    export const { addPurchaseDetails } = purchaseDetailsSlice.actions; // Correct the spelling here
    export const { login, logout } = authSlice.actions;
    export default store;