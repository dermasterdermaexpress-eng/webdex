import "../css/Promo.css";
import { Link } from "react-router-dom";

import bgpromo1 from "../assets/promo/bgpromo.jpg";
import promo1 from "../assets/promo/promo-1.jpg";

export default function Promo() {
  const promos = [
    {
      id: 1,
          slug: "Program Bayi Tabung Bisa Cicilan 0% Mandiri",
      title: "Program Bayi Tabung Bisa Cicilan 0% hingga 6 bulan dengan Kartu Kredit Mandiri",
      location: "Derma Express Bekasi",
      image: promo1,
    },
    {
      id: 2,
                slug: "Program Bayi Tabung Bisa Cicilan 0% HSBC",
      title: "Program Bayi Tabung Bisa Cicilan 0% hingga 6 bulan dengan Kartu Kredit HSBC",
      location: "Derma Express Bintaro",
      image: promo1,
    },
    {
      id: 3,
                slug: "Program Bayi Tabung Bisa Cicilan 0% BCA",
      title: "Program Bayi Tabung Bisa Cicilan 0% hingga 6 bulan dengan Kartu Kredit BCA",
      location: "Derma Express Bintaro",
      image: promo1,
    },
  ];

  return (
    <section className="promo-page">
      <div
        className="promo-hero"
        style={{ backgroundImage: `url(${bgpromo1})` }}
      />

      {/* ===== JUDUL & DESKRIPSI (di bawah hero) ===== */}
      <div className="promo-intro">
        <h1>Promo Derma Express</h1>
        <p>
          Di Derma Express, kami percaya setiap orang berhak memiliki kulit yang sehat dan memukau.
          Melalui halaman promo ini, kami menghadirkan rangkaian perawatan ahli dengan harga istimewa,
          khusus untuk Anda. Mari mulai perjalanan kecantikan Anda bersama partner dermatologi terpercaya.
        </p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="promo-container">

        {/* FILTER */}
        <div className="promo-filter">
          <label>Pilih lokasi cabang :</label>
          <select>
            <option>Seluruh Cabang</option>
            <option>Derma Express Bintaro</option>
            <option>Derma Express Pondok Indah</option>
            <option>Derma Express Kemang</option>
          </select>
        </div>

        {/* PROMO GRID */}
        <div className="promo-grid">
          {promos.map((item) => (
            <div className="promo-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="promo-card-body">
                <span className="promo-badge">Promo</span>

                <h3>{item.title}</h3>

                <p className="promo-location">{item.location}</p>
<Link
  to={`/promo/${item.slug}`}
  className="promo-detail-btn"
>
  Lihat Detail
</Link>
                {/* <button>Lihat Detail</button> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}