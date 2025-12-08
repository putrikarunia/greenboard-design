import { Check, CirclePlus, Trash } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../../../components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover'
import { Separator } from '../../../components/ui/separator'

const defaultOptions = [
  { label: 'Backlog', value: 'backlog', count: 12, selected: false },
  { label: 'Todo', value: 'todo', count: 8, selected: true },
  { label: 'In Progress', value: 'in-progress', count: 5, selected: true },
  { label: 'Done', value: 'done', count: 24, selected: false },
  { label: 'Cancelled', value: 'cancelled', count: 3, selected: false },
]

export function SimpleFilter({
  label = "Status",
  options = defaultOptions
} : {
  label?: string,
  options?: { label: string, value: string, count: number, selected: boolean }[]
}) {

  const selectedOptions = options?.filter((o) => o.selected)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-solid">
          <CirclePlus className="size-4 text-muted-foreground" />
          {label}
          {selectedOptions.length > 0 && (
            <>
              <Separator orientation="vertical" className="h-4 mx-1" />
              <div className="flex gap-1">
                {selectedOptions.map((option) => (
                  <Badge
                    variant="secondary"
                    key={option.value}
                    size="sm"
                    type={"tag"}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Status" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem key={option.value}>
                  <div
                    className={cn(
                      'flex size-4 items-center justify-center rounded-[4px] border',
                      option.selected
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'border-input [&_svg]:invisible'
                    )}
                  >
                    <Check className={cn( "size-3.5", option.selected && 'text-white')} />
                  </div>
                  <span>{option.label}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {option.count}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <div className='flex items-center p-2 gap-2'>
              <Button size="sm" variant={"ghost"} className="flex-1 text-left justify-start font-normal">
                Clear filters
              </Button>
              <Button size="sm" variant={"ghost"}>
                <Trash className='size-3.5 text-muted-foreground' />
              </Button>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
