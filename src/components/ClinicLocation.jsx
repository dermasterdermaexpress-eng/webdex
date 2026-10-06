import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/ClinicLocation.css";

import { clinics } from "../data/clinics";

export default function ClinicLocation() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");

  const filteredClinics = clinics.filter(item => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === "all" || item.city === city;
    return matchSearch && matchCity;
  });

  return (
    <section className="clinic-location-page">
      <div className="clinic-container">

        {/* Breadcrumb */}
        <p className="breadcrumb">
          <a href="/Contact" className="link">Contact</a> &gt; <span> Lokasi Klinik Derma Express</span>
        </p>

        {/* Title */}
        <h1>Lokasi Klinik Derma Express</h1>
        <p className="subtitle">
          Temukan berbagai layanan treatment berkualitas yang tersebar di seluruh Indonesia
          melalui daftar Klinik Derma Express.
        </p>

        {/* Filter */}
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Cari nama / area"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="all">Semua Lokasi</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Tangerang">Tangerang</option>
            <option value="Bekasi">Bekasi</option>
            <option value="Pekanbaru">Pekanbaru</option>
          </select>
        </div>

        <p className="result-count">
          Menampilkan {filteredClinics.length} hasil
        </p>

        {/* Grid */}
        <div className="clinic-grid">
          {filteredClinics.map(item => (
            <div className="clinic-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-content">
                <span className="city-badge">{item.city}</span>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <Link to={`/ClinicLocation/${item.id}`} className="card-link-btn">
                  Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination
            CATATAN: tampilan nomor halaman di bawah ini masih statis
            (belum terhubung ke `filteredClinics`). Hanya tampilan yang
            dirapikan di sini; logika paging sebenarnya bisa dibuat
            menyusul, mirip pola di halaman Treatment/Blog. */}
        <div className="pagination">
          <button>{"<"}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>

      </div>
    </section>
  );
}