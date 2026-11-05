import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowDownRight } from 'lucide-react';
import './Hero.css';

const WHATSAPP_URL =
  'https://wa.me/5519974103095?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Apartamento%20113%20(Dream%20Sirius)%20e%20gostaria%20de%20agendar%20uma%20visita.';

const HERO_SCENES = [
  {
    id: 'living',
    num: '01',
    label: 'Living',
    image: '/sala-1.jpg'
  },
  {
    id: 'integracao',
    num: '02',
    label: 'Amplitude',
    image: '/sala-2.jpg'
  },
  {
    id: 'vista',
    num: '03',
    label: 'Horizonte',
    image: '/Sacada-1.jpg'
  },
  {
    id: 'cozinha',
    num: '04',
    label: 'Gourmet',
    image: '/sala-3.jpg'
  }
];

export default function Hero({ onOpenPhoto }) {
  const [activeScene, setActiveScene] = useState(HERO_SCENES[0]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-text-col"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-kicker hero-address-kicker">
            Av. Maria Emília Alves dos Santos de Angelis, 874 • Apto 113
          </span>

          <h1 className="hero-title">
            Dream <span>Sirius</span>
            <small>A Unidade dos Sonhos do Residencial Sirius</small>
          </h1>

          <p className="hero-subtitle">
            Exclusividade, design e inteligência em cada m². No <strong>último andar</strong>, com vista eterna para área de preservação e reforma autoral assinada pelo escritório <strong>Kripamonti</strong>.
          </p>

          <div className="hero-pricing-bar">
            <div className="price-item">
              <span className="price-label">Venda</span>
              <strong className="price-value">R$ 1.100.000</strong>
            </div>
            <div className="price-divider"></div>
            <div className="price-item">
              <span className="price-label">Locação</span>
              <strong className="price-value">R$ 5.500 <small>/mês</small></strong>
            </div>
          </div>

          <div className="hero-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={17} /> Falar por WhatsApp
            </a>
            <a href="#floorplan" className="btn-outline">
              Ver Planta Interativa <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-specs-strip">
            <div>
              <strong>88m² → 98m²</strong>
              <span>Amplitude Integrada</span>
            </div>
            <div>
              <strong>Último Andar</strong>
              <span>Silêncio Absoluto</span>
            </div>
            <div>
              <strong>2 Vagas Fixas</strong>
              <span>Paralelas, próximas ao Elevador</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div
            className="hero-photo-stage"
            onClick={() => onOpenPhoto && onOpenPhoto(activeScene.image)}
            title="Clique para abrir na galeria"
            style={{ cursor: 'zoom-in' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeScene.id}
                src={activeScene.image}
                alt={activeScene.label}
                className="hero-main-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          <div className="hero-minimal-tabs" role="tablist" aria-label="Alternar vista">
            {HERO_SCENES.map((scene) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => setActiveScene(scene)}
                className={`minimal-tab ${activeScene.id === scene.id ? 'active' : ''}`}
              >
                <span className="tab-num">{scene.num}</span>
                <span className="tab-label">{scene.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
