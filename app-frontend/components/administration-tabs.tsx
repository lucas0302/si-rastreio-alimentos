"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientForm } from "@/components/client-form";
import { ProductForm } from "@/components/product-form";
import { UsuarioForm } from "@/components/usuario-form";
import { VehicleForm } from "@/components/vehicle-form";
import { TAB_CONFIG } from "./administration/config";
import type { TabKey } from "./administration/types";
import { ClientsList } from "./administration/clients-list";
import { ProductsList } from "./administration/products-list";
import { UsersList } from "./administration/users-list";
import { VehiclesList } from "./administration/vehicles-list";
import { useNavigationStore } from "@/store/navigation-store";

interface AdministrationTabsProps {
  defaultTab?: TabKey;
}

export function AdministrationTabs({
  defaultTab = "clientes",
}: AdministrationTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    adminActiveTab,
    adminViewMode,
    setAdminActiveTab,
    showAdminForm,
    showAdminList,
  } = useNavigationStore((state) => ({
    adminActiveTab: state.adminActiveTab,
    adminViewMode: state.adminViewMode,
    setAdminActiveTab: state.setAdminActiveTab,
    showAdminForm: state.showAdminForm,
    showAdminList: state.showAdminList,
  }));

  const TAB_TO_ROUTE: Record<TabKey, string> = {
    clientes: "/clientes",
    produtos: "/produtos",
    usuarios: "/usuarios",
    veiculos: "/veiculos",
  };

  useEffect(() => {
    setAdminActiveTab(defaultTab);
  }, [defaultTab, setAdminActiveTab]);

  // Keep activeTab in sync with current route so the yellow bottom border
  // reflects the route even when navigation comes from outside (e.g., sidebar)
  useEffect(() => {
    if (!pathname) return;
    const match = (Object.entries(TAB_TO_ROUTE) as [TabKey, string][]).find(
      ([, href]) => pathname.startsWith(href)
    );
    if (match && adminActiveTab !== match[0]) {
      setAdminActiveTab(match[0]);
    }
  }, [pathname, adminActiveTab, setAdminActiveTab]);

  const handleShowForm = (tab: TabKey) => {
    showAdminForm(tab);
  };

  const handleBackToList = (tab: TabKey) => {
    showAdminList(tab);
  };

  const renderList = (tab: TabKey) => {
    const onAdd = () => handleShowForm(tab);

    switch (tab) {
      case "clientes":
        return <ClientsList onAdd={onAdd} />;
      case "produtos":
        return <ProductsList onAdd={onAdd} />;
      case "usuarios":
        return <UsersList onAdd={onAdd} />;
      case "veiculos":
      default:
        return <VehiclesList onAdd={onAdd} />;
    }
  };

  const renderForm = (tab: TabKey) => {
    const onDone = () => handleBackToList(tab);

    switch (tab) {
      case "clientes":
        return <ClientForm onCancel={onDone} onSuccess={onDone} />;
      case "produtos":
        return <ProductForm onCancel={onDone} onSuccess={onDone} />;
      case "usuarios":
        return <UsuarioForm onCancel={onDone} onSuccess={onDone} />;
      case "veiculos":
      default:
        return <VehicleForm onCancel={onDone} onSuccess={onDone} />;
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <Tabs
        value={adminActiveTab}
        onValueChange={(value) => {
          const tab = value as TabKey;
          setAdminActiveTab(tab);
          const href = TAB_TO_ROUTE[tab];
          if (href) router.push(href);
        }}
        className="flex-1"
      >
        {(Object.keys(TAB_CONFIG) as TabKey[]).map((tab) => (
          <TabsContent key={tab} value={tab} className="flex-1 pt-4">
            {adminViewMode[tab] === "form" ? renderForm(tab) : renderList(tab)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
