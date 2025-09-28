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

interface ProductRow {
  code: string
  description: string
  quantity: string
  price: string
  validity: string
}

const PRODUCT_ROWS: ProductRow[] = [
  { code: "302", description: "Linguica Suina", quantity: "650g", price: "R$30,00", validity: "30 dias" },
  { code: "142", description: "Linguica de Frango", quantity: "650g", price: "R$39,90", validity: "45 dias" },
  { code: "302", description: "Linguica Suina", quantity: "650g", price: "R$30,00", validity: "30 dias" },
  { code: "142", description: "Linguica de Frango", quantity: "650g", price: "R$39,90", validity: "45 dias" },
  { code: "142", description: "Linguica de Frango", quantity: "650g", price: "R$39,90", validity: "45 dias" },
  { code: "302", description: "Linguica Suina", quantity: "650g", price: "R$30,00", validity: "30 dias" },
]

interface ProductsListProps {
  onAdd: () => void
}

export function ProductsList({ onAdd }: ProductsListProps) {
  return (
    <AdminListCard
      meta={TAB_CONFIG.produtos}
      onAdd={onAdd}
      showHeader={false}
      actionPlacement="footer"
    >
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead className="w-[90px]">Cod.</TableHead>
            <TableHead>Descricao</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Preco</TableHead>
            <TableHead>Validade</TableHead>
            <TableHead className="text-center">Acoes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PRODUCT_ROWS.map((product, index) => (
            <TableRow key={`${product.code}-${index}`} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">{product.code}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.validity}</TableCell>
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
    </AdminListCard>
  )
}
