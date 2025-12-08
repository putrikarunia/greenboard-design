
import { Download, FileSpreadsheet, Table } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

export function ExportButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-solid">
          <Download size={16} />
          Export
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <FileSpreadsheet size={16} />
                <span>CSV</span>
              </CommandItem>
              <CommandItem>
                <Table size={16} />
                <span>Excel</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
