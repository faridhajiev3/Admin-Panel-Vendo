import React from 'react'
import "../scss/security.scss"

function Security() {
  return (
    <div class="security-container">
      <div class="security-left">
        <div class="security-section">
          <h2>Two Factor Authentication (2FA)</h2>

          <div class="setting-item">
            <div class="setting-content">
              <h3>By SMS</h3>
              <p>Send SMS code to your phone number</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox"/>
                <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-content">
              <h3>Authenticator App</h3>
              <p>Google Authenticator or similar app</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" />
                <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="security-section">
          <h2>Security Warnings</h2>

          <div class="setting-item">
            <div class="setting-content">
              <h3>New Device Login</h3>
              <p>Alert when logging in from a new device</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox"/>
                <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-content">
              <h3>Password Change</h3>
              <p>Alert when password is changed</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" />
                <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-content">
              <h3>Suspicious Activity</h3>
              <p>Alert when unusual activity is detected</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox"/>
                <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="security-right">
        <div class="security-section">
          <h2>Session Security</h2>

          <div class="session-list">
            <div class="session-item current">
              <div class="session-info">
                <div class="session-header">
                  <h3>Chrome - Windows</h3>
                  <span class="current-badge">Current</span>
                </div>
                <p class="session-location">Abu-Dhabi, Arabia</p>
                <p class="session-status">Currently active</p>
              </div>
            </div>

            <div class="session-item">
              <div class="session-info">
                <div class="session-header">
                  <h3>Safari - iPhone</h3>
                  <button class="end-btn">End</button>
                </div>
                <p class="session-location">Dubai, Arabia</p>
                <p class="session-time">2 hours ago</p>
              </div>
            </div>

            <div class="session-item">
              <div class="session-info">
                <div class="session-header">
                  <h3>Chrome-Android</h3>
                  <button class="end-btn">End</button>
                </div>
                <p class="session-location">Baku, Azerbaijan</p>
                <p class="session-time">2 days ago</p>
              </div>
            </div>
          </div>

          <button class="end-all-btn">End all other sessions</button>
        </div>
      </div>
    </div>
  )
}

export default Security