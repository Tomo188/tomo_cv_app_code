import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { border } from '@mui/system';

export default function SpanningTable() {
    const basketProducts = useSelector(state => state.products)
    const [rows, setRows] = useState([])
    useEffect(() => {
        const filteredBasket = []
        const postFilterabsket = []
        function filter(name) {

            for (let i = 0; i < filteredBasket.length; i++) {
                if (name === filteredBasket[i]) {
                    return true
                }
            }
            return false
        }
        for (let i = 0; i < basketProducts.length; i++) {
            let suma = 1;

            if (filter(basketProducts[i].header)) {
                continue
            }


            for (let j = i + 1; j < basketProducts.length; j++) {
                if (basketProducts[i].header === basketProducts[j].header) {
                    suma++
                }


            }
            const test = {
                ...basketProducts[i],
                suma: suma
            }
            filteredBasket.push(basketProducts[i].header)
            postFilterabsket.push(test)
        }
        console.log(postFilterabsket)
        setRows(postFilterabsket)

    }, [])

    return (
        <div className='table_payment'>
        <h2>Items in your Chart: </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>number of items</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(item => {
                        console.log(item)
                        return (
                            <tr>
                                <td>
                                    {item.header}
                                </td>
                                <td>
                                    $ {item.price}
                                </td>
                                <td>
                                    {item.suma}
                                </td>
                            </tr>

                        )
                    })}
                    <tr>
                        <td align='right'>Total</td>
                        <td colSpan={2} height="100" >$ {rows.reduce((acc, item) => {
                            acc += item.price * item.suma
                            return acc
                        }, 0)}</td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
}
