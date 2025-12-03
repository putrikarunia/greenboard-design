import { Button } from '../../../components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu'
import { GripVertical, Ellipsis, Trash2, RotateCw } from 'lucide-react'
import { FilterRow } from './FilterRow'

export function FilterGroup({ state }: {
  state: 'default' | 'drag'
}) {
  return (
    <div className="flex gap-2 items-start">
      <Button variant="ghost" size="icon" className="size-8 cursor-grab">
        <GripVertical className="size-4 text-muted-foreground" />
      </Button>
      <div className="w-[80px] min-w-[80px]">
        <Select>
          <SelectTrigger className="w-fit bg-background">
            <SelectValue placeholder="And" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="and">And</SelectItem>
            <SelectItem value="or">Or</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={`flex flex-col gap-2 bg-secondary rounded-md p-2 items-start${state === 'drag' ? ' ring-2 ring-ring' : ''}`}>
        <FilterRow label="Where" />
        {state === 'drag' && <FilterRow label="Where" state={state === 'drag' ? 'drag' : 'default'} />}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <Ellipsis className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background">
          <DropdownMenuItem variant="destructive">
            <Trash2 className="size-4" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RotateCw className="size-4" />
            Turn into group
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
