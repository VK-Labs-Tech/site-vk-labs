import React from "react"

type Project = {
    name: string
    category: string
    description: string
    result: string
    icon: string
    tags: string[]
}

export const Projects: React.FC = () => {
    const items: Project[] = [
        {
            name: "VK Labs Agenda",
            category: "Agenda e atendimento",
            description:
                "Plataforma de agendamento com agenda inteligente, confirmações automáticas, gestão de equipe e painel operacional.",
            result:
                "Maior taxa de comparecimento e agenda organizada no dia a dia.",
            icon: "📅",
            tags: ["Automação", "WhatsApp", "Gestão de equipe", "Painel"],
        },
        {
            name: "Ponto do Colaborador",
            category: "RH e jornada de trabalho",
            description:
                "Sistema para registro de ponto e acompanhamento da jornada, com visão para colaborador e gestão.",
            result:
                "Controle de jornada mais claro e base para espelho ponto e conformidade.",
            icon: "⏱️",
            tags: ["Web + Mobile", "Jornada", "Relatórios", "RH"],
        },
    ]

    return (
        <section id="projects" className="projects" aria-label="Projetos">
            <div className="container">

                <div className="projects-head">
                    <span className="section-badge">Projetos em destaque</span>

                    <h2 className="gradient-heading">
                        Tecnologia aplicada a problemas reais
                    </h2>

                    <p className="section-description">
                        Nossos produtos atuais concentram-se na VK Labs Agenda e no Ponto do Colaborador,
                        para agendar com previsibilidade e registrar jornada com clareza.
                    </p>
                </div>

                <div className="projects-grid">
                    {items.map((item) => (
                        <article className="project-card">

                            <div className="project-icon">
                                {item.icon}
                            </div>

                            <span className="project-category">
    {item.category}
  </span>

                            <h3>{item.name}</h3>

                            <p>{item.description}</p>

                            <div className="project-result">
                                <span>Resultado</span>
                                <strong>{item.result}</strong>
                            </div>

                            <ul className="project-tags">
                                {item.tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects