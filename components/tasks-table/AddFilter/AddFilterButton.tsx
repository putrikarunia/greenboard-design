import { Button } from '../../../components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../../../components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover'
import { Plus, CircleDot, Signal, User, SlidersHorizontal } from 'lucide-react'

const filterColumns = [
  { label: 'Status', value: 'status', icon: CircleDot },
  { label: 'Priority', value: 'priority', icon: Signal },
  { label: 'Assignee', value: 'assignee', icon: User },
]

export function AddFilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <Plus className="size-4" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandGroup>
              {filterColumns.map((column) => (
                <CommandItem key={column.value}>
                  <column.icon className="size-4 text-muted-foreground" />
                  <span>{column.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>
                <SlidersHorizontal className="size-4 text-muted-foreground" />
                <span>Add advanced filter</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
