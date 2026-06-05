import React from "react";

import '../css/About.css';

import heroImg from "../assets/about/about-hero.jpg";
import storyImg1 from "../assets/about/story-1.jpg";
import storyImg2 from "../assets/about/story-2.jpg";

const timeline = [
  {
    year: "2014",
    title: "DermaExpress founded",
    desc: "Started with a vision to provide accessible, expert dermatological care."
  },
  {
    year: "2016",
    title: "First clinic opened",
    desc: "Opened our flagship clinic in Jakarta with state-of-the-art facilities."
  },
  {
    year: "2018",
    title: "Telemedicine launch",
    desc: "Introduced online consultations to reach patients nationwide."
  },
  {
    year: "2020",
    title: "10,000 patients milestone",
    desc: "Reached 10,000 satisfied patients across all our services."
  },
  {
    year: "2022",
    title: "Advanced laser center",
    desc: "Opened specialized laser treatment center with latest technology."
  }
];

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Derma Express</h1>
          <p>
            Your trusted partner in advanced dermatological care, dedicated to
            helping you achieve healthy, beautiful skin through expert
            treatments and personalized care.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story container">
        <div className="story-grid">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              DermaExpress was founded in 2014 with a simple yet powerful vision:
              to make expert dermatological care accessible to everyone.
            </p>
            <p>
              What started as a small clinic has grown into a comprehensive
              dermatology platform serving thousands of patients across
              Indonesia.
            </p>
            <p>
              Today, we continue to innovate and expand our services, always
              staying true to our mission of providing exceptional care.
            </p>
          </div>
          <div className="story-image">
            <img src={storyImg1} alt="Our story" />
          </div>
        </div>

        <div className="story-grid reverse">
          <div className="story-image">
            <img src={storyImg2} alt="Dermatology treatment" />
          </div>
          <div className="story-text">
            <h2>Visi</h2>
            <p>
              Our founders recognized the need for convenient, high-quality skin
              care services.
            </p>
            <p>
              By combining medical expertise with modern technology, we ensure
              every patient receives personalized treatment with compassion and
              professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <p className="journey-subtitle">
          Key milestones in our journey to becoming Indonesia's leading
          dermatology platform.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
