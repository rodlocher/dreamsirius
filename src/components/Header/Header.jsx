import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';
import './Header.css';

const WHATSAPP_URL =
  'https://wa.me/5519974103095?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Apartamento%20113%20(Dream%20Sirius)%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container header-content">
        <a href="#hero" className="brand-logo" aria-label="Dream Sirius Apartamento 113">
          <svg
            className="logo-svg"
            viewBox="140 60 1240 1180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-56 -328)">
              <text
                fill="currentColor"
                fontFamily="Breamcatcher, sans-serif"
                fontWeight="400"
                fontSize="527"
                transform="matrix(1 0 0 1 373.301 1319)"
              >
                SIRIUS
              </text>
              <text
                fill="currentColor"
                fontFamily="Breamcatcher, sans-serif"
                fontWeight="400"
                fontSize="275"
                transform="matrix(1 0 0 1 595.738 677)"
              >
                DREAM
              </text>
              <path
                d="M817 738C1083.55 738 1312.25 845.621 1409.94 999L1416 1010 1393.62 977.771C1288.32 855.386 1069.67 771.279 817 771.279 564.333 771.279 345.678 855.386 240.38 977.771L218 1010 224.062 999C321.752 845.621 550.45 738 817 738Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <text
                fill="var(--color-accent)"
                fontFamily="Breamcatcher, sans-serif"
                fontWeight="700"
                fontSize="118"
                letterSpacing="12"
                transform="matrix(1 0 0 1 364 1510)"
              >
                APARTAMENTO 113
              </text>
            </g>
          </svg>
          <div className="brand-text">
            <span className="brand-title">DREAM SIRIUS</span>
            <span className="brand-sub">APTO 113 • ÚLTIMO ANDAR</span>
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>O Imóvel</a>
          <a href="#renovation" onClick={() => setMenuOpen(false)}>Arquitetura</a>
          <a href="#floorplan" onClick={() => setMenuOpen(false)}>Planta & Mapas</a>
          <a href="#details" onClick={() => setMenuOpen(false)}>Diferenciais</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Galeria</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Localização</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-header-whatsapp"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  );
}
