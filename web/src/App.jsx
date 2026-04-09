// App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo display-font">Octopus One</div>
        <nav className="nav-links">
          <a className="nav-link active">PLATFORM</a>
          <a className="nav-link">CEPHRA</a>
          <a className="nav-link">ABOUT</a>
        </nav>
        <button className="btn btn-primary">JOIN WAITLIST</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div style={{ margin: '0 auto 3rem', display: 'flex', justifyContent: 'center' }}>
          <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="url(#purpleGradient)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 4v2" />
            <path d="M12 18v2" />
            <path d="M4 12h2" />
            <path d="M18 12h2" />
            <path d="M6.34 6.34l1.42 1.42" />
            <path d="M16.24 16.24l1.42 1.42" />
            <path d="M6.34 17.66l1.42-1.42" />
            <path d="M16.24 7.76l1.42-1.42" />
            <circle cx="12" cy="12" r="3" fill="#ff7f50" stroke="none" />
          </svg>
        </div>
        <h1>
          Agents assist. Octopus One orchestrates<br/>
          <span className="gradient-text">your business.</span>
        </h1>
        <p className="subtitle">
          The next evolution of work isn't tools. It's intelligence. Discover the 
          adaptive AI layer built specifically for the modern enterprise.
        </p>
        <div className="cta-group">
          <button className="btn btn-primary">JOIN THE WAITLIST</button>
          <button className="btn btn-secondary">LEARN MORE</button>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="transformation">
        <h2>
          From static systems to <span className="gradient-text">living intelligence</span>
        </h2>
        <div className="accent-line"></div>
        <p className="transformation-text">
          Our platform continually adapts to your environment. It doesn't just process data—it anticipates
          action, organizes resources proactively, and ensures zero friction in your workflows.
        </p>
      </section>

      {/* Scalability Section */}
      <section className="scalability">
        <div>
          <h2>A system that <span className="gradient-text">grows with you</span></h2>
          <p>
            Traditional architectures constrain scale. Octopus One uses a decentralized 
            neural architecture that expands compute organically based on load topology.
          </p>
          <p>
            Whether running 10 or 10,000 sub-agents, orchestration overhead remains constant.
            Welcome to non-linear scaling.
          </p>
        </div>
        <div className="network-graphic">
           <svg width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="0.3">
             <path d="M12 2L2 22h20L12 2z M12 2v20 M2 22l10-10 M22 22l-10-10 M6 14h12" />
             <circle cx="12" cy="12" r="2" fill="rgba(168, 85, 247, 0.8)"/>
           </svg>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="deep-dive">
        <div>
          <span className="kicker">THE FIRST SYSTEM</span>
          <h2>Meet Cephra: The Future of ERP</h2>
          <p className="tagline">Powered by the Octopus One orchestration engine.</p>
          <div className="left-underline"></div>
        </div>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Cephra Field Service isn't just an application; it's a paradigm shift in how 
            data moves through a field organization.
          </p>
          
          <div className="highlight-block">
            Cephra automatically coordinates technicians, parts, and predictive maintenance 
            schedules simultaneously, rerouting in real-time as reality diverges from the plan.
          </div>
          
          <p className="deep-dive-footer">
            Cephra is coming soon. Built for the businesses that keep the world running.
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <div className="cta-box-container">
        <div className="cta-box">
          <h2>Early access opening soon</h2>
          <p>Be among the first to experience true enterprise intelligence orchestration.</p>
          <div className="input-group">
            <input type="email" placeholder="Enter your work email" />
            <button className="btn btn-primary">JOIN THE WAITLIST</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <div className="logo display-font">Octopus One</div>
          <p>© 2024 Octopus One. The Obsidian Conductor.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
