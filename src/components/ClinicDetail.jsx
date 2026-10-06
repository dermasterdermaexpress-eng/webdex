import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/ClinicLocation.css"; // dipakai ulang untuk style kartu klinik di breadcrumb/back-link
import "../css/ClinicDetail.css";

import { getClinicById, doctors } from "../data/clinics";

// Avatar dokter: pakai foto asli kalau ada (doctors[].photo), kalau belum
// ada fallback ke lingkaran berisi inisial nama supaya halaman tetap rapi
// tanpa butuh foto sungguhan dulu.
function DoctorAvatar({ name, photo }) {
  if (photo) {
    return <img src={photo} alt={name} className="doctor-photo" />;
  }
  const initials = name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="doctor-photo doctor-photo--placeholder" aria-hidden="true">
      {initials}
    </div>
  );
}

function StarRating({ value }) {
  const rounded = Math.round(value);
  return (
    <span className="star-rating" aria-label={`${value} dari 5 bintang`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rounded ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function ClinicDetail() {
  const { id } = useParams();
  const clinic = getClinicById(id);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // ===== KLINIK TIDAK DITEMUKAN =====
  if (!clinic) {
    return (
      <section className="cd-page">
        <div className="cd-container cd-notfound">
          <h1>Klinik tidak ditemukan</h1>
          <p>Cabang yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
          <Link to="/ClinicLocation" className="cd-btn cd-btn-primary">
            Lihat Semua Klinik
          </Link>
        </div>
      </section>
    );
  }

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke endpoint/API pengiriman form yang sebenarnya.
    setSubmitted(true);
  };

  const mapsQuery = encodeURIComponent(`${clinic.name} ${clinic.desc}`);

  return (
    <section className="cd-page">
      <div className="cd-container">
        {/* ===== BREADCRUMB ===== */}
        <nav className="cd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/ClinicLocation">Clinics near me</Link>
          <span aria-hidden="true">›</span>
          <span>{clinic.city}</span>
          <span aria-hidden="true">›</span>
          <span className="cd-current" aria-current="page">
            {clinic.name}
          </span>
        </nav>

        {/* ===== INFO UTAMA + BANNER ===== */}
        <div className="cd-top">
          <div className="cd-info-card">
            <h1>{clinic.name}</h1>
            <span className="cd-status">{clinic.status}</span>

            <div className="cd-info-row">
              <span className="cd-icon" aria-hidden="true">📍</span>
              <div>
                <p className="cd-info-label">Alamat</p>
                <p className="cd-info-value">{clinic.desc}</p>
              </div>
            </div>

            <div className="cd-info-row">
              <span className="cd-icon" aria-hidden="true">📞</span>
              <div>
                <p className="cd-info-label">Nomor Telepon</p>
                <p className="cd-info-value">{clinic.phone}</p>
              </div>
            </div>

            <div className="cd-info-row">
              <span className="cd-icon" aria-hidden="true">🕒</span>
              <div>
                <p className="cd-info-label">Jam Operasional</p>
                <p className="cd-info-value">{clinic.hoursSummary}</p>
              </div>
            </div>

            <div className="cd-actions">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="cd-btn cd-btn-primary"
              >
                Directions
              </a>
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`} className="cd-btn cd-btn-outline">
                Hubungi Klinik
              </a>
            </div>
          </div>

          {/* ===== BANNER PROMO =====
              TODO: ganti dengan gambar banner promo asli, mis.:
              import promoBanner from "../assets/cliniclocations/promo-banner.jpg";
              lalu render <img src={promoBanner} alt="Promo" className="cd-banner" />
              di dalam .cd-banner-frame. */}
          <div className="cd-banner-frame" role="img" aria-label="Banner promo Derma Express">
            <p className="cd-banner-eyebrow">No.1 Aesthetic Clinic in Indonesia</p>
            <p className="cd-banner-title">Promo Spesial Bulan Ini</p>
            <p className="cd-banner-sub">Lebih Hemat, Lebih Cantik, Lebih Untung</p>
          </div>
        </div>

        {/* ===== TIM PROFESIONAL ===== */}
        <div className="cd-team-header">
          <h2>Tim Profesional Kami</h2>
          <p>Dokter Berpengalaman &amp; Bersertifikat</p>
        </div>

        <div className="cd-team-grid">
          {doctors.map((doc) => (
            <div className="doctor-card" key={doc.name}>
              <DoctorAvatar name={doc.name} photo={doc.photo} />
              <h3>{doc.name}</h3>
              <p>{doc.title}</p>
            </div>
          ))}
        </div>

        {/* ===== RATING / KONTAK / JAM OPERASIONAL ===== */}
        <div className="cd-bottom-grid">
          {/* RATINGS & REVIEW */}
          <div className="cd-panel">
            <h3 className="cd-panel-title">Store Ratings</h3>
            <div className="cd-rating-summary">
              <StarRating value={clinic.rating} />
              <span className="cd-rating-value">{clinic.rating}</span>
            </div>

            <button type="button" className="cd-btn cd-btn-primary cd-full">
              Submit a Review
            </button>

            {clinic.reviews.map((rev, i) => (
              <div className="cd-review" key={i}>
                <p className="cd-review-name">{rev.name}</p>
                <p className="cd-review-date">Posted on: {rev.date}</p>
                <StarRating value={rev.stars} />
                <p className="cd-review-text">{rev.text}</p>
              </div>
            ))}

            <Link to="/ClinicLocation" className="cd-btn cd-btn-outline cd-full">
              View All
            </Link>
          </div>

          {/* GET IN TOUCH */}
          <div className="cd-panel">
            <h3 className="cd-panel-title">Get In Touch</h3>
            <p className="cd-panel-sub">
              Write to us with your query and we shall get back
            </p>

            {submitted ? (
              <p className="cd-form-success">
                Terima kasih! Tim kami akan menghubungi kamu sesegera mungkin.
              </p>
            ) : (
              <form className="cd-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                />
                <input
                  type="tel"
                  placeholder="Phone No. *"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                />
                <select
                  value={form.treatment}
                  onChange={handleChange("treatment")}
                  aria-label="Select Treatment"
                >
                  <option value="">Select Treatment</option>
                  <option value="facial">Facial</option>
                  <option value="filler">Dermal Filler</option>
                  <option value="laser">Laser Treatment</option>
                  <option value="lainnya">Lainnya</option>
                </select>

                <button type="submit" className="cd-btn cd-btn-primary cd-full">
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* BUSINESS HOURS */}
          <div className="cd-panel">
            <h3 className="cd-panel-title">Business Hours</h3>
            <ul className="cd-hours-list">
              {clinic.businessHours.map((item) => (
                <li key={item.day}>
                  <span>{item.day}</span>
                  <span className="cd-hours-sep">:</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/ClinicLocation" className="cd-back-link">
          ← Kembali ke daftar klinik
        </Link>
      </div>
    </section>
  );
}
