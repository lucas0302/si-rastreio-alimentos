"use client"

import { useEffect, useState, Fragment, useCallback } from "react"
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

interface ApiClient {
  id: number
  name: string
  email: string
  cnpj: string
  address: string
  phone: string
  identificationCode: string
  paymentMethod: string
  paymentTern: string
  city: string
  State: string
  legalName?: string
  stateRegistration: string
}

interface ClientsListProps {
  onAdd: () => void
}

export function ClientsList({ onAdd }: ClientsListProps) {
  const [clients, setClients] = useState<ApiClient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<Set<number>>(new Set()) // 👈 ids expandidos

  const toggleRow = useCallback((id: number) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const isExpanded = useCallback((id: number) => expanded.has(id), [expanded])

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setError(null)
        const token = localStorage.getItem("token")
        const res = await axios.get<ApiClient[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/clientes`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setClients(res.data)
      } catch (e: any) {
        console.error(e)
        setError(
          e?.response?.status === 401
            ? "Não autorizado: verifique seu login/token."
            : "Erro ao carregar clientes."
        )
      } finally {
        setLoading(false)
      }
    }
    fetchClients()
  }, [])

  if (loading) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
        <div className="p-4 text-gray-500">Carregando clientes…</div>
      </AdminListCard>
    )
  }

  if (error) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    )
  }

  return (
    <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead className="w-[90px]">Cod.</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Razão social</TableHead>
            <TableHead>CNPJ</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {clients.map((client) => {
            const open = isExpanded(client.id)
            return (
              <Fragment key={client.id}>
                <TableRow className="text-gray-700">
                  <TableCell className="font-medium text-gray-900">
                    {client.identificationCode}
                  </TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.legalName ?? "—"}</TableCell>
                  <TableCell>{client.cnpj}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        onClick={() => toggleRow(client.id)}
                        aria-expanded={open}
                        aria-controls={`details-${client.id}`}
                        variant="ghost"
                        size="icon"
                        className={`h-8 w-8 rounded-full text-gray-500 hover:text-gray-900 transition-transform ${open ? "rotate-0 scale-110" : ""}`}
                        title={open ? "Ocultar detalhes" : "Mostrar detalhes"}
                      >
                        <Eye className={`h-4 w-4 transition-opacity ${open ? "opacity-100" : "opacity-80"}`} />
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

                {/* Detalhes expandíveis */}
                <TableRow
                  id={`details-${client.id}`}
                  className={`text-sm text-gray-600 bg-gray-50`}
                >
                  <TableCell className="p-0 border-none" />
                  <TableCell colSpan={6} className="p-0 border-none">
                    {/* container com animação de abrir/fechar */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-300 ease-out
                        ${open ? "max-h-[200px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
                      `}
                    >
                      <div className="flex flex-wrap gap-8 px-4">
                        <div>
                          <p className="text-xs uppercase text-gray-900">Endereço</p>
                          <p className="font-medium text-gray-500">{client.address}</p>
                          <p>{client.city} - {client.State}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-gray-900">Insc. estadual</p>
                          <p className="font-medium text-gray-500">{client.stateRegistration}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-gray-900">Pagamento</p>
                          <p className="font-medium text-gray-500">{client.paymentMethod}</p>
                          <p className="font-medium text-gray-500">{client.paymentTern}</p>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              </Fragment>
            )
          })}
        </TableBody>
      </Table>
    </AdminListCard>
  )
}
