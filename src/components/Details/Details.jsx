import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Check } from 'lucide-react';
import './Details.css';

const FEATURES = [
  {
    number: '01',
    kicker: 'Conectividade Estruturada',
    title: 'Fibra Óptica & Cobertura Plena',
    description:
      'O link de fibra óptica chega diretamente ao escritório, com pontos de rede exclusivos para notebooks e distribuição via cabo para as Smart TVs da sala e da suíte. No teto do corredor central, um ponto de rede estratégico permite instalar um segundo roteador/access point para cobertura Wi-Fi uniforme em todos os cômodos.',
    specs: [
      'Cabeamento direto para TVs da sala e suíte (streaming sem oscilações)',
      'Duas portas RJ45 dedicadas na bancada do escritório',
      'Ponto de rede no teto do corredor para expansão Wi-Fi'
    ],
    image: '/escritorio-4.jpg',
    alt: 'Escritório planejado no Apartamento 113'
  },
  {
    number: '02',
    kicker: 'Conforto Térmico & Banho Híbrido',
    title: 'Climatização Sob Medida & Água Quente Imediata',
    description:
      'A climatização combina sistema Multi Split na sala e no escritório com um discreto ar-condicionado de gaveta embutido na suíte. Nos banheiros, o sistema híbrido une aquecimento central a gás a circuitos elétricos individuais nos chuveiros: você inicia o banho quente no elétrico sem desperdício de água e alterna para o gás assim que a temperatura estabiliza.',
    specs: [
      'Multi Split (Living + Home Office) e AC de gaveta na Suíte Master',
      'Chuveiros híbridos: conforto imediato do elétrico + vazão do aquecimento a gás',
      'Aquecedor digital a gás instalado na área técnica'
    ],
    image: '/banheirosuite-1.jpg',
    alt: 'Banheiro da suíte com sistema híbrido'
  },
  {
    number: '03',
    kicker: 'Funcionalidade Cotidiana',
    title: 'Lavanderia Discreta & Autonomia Pet',
    description:
      'Isolada da cozinha por uma elegante porta divisória que preserva a estética do projeto, a lavanderia conta com varais de teto individuais e marcenaria planejada. Na base da porta, um recorte arquitetônico sob medida permite que o seu pet acesse o tapete higiênico com total liberdade e discrição.',
    specs: [
      'Porta divisória entre cozinha e área de serviço',
      'Passagem planejada na porta para circulação autônoma do pet',
      'Varais de teto individuais e ventilação natural'
    ],
    image: '/lavanderia-2.jpg',
    alt: 'Lavanderia planejada com passagem pet',
    secondaryImage: '/lavanderia-1.jpg',
    secondaryAlt: 'Detalhe da lavanderia e aquecedor a gás'
  }
];

const Details = ({ onOpenPhoto }) => {
  return (
    <section id="details" className="details-section">
      <div className="container">
        <div className="details-header">
          <div className="section-kicker">Engenharia do Cotidiano</div>
          <h2 className="section-title">
            Soluções inteligentes pensadas nos <em>mínimos detalhes</em>
          </h2>
        </div>

        <div className="details-editorial-list">
          {FEATURES.map((item, index) => (
            <motion.article
              key={item.number}
              className={`details-row ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="details-text-col">
                <div className="details-meta">
                  <span className="details-num">{item.number}</span>
                  <span className="details-kicker">{item.kicker}</span>
                </div>
                <h3 className="details-item-title">{item.title}</h3>
                <p className="details-item-desc">{item.description}</p>

                <ul className="details-spec-list">
                  {item.specs.map((spec, i) => (
                    <li key={i}>
                      <span className="spec-bullet" aria-hidden="true">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`details-media-col ${item.secondaryImage ? 'dual-media' : ''}`}>
                <div
                  className="details-photo-wrap clickable-image"
                  onClick={() => onOpenPhoto && onOpenPhoto(item.image)}
                >
                  <img src={item.image} alt={item.alt} className="details-photo" />
                  <div className="image-zoom-hint">
                    <Maximize2 size={14} />
                    <span>Ampliar</span>
                  </div>
                </div>

                {item.secondaryImage && (
                  <div
                    className="details-photo-wrap secondary clickable-image"
                    onClick={() => onOpenPhoto && onOpenPhoto(item.secondaryImage)}
                  >
                    <img
                      src={item.secondaryImage}
                      alt={item.secondaryAlt}
                      className="details-photo"
                    />
                    <div className="image-zoom-hint">
                      <Maximize2 size={14} />
                      <span>Ampliar</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
