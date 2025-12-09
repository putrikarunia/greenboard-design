import { LucidePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SortRow } from './SortRow'

export function SortPopoverContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <SortRow selectedColumn="priority" selectedDirection="desc" />
        <SortRow selectedColumn="status" selectedDirection="asc" />
      </div>
      <div className="flex gap-2 border-t border-border pt-2">
        <Button size="sm" variant="default" className="w-fit">
          <LucidePlus className="size-4" />
          Add Sort
        </Button>
        <Button size="sm" variant="secondary" className="w-fit">
          Reset
        </Button>
      </div>
    </div>
  )
}
