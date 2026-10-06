import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";
import Logo from "../assets/logo-dex.jpg";

const LANGUAGES = [
  { code: "ID", flag: "🇮🇩", label: "Bahasa Indonesia" },
  { code: "EN", flag: "🇬🇧", label: "English" },
];

const DRAG_THRESHOLD = 5; // px, di bawah ini dianggap klik biasa
const KEY_STEP = 40; // px, langkah geser via keyboard

export default function Header() {
  const [lang, setLang] = useState("ID");
  const [open, setOpen] = useState(false);
  const [posY, setPosY] = useState(null); // null = default di tengah layar
  const [dragging, setDragging] = useState(false);

  const wrapRef = useRef(null);
  const dragRef = useRef({ startY: 0, startCenter: 0, moved: false, active: false });
  const justDragged = useRef(false);

  const current = LANGUAGES.find((l) => l.code === lang);

  // tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const clampY = (y) => {
    const margin = 48;
    return Math.min(Math.max(y, margin), window.innerHeight - margin);
  };

  /* ===== DRAG (mouse + touch) ===== */
  const handlePointerDown = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    dragRef.current = {
      startY: e.clientY,
      startCenter: rect.top + rect.height / 2,
      moved: false,
      active: true,
    };
    justDragged.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dy = e.clientY - d.startY;
    if (!d.moved && Math.abs(dy) < DRAG_THRESHOLD) return;
    if (!d.moved) {
      d.moved = true;
      setDragging(true);
      setOpen(false);
    }
    setPosY(clampY(d.startCenter + dy));
  };

  const handlePointerUp = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    d.active = false;
    justDragged.current = d.moved;
    setDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const handleToggleClick = () => {
    // abaikan click yang muncul setelah drag
    if (justDragged.current) {
      justDragged.current = false;
      return;
    }
    setOpen((v) => !v);
  };

  /* ===== KEYBOARD: panah atas/bawah untuk geser ===== */
  const handleKeyDown = (e) => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();
    const rect = wrapRef.current.getBoundingClientRect();
    const center = posY ?? rect.top + rect.height / 2;
    setPosY(clampY(center + (e.key === "ArrowUp" ? -KEY_STEP : KEY_STEP)));
  };

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
    // TODO: sambungkan ke sistem i18n kamu (mis. i18next.changeLanguage(code.toLowerCase()))
  };

  return (
    <header className="rs-header">

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
            <NavLink to="/" end className="rs-nav-item">Home</NavLink>
            <NavLink to="/about" className="rs-nav-item">About</NavLink>
            <NavLink to="/treatment" className="rs-nav-item">Treatment</NavLink>
            <NavLink to="/product" className="rs-nav-item">Products</NavLink>
            <NavLink to="/blog" className="rs-nav-item">Blog</NavLink>
            <NavLink to="/gallery" className="rs-nav-item">Galeri</NavLink>
            <NavLink to="/promo" className="rs-nav-item">Promo</NavLink>
            <NavLink to="/contact" className="rs-nav-item">Contact</NavLink>
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

      {/* ===== FLOATING LANGUAGE SWITCHER (bisa digeser naik/turun) ===== */}
      <div
        className={`rs-lang-float ${dragging ? "is-dragging" : ""}`}
        ref={wrapRef}
        style={posY !== null ? { top: `${posY}px` } : undefined}
      >
        {open && (
          <ul className="rs-lang-menu" role="listbox">
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  className={`rs-lang-option ${l.code === lang ? "selected" : ""}`}
                  onClick={() => handleSelect(l.code)}
                >
                  <span className="rs-lang-flag">{l.flag}</span>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="rs-lang-toggle"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={handleToggleClick}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="Ganti bahasa (tarik atau tekan panah atas/bawah untuk memindahkan)"
          title="Klik untuk ganti bahasa, tarik untuk memindahkan"
        >
          <span className="rs-lang-grip" aria-hidden="true">⋮⋮</span>
          <span className="rs-lang-flag">{current.flag}</span>
          {current.code}
          <span className={`rs-arrow ${open ? "up" : ""}`}>▾</span>
        </button>
      </div>

    </header>
  );
}