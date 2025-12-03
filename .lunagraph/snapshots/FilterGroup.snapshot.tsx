import * as React from "react"
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { GripVertical, Ellipsis, Trash2, RotateCw } from 'lucide-react';
import { FilterRow } from '../../components/tasks-table/AdvancedFilter/FilterRow';

export default function FilterGroupSnapshot({
  __onRender,
  state,
}: {
  state?: "default" | "drag"
} & { __onRender?: (element: React.ReactElement) => void }) {

  const __element = (
    <div className="flex gap-2 items-start">
      <Button variant="ghost" size="icon" className="size-8 cursor-grab">
        <GripVertical className="size-4 text-muted-foreground" />
      </Button>
      <div className="w-[80px] min-w-[80px]">
        <Select>
          <SelectTrigger className="w-fit bg-background">
            <SelectValue placeholder="And" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="and">And</SelectItem>
            <SelectItem value="or">Or</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={`flex flex-col gap-2 bg-secondary rounded-md p-2 items-start${state === 'drag' ? ' ring-2 ring-ring' : ''}`}>
        <FilterRow label="Where" />
        <FilterRow label="Where" state={state === 'drag' ? 'drag' : 'default'} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <Ellipsis className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background">
          <DropdownMenuItem variant="destructive">
            <Trash2 className="size-4" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RotateCw className="size-4" />
            Turn into group
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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

  return null
}