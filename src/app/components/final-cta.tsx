import { useState } from 'react'
import type { FormEvent } from 'react'

export const FinalCTA = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [goal, setGoal] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = [
      'Novo lead da landing VKLabs:',
      `Nome: ${name}`,
      `Contato: ${contact}`,
      `Objetivo: ${goal}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/5565992823707?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="final-cta" aria-label="Contato">
      <div className="container">
        <div className="final-cta-inner">
          <div>
            <p className="section-overline reveal">Próximo passo</p>
            <h2 className="gradient-heading reveal reveal-delay-1">Agende uma conversa estrategica de 15 minutos</h2>
            <p className="reveal reveal-delay-2">
              Fale com a VK Labs sobre a Agenda e o Ponto do Colaborador: implantação, integrações e o que faz sentido para sua equipe.
            </p>

            <div className="final-cta-actions reveal reveal-delay-3">
              <a
                className="btn ghost"
                href="https://wa.me/5565992823707"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp direto
              </a>
              <a className="btn ghost" href="mailto:contato@vklabs.tech">
                ✉️ contato@vklabs.tech
              </a>
            </div>
          </div>

          <form className="lead-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
              />
            </label>

            <label>
              WhatsApp ou e-mail
              <input
                type="text"
                name="contact"
                autoComplete="email"
                required
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder="(99) 99999-9999 ou voce@empresa.com"
              />
            </label>

            <label>
              Objetivo
              <textarea
                name="goal"
                rows={3}
                required
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                placeholder="Conte em 1 frase o que você precisa"
              />
            </label>

            <button className="btn primary large" type="submit">
              Enviar no WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
