export type Product = {
  id: string
  name: string
  category: string
  description: string
  result: string
  icon: string
  tags: string[]
  href: string
}

export const products: Product[] = [
  {
    id: 'agenda',
    name: 'VK Labs Agenda',
    category: 'Agenda e atendimento',
    description:
      'Plataforma de agendamento com agenda inteligente, confirmações automáticas, gestão de equipe e painel operacional.',
    result: 'Maior taxa de comparecimento e agenda organizada no dia a dia.',
    icon: '📅',
    tags: ['Automação', 'WhatsApp', 'Gestão de equipe', 'Painel'],
    href: '#projects',
  },
  {
    id: 'ponto',
    name: 'Ponto do Colaborador',
    category: 'RH e jornada de trabalho',
    description:
      'Sistema para registro de ponto e acompanhamento da jornada, com visão para colaborador e gestão.',
    result: 'Controle de jornada mais claro e base para espelho ponto e conformidade.',
    icon: '⏱️',
    tags: ['Web + Mobile', 'Jornada', 'Relatórios', 'RH'],
    href: '#projects',
  },
  {
    id: 'sistema-2d',
    name: 'Sistema 2D',
    category: 'Varejo de calçados',
    description:
      'ERP para loja de calçados: estoque por numeração, vendas, condicional, clientes, dashboard gerencial e relatórios da operação.',
    result: 'Grade, vendas e condicional no mesmo fluxo — sem planilha e sem perder o número que estava na vitrine.',
    icon: '👟',
    tags: ['Estoque por grade', 'Vendas', 'Condicional', 'Dashboard'],
    href: '#sistema-2d',
  },
]
