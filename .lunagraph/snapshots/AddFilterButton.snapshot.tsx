import * as React from "react"
import { Button } from '../../components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '../../components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Plus, CircleDot, Signal, User, SlidersHorizontal } from 'lucide-react';

const filterColumns = [{
  label: 'Status',
  value: 'status',
  icon: CircleDot
}, {
  label: 'Priority',
  value: 'priority',
  icon: Signal
}, {
  label: 'Assignee',
  value: 'assignee',
  icon: User
}];

export default function AddFilterButtonSnapshot({
  __onRender,
}: {
  
} & { __onRender?: (element: React.ReactElement) => void }) {

  const __element = (
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
              {filterColumns.map(column => <CommandItem key={column.value}>
                  <column.icon className="size-4 text-muted-foreground" />
                  <span>{column.label}</span>
                </CommandItem>)}
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

  // Pass element tree to parent via callback once on mount
  // Only run once to avoid infinite loop (setElements triggers re-render)
  const __didRender = React.useRef(false)
  React.useLayoutEffect(() => {
    if (!__didRender.current && __onRender) {
      __didRender.current = true
      __onRender(__element)
    }
  }, [])

  // Return the actual element for rendering in canvas
  return __element
}