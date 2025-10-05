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
  code: number;      
  legal_name: string;
  fantasy_name: string;          
  cnpj_cpf: string;            
  state_subscrition: string;   
  email: string;
  phone: string;
  state: string;
  neighborhood: string;
  address: string;
  cep: string;                 
  corporate_network: string;   
  payment_method: string;      
}

interface ClientsListProps {
  onAdd: () => void
}

export function ClientsList({ onAdd }: ClientsListProps) {
  const [clients, setClients] = useState<ApiClient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

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
          `${process.env.NEXT_PUBLIC_API_URL}/customers`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setClients(res.data)
      } catch (e: any) {
        console.error(e)
        setError(
          e?.response?.status === 401
            ? "Não autorizado: verifique seu login."
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
            <TableHead className="w-[90px]">Cód.</TableHead>
            <TableHead>Razão social</TableHead>
            <TableHead>Nome fantasia</TableHead>
            <TableHead>CNPJ/CPF</TableHead>
            <TableHead>Inscrição estadual</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>UF</TableHead>
            <TableHead>Bairro</TableHead>
            <TableHead>Endereço</TableHead>
            <TableHead>CEP</TableHead>
            <TableHead>Rede</TableHead>
            <TableHead>Forma de pagamento</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {clients.map((client) => {
            return (
              <Fragment key={client.code}>
                <TableRow className="text-gray-700">
                  <TableCell className="font-medium text-gray-900">
                    {client.code}
                  </TableCell>
                  <TableCell>{client.legal_name}</TableCell>
                  <TableCell>{client.fantasy_name}</TableCell>
                  <TableCell>{client.cnpj_cpf}</TableCell>
                  <TableCell>{client.state_subscrition}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.state}</TableCell>
                  <TableCell>{client.neighborhood}</TableCell>
                  <TableCell>{client.address}</TableCell>
                  <TableCell>{client.cep}</TableCell>
                  <TableCell>{client.corporate_network}</TableCell>
                  <TableCell>{client.payment_method}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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