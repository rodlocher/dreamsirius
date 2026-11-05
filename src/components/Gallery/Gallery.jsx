import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './Gallery.css';

const PHOTOS = [
  { src: '/sala-1.jpg', category: 'Living & Varanda', title: 'Living Integrado — Projeto Kripamonti' },
  { src: '/sala-2.jpg', category: 'Living & Varanda', title: 'Amplitude de 98m² & Balcão Integrado' },
  { src: '/sala-3.jpg', category: 'Living & Varanda', title: 'Marcenaria & Jantar para até 8 Pessoas' },
  { src: '/sala-4.jpg', category: 'Living & Varanda', title: 'Perspectiva do Estar e Varanda' },
  { src: '/sala-5.jpg', category: 'Living & Varanda', title: 'Acabamentos & Iluminação Natural' },
  { src: '/Sacada-1.jpg', category: 'Living & Varanda', title: 'Vista Livre e Eterna para Área de Preservação' },
  { src: '/Sacada-2.jpg', category: 'Living & Varanda', title: 'Varanda com Vista Livre' },
  { src: '/Sacada-3.jpg', category: 'Living & Varanda', title: 'Varanda Nivelada e Integrada ao Living' },
  { src: '/Sacada-4.jpg', category: 'Living & Varanda', title: 'Envidraçamento Panorâmico & Sol da Tarde' },
  { src: '/Entrada-1.jpg', category: 'Living & Varanda', title: 'Hall de Entrada & Porta Social' },
  { src: '/Corredor-entrada.jpg', category: 'Living & Varanda', title: 'Circulação & Iluminação Linear' },
  { src: '/Cozinha-1.jpg', category: 'Cozinha & Lavanderia', title: 'Cozinha Gourmet Planejada' },
  { src: '/Cozinha-2.jpg', category: 'Cozinha & Lavanderia', title: 'Bancada e Marcenaria Sob Medida' },
  { src: '/lavanderia-2.jpg', category: 'Cozinha & Lavanderia', title: 'Lavanderia Planejada & Passagem Pet' },
  { src: '/lavanderia-1.jpg', category: 'Cozinha & Lavanderia', title: 'Aquecedor Digital a Gás & Organização' },
  { src: '/lavaderia-3.jpg', category: 'Cozinha & Lavanderia', title: 'Porta Divisória & Área de Serviço' },
  { src: '/escritorio-4.jpg', category: 'Escritório & Suítes', title: 'Home Office com Fibra Direta' },
  { src: '/Escritorio-1.jpg', category: 'Escritório & Suítes', title: 'Bancada Executiva & Marcenaria' },
  { src: '/escritorio-2.jpg', category: 'Escritório & Suítes', title: 'Escritório Planejado' },
  { src: '/escritorio-3.jpg', category: 'Escritório & Suítes', title: 'Detalhes do Home Office' },
  { src: '/escritorio-5.jpg', category: 'Escritório & Suítes', title: 'Estação de Trabalho & Armários' },
  { src: '/corredor-quartos-1.jpg', category: 'Escritório & Suítes', title: 'Corredor Íntimo & Ponto Wi-Fi no Teto' },
  { src: '/suite-1.jpg', category: 'Escritório & Suítes', title: 'Suíte Master no Último Andar' },
  { src: '/suite-2.jpg', category: 'Escritório & Suítes', title: 'Marcenaria & Ar de Gaveta na Suíte' },
  { src: '/suite-3.jpg', category: 'Escritório & Suítes', title: 'Conforto e Silêncio Absoluto' },
  { src: '/suite-4.jpg', category: 'Escritório & Suítes', title: 'Detalhes da Suíte Principal' },
  { src: '/quarto-1.jpg', category: 'Escritório & Suítes', title: 'Segundo Dormitório Planejado' },
  { src: '/quarto-2.jpg', category: 'Escritório & Suítes', title: 'Armários e Iluminação do 2º Quarto' },
  { src: '/quarto-3.jpg', category: 'Escritório & Suítes', title: 'Perspectiva do 2º Dormitório' },
  { src: '/quarto-4.jpg', category: 'Escritório & Suítes', title: 'Marcenaria do 2º Dormitório' },
  { src: '/lavabo-4.jpg', category: 'Banheiros & Lavabo', title: 'Lavabo de Cinema — Design Autoral' },
  { src: '/Lavabo-1.jpg', category: 'Banheiros & Lavabo', title: 'Texturas e Iluminação Cênica do Lavabo' },
  { src: '/Lavabo-2.jpg', category: 'Banheiros & Lavabo', title: 'Cuba Esculpida & Espelho Orgânico' },
  { src: '/Lavabo-3.jpg', category: 'Banheiros & Lavabo', title: 'Detalhes do Lavabo Social' },
  { src: '/banheirosuite-1.jpg', category: 'Banheiros & Lavabo', title: 'Banho da Suíte — Sistema Híbrido' },
  { src: '/banheirosuite-2.jpg', category: 'Banheiros & Lavabo', title: 'Acabamentos do Banho da Suíte' },
  { src: '/banheirosuite-3.jpg', category: 'Banheiros & Lavabo', title: 'Bancada e Nicho da Suíte' },
  { src: '/banheiro-1.jpg', category: 'Banheiros & Lavabo', title: 'Banho Social Contemporâneo' },
  { src: '/banheiro-2.jpg', category: 'Banheiros & Lavabo', title: 'Box e Revestimentos do Banho Social' },
  { src: '/banheiro-3.jpg', category: 'Banheiros & Lavabo', title: 'Detalhes do Banho Social' }
];

