const { configureStore } = require("@reduxjs/toolkit");
const { userSlice } = require("../features/userSlice");
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "../features/apiSlice";
const store = configureStore({
   
    reducer:{
        user: userSlice,
        [productsApi.reducerPath]: productsApi.reducer
     
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
    
});

setupListeners(store.dispatch);
export default store