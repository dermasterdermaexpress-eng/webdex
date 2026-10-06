import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Treatment.css";        // memakai ulang style kartu "Treatment Lainnya"
import "../css/TreatmentDetail.css";

import { treatments, getTreatmentById } from "../data/treatments";

export default function TreatmentDetail() {
  const { id } = useParams();
  const treatment = getTreatmentById(id);

  // kembali ke atas saat pindah antar treatment
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // ===== TREATMENT TIDAK DITEMUKAN =====
  if (!treatment) {
    return (
      <section className="td-page">
        <div className="td-container td-notfound">
          <h1>Treatment tidak ditemukan</h1>
          <p>Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
          <Link to="/treatment" className="td-btn td-btn-primary">
            Lihat Semua Treatment
          </Link>
        </div>
      </section>
    );
  }

  // 3 treatment lainnya (urut setelah treatment yang sedang dibuka)
  const currentIndex = treatments.findIndex((t) => t.id === treatment.id);
  const others = Array.from(
    { length: Math.min(3, treatments.length - 1) },
    (_, i) => treatments[(currentIndex + 1 + i) % treatments.length]
  );

  return (
    <section className="td-page">
      <div className="td-container">
        {/* ===== BREADCRUMB ===== */}
        <nav className="td-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/treatment">Treatment</Link>
          <span aria-hidden="true">/</span>
          <span className="td-current" aria-current="page">
            {treatment.title}
          </span>
        </nav>

        {/* ===== DETAIL UTAMA ===== */}
        <article className="td-main">
          <div className="td-media">
            <img src={treatment.image} alt={treatment.title} />
          </div>

          <div className="td-info">
            <span className="td-label">{treatment.category}</span>
            <h1>{treatment.title}</h1>
            <p className="td-desc">{treatment.desc}</p>

            <div className="td-actions">
              <Link to="/appointment" className="td-btn td-btn-primary">
                Buat Janji Temu
              </Link>
              <Link to="/treatment" className="td-btn td-btn-outline">
                Kembali ke Treatment
              </Link>
            </div>
          </div>
        </article>

        {/* ===== TREATMENT LAINNYA ===== */}
        {others.length > 0 && (
          <section className="td-others" aria-labelledby="td-others-title">
            <h2 id="td-others-title">Treatment Lainnya</h2>
            <div className="treatments-grid">
              {others.map((item) => (
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
          </section>
        )}
      </div>
    </section>
  );
}
