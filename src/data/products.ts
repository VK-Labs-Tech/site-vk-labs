export type Product = {
  id: 'ponto' | 'sistema-2d'
  name: string
  category: string
  description: string
  result: string
  tags: string[]
  href: string
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
  },
]
