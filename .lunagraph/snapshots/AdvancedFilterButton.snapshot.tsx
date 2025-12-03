import * as React from "react"
import { AdvancedFilter } from '../../components/tasks-table/AdvancedFilter/AdvancedFilter';
import { Button } from '../../components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';

export default function AdvancedFilterButtonSnapshot({
  __onRender,
}: {
  
} & { __onRender?: (element: React.ReactElement) => void }) {

  const __element = (
    <Popover style={{
  "width": "fit-content",
  "height": "fit-content"
}}>
      <PopoverTrigger style={{
    "width": "fit-content",
    "height": "fit-content"
  }}>
        <Button variant="outline" size="sm">
          3 Rules
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{
    "width": "fit-content",
    "height": "fit-content"
  }}>
        <AdvancedFilter style={{
      "width": "fit-content",
      "height": "fit-content"
    }} state="default" />
      </PopoverContent>
    </Popover>
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