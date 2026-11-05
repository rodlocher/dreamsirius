import React from 'react';
import { MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const WHATSAPP_URL =
  'https://wa.me/5519974103095?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Apartamento%20113%20(Dream%20Sirius)%20e%20gostaria%20de%20agendar%20uma%20visita.';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Seção de Localização */}
      <div id="location" className="location-block">
        <div className="container">
          <div className="location-grid">
            <div className="location-info">
              <div className="section-kicker">Endereço & Entorno</div>
              <h2 className="section-title">
                Residencial Sirius — <em>Unidade 113</em>
              </h2>
              <p className="location-address">
                <MapPin size={18} />
                <span>Avenida Maria Emília Alves dos Santos de Angelis, 874</span>
              </p>
              <p className="location-desc">
                Posicionado no último andar e voltado para uma área de preservação ambiental definitiva, garantindo silêncio absoluto, pôr do sol desimpedido e duas vagas paralelas próximas ao elevador.
              </p>

              <dl className="location-highlights">
                <div className="loc-stat">
                  <dt>Posição Solar & Vista</dt>
                  <dd>Sol da tarde com vista livre eterna para área de preservação</dd>
                </div>
                <div className="loc-stat">
                  <dt>Garagem</dt>
                  <dd>2 vagas fixas, cobertas, paralelas e próximas ao elevador</dd>
                </div>
                <div className="loc-stat">
                  <dt>Pavimento</dt>
                  <dd>Último andar — privacidade máxima sem vizinhos acima</dd>
                </div>
              </dl>
            </div>

            <div className="location-map-wrap">
              <iframe
                title="Mapa de Localização Residencial Sirius"
                src="https://www.google.com/maps?q=Avenida+Maria+Em%C3%ADlia+Alves+dos+Santos+de+Angelis,+874&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Valores & Contato Direto via WhatsApp */}
      <div id="contact" className="investment-block">
        <div className="container">
          <div className="investment-grid">
            <div className="investment-copy">
              <div className="section-kicker">Valores & Visita Privativa</div>
              <h2 className="section-title">
                Agende sua visita ao <em>Apartamento 113</em>
              </h2>
              <p className="investment-desc">
                Imóvel totalmente reformado pelo escritório Kripamonti e pronto para morar. Entre em contato diretamente pelo WhatsApp para agendar sua visita presencial.
              </p>
            </div>

            <div className="investment-proposal">
              <div className="proposal-values">
                <div className="proposal-item">
                  <span className="proposal-label">Venda</span>
                  <strong className="proposal-price">R$ 1.100.000</strong>
                </div>
                <div className="proposal-item">
                  <span className="proposal-label">Locação</span>
                  <strong className="proposal-price">
                    R$ 5.500 <small>/ mês</small>
                  </strong>
                </div>
              </div>

              <div className="proposal-cta">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp proposal-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  <span>Falar no WhatsApp — (19) 97410-3095</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Final */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-brand">
            <img src="/logo-dreamsirius.png" alt="Dream Sirius" className="footer-logo" />
            <span>Dream Sirius · Apartamento 113 · Residencial Sirius</span>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Dream Sirius. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
