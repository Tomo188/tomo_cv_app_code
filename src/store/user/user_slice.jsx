import { createSlice } from "@reduxjs/toolkit"
const initialState ={
    user: null,
    products: [],
    totalPrice: 0
}


export const userSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        updateState: (state, action) => {

            return {
                user: state.user,
                totalPrice: state.totalPrice,
                products: [...state.products, action.payload]
            }
        },
        updateTotalPrice: (state, action) => {
            return {
                user: state.user,
                totalPrice: action.payload,
                products: [...state.products]
            }
        },
        removeItem: (state, action) => {
            return {
                user: state.user,
                totalPrice: state.totalPrice,
                products: action.payload
            }
        },
        changeUser: (state, action) => {
            return {
                user: action.payload,
                totalPrice: state.totalPrice,
                products: state.products,
            }
        },
        setFromLocalStorage(state,action){
            return{
                ...action.payload
            }
        }
    }

})
export const { updateState, updateTotalPrice, removeItem, changeUser,setFromLocalStorage } = userSlice.actions
export default userSlice.reducer