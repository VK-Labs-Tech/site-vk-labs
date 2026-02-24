import React from 'react'

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="cta">
      <div className="container cta-inner">
        <div>
          <h2>Pronto para transformar sua ideia em produto?</h2>
          <p>Agende uma conversa com nosso time e descubra como podemos ajudar.</p>
        </div>
        <div>
          <a className="btn primary large" href="mailto:contato@vklabs.tech">Entrar em contato</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
