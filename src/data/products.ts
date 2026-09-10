export type ProductId = 'ponto' | 'sistema-2d' | 'docflow' | 'cobraflow'
export type ProductTone = 'brand' | 'warm' | 'doc' | 'success'
export type ProductStatus = 'available' | 'development'

export type Product = {
  id: ProductId
  name: string
  category: string
  description: string
  result: string
  tags: string[]
  href: string
  url?: string
  tone: ProductTone
  status: ProductStatus
  pitch: string
}

export const products: Product[] = [
  {
    id: 'ponto',
    name: 'Ponto do Colaborador',
    category: 'RH e jornada',
    description:
      'Registro de ponto, acompanhamento da jornada e visão para colaborador e gestão — com base para espelho ponto e relatórios.',
    result: 'Jornada mais clara, menos retrabalho no RH e histórico confiável de marcações.',
    tags: ['Web + Mobile', 'Jornada', 'Espelho ponto', 'Relatórios'],
    href: '#ponto',
    url: 'https://ponto.vklabs.online',
    tone: 'brand',
    status: 'available',
    pitch: 'Marcações, jornada e relatórios para colaborador e gestão — com base para o espelho ponto.',
  },
  {
    id: 'sistema-2d',
    name: 'Sistema 2D',
    category: 'Varejo de calçados',
    description:
      'ERP para loja de calçados: estoque por numeração, vendas, condicional, clientes, dashboard gerencial e relatórios da operação.',
    result: 'Grade, vendas e condicional no mesmo fluxo — sem planilha e sem perder o número da vitrine.',
    tags: ['Estoque por grade', 'Vendas', 'Condicional', 'Dashboard'],
    href: '#sistema-2d',
    tone: 'warm',
    status: 'available',
    pitch: 'Estoque por numeração, vendas, condicional e dashboard — ERP pensado para o balcão da loja.',
  },
  {
    id: 'docflow',
    name: 'DocFlow',
    category: 'Contratos e assinatura',
    description:
      'SaaS para criar, gerir e assinar contratos no mesmo fluxo — modelos, prazos, partes e trilha de assinatura sem pasta solta.',
    result: 'Contrato sai do Word e do e-mail: criação, gestão e assinatura no mesmo lugar.',
    tags: ['Criação', 'Gestão', 'Assinatura', 'Prazos'],
    href: '#docflow',
    url: 'https://docflow.vklabs.online',
    tone: 'doc',
    status: 'available',
    pitch: 'Criar, gerir e assinar contratos no mesmo fluxo — modelos, prazos e trilha de assinatura.',
  },
  {
    id: 'cobraflow',
    name: 'CobraFlow',
    category: 'Cobrança e lembretes',
    description:
      'Lembretes de cobrança para vencimento, atraso e follow-up — para a empresa não depender de planilha e mensagem avulsa.',
    result: 'Quem deve, quando vence e o que já foi cobrado, com lembrete no momento certo.',
    tags: ['Lembretes', 'Vencimentos', 'Follow-up', 'Em desenvolvimento'],
    href: '#cobraflow',
    tone: 'success',
    status: 'development',
    pitch: 'Lembretes de cobrança para vencimento e atraso. Produto em desenvolvimento.',
  },
]
