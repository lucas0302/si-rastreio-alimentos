"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientForm } from "@/components/client-form"
import { ProductForm } from "@/components/product-form"
import { UsuarioForm } from "@/components/usuario-form"
import { VehicleForm } from "@/components/vehicle-form"
import { TAB_CONFIG } from "./administration/config"
import type { TabKey } from "./administration/types"
import { ClientsList } from "./administration/clients-list"
import { ProductsList } from "./administration/products-list"
import { UsersList } from "./administration/users-list"
import { VehiclesList } from "./administration/vehicles-list"

interface AdministrationTabsProps {
  defaultTab?: TabKey
}

type ViewMode = "list" | "form"

const DEFAULT_VIEW_MODE: Record<TabKey, ViewMode> = {
  clientes: "list",
  produtos: "list",
  usuarios: "list",
  veiculos: "list",
}

export function AdministrationTabs({ defaultTab = "clientes" }: AdministrationTabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<TabKey>(defaultTab)
  const [viewMode, setViewMode] = useState<Record<TabKey, ViewMode>>({
    ...DEFAULT_VIEW_MODE,
    [defaultTab]: DEFAULT_VIEW_MODE[defaultTab] ?? "list",
  })

  const TAB_TO_ROUTE: Record<TabKey, string> = {
    clientes: "/clientes",
    produtos: "/produtos",
    usuarios: "/usuarios",
    veiculos: "/veiculos",
  }

  // Keep activeTab in sync with current route so the yellow bottom border
  // reflects the route even when navigation comes from outside (e.g., sidebar)
  useEffect(() => {
    if (!pathname) return
    const match = (Object.entries(TAB_TO_ROUTE) as [TabKey, string][])
      .find(([, href]) => pathname.startsWith(href))
    if (match && activeTab !== match[0]) {
      setActiveTab(match[0])
    }
  }, [pathname])

  const handleShowForm = (tab: TabKey) => {
    setViewMode((prev) => ({ ...prev, [tab]: "form" }))
    setActiveTab(tab)
  }

  const handleBackToList = (tab: TabKey) => {
    setViewMode((prev) => ({ ...prev, [tab]: "list" }))
  }

  const renderList = (tab: TabKey) => {
    const onAdd = () => handleShowForm(tab)

    switch (tab) {
      case "clientes":
        return <ClientsList onAdd={onAdd} />
      case "produtos":
        return <ProductsList onAdd={onAdd} />
      case "usuarios":
        return <UsersList onAdd={onAdd} />
      case "veiculos":
      default:
        return <VehiclesList onAdd={onAdd} />
    }
  }

  const renderForm = (tab: TabKey) => {
    const onDone = () => handleBackToList(tab)

    switch (tab) {
      case "clientes":
        return <ClientForm onCancel={onDone} onSuccess={onDone} />
      case "produtos":
        return <ProductForm onCancel={onDone} onSuccess={onDone} />
      case "usuarios":
        return <UsuarioForm onCancel={onDone} onSuccess={onDone} />
      case "veiculos":
      default:
        return <VehicleForm onCancel={onDone} onSuccess={onDone} />
    }
  }

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Administração</h1>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          const tab = value as TabKey
          setActiveTab(tab)
          const href = TAB_TO_ROUTE[tab]
          if (href) router.push(href)
        }}
        className="flex-1"
      >
        <TabsList className="flex w-full items-start gap-6 rounded-none border-b border-gray-200 bg-transparent p-0 justify-start">
          {(Object.keys(TAB_CONFIG) as TabKey[]).map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="relative flex-none rounded-none bg-transparent px-0 pb-3 text-base font-medium text-gray-900 transition-colors hover:text-gray-500 border-none data-[state=active]:text-gray-900 data-[state=active]:shadow-none focus-visible:outline-none focus-visible:ring-0 after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bottom-[-1px] after:bg-transparent data-[state=active]:after:bg-yellow-400"
            >
              {TAB_CONFIG[tab].label}
            </TabsTrigger>
          ))}
        </TabsList>
        {(Object.keys(TAB_CONFIG) as TabKey[]).map((tab) => (
          <TabsContent key={tab} value={tab} className="flex-1 pt-4">
            {viewMode[tab] === "form" ? renderForm(tab) : renderList(tab)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
