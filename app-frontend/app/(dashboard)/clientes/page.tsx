import { AdministrationTabs } from "@/components/administration-tabs"

export default function CadastrarClientePage() {
  return (
    <div className="h-full w-full p-8">
      <AdministrationTabs defaultTab="clientes" />
    </div>
  )
}
