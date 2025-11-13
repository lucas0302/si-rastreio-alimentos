"use client"

import { useEffect, useState } from "react"
import type { ElementType } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ChartColumnDecreasing,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  User,
} from "lucide-react"
import { MdOutlineAdminPanelSettings } from "react-icons/md"

import { useIsMobile } from "@/components/ui/use-mobile"
import { cn } from "@/lib/utils"
import { useNavigationStore } from "@/store/navigation-store"

type MenuItem = {
  title: string
  href?: string
  icon: ElementType
  submenu?: { title: string; href: string }[]
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: ChartColumnDecreasing,
  },
  {
    title: "Relatório",
    icon: ClipboardList,
    submenu: [
      {
        title: "Controle de expedição",
        href: "/relatorio-expedicao",
      },
    ],
  },
  {
    title: "Administração",
    icon: MdOutlineAdminPanelSettings,
    submenu: [
      {
        title: "Clientes",
        href: "/clientes",
      },
      {
        title: "Produtos",
        href: "/produtos",
      },
      {
        title: "Usuários",
        href: "/usuarios",
      },
      {
        title: "Veículos",
        href: "/veiculos",
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useIsMobile()
  const { isSidebarOpen, closeSidebar } = useNavigationStore((state) => ({
    isSidebarOpen: state.isSidebarOpen,
    closeSidebar: state.closeSidebar,
  }))

  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [activeParent, setActiveParent] = useState<string | null>(null)
  const [userName, setUserName] = useState("")

  const displayName = userName.trim().length > 0 ? userName : "Usuário"

  useEffect(() => {
    const parentsToExpand = menuItems
      .filter((item) => item.submenu?.some((submenu) => submenu.href === pathname))
      .map((item) => item.title)

    if (parentsToExpand.length) {
      setExpandedItems([parentsToExpand[0]])
      setActiveParent(parentsToExpand[0])
    } else {
      setExpandedItems([])
      setActiveParent(null)
    }
  }, [pathname])

  useEffect(() => {
    if (collapsed) {
      setExpandedItems([])
    }
  }, [collapsed])

  useEffect(() => {
    if (isMobile && collapsed) {
      setCollapsed(false)
    }
  }, [isMobile, collapsed])

  useEffect(() => {
    const loadUser = () => {
      if (typeof window === "undefined") return
      try {
        const stored = window.localStorage.getItem("user")
        if (stored) {
          const parsed = JSON.parse(stored)
          setUserName(parsed?.name ?? parsed?.username ?? "")
        } else {
          setUserName("")
        }
      } catch (error) {
        console.error(error)
        setUserName("")
      }
    }

    loadUser()
    window.addEventListener("storage", loadUser)

    return () => {
      window.removeEventListener("storage", loadUser)
    }
  }, [])

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? [] : [title]))
    setActiveParent(title)
  }

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("user")
      document.cookie = "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
    router.push("/sign-in")
    if (isMobile) closeSidebar()
  }

  const handleNavigate = () => {
    if (isMobile) closeSidebar()
  }

  const sidebarWidth = collapsed ? "w-20" : "w-64"
  const isOpen = isMobile ? isSidebarOpen : true

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex h-full flex-col transition-all duration-300 ease-in-out",
        isMobile
          ? [
              "fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] shadow-2xl lg:relative lg:w-64 lg:shadow-none",
              isOpen ? "translate-x-0" : "-translate-x-full",
              "lg:translate-x-0",
            ]
          : ["relative shrink-0", sidebarWidth]
      )}
    >
      <div className="border-b border-gray-200 p-3">
        <div
          className={cn("flex items-center", {
            "justify-center": collapsed && !isMobile,
            "justify-between": !collapsed || isMobile,
          })}
        >
          <div
            className={cn("flex items-center", {
              "space-x-0": collapsed && !isMobile,
              "space-x-2": !collapsed || isMobile,
            })}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-yellow-400 bg-white">
              <div className="relative h-5 w-5">
                <Image src="/truck-logo.png" alt="Logo Track+" fill className="object-contain" />
              </div>
            </div>
            {(!collapsed || isMobile) && (
              <span className="whitespace-nowrap text-sm font-semibold text-gray-900">TRACK+</span>
            )}
          </div>

          {!isMobile && !collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-gray-600 hover:text-gray-900"
              onClick={() => setCollapsed(true)}
            >
              <PanelLeftClose className="h-5 w-5" />
            </Button>
          )}

          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-gray-600 hover:text-gray-900"
              onClick={() => closeSidebar()}
            >
              <PanelLeftClose className="h-5 w-5" />
            </Button>
          )}
        </div>

        {!isMobile && collapsed && (
          <div className="mt-2 flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-gray-600 hover:text-gray-900"
              onClick={() => setCollapsed(false)}
            >
              <PanelLeftOpen className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleExpanded(item.title)}
                  disabled={collapsed && !isMobile}
                  className={cn(
                    "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    collapsed && !isMobile ? "justify-center" : "justify-between",
                    !collapsed && activeParent === item.title
                      ? "bg-yellow-100 text-yellow-800"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <div
                    className={cn("flex items-center", {
                      "space-x-0": collapsed && !isMobile,
                      "space-x-3": !collapsed || isMobile,
                    })}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {(!collapsed || isMobile) && <span>{item.title}</span>}
                  </div>
                  {(!collapsed || isMobile) &&
                    (expandedItems.includes(item.title) ? (
                      <ChevronDown className="h-5 w-5 shrink-0" />
                    ) : (
                      <ChevronRight className="h-5 w-5 shrink-0" />
                    ))}
                </button>
                {expandedItems.includes(item.title) && (!collapsed || isMobile) && (
                  <div className="mt-1 space-y-1 border-l border-gray-100 pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className={cn(
                          "block rounded-lg border-b-2 px-3 py-2 text-sm transition-colors",
                          pathname === subItem.href
                            ? "border-yellow-400 text-gray-900"
                            : "border-transparent text-gray-600 hover:bg-gray-50"
                        )}
                        onClick={handleNavigate}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href ?? "#"}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-yellow-100 text-yellow-800"
                    : "text-gray-700 hover:bg-gray-100",
                  collapsed && !isMobile ? "justify-center space-x-0" : "space-x-3"
                )}
                onClick={handleNavigate}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {(!collapsed || isMobile) && <span>{item.title}</span>}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="border-t border-gray-200 p-3">
        <div
          className={cn("mb-2 flex items-center", {
            "justify-center space-x-0": collapsed && !isMobile,
            "space-x-2": !collapsed || isMobile,
          })}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          {(!collapsed || isMobile) && (
            <span className="truncate text-sm font-medium text-gray-900">{displayName}</span>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "w-full text-gray-600 hover:text-gray-900",
            collapsed && !isMobile ? "justify-center" : "justify-start"
          )}
          onClick={handleLogout}
        >
          <LogOut className={cn("h-5 w-5 shrink-0", { "mr-0": collapsed && !isMobile, "mr-2": !collapsed || isMobile })} />
          {(!collapsed || isMobile) && "Sair"}
        </Button>
      </div>
    </div>
  )
}
