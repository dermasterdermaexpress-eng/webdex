import { useState } from "react";
import "../css/Blog.css";
import { Link } from "react-router-dom";


import heroImg from "../assets/blog/blog-hero.jpg";
import populer1 from "../assets/blog/populer.jpg";
import terbaru1 from "../assets/blog/terbaru.jpg";
import blog1 from "../assets/blog/blog-1.jpg";
import blog2 from "../assets/blog/blog-2.jpg";
import blog3 from "../assets/blog/blog-3.jpg";
import blog4 from "../assets/blog/blog-4.jpg";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("artikel");

/* ===== ARTIKEL ===== */

const populer = {
  title: "Pengen Glow UP!",
  image: populer1,
  date: "26 July 2024",
};

  const terbaru = {
    title: "Upgrade Look Ala Idol Korea Dengan Treatment Ini!",
    image: terbaru1,
    date: "29 January 2026",
  };

  const articles = [
    {
      id: 1,
      title: "Mengenal Interventional Pain Management (IPM) Solusi Medis untuk Atasi Nyeri Kronis",
      image: blog1,
      date: "29 January 2026",
    },
    {
      id: 2,
      title: "Telinga Berdenging (Tinnitus): Penjelasan Medis dan Cara Mengatasinya",
      image: blog2,
      date: "26 January 2026",
    },
    {
      id: 3,
      title: "Gejala sifilis pada Wanita yang Tidak Disadari dan Pengobatannya",
      image: blog3,
      date: "21 January 2026",
    },
    {
      id: 4,
      title: "Disfungsi Ereksi (Impotensi): Penyebab, Gejala, dan Pengobatannya",
      image: blog4,
      date: "20 January 2026",
    },
  ];

  /* ===== VIDEO (YOUTUBE) ===== */
  const videoFeatured = {
    populer: {
      title: "Rahasia Kulit Glowing Ala Klinik",
      youtubeId: "UUHKueCTC7pmEFDfgjsOzQdw",
      date: "20 January 2026",
    },
    terbaru: {
      title: "Skincare Routine yang Benar Menurut Dokter",
      youtubeId: "UUHKueCTC7pmEFDfgjsOzQdw",
      date: "28 January 2026",
    },
  };

  const videos = [
    {
      id: 1,
      title: "Perawatan Wajah untuk Kulit Berminyak",
      youtubeId: "UUHKueCTC7pmEFDfgjsOzQdw",
      date: "25 January 2026",
    },
    {
      id: 2,
      title: "Cara Mengatasi Jerawat Membandel",
      youtubeId: "UUHKueCTC7pmEFDfgjsOzQdw",
      date: "23 January 2026",
    },
    {
      id: 3,
      title: "Skincare Routine Pagi & Malam",
      youtubeId: "UUHKueCTC7pmEFDfgjsOzQdw",
      date: "21 January 2026",
    },
    {
      id: 4,
      title: "Treatment Anti Aging",
      youtubeId: "UUHKueCTC7pmEFDfgjsOzQdw",
      date: "20 January 2026",
    },
  ];

  return (
    <section className="blog-page">

      {/* ===== HERO ===== */}
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="blog-hero-overlay" />
        <h1>Blog</h1>
      </div>

      {/* ===== TABS ===== */}
      <div className="blog-tabs">
        <button
          className={activeTab === "artikel" ? "active" : ""}
          onClick={() => setActiveTab("artikel")}
        >
          Artikel
        </button>

        <button
          className={activeTab === "video" ? "active" : ""}
          onClick={() => setActiveTab("video")}
        >
          Video
        </button>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="blog-container">

        {/* ===== ARTIKEL TAB ===== */}
        {activeTab === "artikel" && (
          <>
            <div className="blog-featured">
              <div>
                <h3>Terpopuler</h3>
                <Link to="/blogdetail/pengen-glow-up" className="featured-card">
                  <img src={populer.image} alt={populer.title} />
                  <p className="title">{populer.title}</p>
                  <span>{populer.date}</span>
                </Link>
              </div>

              <div>
                <h3>Terbaru</h3>
                <div className="featured-card">
                  <img src={terbaru.image} alt={terbaru.title} />
                  <p className="title">{terbaru.title}</p>
                  <span>{terbaru.date}</span>
                </div>
              </div>
            </div>

            <div className="blog-grid">
              {articles.map((item) => (
                <div className="blog-card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <p className="title">{item.title}</p>
                  <span>{item.date}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ===== VIDEO TAB ===== */}
        {activeTab === "video" && (
  <>
    {/* FEATURED */}
    <div className="blog-featured">
      <div>
        <h3>Terpopuler</h3>
        <div className="featured-card video-thumb">
          <a
            href="https://www.youtube.com/watch?v=v1akXE9TYDY"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/v1akXE9TYDY/hqdefault.jpg"
              alt="Video Terpopuler Derma Express"
            />
          </a>
          <p className="title">Rahasia Kulit Glowing Derma Express</p>
          <span>Derma Express</span>
        </div>
      </div>

      <div>
        <h3>Terbaru</h3>
        <div className="featured-card video-thumb">
          <a
            href="https://www.youtube.com/watch?v=Wbk5ggIrrSA"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/Wbk5ggIrrSA/hqdefault.jpg"
              alt="Video Terbaru Derma Express"
            />
          </a>
          <p className="title">Treatment Favorit di Derma Express</p>
          <span>Derma Express</span>
        </div>
      </div>
    </div>

    {/* GRID VIDEO */}
    <div className="blog-grid">
      {[
        {
          id: 1,
          title: "Perawatan Wajah Profesional",
          youtubeId: "8vF6Rk_Od1E",
        },
        {
          id: 2,
          title: "Tips Skincare Harian",
          youtubeId: "S9sGNPWz-l4",
        },
        {
          id: 3,
          title: "Rahasia Kulit Sehat",
          youtubeId: "gllR9iCAOxw",
        },
        {
          id: 4,
          title: "Treatment Anti Aging",
          youtubeId: "6r5nRk6Gn5w",
        },
      ].map((item) => (
        <div className="blog-card video-thumb" key={item.id}>
          <a
            href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
              alt={item.title}
            />
          </a>
          <p className="title">{item.title}</p>
          <span>Derma Express</span>
        </div>
      ))}
    </div>
  </>
)}

        {/* PAGINATION */}
        <div className="blog-pagination">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>…</span>
          <span>98</span>
        </div>

      </div>
    </section>
  );
}
