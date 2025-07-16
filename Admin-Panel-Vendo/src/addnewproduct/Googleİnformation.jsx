import React from 'react'
import "../scss/information.scss"

function Googleİnformation() {
    return (
        <div className="seo-info">
            <h2>Google Informations</h2>
            <p className="description">Fill in the information to rank better in search engines</p>

            <div className="seo-form">
                <div className="seo-left">
                    <div className="form-group">
                        <label for="meta-title">Meta Title</label>
                        <input type="text" id="meta-title" placeholder="Product title for Google" />
                        <small>If you leave it blank, the product name will be used.</small>
                    </div>

                    <div className="form-group">
                        <label for="meta-description">Meta Description</label>
                        <textarea id="meta-description" placeholder="Short description about the product to appear in search results"></textarea>
                    </div>
                </div>

                <div className="seo-right">
                    <div className="form-group">
                        <label for="tags">Tags</label>
                        <textarea id="tags" placeholder="Separate tags with commas (make-up,blush,cosmetic)"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Googleİnformation