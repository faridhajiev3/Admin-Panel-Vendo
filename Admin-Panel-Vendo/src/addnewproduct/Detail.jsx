import React from 'react'
import "../scss/detail.scss"

function Detail() {
  return (
    <div class="container-detail">
      <div class="section-detail">
        <h3>Product Features</h3>
        <div class="form-group-detail">
          <label>Contents</label>
          <input type="text" placeholder="Product Ingredients List" />
        </div>
        <div class="form-group-detail">
          <label>Instructions for use</label>
          <input type="text" placeholder="Product instructions for use" />
        </div>
        <div class="form-group-detail">
          <label>Benefits</label>
          <div class="checkbox-group">
            <label><input type="checkbox" /> The product does not contain paraben</label>
            <label><input type="checkbox" /> Vegan</label>
            <label><input type="checkbox" /> Not tested on animals</label>
            <label><input type="checkbox" /> Dermatologically tested</label>
          </div>
        </div>
      </div>
      <div class="section">
        <h3>Shipping Information</h3>
        <div class="form-group-detail">
          <label>Weight (kg)</label>
          <input type="text" />
        </div>
        <div class="form-group-detail">
          <label>Cargo Class</label>
          <select>
            <option>Standard</option>
          </select>
        </div>
        <div class="form-group-detail">
          <label>Height (cm)</label>
          <input type="text" placeholder="Width" />
          <input type="text" placeholder="Size" />
          <input type="text" placeholder="Height" />
        </div>
      </div>
      <div class="section">
        <h3>Skin Type</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" /> All skin types</label>
          <label><input type="checkbox" /> Dry</label>
          <label><input type="checkbox" /> Mixed</label>
          <label><input type="checkbox" /> Oily</label>
        </div>
      </div>
    </div>
  )
}

export default Detail