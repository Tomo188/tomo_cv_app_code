
import React from 'react'
import { useState, useEffect } from 'react'
import "./payment.scss"
import SpanningTable from './table-payment'
import { CardElement,PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux'




function Payment() {
    const totalPrice = useSelector(state => state.totalPrice)
    const stripe = useStripe()
    const elementsStripe = useElements()

    const [elements, setElements] = useState([])
    const [showPayMenu, setShowPayMenu] = useState(false)
    const [buttonText, setButtonText] = useState("pay")

    return (
        <div className="payment">
            <h1>Payment details</h1>
            <div className="payment_container">
                 <SpanningTable /> 
                 <div className='pay_menu'>   
                    <h2>Credit card paying form :</h2>
                    <form action="">
                             <CardElement
                           options={{
                            style: {
                              base: {
                                width:"15px",
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                  color: '#aab7c4',
                                },
                              },
                              invalid: {
                                color: '#9e2146',
                              },
                            },
                          }} 
                         />   
                         <button disabled={true}> payment is not avaible</button>                   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment