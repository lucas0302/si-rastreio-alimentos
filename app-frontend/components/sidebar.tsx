"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, User, LogOut, BarChart3, Settings } from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Relatório",
    icon: BarChart3,
    submenu: [
      {
        title: "Controle de expedição",
        href: "/relatorio-expedicao",
      },
    ],
  },
  {
    title: "Administração",
    icon: Settings,
    submenu: [
      {
        title: "Clientes",
        href: "/cadastrar-cliente",
      },
      {
        title: "Produtos",
        href: "/cadastrar-produto",
      },
      {
        title: "Usuários",
        href: "#",
      },
      {
        title: "Veículos",
        href: "/cadastrar-veiculo",
      },
    ],
  },
  {
    title: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
]

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Administração"])
  const pathname = usePathname()
  const router = useRouter()

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const handleLogout = () => {
    document.cookie = "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push("/sign-in")
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-white">
            <div className="w-6 h-6 relative">
              <Image src="/truck-logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </div>
          <span className="font-semibold text-gray-900">LOGO</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleExpanded(item.title)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 ${
                    expandedItems.includes(item.title) ? "bg-yellow-100 text-yellow-800" : "text-gray-700"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  {expandedItems.includes(item.title) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {expandedItems.includes(item.title) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className={`block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 ${
                          pathname === subItem.href ? "bg-yellow-100 text-yellow-800 font-medium" : "text-gray-600"
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 ${
                  pathname === item.href ? "bg-yellow-100 text-yellow-800" : "text-gray-700"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Luiz Fernando</span>
        </div>
        <Button
          onClick={handleLogout}
          variant="ghost"
          size="sm"
          className="w-full justify-start text-gray-600 hover:text-gray-900"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sair
        </Button>
      </div>
    </div>
  )
}
