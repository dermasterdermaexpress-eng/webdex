import { useState } from "react";
import "../css/Productdetail.css";

import mainImg from "../assets/product/detail-main.jpg";
import thumb1 from "../assets/product/detail-1.jpg";
import thumb2 from "../assets/product/detail-2.jpg";
import thumb3 from "../assets/product/detail-3.jpg";

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    {
      id: "info",
      label: "Info lebih lanjut",
      content: (
        <>
          <p>
            <strong>Ukuran:</strong> Panjang 97mm, Tinggi 44mm, Kedalaman 65mm,
            Berat 0.1875g
          </p>
          <p>
            <strong>Nama produk lengkap:</strong> My Sunshine Eau de Parfum
          </p>
        </>
      ),
    },
    {
      id: "bahan",
      label: "Bahan",
      content: (
        <>
          <p>
            <strong>Komposisi utama:</strong> Alkohol, Parfum, Aqua, Linalool,
            Limonene, Citral.
          </p>
          <p>
            <strong>Catatan:</strong> Simpan di tempat sejuk dan kering, jauhkan
            dari sinar matahari langsung.
          </p>
        </>
      ),
    },
    {
      id: "pengiriman",
      label: "Pengiriman",
      content: (
        <>
          <p>
            <strong>Estimasi:</strong> 2-5 hari kerja (Jabodetabek), 4-8 hari
            kerja (luar kota).
          </p>
          <p>
            <strong>Pengemasan:</strong> Dibalut bubble wrap dan dus pelindung.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="product-detail-page">

      {/* ===== BREADCRUMB ===== */}
      <div className="product-breadcrumb">
        Home &gt; Parfum &gt; Pilih Aroma Sesuai Mood &gt; Parfum Energising &gt;
        <span> My Sunshine Eau de Parfum</span>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="product-detail-container">

        {/* ===== LEFT (IMAGE) ===== */}
        <div className="product-detail-gallery">
          <span className="badge-new">BARU</span>

          <div className="main-image">
            <img src={mainImg} alt="My Sunshine Eau de Parfum" />
          </div>

          <div className="thumbnail-list">
            <img src={thumb1} alt="thumb 1" />
            <img src={thumb2} alt="thumb 2" />
            <img src={thumb3} alt="thumb 3" />
          </div>

          <div className="gallery-actions">
            <button>↗</button>
            <button>♡</button>
          </div>
        </div>

        {/* ===== RIGHT (INFO) ===== */}
        <div className="product-detail-info">
          <p className="brand">INFINITA</p>
          <h1>My Sunshine Eau de Parfum</h1>

          {/* <p className="meta">
            44315 &nbsp;•&nbsp; 50 ml
          </p> */}

          {/* <div className="rating">
            ★★★★★ <span>(576)</span>
            <a href="#">Baca semua ulasan (154)</a>
          </div> */}

          <div className="price">
            <span className="price-current">Rp239.000</span>
            <span className="price-old">Rp399.000</span>
          </div>

          {/* ===== BUY ACTION ===== */}
          <div className="buy-section">
            {/* <input type="number" min="1" defaultValue="1" /> */}
            <button className="btn-buy">BELI</button>
          </div>

          {/* ===== TABS ===== */}
          <div className="product-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ===== TAB CONTENT ===== */}
          <div className="tab-content">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
