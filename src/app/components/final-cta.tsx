import { useState } from 'react'
import type { FormEvent } from 'react'
import { MailIcon, WhatsAppIcon } from './icons'
import { Badge, Button, Container, GradientHeading } from './ui'

const interests = [
  'Ponto do Colaborador',
  'Sistema 2D',
  'Os dois produtos',
  'Outro assunto',
]

export const FinalCTA = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [interest, setInterest] = useState(interests[0])
  const [goal, setGoal] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = [
      'Contato pelo site da VK Labs:',
      `Nome: ${name}`,
      `Contato: ${contact}`,
      `Interesse: ${interest}`,
      `Mensagem: ${goal}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/5565992823707?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full rounded-lg border border-white/10 bg-surface px-3.5 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-mute-dark hover:border-white/16 focus:border-brand/50'

  return (
    <section id="contact" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="Contato">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>Contato</Badge>
            <GradientHeading>Vamos conversar sobre a sua operação</GradientHeading>
            <p className="mt-4 max-w-xl leading-7 text-mute">
              Conte o contexto da equipe ou da loja. Indicamos o produto certo, o prazo de implantação e o
              que precisa estar pronto no go-live.
            </p>

            <ul className="mt-8 grid list-none gap-4 p-0">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft no-underline transition hover:text-brand"
                  href="https://wa.me/5565992823707"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  +55 65 99282-3707
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft no-underline transition hover:text-brand"
                  href="mailto:contato@vklabs.tech"
                >
                  <MailIcon />
                  contato@vklabs.tech
                </a>
              </li>
            </ul>
          </div>

          <form className="reveal grid gap-4 rounded-2xl border border-white/8 bg-surface-soft p-5 sm:p-6" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-medium text-ink-soft">
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

            <label className="grid gap-2 text-sm font-medium text-ink-soft">
              WhatsApp ou e-mail
              <input
                type="text"
                name="contact"
                autoComplete="email"
                required
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder="(65) 99999-9999 ou voce@empresa.com"
                className={fieldClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink-soft">
              Interesse
              <select
                name="interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className={`${fieldClass} scheme-dark`}
              >
                {interests.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink-soft">
              Como podemos ajudar?
              <textarea
                name="goal"
                rows={4}
                required
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                placeholder="Tamanho da equipe, loja, prazo ou o que precisa resolver."
                className={`${fieldClass} min-h-[112px] resize-y`}
              />
            </label>

            <Button className="w-full" size="lg" type="submit">
              Enviar no WhatsApp
            </Button>
            <p className="m-0 text-center text-xs text-mute-dark">
              Abrimos o WhatsApp com a mensagem pronta. Sem cadastro no site.
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA
