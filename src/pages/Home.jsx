import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-image-wrapper">
            <img
              src="/hero.jpg"
              alt="Dhiwin Samrich"
              className="hero-image"
            />
          </div>

          <h1 className="hero-name">
            DHIWIN
            <br />
            SAMRICH
          </h1>

          <h2 className="hero-title">
            AI/ML
            <br />
            <span className="highlight-letter">E</span>ngineer
          </h2>
        </section>

        <section className="selected-works-section">
          <h3 className="section-title">SELECTED WORKS</h3>
          
          <div className="works-container">
            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">01</span>
                  <h4 className="work-name">Justicia - Legal AI</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Justicia was born for a mission to merge cutting-edge AI with the complexities of Indian law.
                  Driven to bridge the gap between fast-moving tech and the traditionally slow, opaque legal system, I built a platform where accessibility and precision aren't just aims - they're assured.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="divider-horizontal"></div>

            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">02</span>
                  <h4 className="work-name">Chess Game - RL</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Every chess match is a dialogue - a test of strategy, creativity, and learning.
                  "Chess Game" isn't just a web-based app; it's a bold AI experiment that blends traditional gameplay with Deep-Q Learning to create an ever-evolving digital opponent.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="divider-horizontal"></div>

            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">03</span>
                  <h4 className="work-name">RAG</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Every powerful system starts with a bold vision: transforming how humans connect with information.
                  Driven by this ambition.
                  I didn't just build a system that stores knowledge - I built one that brings it to life.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="divider-horizontal"></div>

            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">04</span>
                  <h4 className="work-name">Hand Sign Recognition</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Every gesture tells a story.
                  My Hand Sign Recognition Glove was inspired by a passion to give voice and visibility to those who communicate through sign language - technology as a bridge for connection and understanding.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <h3 className="section-title">ACHIVEMENTS</h3>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-rank">1st</div>
              <div className="achievement-details">
                <h4 className="achievement-title">UNIVERSITY GOLD MEDALIST</h4>
                <p className="achievement-subtitle">Madurai Kamaraj University - 2023</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-rank">2nd</div>
              <div className="achievement-details">
                <h4 className="achievement-title">Make-A-Thon</h4>
                <p className="achievement-subtitle">2nd Position in 24 Hours Make-A-Thon</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-rank">99.4</div>
              <div className="achievement-details">
                <h4 className="achievement-title">TANCET EXAM</h4>
                <p className="achievement-subtitle">99.4 Percentile - 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h3 className="section-title">Languages I'm Familiar</h3>
          
          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20.0392 4.16669C18.7433 4.17085 17.845 4.28502 16.7592 4.47252C13.5525 5.03085 12.9683 6.20335 12.9683 8.36419V11.6667H20.4683V13.3334H12.6833H9.05833C6.86167 13.3334 4.93917 14.3684 4.33 16.8492C3.64167 19.6967 3.61083 21.48 4.33 24.4534C4.87583 26.6709 6.07833 28.3334 8.27583 28.3334H11.3025V24.08C11.3025 21.6084 13.5408 19.1667 16.1058 19.1667H22.1358C24.2383 19.1667 26.3025 17.615 26.3025 15.5192V8.36419C26.3025 6.33169 24.8367 4.81169 22.7875 4.47085C22.8383 4.46585 21.3242 4.16169 20.0392 4.16669ZM15.8858 7.50002C16.57 7.50002 17.1358 8.06419 17.1358 8.75169C17.1358 9.44585 16.57 10 15.8858 10C15.1883 10 14.6358 9.44669 14.6358 8.75169C14.6358 8.06669 15.1883 7.50002 15.8858 7.50002Z" fill="#0277BD"/>
                  <path d="M19.2317 35.8333C20.5275 35.8291 21.4258 35.715 22.5117 35.5275C25.7183 34.9691 26.3025 33.7966 26.3025 31.6358V28.3333H18.8025V26.6666H26.5883H30.2133C32.41 26.6666 34.3325 25.6316 34.9417 23.1508C35.63 20.3033 35.6608 18.52 34.9417 15.5466C34.395 13.3291 33.1925 11.6666 30.995 11.6666H27.9683V15.92C27.9683 18.3916 25.73 20.8333 23.165 20.8333H17.135C15.0325 20.8333 12.9683 22.385 12.9683 24.4808V31.6358C12.9683 33.6683 14.4342 35.1883 16.4833 35.5291C16.4325 35.5341 17.9467 35.8383 19.2317 35.8333ZM23.3858 32.5C22.7017 32.5 22.1358 31.9358 22.1358 31.2483C22.1358 30.5541 22.7017 30 23.3858 30C24.0833 30 24.6358 30.5533 24.6358 31.2483C24.6358 31.9333 24.0825 32.5 23.3858 32.5Z" fill="#FFC107"/>
                </svg>
              </div>
              <span className="skill-name">Python</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">C</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">C++</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Java</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Java Script</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">HTML5</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">CSS3</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">R</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">MLflow</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">PyTorch</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">NVIDIA Rapids</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">FastAPI</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">MySQL</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">MongoDB</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Streamlit</span>
            </div>
          </div>
        </section>

        <section className="tools-section">
          <h3 className="section-title">Tools I use</h3>
          
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-name">Git</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">GitHub</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">LM Studio</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Azure</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">AWS</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Power BI</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Microsoft Workbench</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Kaggle</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">n8n</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Hugging Face</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Docker</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Power Automate</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Figma</span>
            </div>
            <div className="divider"></div>
            <div className="skill-item">
              <span className="skill-name">Supabase</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <div className="page-title">HOME</div>
    </div>
  );
};

export default Home;
