import { Button } from '../../../components/ui/button'
import { Plus, ListPlus } from 'lucide-react'
import { FilterRow } from './FilterRow'
import { FilterGroup } from './FilterGroup'

export function AdvancedFilter({
  state
}: {
  state: 'default' | 'drag'
}) {

  return (
    <div className="flex flex-col gap-2 bg-background w-fit p-0 rounded-none shadow-none">
      <FilterRow label="Where" />
      <FilterGroup state={state} />
      <div className="flex gap-2 border-t border-border pt-2">
        <Button size="sm" variant="secondary" className="w-fit">
          <Plus className="size-4" />
          Add Filter Rule
        </Button>
        <Button size="sm" variant="secondary" className="w-fit">
          <ListPlus className="size-4" />
          Add Group
        </Button>
      </div>
    </div>
  )
}