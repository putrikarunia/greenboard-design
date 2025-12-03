import { Filter, ListFilter } from 'lucide-react'
import { AdvancedFilter } from './AdvancedFilter'
import { Button } from '../../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'

export function AdvancedFilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <ListFilter className="size-4" />
          3 Rules
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-fit">
        <AdvancedFilter state="default"/>
      </PopoverContent>
    </Popover>
  )
}
