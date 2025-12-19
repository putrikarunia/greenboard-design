import * as React from "react"
import { Download, FileSpreadsheet, Table } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';

export default function ExportButtonSnapshot({
  __onRender,
}: {
  
} & { __onRender?: (element: React.ReactElement) => void }) {
  console.log('[ExportButtonSnapshot] Rendered with props:', {  })


  const __element = (
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

  // Create stable key from all props for dependency tracking
  // This avoids issues with array/object props changing the dependency array size
  const __propsKey = JSON.stringify({  })

  // Pass element tree to parent via callback when props change
  // Use useLayoutEffect to ensure we capture the tree before paint
  React.useLayoutEffect(() => {
    if (__onRender) {
      __onRender(__element)
    }
  }, [__propsKey, __onRender])

  // Return the actual element for rendering in canvas
  return __element
}