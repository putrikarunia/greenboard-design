import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'

export function SortColumnPicker() {
  return (
    <Command>
      <CommandInput placeholder="Status" />
      <CommandList>
        <CommandEmpty>
          No results found.
        </CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <span>
              Name
            </span>
          </CommandItem>
          <CommandItem>
            <span>
              Status
            </span>
          </CommandItem>
          <CommandItem>
            <span>
              Priority
            </span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  )
}
