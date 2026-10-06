import { useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../css/Treatment.css";

import heroImg from "../assets/about/about-hero.jpg";
import { treatments } from "../data/treatments";

const PAGE_SIZE = 6; // jumlah treatment per halaman

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

export default function Treatments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // nomor halaman disimpan di URL (?page=2) supaya tetap terjaga
  // saat pindah ke halaman detail lalu menekan tombol Back
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPage = parseInt(searchParams.get("page"), 10) || 1;
  const contentRef = useRef(null);

  const filteredTreatments = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filtered = treatments.filter((item) =>
      item.title.toLowerCase().includes(normalizedSearch)
    );

    return filtered.sort((a, b) => {
      const result = a.title.localeCompare(b.title);
      return sortAsc ? result : -result;
    });
  }, [searchTerm, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filteredTreatments.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const pagedTreatments = filteredTreatments.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToPage = (page) => {
    setSearchParams(page === 1 ? {} : { page: String(page) });
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // kembali ke halaman 1 saat pencarian / urutan berubah
  const resetPage = () => {
    if (searchParams.has("page")) setSearchParams({}, { replace: true });
  };

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
      <div className="treatments-container" ref={contentRef}>
        <div className="treatments-controls">
          <div className="treatments-search">
            <label htmlFor="treatment-search">Search Treatment</label>
            <input
              id="treatment-search"
              type="search"
              placeholder="Cari treatment..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                resetPage();
              }}
            />
          </div>
          <button
            className="treatments-sort-btn"
            type="button"
            onClick={() => {
              setSortAsc((prev) => !prev);
              resetPage();
            }}
          >
            Sort {sortAsc ? "A-Z" : "Z-A"}
          </button>
        </div>

        {pagedTreatments.length === 0 ? (
          <p className="treatments-empty">
            Treatment tidak ditemukan. Coba kata kunci lain.
          </p>
        ) : (
          <>
            <div className="treatments-grid">
              {pagedTreatments.map((item) => (
                <Link
                  className="treatment-card"
                  to={`/treatment/${item.id}`}
                  key={item.id}
                >
                  <div className="treatment-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="treatment-body">
                    <p className="treatment-label">{item.category}</p>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* ===== PAGINATION ===== */}
            <nav className="treatments-pagination" aria-label="Halaman treatment">
              <button
                type="button"
                className="tp-btn tp-arrow"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Halaman sebelumnya"
              >
                ‹
              </button>

              {getPageItems(currentPage, totalPages).map((item) =>
                typeof item === "number" ? (
                  <button
                    key={item}
                    type="button"
                    className={`tp-btn ${item === currentPage ? "active" : ""}`}
                    onClick={() => goToPage(item)}
                    aria-label={`Halaman ${item}`}
                    aria-current={item === currentPage ? "page" : undefined}
                  >
                    {item}
                  </button>
                ) : (
                  <span key={item} className="tp-ellipsis" aria-hidden="true">
                    …
                  </span>
                )
              )}

              <button
                type="button"
                className="tp-btn tp-arrow"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Halaman berikutnya"
              >
                ›
              </button>
            </nav>
          </>
        )}
      </div>
    </section>
  );
}