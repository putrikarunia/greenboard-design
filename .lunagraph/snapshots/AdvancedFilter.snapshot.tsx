import * as React from "react"
import { Button } from '../../components/ui/button';
import { Plus, ListPlus } from 'lucide-react';
import { FilterRow } from '../../components/tasks-table/AdvancedFilter/FilterRow';
import { FilterGroup } from '../../components/tasks-table/AdvancedFilter/FilterGroup';

export default function AdvancedFilterSnapshot({
  __onRender,
  state,
}: {
  state?: "default" | "drag"
} & { __onRender?: (element: React.ReactElement) => void }) {

  const __element = (
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

  // Pass element tree to parent via callback once on mount
  // Only run once to avoid infinite loop (setElements triggers re-render)
  const __didRender = React.useRef(false)
  React.useLayoutEffect(() => {
    if (!__didRender.current && __onRender) {
      __didRender.current = true
      __onRender(__element)
    }
  }, [])

  // Return the actual element for rendering in canvas
  return __element
}