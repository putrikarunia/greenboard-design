import { Button } from '../../../components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../../../components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover'
import { Settings2, GripVertical, Eye, EyeOff } from 'lucide-react'

export function ViewOptions() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2 className="size-4" />
          View
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Command>
          <CommandInput placeholder="Search columns..." />
          <CommandList>
            <CommandEmpty>
              No results found.
            </CommandEmpty>
            <CommandGroup>
              <CommandItem className="flex items-center gap-2">
                <GripVertical className="size-4 text-muted-foreground cursor-grab" />
                <span className="flex-1">Task</span>
                <Eye className="size-4 text-muted-foreground" />
              </CommandItem>
              <CommandItem className="flex items-center gap-2">
                <GripVertical className="size-4 text-muted-foreground cursor-grab" />
                <span className="flex-1">Status</span>
                <Eye className="size-4 text-muted-foreground" />
              </CommandItem>
              <CommandItem className="flex items-center gap-2">
                <GripVertical className="size-4 text-muted-foreground cursor-grab" />
                <span className="flex-1">Priority</span>
                <Eye className="size-4 text-muted-foreground" />
              </CommandItem>
              <CommandItem className="flex items-center gap-2">
                <GripVertical className="size-4 text-muted-foreground cursor-grab" />
                <span className="flex-1">Assignee</span>
                <EyeOff className="size-4 text-muted-foreground opacity-50" />
              </CommandItem>
              <CommandItem className="flex items-center gap-2">
                <GripVertical className="size-4 text-muted-foreground cursor-grab" />
                <span className="flex-1">Due Date</span>
                <EyeOff className="size-4 text-muted-foreground opacity-50" />
              </CommandItem>
              <CommandItem className="flex items-center gap-2">
                <GripVertical className="size-4 text-muted-foreground cursor-grab" />
                <span className="flex-1">Labels</span>
                <Eye className="size-4 text-muted-foreground" />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <div className="p-2">
              <Button size="sm" variant="ghost" className="w-full justify-start font-normal">
                Reset to default
              </Button>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
