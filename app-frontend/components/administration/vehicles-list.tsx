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
  id: number
  name: string
  plate: string
  category: string
}

const VEHICLE_ROWS: VehicleRow[] = [
  {
    id: 1,
    name: "Caminhao 01",
    plate: "ABC-1A23",
    category: "Truck 3/4",
  },
  {
    id: 2,
    name: "Caminhao 12",
    plate: "XYZ-9Z87",
    category: "Carreta",
  },
  {
    id: 3,
    name: "Van 07",
    plate: "JHK-3J21",
    category: "Van refrigerada",
  },
]

interface VehiclesListProps {
  onAdd: () => void
}

export function VehiclesList({ onAdd }: VehiclesListProps) {
  return (
    <AdminListCard meta={TAB_CONFIG.veiculos} onAdd={onAdd}>
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Placa</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead className="text-end">Acoes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {VEHICLE_ROWS.map((vehicle) => (
            <TableRow key={vehicle.plate} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">{vehicle.id}</TableCell>
              <TableCell className="font-medium ">{vehicle.name}</TableCell>
              <TableCell>{vehicle.plate}</TableCell>
              <TableCell>{vehicle.category}</TableCell>
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
