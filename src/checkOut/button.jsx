import { useState } from "react"
import { removeItem, updateTotalPrice } from '../store/user/user_slice'
import { useDispatch } from "react-redux"
export const ProductsBasket = (props) => {

    const [animated, setAnimated] = useState(false)
    console.log(props.id, animated)
    const dispatch = useDispatch()
    const [basketButtonText, setBasketButtonText] = useState("remove item from basket")
    const animation = async () => {
        setAnimated("bounce-out-animation")
        await new Promise(x => setTimeout(x, 2000))
        const filteredBasket = props.filterBasketProducts(props.id)
        dispatch(removeItem(filteredBasket))
        localStorage.setItem("basket",JSON.stringify(filteredBasket))
        dispatch(updateTotalPrice(props.totalPrice - props.price))
        setAnimated(false)
    }

    return (


        <div key={props.id} className={`products ${animated ? "bounce-out-animation" : ""}`}>
            <div className='left-check'>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="right-check">
                <h2>{props.header}</h2>

                <h3>{props.price}</h3>
                {!animated ? <button
                    onMouseDown={() => {

                        setBasketButtonText("item removed from basket")
                    }}
                    onMouseUp={() => {

                        setBasketButtonText("remove item from basket")
                    }}
                    onClick={() => {

                        animation()


                    }}

                >{basketButtonText}</button> : <button disabled={true}>{basketButtonText}</button>}
            </div>
        </div>

    )
}