import React from "react";
import "../css/Contact.css";

// Ikon sementara dari link eksternal (belum di-hosting sendiri di /src/assets).
// TODO: kalau sudah ada asetnya sendiri, unduh gambar ini, taruh di
// src/assets/contact/, lalu ganti baris di bawah dengan `import ... from "../assets/contact/..."`.
const bookAppointmentIcon =
  "https://ugc.production.linktr.ee/b352a569-5533-4fac-be77-22f3d0ce7344_untitled.png?io=true&size=thumbnail-stack_v1_0";
const whatsappIcon = bookAppointmentIcon;

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT - FORM */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="+62 xxx xxxx xxxx" />
              </div>

              <div className="form-group">
                <label>Inquiry Type *</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Appointment</option>
                  <option>Treatment Info</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Brief description of your inquiry" />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea placeholder="Please provide details about your inquiry..." />
            </div>

            <button className="btn-primary">
              ✈ Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-side">

          {/* VISIT */}
          <div className="contact-visit">
            <div className="icon">📍</div>
            <h3>Visit Our Clinic</h3>
            <p>
              123 Medical Center Drive<br />
              Jakarta, Indonesia 12345
            </p>
            <a href="/ClinicLocation" className="link">Get Directions →</a>
          </div>

          {/* QUICK ACTIONS */}
          <div className="contact-actions">
            <h4>Quick Actions</h4>

            <button className="btn-action primary">
              <img src={bookAppointmentIcon} alt="" className="btn-icon" />
              Book Appointment
            </button>

            {/* <button className="btn-action outline">
              📞 Call Now
            </button> */}

            <button className="btn-action outline">
              <img src={whatsappIcon} alt="" className="btn-icon" />
              WhatsApp
            </button>
          </div>

          {/* EMERGENCY */}
          {/* <div className="contact-emergency">
            <p className="small-title">
              For urgent medical concerns or after-hours emergencies:
            </p>
            <p className="phone">📞 +62 21 999 8888</p>
            <p className="note">
              Available 24/7 for emergency consultations
            </p>
          </div> */}

        </div>
      </div>
    </section>
  );
}