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
          <label>Category</label>
          <select>
            <option>Choose Category</option>
          </select>
        </div>

        <div className="form-group">
          <label>Brand</label>
          <select>
            <option>Choose Brand</option>
          </select>
        </div>

        <div className="form-section-card">
          <h3>Pricing</h3>
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
          </div>
        </div>

        <div className="form-section-card">
          <h3>Inventory</h3>
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

        <div className="form-section-card">
          <h3>Situation</h3>
          <div className="form-group toggle-group">
            <div className="toggle-item">
              <div className="toggle-content">
                <span className="toggle-label">Active</span>
                <p className="toggle-description">The product will be visible in the store</p>
              </div>
              {/* <label className="toggle-switch">
                <input type="checkbox"  />
                <span className="slider"></span>
              </label> */}
            </div>
          </div>
          <div className="form-group toggle-group">
            <div className="toggle-item">
              <div className="toggle-content">
                <span className="toggle-label">Featured</span>
                <p className="toggle-description">The product will be featured on the home page</p>
              </div>
              {/* <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default General