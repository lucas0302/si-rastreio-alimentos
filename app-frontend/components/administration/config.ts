import type { TabConfig, TabKey } from "./types"

export const TAB_CONFIG: Record<TabKey, TabConfig> = {
  clientes: {
    label: "Clientes",
    actionLabel: "+ Cadastrar Cliente",
    description: "Visualize clientes cadastrados e acesse o formulário para novos cadastros.",
  },
  produtos: {
    label: "Produtos",
    actionLabel: "+ Cadastrar Produto",
    description: "Mantenha o catálogo de produtos atualizado.",
  },
  usuarios: {
    label: "Usuários",
    actionLabel: "+ Cadastrar Usuario",
    description: "Gerencie o acesso dos usuários ao sistema.",
  },
  veiculos: {
    label: "Veículos",
    actionLabel: "+ Cadastrar Veículo",
    description: "Controle a frota utilizada nas entregas.",
  },
}