export default function ConfiguracoesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Configurações</h1>
      <div className="bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações do Sistema</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Empresa</h4>
                <p className="text-sm text-gray-600">Configurações da empresa e dados fiscais</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Usuários</h4>
                <p className="text-sm text-gray-600">Gerenciar usuários e permissões</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Backup</h4>
                <p className="text-sm text-gray-600">Configurações de backup automático</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Relatórios</h4>
                <p className="text-sm text-gray-600">Configurações de relatórios e exportação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
