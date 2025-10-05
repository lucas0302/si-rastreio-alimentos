"use client"

import { useEffect, useState, Fragment } from "react"
import axios from "axios"
import { Copy, Maximize2, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AdminListCard } from "./list-card"
import { TAB_CONFIG } from "./config"

interface ApiProduct {
  code: number
  description: string
  group: string
  company: string
  last_buying_date: string | null
  last_sale_date: string | null
}

interface ProductsListProps {
  onAdd: () => void
}

export function ProductsList({ onAdd }: ProductsListProps) {
  const [products, setProducts] = useState<ApiProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        setError(null)
        const token = localStorage.getItem("token")
        const res = await axios.get<ApiProduct[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/products`,
          token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
        )
        setProducts(res.data)
      } catch (e: any) {
        console.error(e)
        setError(
          e?.response?.status === 401
            ? "Não autorizado: verifique seu login."
            : "Erro ao carregar produtos."
        )
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const formatDate = (dateString: string | null) => {
    // 1. A checagem original para nulo ou vazio permanece. É uma boa prática.
    if (!dateString || dateString.trim() === "") return "-"

    const onlyDate = dateString.split("T")[0]

    // 2. Adicionamos a nova verificação para a "data zero".
    if (onlyDate === "0000-01-01") return "-"
    
    const [year, month, day] = onlyDate.split("-")
    
    if (!year || !month || !day || isNaN(Number(year)) || isNaN(Number(month)) || isNaN(Number(day))) {
      return "-"
    }
    
    return `${day}/${month}/${year}`
  }

  if (loading) {
    return (
      <AdminListCard meta={TAB_CONFIG.produtos} onAdd={onAdd} showHeader={true} actionPlacement="footer">
        <div className="p-4 text-gray-500">Carregando produtos…</div>
      </AdminListCard>
    )
  }

  if (error) {
    return (
      <AdminListCard meta={TAB_CONFIG.produtos} onAdd={onAdd} showHeader={true} actionPlacement="footer">
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    )
  }

  return (
    <AdminListCard
      meta={TAB_CONFIG.produtos}
      onAdd={onAdd}
      showHeader={true}
      actionPlacement="footer"
    >
      <div className="w-full overflow-x-auto">
        <Table className="min-w-max">
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead className="w-[90px]">Cód.</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Grupo</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>Dt. Última Compra</TableHead>
            <TableHead>Dt. Última Venda</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.code} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">{product.code}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.group}</TableCell>
              <TableCell>{product.company}</TableCell>
              <TableCell>{formatDate(product.last_buying_date)}</TableCell>
              <TableCell>{formatDate(product.last_sale_date)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </div>
    </AdminListCard>
  )
}
