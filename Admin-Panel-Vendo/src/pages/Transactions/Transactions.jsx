import React from 'react'
import { TransactionsData } from '../../data/ProductsData'

function Transactions() {
    return (
        <div className='products-container'>
            <h2>Transactions</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>TYPE</th>
                            <th>AMOUNT</th>
                            <th>PAYMENT METHOD</th>
                            <th>STATUS</th>
                            <th>ACTİVİTY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TransactionsData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.type}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.method}</td>
                                    <td>{item.status} $</td>
                                    <td>{item.activity}<br/>{item.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Transactions