import { Eye, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

interface VehicleRow {
  name: string
  plate: string
  category: string
  status: "Disponivel" | "Em rota" | "Em manutencao"
}

const VEHICLE_ROWS: VehicleRow[] = [
  {
    name: "Caminhao 01",
    plate: "ABC-1A23",
    category: "Truck 3/4",
    status: "Em rota",
  },
  {
    name: "Caminhao 12",
    plate: "XYZ-9Z87",
    category: "Carreta",
    status: "Disponivel",
  },
  {
    name: "Van 07",
    plate: "JHK-3J21",
    category: "Van refrigerada",
    status: "Em manutencao",
  },
]

interface VehiclesListProps {
  onAdd: () => void
}

const STATUS_CLASS_MAP: Record<VehicleRow["status"], string> = {
  Disponivel: "bg-green-100 text-green-700 hover:bg-green-100",
  "Em rota": "bg-blue-100 text-blue-700 hover:bg-blue-100",
  "Em manutencao": "bg-orange-100 text-orange-700 hover:bg-orange-100",
}

export function VehiclesList({ onAdd }: VehiclesListProps) {
  return (
    <AdminListCard meta={TAB_CONFIG.veiculos} onAdd={onAdd}>
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead>Nome</TableHead>
            <TableHead>Placa</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Acoes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {VEHICLE_ROWS.map((vehicle) => (
            <TableRow key={vehicle.plate} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">{vehicle.name}</TableCell>
              <TableCell>{vehicle.plate}</TableCell>
              <TableCell>{vehicle.category}</TableCell>
              <TableCell className="text-center">
                <Badge className={STATUS_CLASS_MAP[vehicle.status]}>{vehicle.status}</Badge>
              </TableCell>
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
