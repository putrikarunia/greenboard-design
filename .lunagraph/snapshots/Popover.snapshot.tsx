import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export default function PopoverSnapshot({
  __onRender,
  props,
}: {
  props?: any
} & { __onRender?: (element: React.ReactElement) => void }) {

  const __element = (
    <PopoverPrimitive.Root data-slot="popover" {...props} />
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