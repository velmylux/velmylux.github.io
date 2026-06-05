document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("global-footer");
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <img class="footer-logo" src="https://velmylux.github.io/logo.png" alt="velmylux" style="
                width: 90px;
                height: 36px;
                object-fit: contain;
                display: block;
                margin: 0 auto 10px;
                mix-blend-mode: screen;
                opacity: 0.85;
            ">
            <div class="footer-tagline" style="
                font-size: 9px;
                font-weight: 300;
                letter-spacing: 2px;
                color: #9C8E88;
                text-transform: uppercase;
                margin-bottom: 16px;
            ">Preloved Luxury Enthusiast</div>

            <div style="
                font-size: 10px;
                color: #C9B8AE;
                letter-spacing: 1px;
                margin-bottom: 14px;
                opacity: 0.7;
            ">
                <a href="https://instagram.com/velmylux" target="_blank" style="color:#C9B8AE;text-decoration:none;font-weight:500;letter-spacing:1.5px;">@velmylux</a>
            </div>

            <nav style="
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 8px 12px;
                margin-bottom: 14px;
                padding: 0 16px;
            ">
                <a href="privacy.html" style="color:#C9B8AE;text-decoration:none;font-size:9px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;">Privacy Policy</a>
                <span style="color:#C9B8AE;opacity:0.3;font-size:9px;">|</span>
                <a href="terms.html" style="color:#C9B8AE;text-decoration:none;font-size:9px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;">Terms</a>
                <span style="color:#C9B8AE;opacity:0.3;font-size:9px;">|</span>
                <a href="disclaimer.html" style="color:#C9B8AE;text-decoration:none;font-size:9px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;">Disclaimer</a>
            </nav>

            <div style="font-size:10px;color:#9C8E88;opacity:0.4;letter-spacing:1px;">
                © 2026 Velmylux. All rights reserved.
            </div>
        `;
    }
});
