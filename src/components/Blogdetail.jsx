import "../css/Blogdetail.css";
import heroImg from "../assets/blog/blog-hero.jpg";
import contentImg from "../assets/blog/populer.jpg";
import related1 from "../assets/blog/blog-1.jpg";
import related2 from "../assets/blog/blog-2.jpg";
import related3 from "../assets/blog/blog-3.jpg";

export default function Blogdetail() {
  return (
    <section className="blog-detail-page">

      {/* HERO */}
      <div
        className="blog-detail-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1>Jurnal</h1>
      </div>

      <div className="blog-detail-container">

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          Beranda &nbsp;›&nbsp; Artikel &nbsp;›&nbsp;
          <strong>Pengen Glow Up!</strong>
        </div>

        {/* TITLE */}
        <h2 className="detail-title">
          Pengen Glow Up!
        </h2>

        {/* META */}
        <div className="detail-meta">
          <span>Derma Express</span>
          <span>• 26 July 2024</span>
          <span>• 487.981 Reads</span>

          <span className="share">Bagikan 🔗</span>
        </div>

        {/* MAIN IMAGE */}
        <img
          src={contentImg}
          alt="Detail Artikel"
          className="detail-image"
        />

        {/* CONTENT */}
        <div className="detail-content">
          <p>
            New year, new me! Banyak orang memulai resolusi hidup sehat
            dengan memperhatikan kondisi kulit dan kesehatan tubuh.
          </p>

          <p>
            Saat ini, banyak tips glow-up bertebaran di internet.
            Namun tidak semuanya aman dan sesuai secara medis.
          </p>

          <p>
            Di Derma Express, kami merekomendasikan perawatan
            berbasis medis yang ditangani langsung oleh tenaga profesional.
          </p>

          <p>
            Dengan perawatan yang tepat, kulit akan tampak lebih cerah,
            sehat, dan terawat secara optimal.
          </p>

          <p className="signature">
            With Love,<br />
            <strong>Derma Express</strong>
          </p>
        </div>

        {/* RELATED */}
        <div className="related-section">
          <h3>Jurnal Lainnya</h3>

          <div className="related-grid">
            <div className="related-card">
              <img src={related1} alt="Artikel 1" />
              <p>Apakah Susu Penyebab Jerawat?</p>
              <button>Selengkapnya</button>
            </div>

            <div className="related-card">
              <img src={related2} alt="Artikel 2" />
              <p>Tips Menjaga Kulit Tetap Sehat</p>
              <button>Selengkapnya</button>
            </div>

            <div className="related-card">
              <img src={related3} alt="Artikel 3" />
              <p>Benarkah Kopi Bikin Wajah Berjerawat?</p>
              <button>Selengkapnya</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
