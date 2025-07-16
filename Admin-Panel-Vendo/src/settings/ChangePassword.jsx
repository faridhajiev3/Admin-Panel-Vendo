import React from 'react'
import "../scss/password.scss"

function ChangePassword() {
  return (
    <div className='main-contentss'>
      <div className='hero'>
        <h2 className='text-3xl'>Change Password</h2>
        <p>Your new password must be different from your previous password.</p>
      </div>
      <div>
        <div class="form-groupss">
          <label>Current Password</label>
          <input type="password" placeholder="Enter current password" />
        </div>
        <div class="form-groupss">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
          <p class="hint">The first letter must be uppercase. Use at least one character</p>
        </div>
        <div class="form-groupss">
          <label>Repeat New Password</label>
          <input type="password" placeholder="Re-enter new password" />
        </div>
      </div>
      <button className='btn-change'>Change Password</button>
    </div>
  )
}

export default ChangePassword