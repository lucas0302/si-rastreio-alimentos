import { AdministrationTabs } from "@/components/administration-tabs"

export default function CadastrarClientePage() {
  return (
    <div className="h-full w-full p-4 md:p-6">
      <AdministrationTabs defaultTab="clientes" />
    </div>
  )
}
