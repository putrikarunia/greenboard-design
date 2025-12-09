import { ArrowUpNarrowWide, ListChevronsUpDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SortPopoverContent } from './SortPopoverContent'
import { SortColumnPicker } from './SortColumnPicker'

export function SortButton({
  isEmpty
}: {
  isEmpty: boolean
}) {
  if (isEmpty) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline" className="text-foreground border-dashed">
            <ListChevronsUpDown size={16} className="text-primary" />
            Sort
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-fit p-0 border-none">
          <SortColumnPicker />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" className="text-foreground">
          <ArrowUpNarrowWide size={24} className="text-muted-foreground" />
          <span className="text-muted-foreground">
            Sorted by
          </span>
          Priority
          <Badge className="w-fit h-fit" type="tag" variant="secondary" size="sm">
            +1
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-fit">
        <SortPopoverContent />
      </PopoverContent>
    </Popover>
  )
}