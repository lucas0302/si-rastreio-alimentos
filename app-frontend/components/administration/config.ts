import type { TabConfig, TabKey } from "./types"

export const TAB_CONFIG: Record<TabKey, TabConfig> = {
  clientes: {
    label: "Clientes",
    actionLabel: "+ Cadastrar Cliente",
    description: "Visualize clientes cadastrados e acesse o formulario para novos cadastros.",
  },
  produtos: {
    label: "Produtos",
    actionLabel: "+ Cadastrar Produto",
    description: "Mantenha o catalogo de produtos atualizado.",
  },
  usuarios: {
    label: "Usuarios",
    actionLabel: "+ Cadastrar Usuario",
    description: "Gerencie o acesso dos usuarios ao sistema.",
  },
  veiculos: {
    label: "Veiculos",
    actionLabel: "+ Cadastrar Veiculo",
    description: "Controle a frota utilizada nas entregas.",
  },
}
