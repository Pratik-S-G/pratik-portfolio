import { useEffect, useState } from 'react'
import './App.css'

const emailAddress = 'pratikgokavi2007@gmail.com'
const githubProfileUrl = 'https://github.com/Pratik-S-G'
const linkedInProfileUrl = 'https://www.linkedin.com/in/pratik-gokavi-495961416'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
]

const programmingLanguages = ['C', 'C++', 'Python', 'SQL']
const developmentTools = ['GitHub', 'Visual Studio Code']

const projectFeatures = [
  'Digital food menu.',
  'Food categories and pricing.',
  'Online ordering interface.',
  'Order status tracking.',
  'User authentication.',
  'Administrative menu management.',
  'Order management dashboard.',
  'Database-backed food and order records.',
  'Responsive interface.',
]

const achievementData = [
  {
    title: 'STATE-LEVEL HANDBALL WINNER',
    description:
      'Recognized as a state-level handball winner, reflecting dedication, teamwork, and competitive sporting experience.',
  },
  {
    title: 'NATIONAL-LEVEL PARTICIPATION',
    description:
      'Participated in national-level handball competition, gaining experience in a demanding competitive sporting environment.',
  },
  {
    title: 'ACADEMIC PERFORMANCE',
    description:
      'Achieved a first-year CGPA of 8.78 in Computer Science Engineering at BMSIT&M.',
  },
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.11c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.85 2.83 1.32 3.52 1 .11-.77.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23A11.46 11.46 0 0 1 12 6.9c1.02 0 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.67 1.69.25 2.94.12 3.25.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.48 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.38a1.56 1.56 0 0 1 .04 3.12ZM5.34 9.82h3.2v8.68h-3.2V9.82Zm5.4 0h3.07v1.19h.04c.43-.81 1.47-1.66 3.03-1.66 3.24 0 3.83 2.13 3.83 4.9v2.25h-3.2v-2.11c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.37-2.04 2.79v2.2h-3.2V9.82Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M3.5 6.75A2.75 2.75 0 0 1 6.25 4h11.5A2.75 2.75 0 0 1 20.5 6.75v10.5A2.75 2.75 0 0 1 17.75 20H6.25A2.75 2.75 0 0 1 3.5 17.25V6.75Zm2.25-.75a1.25 1.25 0 0 0-1.25 1.25v.3l7 4.97 7-4.97v-.3a1.25 1.25 0 0 0-1.25-1.25H6.75Zm12.5 3.02-6.13 4.35a1 1 0 0 1-1.24 0L5.75 9.02v8.23c0 .69.56 1.25 1.25 1.25h10.0c.69 0 1.25-.56 1.25-1.25V9.02Z" />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.5],
      },
    )

    const sections = document.querySelectorAll('main section[id]')
    sections.forEach((section) => sectionObserver.observe(section))

    return () => sectionObserver.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="page-shell">
      <header className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={(event) => {
            event.preventDefault();
            handleNavClick('home');
          }}>
            PRATIK GOKAVI
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">COMPUTER SCIENCE ENGINEERING STUDENT</p>
              <h1>
                Building with Logic.
                <span>Thinking Beyond Code.</span>
              </h1>
              <div className="name-lockup">PRATIK SHIVANAND GOKAVI</div>
              <p className="lead">
                Computer Science Engineering student at BMSIT&amp;M, Bengaluru,
                exploring technology, problem-solving, and the intersection of
                innovation and public service.
              </p>

              <div className="tag-row" aria-label="Personal labels">
                <span>CSE STUDENT</span>
                <span>PROBLEM SOLVER</span>
                <span>CIVIL SERVICES ASPIRANT</span>
              </div>

              <div className="cta-row">
                <a
                  className="button primary"
                  href="#projects"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick('projects');
                  }}
                >
                  EXPLORE MY WORK
                </a>
                <a
                  className="button secondary"
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick('contact');
                  }}
                >
                  GET IN TOUCH
                </a>
              </div>

              <div className="cta-row github-row">
                <a
                  className="button tertiary"
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHubIcon />
                  GITHUB PROFILE
                </a>
                <a
                  className="button tertiary"
                  href={linkedInProfileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedInIcon />
                  CONNECT ON LINKEDIN
                </a>
              </div>
            </div>

            <div className="hero-art reveal" aria-hidden="true">
              <div className="art-shell">
                <div className="grid"></div>
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="orbit orbit-three"></div>
                <div className="beam beam-one"></div>
                <div className="beam beam-two"></div>
                <div className="node node-a"></div>
                <div className="node node-b"></div>
                <div className="node node-c"></div>
                <div className="core-shell">
                  <div className="core"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator" aria-label="Scroll to next section">
            <span></span>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <p className="section-label">01 / ABOUT</p>
            <h2 className="section-heading">Curiosity Drives Me Forward.</h2>

            <div className="about-layout reveal">
              <div className="about-copy">
                <p>
                  I am Pratik Shivanand Gokavi, a second-year Computer Science
                  Engineering student at BMS Institute of Technology and
                  Management in Bengaluru.
                </p>
                <p>
                  With a first-year CGPA of 8.78, I am building a strong
                  foundation in computer science while continuously developing my
                  programming and problem-solving skills.
                </p>
                <p>
                  Beyond technology, I am interested in civil services
                  preparation, governance, public administration, and
                  understanding the challenges that shape society.
                </p>
                <p>
                  I believe engineering is not only about writing code. It is
                  also about understanding problems, thinking critically, and
                  creating solutions that can improve people&apos;s lives.
                </p>
                <p>
                  My journey combines technical learning, sporting discipline, and
                  a long-term aspiration to contribute to society through public
                  service.
                </p>
              </div>

              <aside className="info-panel" aria-label="Academic information">
                <div className="info-row">
                  <span className="info-label">EDUCATION</span>
                  <span className="info-value">BMSIT&amp;M</span>
                </div>
                <div className="info-row">
                  <span className="info-label">FIELD</span>
                  <span className="info-value">Computer Science Engineering</span>
                </div>
                <div className="info-row">
                  <span className="info-label">LOCATION</span>
                  <span className="info-value">Bengaluru, India</span>
                </div>
                <div className="info-row">
                  <span className="info-label">ACADEMIC PERFORMANCE</span>
                  <span className="info-value">8.78 CGPA — First Year</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <p className="section-label">02 / SKILLS</p>
            <h2 className="section-heading">Tools I Learn. Skills I Build.</h2>

            <div className="skills-grid reveal">
              <div className="skill-panel">
                <div className="panel-header">
                  <span className="panel-kicker">PROGRAMMING LANGUAGES</span>
                </div>
                <ul className="skill-list">
                  {programmingLanguages.map((skill) => (
                    <li key={skill}>
                      <span className="skill-dot"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skill-panel">
                <div className="panel-header">
                  <span className="panel-kicker">DEVELOPMENT TOOLS</span>
                </div>
                <ul className="skill-list">
                  {developmentTools.map((tool) => (
                    <li key={tool}>
                      <span className="skill-dot"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <p className="section-label">03 / SELECTED WORK</p>
            <h2 className="section-heading">Projects with a Purpose.</h2>

            <article className="project-feature reveal">
              <div className="project-copy">
                <div className="project-meta">
                  <span className="project-name">BMSIT DIGITAL CANTEEN</span>
                  <span className="project-category">Full-Stack Web Application</span>
                </div>

                <p className="project-problem">
                  A proposed digital canteen platform designed to simplify campus
                  food ordering and improve the food-ordering experience for
                  students. The concept focuses on bringing menu discovery,
                  ordering, and canteen order management into a convenient digital
                  experience.
                </p>

                <div className="feature-wrap">
                  <div className="feature-block">
                    <h3>Project Overview</h3>
                    <p>
                      The idea centers on building a smoother campus dining
                      workflow where students can discover items, place orders, and
                      track progress in a single interface.
                    </p>
                  </div>
                  <div className="feature-block">
                    <h3>Potential Features</h3>
                    <ul className="feature-list">
                      {projectFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="tech-stack">
                  <div className="tech-block proposed">
                    <span className="tech-label">PROPOSED STACK</span>
                    <div className="tech-tags">
                      <span>React</span>
                      <span>Flask</span>
                      <span>MySQL</span>
                      <span>GitHub</span>
                    </div>
                  </div>
                  <div className="tech-block status">
                    <span className="tech-label">IMPLEMENTED STATUS</span>
                    <div className="tech-tags">
                      <span>Concept stage</span>
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <a href="#contact" className="button primary small" onClick={(event) => {
                    event.preventDefault();
                    handleNavClick('contact');
                  }}>
                    View project
                  </a>
                  <span className="repo-pill">Repository coming soon</span>
                </div>
              </div>

              <div className="project-preview" aria-label="Project preview mockup">
                <div className="preview-window">
                  <div className="preview-topbar">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="preview-body">
                    <aside className="preview-sidebar">
                      <div className="menu-pill active">Menu</div>
                      <div className="menu-pill">Orders</div>
                      <div className="menu-pill">Profile</div>
                    </aside>
                    <div className="preview-main">
                      <div className="preview-header-row">
                        <div className="title-block">
                          <span className="mini-label">Campus</span>
                          <strong>BMSIT Canteen</strong>
                        </div>
                        <span className="time-tag">Open</span>
                      </div>

                      <div className="food-grid">
                        <div className="food-card featured">
                          <div className="food-visual"></div>
                          <div className="food-text">
                            <span>Signature Meal</span>
                            <strong>₹120</strong>
                          </div>
                        </div>
                        <div className="food-card">
                          <div className="food-visual small"></div>
                          <div className="food-text">
                            <span>Snacks</span>
                            <strong>₹70</strong>
                          </div>
                        </div>
                        <div className="food-card">
                          <div className="food-visual small alt"></div>
                          <div className="food-text">
                            <span>Drinks</span>
                            <strong>₹40</strong>
                          </div>
                        </div>
                      </div>

                      <div className="order-row">
                        <div className="order-box">
                          <span>Pending Orders</span>
                          <strong>08</strong>
                        </div>
                        <div className="order-box accent">
                          <span>Live Orders</span>
                          <strong>03</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="achievements" className="section achievements-section">
          <div className="container">
            <p className="section-label">04 / ACHIEVEMENTS</p>
            <h2 className="section-heading">Discipline Beyond the Classroom.</h2>

            <div className="achievement-grid reveal">
              {achievementData.map((item, index) => (
                <article key={item.title} className="achievement-card">
                  <div className="achievement-mark" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="section interests-section">
          <div className="container interest-layout reveal">
            <div className="interest-copy">
              <p className="section-label">05 / BEYOND ENGINEERING</p>
              <h2 className="section-heading title">
                Technology Is My Foundation.
                <span>Public Service Is My Aspiration.</span>
              </h2>
              <p>
                Beyond computer science, I have a keen interest in preparing for
                the Civil Services Examination.
              </p>
              <p>
                I am interested in understanding Indian polity, governance, public
                administration, history, current affairs, and the social
                challenges that influence people&apos;s lives.
              </p>
              <p>
                This interest encourages me to look beyond technical problems and
                consider the broader systems that shape society.
              </p>
              <p>
                I aspire to develop the knowledge, discipline, and perspective
                necessary to contribute meaningfully to public service.
              </p>
              <p>
                I believe technology, responsible administration, and informed
                decision-making can complement one another in addressing real-world
                challenges.
              </p>
            </div>

            <div className="interest-art" aria-hidden="true">
              <div className="institution-frame">
                <div className="frame-grid"></div>
                <div className="frame-arch arch-one"></div>
                <div className="frame-arch arch-two"></div>
                <div className="frame-arch arch-three"></div>
                <div className="frame-dot dot-one"></div>
                <div className="frame-dot dot-two"></div>
                <div className="frame-dot dot-three"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <p className="section-label">06 / CONTACT</p>
            <h2 className="section-heading">Let&apos;s Connect.</h2>
            <p className="contact-intro">
              I&apos;m always open to connecting with people who enjoy technology,
              learning, meaningful projects, and new ideas.
            </p>

            <div className="contact-panel reveal">
              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <MailIcon />
                </div>
                <span className="contact-label">EMAIL</span>
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                <a className="contact-button" href={`mailto:${emailAddress}`}>
                  EMAIL ME
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <LinkedInIcon />
                </div>
                <span className="contact-label">LINKEDIN</span>
                <a href={linkedInProfileUrl} target="_blank" rel="noreferrer noopener">
                  Pratik Gokavi
                </a>
                <a
                  className="contact-button"
                  href={linkedInProfileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CONNECT ON LINKEDIN
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <GitHubIcon />
                </div>
                <span className="contact-label">GITHUB</span>
                <a href={githubProfileUrl} target="_blank" rel="noreferrer noopener">
                  github.com/Pratik-S-G
                </a>
                <a
                  className="contact-button"
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  VIEW GITHUB PROFILE
                </a>
              </div>
            </div>

            <div className="contact-note">
              No backend is configured for a live contact form yet. Add a form
              service or email API when you are ready to enable message sending.
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-block">
            <p className="footer-name">PRATIK SHIVANAND GOKAVI</p>
            <p className="footer-tagline">
              Built with curiosity and a commitment to continuous learning.
            </p>
          </div>

          <div className="footer-links">
            <a href={`mailto:${emailAddress}`}>Email</a>
            <a href={linkedInProfileUrl} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href={githubProfileUrl} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-meta">
            <span>{new Date().getFullYear()}</span>
            <button
              type="button"
              className="back-to-top"
              aria-label="Back to top"
              onClick={() => handleNavClick('home')}
            >
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
