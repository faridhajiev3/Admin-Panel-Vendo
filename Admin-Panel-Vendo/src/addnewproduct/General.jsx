import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../scss/general.scss"

function General() {
  return (
    <div className="addPro">
      <div className="form-section">
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" placeholder="Ex: Rare Beauty Liquid Blush" />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <select>
            <option>Choose Brand</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select>
            <option>Choose Category</option>
          </select>
        </div>
        <div className="form-group toggle-group">
          <label>Activation</label>
          <div className="toggle">
            <span>Active</span>
            <input type="checkbox" checked />
            <span>The product will be visible in the store</span>
          </div>
        </div>
        <div className="form-group toggle-group">
          <label>Featured</label>
          <div className="toggle">
            <span>Featured</span>
            <input type="checkbox" />
            <span>The product will be featured on the home page</span>
          </div>
        </div>
        <div className="form-group">
          <label>Sale Price ($)</label>
          <input type="number" placeholder="0.00" step="0.01" />
        </div>
        <div className="form-group">
          <label>Comparison Price ($)</label>
          <input type="number" placeholder="0.00" step="0.01" />
        </div>
        <div className="form-group">
          <label>Price before discount (optional)</label>
          <input type="number" placeholder="0.00" step="0.01" />
        </div>
        <div className="form-group">
          <label>Profit Margin</label>
          <input type="range" min="0" max="100" value="30" />
          <span>30%</span>
        </div>
        <div className="form-group">
          <label>SKU (Stock Code)</label>
          <input type="text" placeholder="Ex: RB-LB-001" />
        </div>
        <div className="form-group">
          <label>Barcode (ISBN,UPC,GTIN,...)</label>
          <input type="text" placeholder="Ex: 123456789012" />
        </div>
        <div className="form-group">
          <label>Stock Quantity</label>
          <input type="number" placeholder="0" />
        </div>
      </div>
    </div>
  )
}

export default General