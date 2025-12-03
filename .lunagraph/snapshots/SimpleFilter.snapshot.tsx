import * as React from "react"
import { Check, CirclePlus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../../components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Separator } from '../../components/ui/separator';

const defaultOptions = [{
  label: 'Backlog',
  value: 'backlog',
  count: 12,
  selected: false
}, {
  label: 'Todo',
  value: 'todo',
  count: 8,
  selected: true
}, {
  label: 'In Progress',
  value: 'in-progress',
  count: 5,
  selected: true
}, {
  label: 'Done',
  value: 'done',
  count: 24,
  selected: false
}, {
  label: 'Cancelled',
  value: 'cancelled',
  count: 3,
  selected: false
}];
const other = [{
  label: 'Backlog',
  value: 'backlog',
  count: 12,
  selected: false
}, {
  label: 'Todo',
  value: 'todo',
  count: 8,
  selected: false
}, {
  label: 'In Progress',
  value: 'in-progress',
  count: 5,
  selected: false
}, {
  label: 'Done',
  value: 'done',
  count: 24,
  selected: false
}, {
  label: 'Cancelled',
  value: 'cancelled',
  count: 3,
  selected: false
}];

export default function SimpleFilterSnapshot({
  __onRender,
  label,
  options = defaultOptions,
}: {
  label?: string
  options?: { label: string; value: string; count: number; selected: boolean; }[]
} & { __onRender?: (element: React.ReactElement) => void }) {
  const selectedOptions = options?.filter(o => o.selected);

  const __element = (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-solid">
          <CirclePlus className="size-4 text-muted-foreground" />
          {label}
          {selectedOptions.length > 0 && <>
              <Separator orientation="vertical" className="h-4 mx-1" />
              <div className="flex gap-1">
                {selectedOptions.map(option => <Badge variant="secondary" key={option.value} className="rounded-sm px-1 font-normal">
                    {option.label}
                  </Badge>)}
              </div>
            </>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Status" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map(option => <CommandItem key={option.value}>
                  <div className={cn('flex size-4 items-center justify-center rounded-[4px] border', option.selected ? 'bg-primary border-primary text-primary-foreground' : 'border-input [&_svg]:invisible')}>
                    <Check className="size-3.5" />
                  </div>
                  <span>{option.label}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {option.count}
                  </span>
                </CommandItem>)}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem className="justify-center text-center">
                Clear filters
              </CommandItem>
              <CommandItem className="justify-center text-center">
                Clear filters
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