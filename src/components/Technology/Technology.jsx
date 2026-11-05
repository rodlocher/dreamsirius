import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Monitor, Laptop, ThermometerSnowflake, Cpu, Activity, Check } from 'lucide-react';
import './Technology.css';

const TECH_NODES = [
  {
    id: 'gamer',
    icon: Monitor,
    tag: 'Latência Zero • Cabo Direto',
    title: 'Conectividade Gamer & Streaming',
    desc: 'Fibra óptica direta no escritório com distribuição via cabo de rede estruturado para as TVs da sala e da suíte. Esqueça oscilações de Wi-Fi ao jogar ou assistir seu streaming favorito em 4K.',
    photo: '/escritorio-4.jpg',
    stat: '100% Cabeado (TV Sala + TV Suíte)'
  },
  {
    id: 'office',
    icon: Laptop,
    tag: 'Estabilidade Corporativa',
    title: 'Escritório de Alta Performance',
    desc: 'Bancada dupla planejada com pontos de rede RJ45 dedicados para notebooks, garantindo estabilidade máxima em videoconferências e transferências de arquivos pesados.',
    photo: '/escritorio-3.jpg',
    stat: '2 Pontos Dedicados na Bancada'
  },
  {
    id: 'wifi',
    icon: Wifi,
    tag: 'Cobertura Plena 360°',
    title: 'Wi-Fi Expansível no Teto',
    desc: 'A unidade possui um ponto de rede estratégico no teto do corredor central, preparado para a instalação de um roteador/Access Point corporativo, garantindo cobertura plena em todos os cômodos.',
    photo: '/sala-3.jpg',
    stat: 'Ponto PoE/AP no Corredor Central'
  },
  {
    id: 'climate',
    icon: ThermometerSnowflake,
    tag: 'Conforto Térmico Sob Medida',
    title: 'Climatização Inteligente',
    desc: 'Sistema Multi Split dimensionado para a sala e escritório, somado ao ar-condicionado dedicado na suíte master — silêncio e temperatura ideal em qualquer estação.',
    photo: '/suite-1.jpg',
    stat: 'Multi Split + Climatização Suíte'
  }
];

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(TECH_NODES[0]);

  return (
    <section id="technology" className="technology section-padding">
      <div className="container">
        <div className="tech-header text-center">
          <div className="section-tag">
            <Cpu size={14} /> <span>Engenharia Digital & Climatização</span>
          </div>
          <h2 className="section-title">
            Tecnologia e <span>Performance Digital</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Infraestrutura de ponta para quem vive conectado, trabalha em home office de alta exigência e não abre mão de estabilidade absoluta.
          </p>
        </div>

        <div className="tech-grid">
          <motion.div
            className="tech-cards-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {TECH_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedTech.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedTech(node)}
                  className={`tech-item glass-panel ${isSelected ? 'active' : ''}`}
                >
                  <div className="tech-icon-box">
                    <Icon size={24} />
                  </div>
                  <div className="tech-text">
                    <div className="tech-meta-row">
                      <span className="tech-mini-tag">{node.tag}</span>
                      <span className="tech-stat-pill">
                        <Activity size={12} /> {node.stat}
                      </span>
                    </div>
                    <h3>{node.title}</h3>
                    <p>{node.desc}</p>
                  </div>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            className="tech-preview-col"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="tech-console glass-panel">
              <div className="console-topbar">
                <div className="console-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="console-title">SIRIUS SMART HUB • UNIDADE 113</span>
                <span className="console-status">
                  <Check size={12} /> INFRAESTRUTURA PRONTA
                </span>
              </div>

              <div className="console-image-frame">
                <img src={selectedTech.photo} alt={selectedTech.title} />
                <div className="console-overlay-chip">
                  <span>Foto Real • {selectedTech.title}</span>
                </div>
              </div>

              <div className="console-telemetry">
                <div className="telemetry-box">
                  <span className="t-label">BACKBONE</span>
                  <span className="t-val">Fibra + Cabo RJ45</span>
                </div>
                <div className="telemetry-box">
                  <span className="t-label">COBERTURA WI-FI</span>
                  <span className="t-val">Ponto Teto Central</span>
                </div>
                <div className="telemetry-box">
                  <span className="t-label">CLIMATIZAÇÃO</span>
                  <span className="t-val">Multi Split + Suíte</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
