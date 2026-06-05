import "../css/Product.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// SLIDER
import slide1 from "../assets/product/slide-1.jpg";
import slide2 from "../assets/product/slide-2.jpg";

// PRODUCTS
import p1 from "../assets/product/p1.jpg";
import p2 from "../assets/product/p2.jpg";
import p3 from "../assets/product/p3.jpg";
import p4 from "../assets/product/p4.jpg";

export default function Product() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    {
      id: 1,
      name: "My Sunshine Eau De Parfum",
      brand: "INFINITA",
      price: "Rp239.000",
      oldPrice: "Rp299.000",
      image: p1,
    },
    {
      id: 2,
      name: "Opti Optimals Moisturiser SPF25",
      brand: "OPTIMALS",
      price: "Rp199.000",
      oldPrice: "Rp249.000",
      image: p2,
    },
    {
      id: 3,
      name: "Sleeping Beauty Nourishing Mask",
      brand: "WAUNT",
      price: "Rp149.000",
      oldPrice: "Rp199.000",
      image: p3,
    },
    {
      id: 4,
      name: "Eye & Lip Contour Cream",
      brand: "OPTIMALS",
      price: "Rp129.000",
      oldPrice: "Rp179.000",
      image: p4,
    },
  ];

  return (
    <section className="product-page">

      {/* ===== SLIDER ===== */}
      <div className="product-slider">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src={slide1} alt="Promo 1" />
            <div className="slide-text">
              <h2>Premiere Price, Hemat Rp150.000!</h2>
              <button>Belanja Sekarang</button>
            </div>
          </div>

          <div className="slide">
            <img src={slide2} alt="Promo 2" />
            <div className="slide-text">
              <h2>Produk Terbaru Favorit Klinik</h2>
              <button>Belanja Sekarang</button>
            </div>
          </div>
        </Slider>
      </div>

      {/* ===== GRID ===== */}
      <div className="product-grid">
        {products.map((item) => (
          <Link
            to={`/product/${item.id}`}
            className="product-card-link"
            key={item.id}
          >
            <div className="product-card-new">

              <span className="badge-new">BARU</span>

              <div className="product-actions">
                <button className="icon-btn">♡</button>
                <button className="icon-btn">👜</button>
              </div>

              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-rating">
                ★★★★★ <span>(569)</span>
              </div>

              <p className="product-brand">{item.brand}</p>
              <p className="product-name">{item.name}</p>

              <div className="product-price">
                <span className="price-current">{item.price}</span>
                <span className="price-old">{item.oldPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="product-more">
        <Link to="/product" className="product-more-link">
          Lihat Semua
        </Link>
      </div>

    </section>
  );
}
