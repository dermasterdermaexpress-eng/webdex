import { useMemo, useRef, useState } from "react";
import "../css/Blog.css";
import { Link } from "react-router-dom";

import heroImg from "../assets/blog/blog-hero.jpg";
import populer1 from "../assets/blog/populer.jpg";
import terbaru1 from "../assets/blog/terbaru.jpg";
import blog1 from "../assets/blog/blog-1.jpg";
import blog2 from "../assets/blog/blog-2.jpg";
import blog3 from "../assets/blog/blog-3.jpg";
import blog4 from "../assets/blog/blog-4.jpg";

/* =========================================================
   SLIDER SEDERHANA (scroll horizontal + tombol panah)
   Dipakai ulang untuk grid Artikel dan grid Video.
========================================================= */
function BlogSlider({ children }) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(":scope > *");
    const gap = 22;
    const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="blog-slider">
      <button
        type="button"
        className="blog-slider-arrow left"
        onClick={() => scrollByCard(-1)}
        aria-label="Sebelumnya"
      >
        ‹
      </button>

      <div className="blog-grid blog-grid--slider" ref={trackRef}>
        {children}
      </div>

      <button
        type="button"
        className="blog-slider-arrow right"
        onClick={() => scrollByCard(1)}
        aria-label="Berikutnya"
      >
        ›
      </button>
    </div>
  );
}

const PAGE_SIZE = 4; // jumlah video per halaman

// Susun daftar nomor halaman, mis. [1, "…", 4, 5, 6, "…", 10]
function getPageItems(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const items = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) items.push("start-ellipsis");
  for (let i = start; i <= end; i++) items.push(i);
  if (end < total - 1) items.push("end-ellipsis");
  items.push(total);

  return items;
}

/* =========================================================
   PAGINATION (nomor halaman di bawah tiap section)
========================================================= */
function BlogPagination({ page, totalPages, onChange, label }) {
  return (
    <nav className="blog-pagination" aria-label={label}>
      <button
        type="button"
        className="bp-btn bp-arrow"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Halaman sebelumnya"
      >
        ‹
      </button>

      {getPageItems(page, totalPages).map((item) =>
        typeof item === "number" ? (
          <button
            key={item}
            type="button"
            className={`bp-btn ${item === page ? "active" : ""}`}
            onClick={() => onChange(item)}
            aria-current={item === page ? "page" : undefined}
          >
            {item}
          </button>
        ) : (
          <span key={item} className="bp-ellipsis" aria-hidden="true">
            …
          </span>
        )
      )}

      <button
        type="button"
        className="bp-btn bp-arrow"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Halaman berikutnya"
      >
        ›
      </button>
    </nav>
  );
}

export default function Blog() {
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

  /* ===== VIDEO (YOUTUBE) =====
     PERHATIAN: youtubeId lama ("UUHKueCTC7pmEFDfgjsOzQdw") berformat ID
     channel/playlist (diawali "UU"), bukan ID video 11 karakter. Thumbnail
     dan link YouTube tidak akan menampilkan video yang benar sampai diganti
     dengan ID video asli (mis. dari URL youtube.com/watch?v=XXXXXXXXXXX). */
  const videoFeatured = {
    populer: {
      title: "Rahasia Kulit Glowing Ala Klinik",
      youtubeId: "v1akXE9TYDY",
      source: "Derma Express",
    },
    terbaru: {
      title: "Treatment Favorit di Derma Express",
      youtubeId: "Wbk5ggIrrSA",
      source: "Derma Express",
    },
  };

  // TODO: ganti dengan video asli. Sengaja dibuat 12 item (bukan 4) supaya
  // pagination-nya punya beberapa halaman untuk dicoba — hapus item contoh
  // ini kalau video aslimu belum sebanyak ini.
  const videos = [
    { id: 1, title: "Perawatan Wajah Profesional", youtubeId: "8vF6Rk_Od1E" },
    { id: 2, title: "Tips Skincare Harian", youtubeId: "S9sGNPWz-l4" },
    { id: 3, title: "Rahasia Kulit Sehat", youtubeId: "gllR9iCAOxw" },
    { id: 4, title: "Treatment Anti Aging", youtubeId: "6r5nRk6Gn5w" },
    { id: 5, title: "Tips Memilih Sunscreen", youtubeId: "8vF6Rk_Od1E" },
    { id: 6, title: "Rutinitas Malam untuk Kulit Kusam", youtubeId: "S9sGNPWz-l4" },
    { id: 7, title: "Mitos vs Fakta Perawatan Wajah", youtubeId: "gllR9iCAOxw" },
    { id: 8, title: "Cara Merawat Kulit Sensitif", youtubeId: "6r5nRk6Gn5w" },
    { id: 9, title: "Kombinasi Skincare yang Aman", youtubeId: "8vF6Rk_Od1E" },
    { id: 10, title: "Perawatan Setelah Facial", youtubeId: "S9sGNPWz-l4" },
    { id: 11, title: "Tanya Jawab Bersama Dokter Kulit", youtubeId: "gllR9iCAOxw" },
    { id: 12, title: "Review Treatment Terbaru", youtubeId: "6r5nRk6Gn5w" },
  ];

  /* ===== PAGINATION: hanya untuk section Video, ditampilkan di paling bawah ===== */
  const [videoPage, setVideoPage] = useState(1);

  const videoTotalPages = Math.max(1, Math.ceil(videos.length / PAGE_SIZE));

  const pagedVideos = useMemo(
    () => videos.slice((videoPage - 1) * PAGE_SIZE, videoPage * PAGE_SIZE),
    [videos, videoPage]
  );

  const goToVideoPage = (page) => {
    const next = Math.min(Math.max(page, 1), videoTotalPages);
    setVideoPage(next);
    document.getElementById("blog-section-video")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

      {/* ===== CONTENT ===== */}
      <div className="blog-container">

        {/* ===================================================
            ARTIKEL
        =================================================== */}
        <section className="blog-section" aria-labelledby="blog-section-artikel">
          <div className="blog-section-header">
            <span id="blog-section-artikel" className="blog-section-label active">
              Artikel
            </span>
          </div>

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

          <BlogSlider>
            {articles.map((item) => (
              <div className="blog-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <p className="title">{item.title}</p>
                <span>{item.date}</span>
              </div>
            ))}
          </BlogSlider>
        </section>

        {/* ===================================================
            VIDEO
        =================================================== */}
        <section className="blog-section" aria-labelledby="blog-section-video">
          <div className="blog-section-header">
            <span id="blog-section-video" className="blog-section-label">
              Video
            </span>
          </div>

          <div className="blog-featured">
            <div>
              <h3>Terpopuler</h3>
              <div className="featured-card video-thumb">
                <a
                  href={`https://www.youtube.com/watch?v=${videoFeatured.populer.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoFeatured.populer.youtubeId}/hqdefault.jpg`}
                    alt={videoFeatured.populer.title}
                  />
                </a>
                <p className="title">{videoFeatured.populer.title}</p>
                <span>{videoFeatured.populer.source}</span>
              </div>
            </div>

            <div>
              <h3>Terbaru</h3>
              <div className="featured-card video-thumb">
                <a
                  href={`https://www.youtube.com/watch?v=${videoFeatured.terbaru.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoFeatured.terbaru.youtubeId}/hqdefault.jpg`}
                    alt={videoFeatured.terbaru.title}
                  />
                </a>
                <p className="title">{videoFeatured.terbaru.title}</p>
                <span>{videoFeatured.terbaru.source}</span>
              </div>
            </div>
          </div>

          <div className="blog-grid">
            {pagedVideos.map((item) => (
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

          <BlogPagination
            page={videoPage}
            totalPages={videoTotalPages}
            onChange={goToVideoPage}
            label="Halaman video"
          />
        </section>

      </div>
    </section>
  );
}