import { useEffect, useState } from 'react';
import './index.css';
import sunLogo from './sunlog.png';

const navLinks = [
  { id: 'mission', label: 'Mission' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'reach', label: 'Reach Us' },
  { id: 'team', label: 'Team' },
];

const team = [
  { name: 'Arshitha Mohanadoss', emoji: '👩‍⚕️' },
  { name: 'Lasya Sattu', emoji: '👩‍🏫' },
  { name: 'Diya Karthik', emoji: '👩‍💼' },
  { name: 'Akshara Bayyapureddy', emoji: '👩‍💼' },
];

const reachItems = [
  {
    title: 'Email',
    body: (
      <>
        Send us a note anytime at{' '}
        <a href="mailto:sunsafesociety@gmail.com">sunsafesociety@gmail.com</a>.
      </>
    ),
  },
  {
    title: 'Phone',
    body: 'Call or text our volunteer team at (555) 123-4567 for quick questions.',
  },
  {
    title: 'Follow Our Mission',
    body: (
      <>
        Share our GoFundMe to help us equip more families with sun-safe resources.{' '}
        <a
          href="https://www.gofundme.com/f/support-skin-cancer-with-sun-safe-society"
          target="_blank"
          rel="noreferrer"
        >
          Donate or Share
        </a>
      </>
    ),
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const existing = document.querySelector('script[data-gfm-embed]');
    if (existing) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.gofundme.com/static/js/embed.js';
    script.defer = true;
    script.dataset.gfmEmbed = 'true';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const amount = formData.get('amount');
    const type = formData.get('type');
    const message = formData.get('message');

    const subject = 'New Donation Received - Sun Safe Society';
    const body = `Donation Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDonation Amount: ${amount}\nDonation Type: ${type}\nMessage: ${
      message || 'None'
    }`;

    const mailtoLink = `mailto:sunsafesociety@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      alert(
        'Thank you for your donation!\n\nYour email client should open to send the donation details. If it does not, please copy this information and email it to: sunsafesociety@gmail.com\n\nDonation Amount: $' +
          amount +
          '\nDonor Email: ' +
          email,
      );
      form.reset();
      setShowModal(false);
    }, 400);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">☀️ Sun Safe Society</div>
          <nav>
            {navLinks.map((link) => (
              <a key={link.id} onClick={() => scrollToSection(link.id)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-logo-wrapper">
            <img className="hero-logo" src={sunLogo} alt="Sun Safe Society logo" />
          </div>
          <h1>Be Bright, Cover Light</h1>
        </section>

        <section id="mission" className="mission">
          <div className="container">
            <h2>Our Mission</h2>
            <div className="mission-text">
              <p>
                We are a youth-led nonprofit dedicated to raising awareness for skin cancer and
                promoting sun safety. Through education, fundraising, and donations we support the
                Skin Cancer Foundation and want to provide sun-protective supplies to the Shade
                Foundation.
              </p>
            </div>
          </div>
        </section>

        <section id="donate" className="donation-section">
          <div className="container">
            <h2>Support Our Mission</h2>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#333' }}>
                Join us in our mission to protect communities from sun damage and skin cancer.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <a
                  href="https://www.gofundme.com/f/support-skin-cancer-with-sun-safe-society"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button"
                  style={{ display: 'inline-block' }}
                >
                  Donate on GoFundMe
                </a>
              </div>

              <div
                className="gfm-embed"
                data-url="https://www.gofundme.com/f/support-skin-cancer-with-sun-safe-society/widget/large?sharesheet=undefined&attribution_id=sl:7756ed83-1059-42b3-8f0e-1b6cc554b692"
              ></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#333' }}>
                Get in touch with us or support our mission.
              </p>

              <div className="card-grid">
                <div className="card">
                  <h3 style={{ color: '#333', marginBottom: '1rem' }}>Support Our Mission</h3>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    Help us protect communities from sun damage and skin cancer.
                  </p>
                  <a
                    href="https://www.gofundme.com/f/support-skin-cancer-with-sun-safe-society"
                    target="_blank"
                    rel="noreferrer"
                    className="cta-button"
                    style={{ display: 'inline-block' }}
                  >
                    Donate on GoFundMe
                  </a>
                </div>

                <div className="card">
                  <h3 style={{ color: '#333', marginBottom: '1rem' }}>Get in Touch</h3>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    Have questions or want to collaborate with us?
                  </p>
                  <button className="cta-button" onClick={() => setShowModal(true)}>
                    Send us a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reach" className="reach">
          <div className="container">
            <h2>Reach Us</h2>
            <div className="reach-content">
              {reachItems.map((item) => (
                <div className="reach-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <div className="team-grid">
              {team.map((member) => (
                <div className="team-member" key={member.name}>
                  <div className="member-avatar" aria-hidden="true">
                    {member.emoji}
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Sun Safe Society. All rights reserved. | Protecting skin, saving lives.</p>
        <p>
          Contact:{' '}
          <a href="mailto:sunsafesociety@gmail.com">sunsafesociety@gmail.com</a> | (555) 123-4567
        </p>
      </footer>

      {showModal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Send us a message">
          <div className="modal-content">
            <button className="close-btn" aria-label="Close modal" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>Support Our Mission</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount">Donation Amount ($) *</label>
                  <input id="amount" name="amount" type="number" min="1" step="0.01" required />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Donation Type *</label>
                  <select id="type" name="type" required>
                    <option value="">Select Type</option>
                    <option value="One-time">One-time</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Tell us why this cause matters to you..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Make Your Donation
              </button>
              <div className="form-message">
                Your donation will help us protect communities from sun damage and skin cancer.
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
