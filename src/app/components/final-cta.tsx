import { useState } from 'react'
import type { FormEvent } from 'react'
import { MailIcon, WhatsAppIcon } from './icons'
import { Badge, Button, Container, GradientHeading } from './ui'

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

  const fieldClass =
    'w-full rounded-xl border border-white/8 bg-white/[0.025] px-3.5 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-[#526b82] hover:border-white/13 focus:border-brand/45 focus:bg-brand/[0.025] focus:shadow-[0_0_0_3px_rgba(94,216,255,0.07)]'

  return (
    <section id="contact" className="pt-16 pb-24 sm:pt-24 sm:pb-28" aria-label="Contato">
      <Container>
        <div className="grid items-center gap-12 rounded-[2rem] border border-brand/13 bg-[radial-gradient(circle_at_15%_20%,rgba(94,216,255,0.09),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(255,202,114,0.05),transparent_30%),rgba(255,255,255,0.025)] p-5 shadow-panel sm:p-12 max-sm:rounded-2xl lg:grid-cols-2">
          <div>
            <Badge>Próximo passo</Badge>
            <GradientHeading>Agende uma conversa sobre Ponto ou Sistema 2D</GradientHeading>
            <p className="mt-4 max-w-xl leading-7 text-mute">
              Fale com a VK Labs sobre implantação do Ponto do Colaborador ou do Sistema 2D para loja de
              calçados — e o que faz sentido para a sua operação.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                variant="ghost"
                href="https://wa.me/5565992823707"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp direto
              </Button>
              <Button variant="ghost" href="mailto:contato@vklabs.tech">
                <MailIcon />
                contato@vklabs.tech
              </Button>
            </div>
          </div>

          <form
            className="reveal reveal-delay-2 grid gap-4 rounded-2xl border border-white/8 bg-[#030a14]/48 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            onSubmit={handleSubmit}
          >
            <label className="grid gap-2 text-sm font-semibold text-[#c8d8e6]">
              Nome
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                className={fieldClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#c8d8e6]">
              WhatsApp ou e-mail
              <input
                type="text"
                name="contact"
                autoComplete="email"
                required
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder="(99) 99999-9999 ou voce@empresa.com"
                className={fieldClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#c8d8e6]">
              Objetivo
              <textarea
                name="goal"
                rows={3}
                required
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                placeholder="Ponto do Colaborador, Sistema 2D ou os dois"
                className={`${fieldClass} min-h-[120px] resize-y`}
              />
            </label>

            <Button className="w-full" size="lg" type="submit">
              Enviar no WhatsApp →
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA
