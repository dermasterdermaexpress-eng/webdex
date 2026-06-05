import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";
import Logo from "../assets/logo-dex.jpg";

export default function Header() {
  return (
    <header className="rs-header">

      {/* ===== TOP BAR ===== */}
      <div className="rs-topbar">
        <div className="rs-container rs-topbar-inner">
          <div className="rs-topbar-left">
            <span>Hubungi Kami</span>
            <span>IG@DermaExpress</span>
            <span>Yt@DermaExpress</span>
            <span>FB@DermaExpress</span>
          </div>

          <div className="rs-topbar-right">
            <span>Selamat datang</span>
            <span className="rs-lang">🇮🇩 ID ▾</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="rs-main-header">
        <div className="rs-container rs-header-inner">

          {/* LOGO */}
          <div className="rs-logo">
            <Link to="/">
              <img src={Logo} alt="Derma Express" />
            </Link>
          </div>

          {/* ===== MENU NAVIGASI (TENGAH) ===== */}
          <nav className="rs-nav">

            <NavLink to="/" end className="rs-nav-item">
              Home
            </NavLink>

            <NavLink to="/about" className="rs-nav-item">
              About
            </NavLink>

            <NavLink to="/treatment" className="rs-nav-item">
              Treatment
            </NavLink>

            <NavLink to="/product" className="rs-nav-item">
              Products
            </NavLink>

            <NavLink to="/blog" className="rs-nav-item">
              Blog
            </NavLink>

            <NavLink to="/gallery" className="rs-nav-item">
              Galeri
            </NavLink>

            <NavLink to="/promo" className="rs-nav-item">
              Promo
            </NavLink>

            <NavLink to="/contact" className="rs-nav-item">
              Contact
            </NavLink>

          </nav>

          {/* ===== ACTION BUTTON ===== */}
          <div className="rs-actions">
            <Link to="/appointment" className="rs-btn rs-btn-primary">
              Buat Janji Temu
            </Link>

            <Link to="/login" className="rs-btn rs-btn-outline">
              Masuk / Daftar
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}
