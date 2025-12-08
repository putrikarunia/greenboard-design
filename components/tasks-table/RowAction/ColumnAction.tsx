import { CheckCircle2, Circle, CirclePlay, CircleSlash, CircleX } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../../components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover'

export function ColumnAction({
  label = 'Status'
}: {
  label: string
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 border-solid rounded-none">
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={label} />
          <CommandList>
            <CommandEmpty>
              No results found.
            </CommandEmpty>
            <CommandGroup>
              <CommandItem>
                <CircleSlash size={16} />
                <span>
                  Backlog
                </span>
              </CommandItem>
              <CommandItem>
                <Circle size={16} />
                <span>
                  Todo
                </span>
              </CommandItem>
              <CommandItem>
                <CirclePlay size={16} />
                <span>
                  In Progress
                </span>
              </CommandItem>
              <CommandItem>
                <CheckCircle2 size={16} />
                <span>
                  Done
                </span>
              </CommandItem>
              <CommandItem>
                <CircleX size={16} />
                <span>
                  Cancelled
                </span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