const CATEGORIES = [
  'Todos',
  'Living & Varanda',
  'Cozinha & Lavanderia',
  'Escritório & Suítes',
  'Banheiros & Lavabo'
];

const Gallery = ({ externalPhotoSrc, onOpenPhoto, onClosePhoto }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredPhotos =
    activeCategory === 'Todos'
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  const currentLightboxIndex = externalPhotoSrc
    ? PHOTOS.findIndex((p) => p.src.toLowerCase() === externalPhotoSrc.toLowerCase())
    : -1;

  const activePhoto =
    currentLightboxIndex >= 0
      ? PHOTOS[currentLightboxIndex]
      : externalPhotoSrc
        ? { src: externalPhotoSrc, category: 'Dream Sirius', title: 'Apartamento 113' }
        : null;

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentLightboxIndex < 0) return;
    const nextIdx = (currentLightboxIndex + 1) % PHOTOS.length;
    onOpenPhoto(PHOTOS[nextIdx].src);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentLightboxIndex < 0) return;
    const prevIdx = (currentLightboxIndex - 1 + PHOTOS.length) % PHOTOS.length;
    onOpenPhoto(PHOTOS[prevIdx].src);
  };

  useEffect(() => {
    if (!externalPhotoSrc) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClosePhoto();
      if (e.key === 'ArrowRight' && currentLightboxIndex >= 0) {
        onOpenPhoto(PHOTOS[(currentLightboxIndex + 1) % PHOTOS.length].src);
      }
      if (e.key === 'ArrowLeft' && currentLightboxIndex >= 0) {
        onOpenPhoto(PHOTOS[(currentLightboxIndex - 1 + PHOTOS.length) % PHOTOS.length].src);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [externalPhotoSrc, currentLightboxIndex, onOpenPhoto, onClosePhoto]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div>
            <div className="section-kicker">Acervo Fotográfico Real</div>
            <h2 className="section-title">
              Galeria completa do <em>Apartamento 113</em>
            </h2>
          </div>

          <div className="gallery-filters" role="tablist" aria-label="Filtrar fotos por ambiente">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.figure
                layout
                key={photo.src}
                className="gallery-item clickable-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => onOpenPhoto(photo.src)}
              >
                <div className="gallery-img-wrap">
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <div className="image-zoom-hint">
                    <Maximize2 size={14} />
                    <span>Ampliar</span>
                  </div>
                </div>
                <figcaption className="gallery-caption">
                  <span className="gallery-caption-title">{photo.title}</span>
                  <span className="gallery-caption-cat">{photo.category}</span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Global para qualquer imagem clicada no site */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClosePhoto}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={onClosePhoto}
              aria-label="Fechar galeria"
            >
              <X size={24} />
            </button>

            {currentLightboxIndex >= 0 && (
              <button
                type="button"
                className="lightbox-nav prev"
                onClick={handlePrev}
                aria-label="Foto anterior"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="lightbox-img"
              />
              <div className="lightbox-meta">
                <div>
                  <span className="lightbox-cat">{activePhoto.category}</span>
                  <h4 className="lightbox-title">{activePhoto.title}</h4>
                </div>
                {currentLightboxIndex >= 0 && (
                  <span className="lightbox-counter">
                    {currentLightboxIndex + 1} / {PHOTOS.length}
                  </span>
                )}
              </div>
            </div>

            {currentLightboxIndex >= 0 && (
              <button
                type="button"
                className="lightbox-nav next"
                onClick={handleNext}
                aria-label="Próxima foto"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
