import { Fragment } from "react"
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

interface ClientRowDetail {
  addressLine: string
  zip: string
  city: string
  state: string
  stateRegistration: string
  paymentMethod: string
  paymentTerm: string
}

interface ClientRow {
  code: string
  name: string
  legalName: string
  taxId: string
  phone: string
  email: string
  details: ClientRowDetail | null
}

const CLIENT_ROWS: ClientRow[] = [
  {
    code: "302",
    name: "Mercado Lima",
    legalName: "Mercado Ltda",
    taxId: "00.000.000/0000-00",
    phone: "62 00000-0000",
    email: "mercado@gmail.com",
    details: {
      addressLine: "Rua 1, lote 3",
      zip: "CEP 00000-000",
      city: "Goias",
      state: "GO",
      stateRegistration: "000000000",
      paymentMethod: "Boleto",
      paymentTerm: "15 dias",
    },
  },
  {
    code: "142",
    name: "Mercado Lima",
    legalName: "Mercado Ltda",
    taxId: "00.000.000/0000-00",
    phone: "62 00000-0000",
    email: "mercado@gmail.com",
    details: null,
  },
  {
    code: "307",
    name: "Mercado Lima",
    legalName: "Mercado Ltda",
    taxId: "00.000.000/0000-00",
    phone: "62 00000-0000",
    email: "mercado@gmail.com",
    details: null,
  },
  {
    code: "008",
    name: "Mercado Lima",
    legalName: "Mercado Ltda",
    taxId: "00.000.000/0000-00",
    phone: "62 00000-0000",
    email: "mercado@gmail.com",
    details: null,
  },
  {
    code: "113",
    name: "Mercado Lima",
    legalName: "Mercado Ltda",
    taxId: "00.000.000/0000-00",
    phone: "62 00000-0000",
    email: "mercado@gmail.com",
    details: null,
  },
]

interface ClientsListProps {
  onAdd: () => void
}

export function ClientsList({ onAdd }: ClientsListProps) {
  return (
    <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead className="w-[90px]">Cod.</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Razao social</TableHead>
            <TableHead>CNPJ/CPF</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Acoes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CLIENT_ROWS.map((client) => (
            <Fragment key={client.code}>
              <TableRow className="text-gray-700">
                <TableCell className="font-medium text-gray-900">{client.code}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.legalName}</TableCell>
                <TableCell>{client.taxId}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.email}</TableCell>
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
              {client.details ? (
                <TableRow className="bg-gray-50 text-sm text-gray-600">
                  <TableCell />
                  <TableCell colSpan={6}>
                    <div className="flex flex-wrap gap-8 py-3">
                      <div>
                        <p className="text-xs uppercase text-gray-400">Endereco</p>
                        <p className="font-medium text-gray-800">{client.details.addressLine}</p>
                        <p>{client.details.zip}</p>
                        <p>
                          {client.details.city} - {client.details.state}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gray-400">Insc. estadual</p>
                        <p className="font-medium text-gray-800">{client.details.stateRegistration}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-gray-400">Pagamento</p>
                        <p className="font-medium text-gray-800">{client.details.paymentMethod}</p>
                        <p>{client.details.paymentTerm}</p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : null}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </AdminListCard>
  )
}
