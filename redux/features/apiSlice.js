import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
   
    endpoints:(builder) =>({
      getSlider: builder.query({
        query :() =>"/slideproduct/api/v1/getproduct"
      })
    })
})

export const { useGetSliderQuery } = productsApi