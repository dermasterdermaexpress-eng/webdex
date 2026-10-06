import React from 'react';
import '../css/Footer.css';
import tokopediaLogo from '../assets/footer/marketplace/tokopedia.png';
import shopeeLogo from '../assets/footer/marketplace/shopee.png';
import dermaestheticLogo from '../assets/footer/marketplace/dermaesthetic.png';
import kkvLogo from '../assets/footer/marketplace/kkv.png';
import lazadaLogo from '../assets/footer/marketplace/lazada.png';

// Ikon social media (sesuaikan nama file dengan aset di folder assets/footer/social)
import facebookIcon from '../assets/footer/marketplace/facebook.png';
import instagramIcon from '../assets/footer/marketplace/instagram.png';
import tiktokIcon from '../assets/footer/marketplace/tiktok.png';
import whatsappIcon from '../assets/footer/marketplace/social.png';
import youtubeIcon from '../assets/footer/marketplace/youtube.png';
import emailIcon from '../assets/footer/marketplace/email.png';

// TODO: isi href dengan link akun resmi masing-masing social media
const socialMedia = [
  { id: 'facebook', name: 'Facebook', icon: facebookIcon, href: '#' },
  { id: 'instagram', name: 'Instagram', icon: instagramIcon, href: '#' },
  { id: 'tiktok', name: 'TikTok', icon: tiktokIcon, href: '#' },
  { id: 'whatsapp', name: 'WhatsApp', icon: whatsappIcon, href: '#' },
  { id: 'youtube', name: 'YouTube', icon: youtubeIcon, href: '#' },
  { id: 'email', name: 'Email', icon: emailIcon, href: '#mailto:admin@derma-express.com' } // email: ganti dengan 'mailto:emailanda@domain.com'
];

// TODO: isi href dengan link toko resmi masing-masing marketplace
const marketplaces = [
  { id: 'tokopedia', name: 'Tokopedia', logo: tokopediaLogo, href: '#' },
  { id: 'shopee', name: 'Shopee', logo: shopeeLogo, href: '#' },
  { id: 'dermaesthetic', name: 'Dermaesthetic', logo: dermaestheticLogo, href: '#' },
  { id: 'kkv', name: 'KKV', logo: kkvLogo, href: '#' },
  { id: 'lazada', name: 'Lazada', logo: lazadaLogo, href: '#' }
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-column footer-column--social">
          <h4>SOCIAL MEDIA</h4>
          <div className="footer-icons footer-icons--social">
            {socialMedia.map((s) => (
              <a key={s.id} href={s.href} aria-label={s.name} title={s.name}>
                <img src={s.icon} alt={s.name} />
              </a>
            ))}
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

        <div className="footer-column footer-column--market">
          <h4>OFFICIAL MARKETPLACE</h4>
          <div className="footer-icons footer-icons--market">
            {marketplaces.map((m) => (
              <a key={m.id} href={m.href} aria-label={m.name} title={m.name}>
                <img src={m.logo} alt={m.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-middle">
        <div className="footer-brand">
          <span className="footer-brand-name">DERMAEXPRESS</span>
          <span className="footer-brand-sub">Cakep Terjangkau #dermaexpressaja</span>
        </div>
        <p className="footer-copy">
          Copyright © 2026 DermaExpress Skin Clinic+. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;