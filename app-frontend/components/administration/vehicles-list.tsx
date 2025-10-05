"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Eye, Pencil, Trash2 } from "lucide-react"
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

interface ApiVehicle {
  id: number
  model: string
  plate: string
  phone: string
  maximumLoad: number | null
  description: string | null
}

interface VehiclesListProps {
  onAdd: () => void
}

export function VehiclesList({ onAdd }: VehiclesListProps) {
  const [vehicles, setVehicles] = useState<ApiVehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setError(null)
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
        const res = await axios.get<ApiVehicle[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/vehicles`,
          token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
        )
        setVehicles([...res.data].sort((a, b) => b.id - a.id))
      } catch (e: any) {
        console.error(e)
        setError(
          e?.response?.status === 401
            ? "Não autorizado: verifique seu login/token."
            : "Erro ao carregar veículos."
        )
      } finally {
        setLoading(false)
      }
    }
    fetchVehicles()
  }, [])

  if (loading) {
    return (
      <AdminListCard meta={TAB_CONFIG.veiculos} onAdd={onAdd}>
        <div className="p-4 text-gray-500">Carregando veículos…</div>
      </AdminListCard>
    )
  }

  if (error) {
    return (
      <AdminListCard meta={TAB_CONFIG.veiculos} onAdd={onAdd}>
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    )
  }

  return (
    <AdminListCard meta={TAB_CONFIG.veiculos} onAdd={onAdd}>
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead className="w-[90px]">Cód.</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Placa</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Carga Máx.</TableHead>
            <TableHead>Observações</TableHead>
            <TableHead className="text-end">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">{vehicle.id}</TableCell>
              <TableCell className="font-medium ">{vehicle.model}</TableCell>
              <TableCell>{vehicle.plate}</TableCell>
              <TableCell>{vehicle.phone}</TableCell>
              <TableCell>{vehicle.maximumLoad ?? "—"}</TableCell>
              <TableCell>{vehicle.description ?? "—"}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Eye className="h-4 w-4" />
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
    </AdminListCard>
  )
}