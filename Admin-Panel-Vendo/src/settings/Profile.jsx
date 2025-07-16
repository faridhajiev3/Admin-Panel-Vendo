import React from 'react'
import person1 from "../assets/person.png"
import "../scss/profile.scss"

function Profile() {
    return (
        <div class="main-contents">
            <div class="profile-header">
                <div class="profile-photo">
                    <img src={person1} alt="Profile Photo" />
                    <span class="edit-photo">Edit photo</span>
                </div>
            </div>

            <div class="form-content">
                <div class="form-row">
                    <div class="form-column">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" value="Ali Ahmadi" readonly />
                        </div>
                        <div class="form-group">
                            <label>E-mail Address</label>
                            <input type="email" value="aliahmadi@gmail.com" readonly />
                        </div>
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="tel" value="+994 77 795 65 44" readonly />
                        </div>
                    </div>

                    <div class="form-column">
                        <div class="form-group">
                            <label>Brand Name</label>
                            <input type="text" value="Rare Beauty" readonly />
                        </div>
                        <div class="form-group">
                            <label>Brand Description</label>
                            <textarea readonly>Professional store offering quality cosmetics and beauty solutions.</textarea>
                        </div>
                        <div class="form-group">
                            <label>Website</label>
                            <input type="url" value="www.rarebeauty.com" readonly />
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button class="save-btn">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Profile