import React from 'react'
import { TbBasketMinus, TbBasketPlus } from 'react-icons/tb'
import { GiTwoCoins } from 'react-icons/gi'
import { FaWarehouse } from 'react-icons/fa6'
import "../../scss/products.scss"
import ProductsCard from '../../components/ProductsCard'
import { ProductsData } from '../../data/ProductsData'
import ProductsTable from './ProductsTable'
import { useNavigate } from 'react-router-dom'

function Products() {
  const navigate = useNavigate()
  return (
    <div className='products-container'>
      <h2>Products</h2>
      <div className='analysis-content'>
        <ProductsCard icon={<TbBasketPlus />} content={"Total Income"} price={"150"} />
        <ProductsCard icon={<GiTwoCoins />} content={"Total Order"} price={"600"} />
        <ProductsCard icon={<FaWarehouse />} content={"Active Products"} price={"3000"} />
        <ProductsCard icon={<TbBasketMinus />} content={"Customer Count"} price={"1200"} />
      </div>
      <div className='output'>
        <button onClick={()=>navigate("/addproduct")}>Add new product</button>
      </div>
      <div className='table-wrapper'>
        <ProductsTable />
      </div>
    </div>
  )
}

export default Products