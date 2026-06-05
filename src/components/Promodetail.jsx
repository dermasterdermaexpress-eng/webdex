import "../css/Promodetail.css";
import promoImg from "../assets/promo/promo-1.jpg";

export default function PromoDetail() {
  return (
    <section className="promo-detail-page">

      {/* ===== BREADCRUMB ===== */}
      <div className="promo-breadcrumb">
        <span>Beranda</span> - <span>Promo & Paket</span> - <span className="active"> DEALS PROMO JANUARY 2026
        </span>
      </div>

      {/* ===== TITLE ===== */}
      <h1 className="promo-detail-title">
        DEALS PROMO JANUARY 2026
      </h1>

      <div className="promo-share">Bagikan 🔗</div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="promo-detail-layout">

        {/* LEFT IMAGE */}
        <div className="promo-detail-image">
          <img src={promoImg} alt="Promo Detail" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="promo-detail-content">
          <p className="promo-highlight">
            Spesial untuk para <b>#Pejuang</b>, dapatkan penawaran menarik cicilan
            0% hingga 6 bulan!
          </p>

          <ol>
            <li>Berlaku untuk semua jenis Kartu Kredit HSBC</li>
            <li>
              Promo Cicilan HSBC 0% berlaku tenor 6 (enam) bulan untuk tindakan Derma Glow:
              <ul>
                <li>Lorem ipsum lorem ipsum</li>
                <li>Lorem ipsum ipsum lorem</li>
              </ul>
            </li>
            <li>Cicilan dikonversi langsung di mesin </li>
          </ol>

          <p>
            Program didukung oleh dokter
            spesialis berpengalaman serta teknologi medis terkini.
          </p>

          <p>
            Ingin tahu informasi lebih lengkap? Hubungi kami via WhatsApp
            <a href="https://wa.me/6282261613223"> di sini</a>.
          </p>

          {/* ===== INFO BOX ===== */}
          <div className="promo-info-box">

            <div>
              <h4>Jadwal</h4>
              <p>
                Program Bisa Cicilan 0% hingga 6 bulan dengan Kartu Kredit HSBC
              </p>
              <small>Derma Express Bintaro</small>
            </div>

            <div className="promo-info-grid">
              <div>
                <strong>Informasi</strong>
                <p>Derma express</p>

                <strong>Jam Operasional</strong>
                <p>Senin–Sabtu: 08.00 – 20.00 WIB</p>
              </div>

              <div>
                <strong>Telepon (WhatsApp Only)</strong>
                <a href="https://wa.me/6282261613223">
                  +62 822 6161 3223
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
