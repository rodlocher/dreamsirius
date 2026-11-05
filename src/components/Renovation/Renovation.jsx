import { motion } from 'framer-motion';
import './Renovation.css';

const ARCHITECTURAL_PILLARS = [
  {
    num: '01',
    title: 'Onde 88m² se tornam 98m²',
    subtitle: 'Integração Sala & Varanda',
    photo: '/sala-4.jpg',
    description:
      'A união total do living com a varanda eliminou barreiras visuais, criando um ambiente contínuo, iluminado e com sensação real de quase 100m².'
  },
  {
    num: '02',
    title: 'Hospitalidade para 8 Lugares',
    subtitle: 'Balcão Gourmet + Mesa Oculta',
    photo: '/Cozinha-1.jpg',
    description:
      'Pensado para a rotina prática com balcão em madeira natural. Em ocasiões especiais, uma mesa embutida sob o sofá se revela para acomodar até 8 pessoas com conforto.'
  },
  {
    num: '03',
    title: 'Lavabo de Cinema',
    subtitle: 'Iluminação & Acabamento',
    photo: '/lavabo-4.jpg',
    description:
      'Revestimento nobre marmorizado, espelho orgânico, cuba esculpida e arandelas de duplo facho desenhadas para encantar desde o primeiro olhar.'
  }
];

export default function Renovation({ onOpenPhoto }) {
  return (
    <section id="renovation" className="renovation section-padding">
      <div className="container">
        <motion.div
          className="renovation-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-kicker">Assinatura Kripamonti • Reforma Jun/2022</span>
            <h2 className="section-title">
              Arquitetura Autoral <span>Pronta para Morar</span>
            </h2>
          </div>
          <p className="renovation-lead">
            Submetido a uma reforma profunda e meticulosa assinada pelo escritório <strong>Kripamonti</strong>, cada metro quadrado combina marcenaria sob medida, iluminação cênica e soluções inteligentes de espaço.
          </p>
        </motion.div>

        <div className="renovation-editorial-grid">
          {ARCHITECTURAL_PILLARS.map((item, idx) => (
            <motion.article
              key={item.num}
              className="pillar-column"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div
                className="pillar-img-wrap"
                onClick={() => onOpenPhoto && onOpenPhoto(item.photo)}
                title="Clique para ampliar na galeria"
              >
                <img src={item.photo} alt={item.title} />
              </div>

              <div className="pillar-meta">
                <span className="pillar-num">{item.num}</span>
                <span className="pillar-sub">{item.subtitle}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
