import { useMemo, useState } from "react";
import "../css/Gallery.css";

import heroImg from "../assets/gambarslide/slide6.jpg";
import g1 from "../assets/services/glow-up.jpg";
import g2 from "../assets/services/dermal-filler.jpg";
import g3 from "../assets/services/dermatox.jpg";
import g4 from "../assets/services/benang-hidung.jpg";
import g5 from "../assets/services/nctf.jpg";
import g6 from "../assets/cliniclocations/bsd.jpg";
import g7 from "../assets/cliniclocations/test1.jpg";
import g8 from "../assets/gambarslide/slide3.jpg";
import g9 from "../assets/gambarslide/slide4.jpg";
import g10 from "../assets/gambarslide/slide5.jpg";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filters = [
    "Semua",
    "Treatment",
    "Clinic",
    "Before After",
    "Event",
  ];

  const items = [
    {
      id: 1,
      title: "Glow Renewal Facial",
      tag: "Treatment",
      image: g1,
    },
    {
      id: 2,
      title: "Dermal Filler Session",
      tag: "Treatment",
      image: g2,
    },
    {
      id: 3,
      title: "Dermatox Refresh",
      tag: "Treatment",
      image: g3,
    },
    {
      id: 4,
      title: "Thread Lift Precision",
      tag: "Treatment",
      image: g4,
    },
    {
      id: 5,
      title: "NCTF Skin Booster",
      tag: "Treatment",
      image: g5,
    },
    {
      id: 6,
      title: "Clinic Room Experience",
      tag: "Clinic",
      image: g6,
    },
    {
      id: 7,
      title: "Reception & Lounge",
      tag: "Clinic",
      image: g7,
    },
    {
      id: 8,
      title: "Before After Glow",
      tag: "Before After",
      image: g8,
    },
    {
      id: 9,
      title: "Before After Lift",
      tag: "Before After",
      image: g9,
    },
    {
      id: 10,
      title: "Beauty Class Event",
      tag: "Event",
      image: g10,
    },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "Semua") return items;
    return items.filter((item) => item.tag === activeFilter);
  }, [activeFilter, items]);

  return (
    <section className="gallery-page">
      <div
        className="gallery-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-content">
          <p className="gallery-eyebrow">Beauty Clinic Gallery</p>
          <h1>Aesthetic Moments</h1>
          <p className="gallery-subtitle">
            Kurasi visual treatment, hasil, dan suasana klinik yang bersih,
            hangat, dan premium.
          </p>
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-header">
          <div>
            <h2>Our Signature Looks</h2>
            <p>
              Jelajahi koleksi foto pilihan untuk inspirasi treatment dan gaya
              perawatan terbaik.
            </p>
          </div>
          <div className="gallery-badges">
            <span>Higienis</span>
            <span>Premium</span>
            <span>Certified</span>
          </div>
        </div>

        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div className="gallery-card" key={item.id}>
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gallery-meta">
                <p className="gallery-tag">{item.tag}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <div>
            <h3>Ready for your glow-up?</h3>
            <p>
              Konsultasikan kebutuhan kulitmu dengan dokter dan tim terbaik
              kami.
            </p>
          </div>
          <button type="button">Jadwalkan Konsultasi</button>
        </div>
      </div>
    </section>
  );
}
