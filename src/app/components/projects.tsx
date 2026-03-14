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
            name: "Diário de Bordo do Caminhoneiro",
            category: "Logística e operação de frotas",
            description:
                "Sistema para registrar viagens, jornada, abastecimentos e manutenções em um único fluxo para motorista e gestor.",
            result:
                "Redução de retrabalho no fechamento mensal e visibilidade da operação em tempo real.",
            icon: "🚚",
            tags: ["Web + Mobile", "Relatórios", "Alertas inteligentes"],
        },
        {
            name: "SaaS de Agendamento",
            category: "Saúde e serviços locais",
            description:
                "Plataforma com agenda inteligente, confirmações automáticas e painel de performance.",
            result:
                "Maior taxa de comparecimento e agenda mais organizada.",
            icon: "📅",
            tags: ["Automação", "WhatsApp", "Gestão de equipe"],
        },
        {
            name: "Gestão Inteligente de Lotes de Sementes",
            category: "Saúde e serviços locais",
            description:
                "Sistema para rastrear variedades de sementes utilizadas" +
                "em cada talhão da fazenda, registrando plantio, safra" +
                "e produtividade por área.",
            result:
                "Decisões mais precisas na escolha de sementes e aumento de produtividade.",
            icon: "📅",
            tags: ["Agro", "Rastreabilidade", "Gestão de equipe", "Produtividade", "Dashboard"],
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
                        Desenvolvemos soluções digitais focadas em eficiência operacional,
                        integração de sistemas e crescimento sustentável das empresas.
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