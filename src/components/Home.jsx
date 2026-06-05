import React, { useEffect, useState } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

import '../css/Home.css';

// Carousel images
import slide1 from '../assets/gambarslide/slider1.jpg';
import slide2 from '../assets/gambarslide/Slider2.jpg';
import slide3 from '../assets/gambarslide/slide3.jpg';
import slide4 from '../assets/gambarslide/slide4.jpg';
import slide5 from '../assets/gambarslide/slide5.jpg';
import slide6 from '../assets/gambarslide/slide6.jpg';

//pop up image
import popup from '../assets/home/popupsubs.jpg';


// Treatments preview
import fillerImg from '../assets/services/dermal-filler.jpg';
import dermatoxImg from '../assets/services/dermatox.jpg';
import benangImg from '../assets/services/benang-hidung.jpg';

// Best seller products
import product1 from '../assets/home/sun.jpg';
import product2 from '../assets/home/moon.jpg';
import product3 from '../assets/home/emulsion.jpg';

// Care categories
import care1 from '../assets/home/repair.jpg';
import care2 from '../assets/home/refresh.jpg';
import care3 from '../assets/home/protection.jpg';
import care4 from '../assets/home/hydration.jpg';
import beforeImg from '../assets/home/before.png';
import afterImg from '../assets/home/after.png';

const heroSlides = [
  {
    id: 1,
    img: slide1,
    badge: "Aesthetic Clinic",
    title: "Glow Naturally, Feel Confident",
    desc: "Perawatan kulit modern dengan pendekatan medis dan hasil yang tetap natural.",
    cta: "Konsultasi Sekarang"
  },
  {
    id: 2,
    img: slide2,
    badge: "Skin Renewal",
    title: "Revive Your Skin Texture",
    desc: "Teknologi klinis terkini untuk kulit lebih halus, lembap, dan bercahaya.",
    cta: "Lihat Treatment"
  },
  {
    id: 3,
    img: slide3,
    badge: "Expert Care",
    title: "Personalized Treatment Plan",
    desc: "Dirancang khusus sesuai kebutuhan kulit dan gaya hidup Anda.",
    cta: "Jadwalkan Visit"
  },
  {
    id: 4,
    img: slide4,
    badge: "Signature Glow",
    title: "Healthy, Radiant, Timeless",
    desc: "Perpaduan dermatologi dan estetika untuk hasil yang aman dan elegan.",
    cta: "Lihat Program"
  },
  {
    id: 5,
    img: slide5,
    badge: "Modern Clinic",
    title: "Elevated Beauty Experience",
    desc: "Ruang perawatan nyaman, higienis, dan ditangani tenaga profesional.",
    cta: "Tur Klinik"
  },
  {
    id: 6,
    img: slide6,
    badge: "Confidence Boost",
    title: "Reveal Your Best Look",
    desc: "Sentuhan estetika yang lembut untuk memperkuat karakter alami Anda.",
    cta: "Mulai Sekarang"
  }
];

const treatmentsPreview = [
  {
    id: 1,
    title: "BENANG HIDUNG",
    desc: "Nose Threadlift untuk membentuk jembatan hidung lebih proporsional.",
    img: benangImg
  },
  {
    id: 2,
    title: "DERMATOX",
    desc: "Merileksasikan otot dan membantu tampilan wajah lebih segar.",
    img: dermatoxImg
  },
  {
    id: 3,
    title: "DERMALFILLER",
    desc: "Mengisi area wajah yang kosong agar terlihat lebih seimbang.",
    img: fillerImg
  }
];

const bestSellers = [
  { id: 1, name: "Dexskin Sunscreen", img: product1, tag: "Cream" },
  { id: 2, name: "Dexskin Moisture", img: product2, tag: "Cream" },
  { id: 3, name: "Dexskin Emulsion", img: product3, tag: "Cream" }
];

const careCategories = [
  { id: 1, label: "PROTECTION", img: care1 },
  { id: 2, label: "HYDRATION", img: care2 },
  { id: 3, label: "REFRESH", img: care3 },
  { id: 4, label: "REPAIR", img: care4 }
];

const awards = [
  { id: 1, title: "Best Aesthetic Clinic", year: "2023" },
  { id: 2, title: "Trusted Beauty Award", year: "2022" },
  { id: 3, title: "Innovation in Skincare", year: "2021" },
  { id: 4, title: "Top Patient Choice", year: "2020" }
];

const latestBlogs = [
  {
    id: 1,
    title: "Skin Barrier Basics: Why It Matters",
    img: slide1
  },
  {
    id: 2,
    title: "Simple Anti-Aging Routine You Can Start Today",
    img: slide2
  },
  {
    id: 3,
    title: "Rejuvenation Treatment: What to Expect",
    img: slide3
  }
];

