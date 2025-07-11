import React from 'react'
import { ProductsData } from '../../data/ProductsData'

function ProductsTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Barcode</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Sales</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Point</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {
                    ProductsData.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt="Rare Beauty Blush" /> Rare Beauty<br />Liquid Blush</td>
                            <td>{item.id}</td>
                            <td>{item.category}</td>
                            <td>{item.stock}</td>
                            <td><span class="sales-up">↑{item.salesChange}</span></td>
                            <td>{item.price} $</td>
                            <td><span class="status active">{item.status}</span></td>
                            <td>{item.rating} ★</td>
                            <td>⋮</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ProductsTable