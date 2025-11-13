"use client"

import type React from "react"
import { Menu } from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { useNavigationStore } from "@/store/navigation-store"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isSidebarOpen, openSidebar, closeSidebar } = useNavigationStore(
    (state) => ({
      isSidebarOpen: state.isSidebarOpen,
      openSidebar: state.openSidebar,
      closeSidebar: state.closeSidebar,
    })
  )

  return (
    <div className="relative flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={openSidebar}
            className="text-gray-700"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu lateral</span>
          </Button>
          <span className="text-sm font-semibold text-gray-800">Track+</span>
          <div className="h-5 w-5" />
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-6">
          {children}
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </div>
  )
}
