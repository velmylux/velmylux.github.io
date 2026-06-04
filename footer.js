document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("global-footer");
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <img class="footer-logo" src="https://velmylux.github.io/logo.png" alt="velmylux">
            <div class="footer-tagline">Preloved Luxury Enthusiast</div>
            
            <div style="margin-top: 20px; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; opacity: 0.7;">
                <a href="/privacy.html" style="color: var(--accent); text-decoration: none; margin: 0 10px; font-weight: 500;">Privacy Policy</a> | 
                <a href="/terms.html" style="color: var(--accent); text-decoration: none; margin: 0 10px; font-weight: 500;">Terms & Conditions</a> | 
                <a href="/disclaimer.html" style="color: var(--accent); text-decoration: none; margin: 0 10px; font-weight: 500;">Disclaimer</a>
            </div>
            
            <div class="footer-official" style="margin-top: 15px; font-size: 9px; color: var(--text-light); opacity: 0.4;">
                © 2026 Velmylux. All rights reserved.
            </div>
        `;
    }
});
