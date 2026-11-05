import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wifi,
  Wind,
  Flame,
  Zap,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  Router,
  Monitor,
  Tv,
  ThermometerSnowflake,
  Maximize2,
  Check
} from 'lucide-react';
import './FloorPlan.css';

const ROOMS = {
  suite: {
    id: 'suite',
    name: 'Suíte Master',
    pinLabel: 'Suíte Master',
    subtitle: 'Silêncio de Último Andar & Marcenaria Sob Medida',
    description:
      'Sem vizinhos no pavimento superior. Equipada com ponto de TV cabeado diretamente da fibra óptica e ar-condicionado de gaveta integrado à marcenaria.',
    x: 27,
    y: 60,
    photos: ['/suite-1.jpg', '/suite-2.jpg', '/suite-3.jpg', '/suite-4.jpg'],
    specs: [
      'Ar-condicionado de gaveta embutido',
      'Rede cabeada direta para Smart TV',
      'Marcenaria planejada de piso ao teto'
    ]
  },
  banho_suite: {
    id: 'banho_suite',
    name: 'Banho da Suíte',
    pinLabel: 'Banho Suíte',
    subtitle: 'Sistema de Aquecimento Híbrido',
    description:
      'Acabamentos nobres com circuito elétrico dedicado e aquecimento central a gás — permitindo iniciar o banho quente sem espera.',
    x: 13.5,
    y: 74,
    photos: ['/banheirosuite-1.jpg', '/banheirosuite-2.jpg', '/banheirosuite-3.jpg'],
    specs: [
      'Chuveiro híbrido (Elétrico + Gás)',
      'Bancada esculpida e nicho iluminado',
      'Ventilação natural'
    ]
  },
  dorm2: {
    id: 'dorm2',
    name: '2º Dormitório',
    pinLabel: '2º Dormitório',
    subtitle: 'Quarto de Hóspedes ou Infantil',
    description:
      'Ambiente versátil com excelente iluminação natural, marcenaria planejada e cobertura Wi-Fi plena a partir do ponto de teto central.',
    x: 33,
    y: 26,
    photos: ['/quarto-1.jpg', '/quarto-2.jpg', '/quarto-3.jpg', '/quarto-4.jpg'],
    specs: [
      'Armários planejados de alto padrão',
      'Cobertura Wi-Fi de teto sem sombra',
      'Esquadrias com persiana integrada'
    ]
  },
  banho_social: {
    id: 'banho_social',
    name: 'Banho Social',
    pinLabel: 'Banho Social',
    subtitle: 'Conforto Híbrido & Revestimento Contemporâneo',
    description:
      'Atende ao segundo dormitório com a mesma tecnologia de banho híbrido (elétrico + gás) da suíte principal.',
    x: 50.5,
    y: 35,
    photos: ['/banheiro-1.jpg', '/banheiro-2.jpg', '/banheiro-3.jpg'],
    specs: [
      'Sistema híbrido: Elétrico + Gás',
      'Box de vidro até o teto',
      'Metais e louças selecionados'
    ]
  },
  escritorio: {
    id: 'escritorio',
    name: 'Home Office Central',
    pinLabel: 'Escritório',
    subtitle: 'Núcleo de Conectividade em Fibra Óptica',
    description:
      'Projetado para rotina executiva: recebe o link principal de fibra óptica, conta com pontos de rede dedicados para notebooks e distribui cabeamento para o apartamento.',
    x: 45,
    y: 73,
    photos: ['/escritorio-4.jpg', '/Escritorio-1.jpg', '/escritorio-2.jpg', '/escritorio-3.jpg', '/escritorio-5.jpg'],
    specs: [
      'Chegada da Fibra Óptica + Roteador Principal',
      '2 pontos de rede RJ45 exclusivos para notebooks',
      'Climatização Multi Split independente'
    ]
  },
  sala: {
    id: 'sala',
    name: 'Living Integrado',
    pinLabel: 'Living',
    subtitle: '98m² de Percepção Espacial & Design Kripamonti',
    description:
      'Nivelado à varanda e banhado pelo sol da tarde. Sob o sofá principal, uma mesa embutida se revela para acomodar até 8 pessoas junto ao balcão.',
    x: 74,
    y: 58,
    photos: ['/sala-1.jpg', '/sala-2.jpg', '/sala-3.jpg', '/sala-4.jpg', '/sala-5.jpg'],
    specs: [
      'Mesa oculta sob o sofá (até 8 lugares)',
      'Cabeamento de rede direto na Smart TV',
      'Climatização Multi Split de alta capacidade'
    ]
  },
  sacada: {
    id: 'sacada',
    name: 'Varanda Integrada',
    pinLabel: 'Varanda',
    subtitle: 'Vista Definitiva para Área de Preservação',
    description:
      'Integrada e nivelada ao living, emoldura o pôr do sol livre para sempre sobre a reserva ambiental, sem risco de novos edifícios à frente.',
    x: 64,
    y: 84,
    photos: ['/Sacada-1.jpg', '/Sacada-2.jpg', '/Sacada-3.jpg', '/Sacada-4.jpg'],
    specs: [
      'Vista eterna para área de preservação',
      'Piso nivelado integrado ao living',
      'Envidraçamento panorâmico'
    ]
  },
  lavabo: {
    id: 'lavabo',
    name: 'Lavabo de Cinema',
    pinLabel: 'Lavabo',
    subtitle: 'Arquitetura Sensorial para Receber',
    description:
      'Desenhado como uma peça de galeria com iluminação cênica, textura mineral e cuba escultural para encantar as visitas.',
    x: 81.5,
    y: 38.5,
    photos: ['/lavabo-4.jpg', '/Lavabo-1.jpg', '/Lavabo-2.jpg', '/Lavabo-3.jpg'],
    specs: [
      'Iluminação indireta de destaque',
      'Acabamentos assinados pelo estúdio Kripamonti',
      'Posicionado estrategicamente na área social'
    ]
  },
  cozinha: {
    id: 'cozinha',
    name: 'Cozinha Gourmet',
    pinLabel: 'Cozinha',
    subtitle: 'Ergonomia & Integração Social',
    description:
      'Aberta para o jantar através do balcão gourmet, com marcenaria sob medida e divisória elegante de acesso à lavanderia.',
    x: 66,
    y: 26,
    photos: ['/Cozinha-1.jpg', '/Cozinha-2.jpg'],
    specs: [
      'Balcão integrado ao estar e jantar',
      'Ponto de água quente a gás na torneira',
      'Porta divisória com a área de serviço'
    ]
  },
  lavanderia: {
    id: 'lavanderia',
    name: 'Lavanderia & Pet Care',
    pinLabel: 'Lavanderia & Pet',
    subtitle: 'Organização Discreta & Passagem Pet',
    description:
      'Equipada com aquecedor digital a gás, varais de teto individuais e porta com recorte planejado para acesso autônomo do seu pet ao tapete higiênico.',
    x: 80.5,
    y: 16,
    photos: ['/lavanderia-2.jpg', '/lavanderia-1.jpg', '/lavaderia-3.jpg'],
    specs: [
      'Porta com passagem dedicada para Pet',
      'Varais de teto individuais e armários técnicos',
      'Central de aquecimento a gás'
    ]
  }
};

