import React from 'react'
import "../scss/detail.scss"

function Detail() {
  return (
    <div className="container-detail">
      <form className="fproduct-form">
        <h1 className="form-title">Product Features</h1>

        <div className="form-sections">
          <div className="form-row">
            <div className="form-group">
              <h3>Contents</h3>
              <label for="ingredients">Product Ingredients List</label>
              <textarea id="ingredients" className="form-textarea" placeholder="Enter product ingredients..."></textarea>
            </div>

            <div className="form-group">
              <h3>Instructions for use</h3>
              <label for="instructions">Product Instructions for use</label>
              <textarea id="instructions" className="form-textarea" placeholder="Enter usage instructions..."></textarea>
            </div>

            <div className="form-group">
              <h3>Benefits</h3>
              <div className="radio-group">
                <div className="radio-item">
                  <input type="radio" id="no-paraben" name="benefits" value="no-paraben"/>
                    <label for="no-paraben">The product does not contain paraben</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="vegan" name="benefits" value="vegan"/>
                    <label for="vegan">Vegan</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="not-tested" name="benefits" value="not-tested"/>
                    <label for="not-tested">Not tested on animals</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="dermatologically" name="benefits" value="dermatologically"/>
                    <label for="dermatologically">Dermatologically tested</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-sections">
          <h2 className="section-title">Shipping Information</h2>

          <div className="form-row shipping-row">
            <div className="form-group">
              <h3>Weight (kg)</h3>
              <input type="number" className="form-input" placeholder="Enter weight" step="0.1"/>
            </div>

            <div className="form-group">
              <h3>Height (cm)</h3>
              <div className="dimension-inputs">
                <div className="dimension-item">
                  <label>Width</label>
                  <input type="number" className="form-input small" placeholder="Width"/>
                </div>
                <div className="dimension-item">
                  <label>Size</label>
                  <input type="number" className="form-input small" placeholder="Size"/>
                </div>
                <div className="dimension-item">
                  <label>Height</label>
                  <input type="number" className="form-input small" placeholder="Height"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h3>Skin Type</h3>
              <div className="radio-group">
                <div className="radio-item">
                  <input type="radio" id="all-skin" name="skin-type" value="all-skin"/>
                    <label for="all-skin">All skin types</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="dry" name="skin-type" value="dry"/>
                    <label for="dry">Dry</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="mixed" name="skin-type" value="mixed"/>
                    <label for="mixed">Mixed</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="oily" name="skin-type" value="oily"/>
                    <label for="oily">Oily</label>
                </div>
              </div>
            </div>
          </div>

          <div className="cargo-className">
            <h3>Cargo className</h3>
            <select className="form-select">
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>

        <div className="form-navigation">
          <button type="button" className="btn btn-back">
            <span className="arrow-left">←</span>
            Back
          </button>
          <button type="submit" className="btn btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default Detail