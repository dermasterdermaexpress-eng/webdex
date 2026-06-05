import React, { useState } from "react";
import "../css/ClinicLocation.css";

import bsdImg from "../assets/cliniclocations/bsd.jpg";
import test from "../assets/cliniclocations/test1.jpg";

const clinicsData = [
  {
    id: 1,
    name: "Derma Express BSD", 
    city: "Tangerang",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong",
    image: bsdImg
  },
  {
    id: 2,
    name: "Derma Express Pekanbaru",
    city: "Pekanbaru",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: test
  },
  {
    id: 3,
    name: "Derma Express Cibubur",
    city: "Jakarta",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: bsdImg
  },
  {
    id: 4,
    name: "Derma Express Bekasi",
    city: "Bekasi",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: test
  },
  {
    id: 5,
    name: "Derma Express PIK",
    city: "Jakarta",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: bsdImg
  },
  {
    id: 6,
    name: "Derma Express Pluit",
    city: "Jakarta",
    desc: "Jl. Gading Golf Boulevard, Ruko Diamond III No.12-15, Gading Serpong, Pakulonan Barat, Kelapa dua Tangerang, Banten.",
    image: test
  }
];

export default function ClinicLocation() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");

  const filteredClinics = clinicsData.filter(item => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === "all" || item.city === city;
    return matchSearch && matchCity;
  });

  return (
    <section className="clinic-location-page">
      <div className="container">

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
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <button>Selengkapnya</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
