import * as React from "react"
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { GripVertical, Ellipsis, Trash2, RotateCw } from 'lucide-react';

export default function FilterRowSnapshot({
  __onRender,
  label,
  state,
}: {
  label?: string
  state?: "default" | "drag"
} & { __onRender?: (element: React.ReactElement) => void }) {

  const __element = (
    <div className={`flex items-center gap-2${state === 'drag' ? ' opacity-50' : ''}`}>
      <Button variant="ghost" size="icon" className="size-8 cursor-grab">
        <GripVertical className="size-4 text-muted-foreground" />
      </Button>
      <div className="w-[80px] px-2">
        <p className="font-medium text-sm text-gray-700">{label}</p>
      </div>
      <Select>
        <SelectTrigger className="w-fit bg-background">
          <SelectValue placeholder="Name" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="status">Status</SelectItem>
          <SelectItem value="priority">Priority</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-fit bg-background">
          <SelectValue placeholder="Contains" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="contains">Contains</SelectItem>
          <SelectItem value="equals">Equals</SelectItem>
          <SelectItem value="starts-with">Starts with</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="Value" className="flex-1 min-w-[150px] bg-background" />
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