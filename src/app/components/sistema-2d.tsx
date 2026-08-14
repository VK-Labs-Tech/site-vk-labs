import React from 'react'

const sizes = [
  { n: '34', q: 2 },
  { n: '35', q: 5 },
  { n: '36', q: 8 },
  { n: '37', q: 12, hot: true },
  { n: '38', q: 9 },
  { n: '39', q: 4 },
  { n: '40', q: 1, low: true },
]

const features = [
  {
    title: 'Estoque por numeração',
    text: 'Cadastro de produtos com modelo, cor e grade. Saldo da vitrine e do depósito no mesmo lugar.',
  },
  {
    title: 'Vendas no balcão',
    text: 'Baixa automática do par certo. Menos erro de número e menos tempo procurando no estoque.',
  },
  {
    title: 'Condicional controlada',
    text: 'Pares que saíram, prazo e devolução — sem caderno e sem perder o rastro do que está na rua.',
  },
  {
    title: 'Clientes da loja',
    text: 'Histórico de compras e numeração do cliente para atender rápido na próxima visita.',
  },
  {
    title: 'Dashboard gerencial',
    text: 'Vendas do dia, giro por modelo e visão do que falta repor antes de perder a venda.',
  },
  {
    title: 'Relatórios operacionais',
    text: 'Estoque, vendas, condicional e desempenho para compra de coleção com base no que realmente gira.',
  },
]

export const Sistema2D: React.FC = () => {
  return (
    <section id="sistema-2d" className="sistema-2d" aria-label="Sistema 2D para loja de calçados">
      <div className="container">
        <div className="sistema-2d-head">
          <span className="section-overline">Novo produto</span>
          <h2 className="gradient-heading">Sistema 2D para loja de calçados</h2>
          <p className="section-description">
            ERP pensado para o varejo de calçados: grade de numeração, vendas, condicional, clientes e gestão —
            do balcão ao relatório, sem planilha no meio.
          </p>
        </div>

        <div className="sistema-2d-layout">
          <div className="size-grid-panel reveal">
            <div className="size-grid-top">
              <div>
                <p className="size-grid-kicker">Estoque em grade</p>
                <h3>Tênis Runner Pro · Preto</h3>
              </div>
              <span className="size-grid-badge">41 pares</span>
            </div>

            <div className="size-grid" role="img" aria-label="Grade de numeração de 34 a 40">
              {sizes.map((item) => (
                <div
                  key={item.n}
                  className={`size-cell${item.hot ? ' is-hot' : ''}${item.low ? ' is-low' : ''}`}
                >
                  <span>{item.n}</span>
                  <strong>{item.q}</strong>
                </div>
              ))}
            </div>

            <div className="size-grid-meta">
              <article>
                <span>Condicional</span>
                <strong>3 pares</strong>
              </article>
              <article>
                <span>Vitrine</span>
                <strong>18 pares</strong>
              </article>
              <article>
                <span>Depósito</span>
                <strong>23 pares</strong>
              </article>
            </div>
          </div>

          <div className="sistema-2d-features">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`sistema-2d-feature reveal reveal-delay-${(index % 3) + 1}`}
              >
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="sistema-2d-cta reveal">
          <p>Quer ver o Sistema 2D na operação da sua loja?</p>
          <a className="btn primary" href="#contact">
            Agendar demonstração
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sistema2D
