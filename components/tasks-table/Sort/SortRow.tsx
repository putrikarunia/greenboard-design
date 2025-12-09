import { GripVertical, LucideTrash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function SortRow({
  selectedColumn,
  selectedDirection
}: {
  selectedColumn: string,
  selectedDirection: 'asc' | 'desc'
}) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="size-8 cursor-grab">
        <GripVertical className="size-4 text-muted-foreground" />
      </Button>
      <Select defaultValue={selectedColumn}>
        <SelectTrigger style={{"width":"150px"}} className="w-fit bg-background">
          <SelectValue placeholder={selectedColumn ? undefined: "Name" }  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">
            Name
          </SelectItem>
          <SelectItem value="status">
            Status
          </SelectItem>
          <SelectItem value="priority">
            Priority
          </SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue={selectedDirection}>
        <SelectTrigger  style={{"width":"120px"}} className="w-fit bg-background">
          <SelectValue placeholder={selectedColumn ? undefined: "Asc" } />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">
            Desc
          </SelectItem>
          <SelectItem value="asc">
            Asc
          </SelectItem>
        </SelectContent>
      </Select>
      <Button variant="ghost" size="icon" className="size-8">
        <LucideTrash2 className="size-4 text-muted-foreground" />
      </Button>
    </div>
  )
}