const LAYERS = [
  {
    id: 'ambientes',
    label: 'Ambientes & Fotos',
    icon: LayoutGrid
  },
  {
    id: 'rede',
    label: 'Rede & Fibra',
    icon: Wifi
  },
  {
    id: 'clima',
    label: 'Climatização',
    icon: Wind
  },
  {
    id: 'agua',
    label: 'Banho Híbrido',
    icon: Flame
  }
];

const FloorPlan = ({ onOpenPhoto }) => {
  const [activeRoom, setActiveRoom] = useState('sala');
  const [activeLayer, setActiveLayer] = useState('ambientes');
  const [photoIdx, setPhotoIdx] = useState(0);

  const selectedRoom = ROOMS[activeRoom];

  const handleSelectRoom = (roomKey) => {
    setActiveRoom(roomKey);
    setPhotoIdx(0);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIdx((prev) => (prev + 1) % selectedRoom.photos.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIdx((prev) => (prev - 1 + selectedRoom.photos.length) % selectedRoom.photos.length);
  };

  return (
    <section id="floorplan" className="floorplan-section">
      <div className="container">
        <div className="floorplan-header">
          <div>
            <div className="section-kicker">Planta Interativa & Engenharia</div>
            <h2 className="section-title">
              Explore cada ambiente e as <em>camadas invisíveis</em>
            </h2>
          </div>

          <div className="layer-switcher" role="tablist" aria-label="Camadas da planta">
            {LAYERS.map((layer) => {
              const IconComponent = layer.icon;
              return (
                <button
                  key={layer.id}
                  type="button"
                  className={`layer-btn ${activeLayer === layer.id ? 'active' : ''}`}
                  onClick={() => setActiveLayer(layer.id)}
                >
                  <IconComponent size={15} />
                  <span>{layer.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="floorplan-workspace">
          {/* Coluna Esquerda: Planta sem texto com botões de ação reais */}
          <div className="blueprint-stage">
            <div className="blueprint-canvas">
              <img
                src="/planta-semtexto.png"
                alt="Planta Arquitetônica Dream Sirius"
                className={`blueprint-img layer-mode-${activeLayer}`}
              />

              {/* Camadas Técnicas em SVG */}
              <svg
                className="blueprint-overlay-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2f5266" />
                    <stop offset="100%" stopColor="#6a8d73" />
                  </linearGradient>
                  <linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c86d51" />
                    <stop offset="100%" stopColor="#d99b52" />
                  </linearGradient>
                </defs>

                {activeLayer === 'rede' && (
                  <g className="svg-layer-group">
                    <path
                      d="M 43.5 69 C 56 67, 65 65, 75 62"
                      className="tech-line fiber-line"
                    />
                    <path
                      d="M 43.5 69 C 34 67, 28 66, 22.5 65"
                      className="tech-line fiber-line"
                    />
                    <path
                      d="M 43.5 69 L 43 47"
                      className="tech-line fiber-line"
                    />
                    <circle cx="43" cy="47" r="18" className="wifi-wave wave-1" />
                    <circle cx="43" cy="47" r="30" className="wifi-wave wave-2" />
                  </g>
                )}

                {activeLayer === 'clima' && (
                  <g className="svg-layer-group">
                    <path
                      d="M 65 89 C 71 78, 74 70, 75 62"
                      className="tech-line clima-line"
                    />
                    <path
                      d="M 65 89 C 56 82, 48 76, 43.5 69"
                      className="tech-line clima-line"
                    />
                  </g>
                )}

                {activeLayer === 'agua' && (
                  <g className="svg-layer-group">
                    <path
                      d="M 83.5 16 L 67 30"
                      className="tech-line heat-line"
                    />
                    <path
                      d="M 83.5 16 C 70 16, 60 22, 49.5 28"
                      className="tech-line heat-line"
                    />
                    <path
                      d="M 83.5 16 C 55 12, 22 35, 7.5 68"
                      className="tech-line heat-line"
                    />
                  </g>
                )}
              </svg>

              {/* Indicadores Técnicos da Camada Rede */}
              {activeLayer === 'rede' && (
                <>
                  <div className="tech-node node-fiber" style={{ left: '43.5%', top: '79%' }}>
                    <Monitor size={13} />
                    <span>Hub Fibra + 2x RJ45</span>
                  </div>
                  <div className="tech-node node-wifi" style={{ left: '43%', top: '47%' }}>
                    <Router size={13} />
                    <span>Ponto Wi-Fi no Teto</span>
                  </div>
                  <div className="tech-node node-tv" style={{ left: '75%', top: '52%' }}>
                    <Tv size={13} />
                    <span>TV Sala Cabeada</span>
                  </div>
                  <div className="tech-node node-tv" style={{ left: '22.5%', top: '55%' }}>
                    <Tv size={13} />
                    <span>TV Suíte Cabeada</span>
                  </div>
                </>
              )}

              {/* Indicadores Técnicos da Camada Climatização */}
              {activeLayer === 'clima' && (
                <>
                  <div className="tech-node node-ac" style={{ left: '22.5%', top: '55%' }}>
                    <ThermometerSnowflake size={13} />
                    <span>AC de Gaveta</span>
                  </div>
                  <div className="tech-node node-ac" style={{ left: '43.5%', top: '58%' }}>
                    <Wind size={13} />
                    <span>Multi Split Escritório</span>
                  </div>
                  <div className="tech-node node-ac" style={{ left: '75%', top: '52%' }}>
                    <Wind size={13} />
                    <span>Multi Split Living</span>
                  </div>
                </>
              )}

              {/* Indicadores Técnicos da Camada Banho Híbrido & Gás */}
              {activeLayer === 'agua' && (
                <>
                  <div className="tech-node node-gas" style={{ left: '83.5%', top: '7%' }}>
                    <Flame size={13} />
                    <span>Aquecedor a Gás</span>
                  </div>
                  <div className="tech-node node-hybrid" style={{ left: '49.5%', top: '18%' }}>
                    <Zap size={13} />
                    <span>Híbrido: Elétrico + Gás</span>
                  </div>
                  <div className="tech-node node-hybrid" style={{ left: '12%', top: '57%' }}>
                    <Zap size={13} />
                    <span>Híbrido: Elétrico + Gás</span>
                  </div>
                </>
              )}

              {/* Botões de Ação nos Cômodos da Planta */}
              {Object.values(ROOMS).map((room) => {
                const isSelected = activeRoom === room.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    className={`room-pin ${isSelected ? 'active' : ''}`}
                    style={{ left: `${room.x}%`, top: `${room.y}%` }}
                    onClick={() => handleSelectRoom(room.id)}
                  >
                    <span className="pin-dot"></span>
                    <span className="pin-label">{room.pinLabel || room.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="blueprint-caption">
              Clique sobre qualquer ambiente na planta para inspecionar fotos reais e especificações.
            </p>
          </div>

          {/* Coluna Direita: Inspetor Editorial do Ambiente Selecionado */}
          <div className="room-inspector">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoom.id}
                className="inspector-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="inspector-photo-wrap clickable-image"
                  onClick={() => onOpenPhoto && onOpenPhoto(selectedRoom.photos[photoIdx])}
                >
                  <img
                    src={selectedRoom.photos[photoIdx]}
                    alt={`${selectedRoom.name} - Foto ${photoIdx + 1}`}
                    className="inspector-photo"
                  />
                  <div className="image-zoom-hint">
                    <Maximize2 size={14} />
                    <span>Ampliar na galeria</span>
                  </div>

                  {selectedRoom.photos.length > 1 && (
                    <div className="inspector-photo-nav">
                      <button type="button" onClick={prevPhoto} aria-label="Foto anterior">
                        <ChevronLeft size={18} />
                      </button>
                      <span>
                        {photoIdx + 1} / {selectedRoom.photos.length}
                      </span>
                      <button type="button" onClick={nextPhoto} aria-label="Próxima foto">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="inspector-body">
                  <span className="inspector-subtitle">{selectedRoom.subtitle}</span>
                  <h3 className="inspector-title">{selectedRoom.name}</h3>
                  <p className="inspector-desc">{selectedRoom.description}</p>

                  <ul className="inspector-specs">
                    {selectedRoom.specs.map((spec, idx) => (
                      <li key={idx}>
                        <span className="spec-bullet" aria-hidden="true">
                          <Check size={14} strokeWidth={2.5} />
                        </span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
