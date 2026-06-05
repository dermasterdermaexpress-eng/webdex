import React from 'react';
import '../css/Footer.css';
import tokopediaLogo from '../assets/footer/marketplace/tokopedia.png';
import shopeeLogo from '../assets/footer/marketplace/shopee.png';
import dermaestheticLogo from '../assets/footer/marketplace/dermaesthetic.png';
import kkvLogo from '../assets/footer/marketplace/kkv.png';
import lazadaLogo from '../assets/footer/marketplace/lazada.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-column">
          <h4>SOCIAL MEDIA</h4>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
             <a href="#" aria-label="envelope">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/clinic">Treatment</a></li>
            <li><a href="/promo">Promo</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <ul>
            <li><a href="/galery">Gallery</a></li>
            <li><a href="/promo">Promo</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>OFFICIAL MARKETPLACE</h4>
          <div className="marketplace-logos">
            <img src={tokopediaLogo} alt="Tokopedia" />
            <img src={shopeeLogo} alt="Shopee" />
            <img src={dermaestheticLogo} alt="Dermaesthetic" />
            <img src={kkvLogo} alt="KKV" />
            <img src={lazadaLogo} alt="Lazada" />
          </div>
        </div>
      </div>

      <div className="container footer-middle">
        <div className="footer-brand">
          <span className="footer-brand-name">DERMAEXPRESS</span>
          <span className="footer-brand-sub">Cakep Terjangkau #dermaexpressaja
</span>
        </div>
        <p className="footer-copy">
          Copyright © 2026 DermaExpress Skin Clinic+. All rights reserved.
        </p>
      </div>

      <div className="footer-watermark">DERMAEXPRESS</div>
    </footer>
  );
}

export default Footer;
