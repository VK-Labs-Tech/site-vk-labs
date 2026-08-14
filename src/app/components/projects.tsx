import React from 'react'
import { products } from '../../data/products'

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects" aria-label="Projetos">
      <div className="container">
        <div className="projects-head">
          <span className="section-overline">Projetos em destaque</span>

          <h2 className="gradient-heading">Tecnologia aplicada a problemas reais</h2>

          <p className="section-description">
            Três produtos em operação: VK Labs Agenda, Ponto do Colaborador e o Sistema 2D para loja de calçados.
          </p>
        </div>

        <div className="projects-grid">
          {[...products]
            .sort((a, b) => Number(b.id === 'sistema-2d') - Number(a.id === 'sistema-2d'))
            .map((item) => {
              const featured = item.id === 'sistema-2d'

              return (
                <article
                  key={item.id}
                  className={`project-card${featured ? ' featured' : ''}`}
                >
                  <div>
                    <div className="project-icon">{item.icon}</div>

                    <div className="project-labels">
                      <span className="project-category">{item.category}</span>
                      {featured && <span className="project-new">Novo</span>}
                    </div>

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <div className="project-result">
                      <span>Resultado</span>
                      <strong>{item.result}</strong>
                    </div>

                    <ul className="project-tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    {featured && (
                      <a className="project-link" href="#sistema-2d">
                        Ver o Sistema 2D →
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
