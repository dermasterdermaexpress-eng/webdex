import { useMemo, useState } from "react";
import "../css/Treatment.css";

// Ganti dengan gambar kamu sendiri di folder assets
import tt1 from "../assets/treatment/t1.jpg";
import tt2 from "../assets/treatment/t2.jpg";
import tt3 from "../assets/treatment/t3.jpg";
import tt4 from "../assets/treatment/t4.jpg";
import tt5 from "../assets/treatment/t5.jpg";
import tt6 from "../assets/treatment/t6.jpg";
import heroImg from "../assets/about/about-hero.jpg";

export default function Treatments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const treatments = [
    {
      id: 1,
      title: "BENANG HIDUNG",
      desc: "Nose Threadlift (Tanam Benang Hidung) merupakan treatment yang berguna untuk membuat jembatan hidung lebih tinggi dengan menggunakan benang.",
      image: tt1,
    },
    {
      id: 2,
      title: "DERMATOX",
      desc: "Dermatox merupakan treatment yang berguna untuk merileksasikan otot. Dermatox bekerja dengan cara memblokir aktivitas saraf.",
      image: tt2,
    },
    {
      id: 3,
      title: "DERMAFILLER",
      desc: "Dermafiller merupakan treatment yang berguna untuk mengisi daerah-daerah yang rentan kendur dan mengisi bagian yang kosong pada wajah.",
      image: tt3,
    },
    {
      id: 4,
      title: "ACNE SCAR",
      desc: "Acne scar adalah bekas jerawat yang menyerupai bopeng di kulit wajah. Acne scar merupakan masalah kulit dalam suatu proses penyembuhan.",
      image: tt4,
    },
    {
      id: 5,
      title: "FACIAL",
      desc: "Facial adalah perawatan wajah non-invasif yang umum dilakukan di klinik kecantikan, meliputi ekstraksi komedo, eksfoliasi, dan mask.",
      image: tt5,
    },
    {
      id: 6,
      title: "JEJU WHITE PEEL",
      desc: "Jeju White Peel merupakan facial yang berguna untuk mengangkat sel kulit mati, membersihkan pori-pori, dan mencerahkan kulit.",
      image: tt6,
    },
  ];

  const visibleTreatments = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filtered = treatments.filter((item) =>
      item.title.toLowerCase().includes(normalizedSearch)
    );

    return filtered.sort((a, b) => {
      const result = a.title.localeCompare(b.title);
      return sortAsc ? result : -result;
    });
  }, [searchTerm, sortAsc, treatments]);

  return (
    <section className="treatments-page">
      {/* ===== HERO ===== */}
      <div
        className="treatments-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="treatments-hero-overlay">
          <h1>Treatments</h1>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="treatments-container">
        <div className="treatments-controls">
          <div className="treatments-search">
            <label htmlFor="treatment-search">Search Treatment</label>
            <input
              id="treatment-search"
              type="search"
              placeholder="Cari treatment..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <button
            className="treatments-sort-btn"
            type="button"
            onClick={() => setSortAsc((prev) => !prev)}
          >
            Sort {sortAsc ? "A-Z" : "Z-A"}
          </button>
        </div>
        <div className="treatments-grid">
          {visibleTreatments.map((item) => (
            <div className="treatment-card" key={item.id}>
              <div className="treatment-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="treatment-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
