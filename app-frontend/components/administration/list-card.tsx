import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { TabConfig } from "./types"

interface AdminListCardProps {
  meta?: TabConfig
  onAdd: () => void
  children: ReactNode
  showHeader?: boolean
  actionPlacement?: "header" | "footer"
  actionLabel?: string
}

export function AdminListCard({
  meta,
  onAdd,
  children,
  showHeader = true,
  actionPlacement = "header",
  actionLabel,
}: AdminListCardProps) {
  const label = actionLabel ?? meta?.actionLabel ?? "+ Adicionar"

  return (
    <Card className="w-full border border-gray-200 shadow-sm">
      {showHeader && meta ? (
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-semibold text-gray-900">{meta.label}</CardTitle>
            <p className="text-sm text-gray-500">{meta.description}</p>
          </div>
          {actionPlacement === "header" ? (
            <Button
              onClick={onAdd}
              className="bg-yellow-400 px-5 text-sm font-semibold text-black hover:bg-yellow-500"
            >
              {label}
            </Button>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent className={cn("px-4 md:px-6 pb-6", !showHeader && "pt-6") }>
        <div className="space-y-4">
          {children}
          {actionPlacement === "footer" ? (
            <div className="flex items-center justify-end pt-2">
              <Button
                onClick={onAdd}
                className="bg-yellow-400 px-5 text-sm font-semibold text-black hover:bg-yellow-500"
              >
                {label}
              </Button>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
