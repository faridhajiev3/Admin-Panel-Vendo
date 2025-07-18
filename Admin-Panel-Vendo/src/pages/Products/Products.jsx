import React from 'react'
import "../../scss/products.scss"
import ProductsCard from '../../components/ProductsCard'
import { ProductsData } from '../../data/ProductsData'
import ProductsTable from './ProductsTable'
import { useNavigate } from 'react-router-dom'
import { FaDollarSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";

function Products() {
  const navigate = useNavigate()
  return (
    <div className='products-container'>
      <h2 className='desc'>Products</h2>
      <div className='analysis-content'>
        <ProductsCard icon={<FaDollarSign />} content={"Total Income"} price={"150"} backColor={"#F6F6F6"} iconColor={"#2C2C2C"}/>
        <ProductsCard icon={<FaCheck />} content={"Total Order"} price={"600"} backColor={"#48B4781C"} iconColor={"#48B478"}/>
        <ProductsCard icon={<FaArrowDown />} content={"Active Products"} price={"3000"} backColor={"#EDB2001A"} iconColor={"#EDB200CC"}/>
        <ProductsCard icon={<FaBoxArchive />} content={"Customer Count"} price={"1200"} backColor={"#ED46111A"} iconColor={"#ED4611CC"}/>
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