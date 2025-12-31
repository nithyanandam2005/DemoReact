import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="footer">
    <div class="footer-container">

        
        <div class="footer-left">
            <h2>Hanioo</h2>
            <p>Connecting people through language globally.</p>

            <div class="footer-contact">
                <p><i class="fa-solid fa-phone"></i> +91 729 900 5677</p>
                <p>✉️ salesteam@honeytranslation.com</p>
            </div>
        </div>

        
        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li>About</li>
                <li>Features</li>
                <li>How it works</li>
                <li>Blog</li>
                <li>Join Wishlist</li>
                <li>Contact</li>
            </ul>
        </div>

        
        <div class="footer-right">
            <h4>Launching Soon on</h4>

            <div class="store-buttons">
                
                <button> <i class="fa-brands fa-apple"></i> App Store</button>
                <button> <i class="fa-brands fa-google-play"></i> Google Play</button>
            </div>

            <p class="enrolled">1000+ People are Enrolled</p>
        </div>

    </div>

    <div class="footer-bottom">
        © 2025 Hanioo App. All Rights Reserved.
    </div>
</footer>
    </div>
  );
}