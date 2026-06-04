document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("global-footer");
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <img class="footer-logo" src="https://velmylux.github.io/logo.png" alt="velmylux">
            <div class="footer-tagline">Preloved Luxury Enthusiast</div>
            
            <nav style="
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 8px 16px;
                margin-top: 16px;
                padding: 0 16px;
            ">
                <a href="privacy.html" style="color:#C9B8AE;text-decoration:none;font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;">Privacy Policy</a>
                <span style="color:#C9B8AE;opacity:0.4;font-size:10px;">|</span>
                <a href="terms.html" style="color:#C9B8AE;text-decoration:none;font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;">Terms & Conditions</a>
                <span style="color:#C9B8AE;opacity:0.4;font-size:10px;">|</span>
                <a href="disclaimer.html" style="color:#C9B8AE;text-decoration:none;font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;">Disclaimer</a>
            </nav>

            <div style="margin-top:14px;font-size:10px;color:#9C8E88;opacity:0.5;letter-spacing:1px;">
                © 2026 Velmylux. All rights reserved.
            </div>
        `;
    }
});
