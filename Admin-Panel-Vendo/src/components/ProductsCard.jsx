import React from 'react'

function ProductsCard({ icon, content, price, backColor, iconColor }) {
    return (
        <div className="box total-product">
            <span className="icon" style={{backgroundColor: backColor, color:iconColor}}>{icon}</span>
            <div>
                <h3>{content}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductsCard