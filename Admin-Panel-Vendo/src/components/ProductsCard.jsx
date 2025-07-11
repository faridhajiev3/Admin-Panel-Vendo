import React from 'react'

function ProductsCard({ icon, content, price }) {
    return (
        <div className='card-items'>
            <div className='card-contents'>
                <div className='card-icons'>
                    {icon}
                </div>
                <div className='plus' >
                    <p>{content}</p>
                    <h3>{price}$</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard