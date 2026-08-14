import React from 'react'

export const SocialProof: React.FC = () => {
  return (
    <section className="social-proof" aria-label="Números da VK Labs">
      <div className="container">
        <div className="proof-grid proof-grid-3">
          <article className="proof-card reveal">
            <strong>3</strong>
            <p>Sistemas VK Labs em operação: Agenda, Ponto e Sistema 2D.</p>
          </article>
          <article className="proof-card reveal reveal-delay-1">
            <strong>Grade</strong>
            <p>Estoque por numeração, cor e modelo — o jeito certo de controlar calçados.</p>
          </article>
          <article className="proof-card reveal reveal-delay-2">
            <strong>WhatsApp</strong>
            <p>Confirmações, lembretes e conversa direta com a operação no mesmo fluxo.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
