import { ListItemSecondaryAction } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { updateState } from '../store/user/user_slice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebase';
import { textTransform } from '@mui/system';

export default function Products(props) {
    const basket=useSelector(state=>state)
    const user=useSelector(state=>state.user)
    const [str, strSet] = useState("Add item to Cart")
    const randomNumber = () => {
        const random = (Math.round(Math.random() * (Math.round(Math.random() * 10) + 1) + (Math.round(Math.random() * 10) + 1) + (Math.round(Math.random() * 10) + 1)))
        return random
    }
    const dispatch = useDispatch()
    function addStars() {
        let str = "";
        const index = props.item.rating ? Math.floor(props.item.rating) : 0

        for (let i = 0; i < 5; i++) {

            if (i <= index - 1) {
                str += "★"
            }
            else {
                if ((i + 1) - props.item.rating > 0 && (i + 1) - props.item.rating < 1) {

                    str += "✫"
         
                }
                else {
                    str += "✰"
                }


            }
        }

        return str
    }

    return (

        <div className={` grid-item grid-item-${props.index + 1}`}>

            <h2>{props.item.header}</h2>
            <h3>Information about product:</h3>
            <div className='info_product'>
                <img className='product-image' src={props.item.img} alt={props.item.alt} />
                <p>{props.item.info}</p>
            </div>
            <p className='rating'>rating: {props.item.rating} <span>{addStars()}</span> </p>
            {!user&&<p style={{color:"red",fontWeight:"bold", textShadow:"0px 1px", textTransform:"upperCase" }}> you are not register and you cant add item to cart</p>}
            <p>PRICE: $ <strong>{props.item.price}</strong></p>
            <button
                onMouseDown={() => {
                    strSet("Added item in Cart")

                }}
                onMouseUp={() => {
                    strSet("Add item to Cart")
                }}
                onClick={() => {
                    if(!Boolean(user))    
                        return
                    
                    
                    const temp = {
                        id: randomNumber() * randomNumber() * randomNumber(),
                        ...props.item
                    }
                    dispatch(updateState(temp)) 
                }}>{str}</button>
        </div>
    )
}