function Home() {
  const [compareValue, setCompareValue] = useState(55);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubscribe(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="home-page">
      {showSubscribe && (
        <div className="subscribe-modal" role="dialog" aria-modal="true" aria-labelledby="subscribe-title">
          <div
            className="subscribe-backdrop"
            onClick={() => setShowSubscribe(false)}
            aria-hidden="true"
          ></div>
          <div className="subscribe-card" role="document">
            <button
              type="button"
              className="subscribe-close"
              onClick={() => setShowSubscribe(false)}
              aria-label="Close subscribe popup"
            >
              ×
            </button>
            <div className="subscribe-media">
              <img src={popup} alt="Skincare essentials" />
              <div className="subscribe-media-overlay">
                <p>Weekly glow tips</p>
                <span>Skin-first routines + clinic news</span>
              </div>
            </div>
            <div className="subscribe-content">
              <span className="subscribe-eyebrow">Newsletter</span>
              <h2 id="subscribe-title">Subscribe &amp; Get 10% Off</h2>
              <p>
                Dapatkan info promo, artikel perawatan, dan rekomendasi produk
                yang dikurasi dokter kami.
              </p>
              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <label className="visually-hidden" htmlFor="subscribe-email">
                  Email address
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <button type="submit">Send</button>
              </form>
              {submitted && (
                <p className="subscribe-success">
                  Terima kasih! Kode diskon sudah dikirim ke email Anda.
                </p>
              )}
              <p className="subscribe-meta">
                Dengan subscribe, Anda setuju menerima email dari Derma Express.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* HERO CAROUSEL */}
      <section className="hero-carousel">
        <BootstrapCarousel fade interval={3000}>
          {heroSlides.map((slide) => (
            <BootstrapCarousel.Item key={slide.id}>
              <div className="hero-slide">
                <img src={slide.img} className="d-block w-100" alt={slide.title} />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                  <span className="hero-badge">{slide.badge}</span>
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <button type="button" className="hero-cta">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </BootstrapCarousel.Item>
          ))}
        </BootstrapCarousel>
      </section>

      {/* INTRO STATEMENT */}
      <section className="home-intro">
        <div className="container">
          <p>
            Derma Express hadir dengan impian memenuhi kebutuhan segala lapisan
            masyarakat agar dapat memiliki wajah proporsional, kulit sehat, dan
            tampak muda dengan harga terjangkau. Sebab kami yakin bahwa wajah
            proporsional dan kulit sehat merupakan investasi masa depan.
          </p>
        </div>
      </section>

      {/* TREATMENTS PREVIEW */}
      <section className="home-treatments">
        <div className="container">
          <h2>Treatments</h2>
          <div className="treatments-preview-grid">
            {treatmentsPreview.map((item) => (
              <article className="treatments-preview-card" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="treatments-preview-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="treatments-preview-accent"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLER */}
      <section className="home-best-seller">
        <div className="container">
          <h2>Best Seller</h2>
          <div className="best-seller-grid">
            {bestSellers.map((item) => (
              <article className="best-seller-card" key={item.id}>
                <span className="best-seller-tag">{item.tag}</span>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CARE CATEGORIES */}
      <section className="home-care">
        <div className="container">
          <div className="care-grid">
            {careCategories.map((item) => (
              <div className="care-card" key={item.id}>
                <img src={item.img} alt={item.label} />
               {/*  <span>{item.label}</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="home-awards">
        <div className="container">
          <h2>Award</h2>
          <div className="awards-slider">
            <div className="awards-track">
              {[...awards, ...awards].map((item, index) => (
                <div className="award-card" key={`${item.id}-${index}`}>
                  <div className="award-icon"></div>
                  <h3>{item.title}</h3>
                  <p>{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="home-before-after">
        <div className="container">
          <div className="before-after-header">
            <p className="before-after-eyebrow">Expert Result</p>
            <h2>Before & After Transformation</h2>
            <p className="before-after-subtitle">
              Hasil natural dengan pendekatan medis yang aman dan personal.
            </p>
          </div>
          <div className="before-after-card">
            <div
              className="before-after-frame"
              style={{ "--pos": `${compareValue}%` }}
            >
              <img src={beforeImg} alt="Before treatment" className="before-img" />
              <img src={afterImg} alt="After treatment" className="after-img" />
              <div className="before-after-line"></div>
              <div className="before-after-handle"></div>
              <span className="before-label">Before</span>
              <span className="after-label">After</span>
            </div>
            <input
              className="before-after-slider"
              type="range"
              min="0"
              max="100"
              value={compareValue}
              onChange={(event) => setCompareValue(event.target.value)}
              aria-label="Before and after comparison slider"
            />
          </div>
        </div>
      </section>

      {/* LATEST BLOG */}
      <section className="home-blog">
        <div className="container">
          <div className="home-blog-header">
            <h2>Read Our Latest Blog</h2>
            <a className="home-blog-link" href="/blog">
              View Blog
            </a>
          </div>
          <div className="home-blog-grid">
            {latestBlogs.map((post) => (
              <article className="home-blog-card" key={post.id}>
                <div className="home-blog-image">
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="home-blog-body">
                  <h3>{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
