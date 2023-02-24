import React, { memo } from 'react'
import "./checkOut.scss"
import { useSelector } from "react-redux"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { removeItem, updateTotalPrice,setFromLocalStorage } from '../store/user/user_slice'
import { ProductsBasket } from './button'
import { useNavigate } from 'react-router'



const CheckOut = () => {

    const navigate = useNavigate();
    useEffect(() => {
        
        dispatch(updateTotalPrice(totalPriceReduce))
    }, [])
    const basketProducts=useSelector(state=>state.products)
    const totalPrice=useSelector(state=>state.totalPrice)
    const dispatch = useDispatch()
    const [checkOutText, setCheckOutText] = useState("procceed to check out")
    const totalPriceReduce = basketProducts.length > 0 ? basketProducts.reduce((acc, item) => {
        acc += item.price
        return acc
    }, 0) : 0
    
    const filterBasketProducts = (id) => {
        const basketProd = basketProducts
        for (let i = 0; i < basketProd.length; i++) {
            if (basketProd[i].id == id) {
                return [...basketProd.slice(0, i), ...basketProd.slice(i + 1)]
            }

        }

        return basketProducts
    }
   
    return (
        <>
            {totalPrice ? <div className="checkOut_container">
                <img className='checkOut_img' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="tech gadgets" />
                <div className='left'>
                    {basketProducts.map((item, index) => {
                        return (
                            <ProductsBasket id={item.id} alt={item.alt} img={item.img} header={item.header} price={item.price} filterBasketProducts={filterBasketProducts} totalPriceReduce={totalPriceReduce} totalPrice={totalPrice} />
                        )
                    })}



                </div>
                <div className='right'>
                    <div className='check-right'>
                        <h2>Total:</h2>
                        <p>
                            {basketProducts.length} items
                        </p>

                        <p>
                            price ${totalPrice}
                        </p>


                        <button
                            onMouseDown={
                                () => {
                                    setCheckOutText("procceded to checkout")
                                }
                            }
                            onMouseUp={
                                () => {
                                    setCheckOutText("procceed to checkout")
                                }

                            }
                            onClick={() => {
                                navigate("/payment")
                            }}
                        >{checkOutText}</button>
                    </div>
                </div>
            </div> : <div className='checkOut_container'>
                <img className='checkOut_img' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="tech gadgets" />
                <div className='grid-item-empty-cart' onMouseEnter={()=>{
                    window.scrollTo(0,300)
                }} onMouseLeave={()=>{
                    window.scrollTo(0,0)
                }}><h1 className='noItems'>
                    no items in cart</h1>
                    <p>
                        <a href="/">home page</a>
                    </p>
                </div>

            </div>}
        </>
    )
}
export default CheckOut
