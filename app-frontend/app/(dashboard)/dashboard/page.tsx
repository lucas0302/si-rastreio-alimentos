export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h1>
      <div className="bg-white rounded-lg border p-6">
        <p className="text-gray-600">Bem-vindo ao sistema de rastreamento de produção de alimentos.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Produtos Cadastrados</h3>
            <p className="text-2xl font-bold text-yellow-600 mt-2">0</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Clientes Ativos</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">0</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Veículos</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}
