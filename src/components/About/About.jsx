import { motion } from 'framer-motion';
import './About.css';

export default function About({ onOpenPhoto }) {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-kicker">Privacidade & Localização</span>
            <h2 className="section-title">
              Vista Livre <span>e Eterna</span>
            </h2>
            <p className="section-subtitle">
              Voltada para uma área de preservação ambiental e situada no último andar do Residencial Sirius, a Unidade 113 reúne três atributos raros em um mesmo endereço:
            </p>

            <div className="editorial-list">
              <div className="editorial-item">
                <span className="editorial-num">01</span>
                <div>
                  <h3>Horizonte Definitivo & Pôr do Sol</h3>
                  <p>
                    Sem risco de novos edifícios bloquearem a paisagem ou invadirem sua privacidade. Iluminação natural abundante em todos os ambientes.
                  </p>
                </div>
              </div>

              <div className="editorial-item">
                <span className="editorial-num">02</span>
                <div>
                  <h3>Silêncio do Último Andar</h3>
                  <p>
                    A tranquilidade absoluta de não ter vizinhos no pavimento superior, garantindo conforto acústico dia e noite.
                  </p>
                </div>
              </div>

              <div className="editorial-item">
                <span className="editorial-num">03</span>
                <div>
                  <h3>Duas Vagas Fixas ao Lado do Elevador</h3>
                  <p>
                    Vagas cobertas, livres e paralelas posicionadas estrategicamente junto ao acesso social do edifício.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-photos"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <figure
              className="about-photo-primary"
              onClick={() => onOpenPhoto && onOpenPhoto('/Sacada-1.jpg')}
              style={{ cursor: 'zoom-in' }}
              title="Clique para abrir na galeria"
            >
              <img src="/Sacada-1.jpg" alt="Vista livre para área de preservação ambiental" />
              <figcaption>Vista real da varanda para a área de preservação ambiental</figcaption>
            </figure>

            <div className="about-photo-pair">
              <figure
                onClick={() => onOpenPhoto && onOpenPhoto('/Sacada-3.jpg')}
                style={{ cursor: 'zoom-in' }}
                title="Clique para abrir na galeria"
              >
                <img src="/Sacada-3.jpg" alt="Integração da varanda com o living" />
                <figcaption>Varanda nivelada e integrada ao estar</figcaption>
              </figure>
              <figure
                onClick={() => onOpenPhoto && onOpenPhoto('/sala-5.jpg')}
                style={{ cursor: 'zoom-in' }}
                title="Clique para abrir na galeria"
              >
                <img src="/sala-5.jpg" alt="Conexão visual da sala com a varanda" />
                <figcaption>Amplitude e luz natural no último andar</figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
