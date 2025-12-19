import * as React from "react"
import { CheckCheck } from 'lucide-react';
import { Progress } from '../../components/ui/progress';
import { Text } from '../../components/ui/text';

export default function ExportProgressToastSnapshot({
  __onRender,
  value,
}: {
  value?: number
} & { __onRender?: (element: React.ReactElement) => void }) {
  console.log('[ExportProgressToastSnapshot] Rendered with props:', { value })


  const __element = (
    <div className="flex w-[322px] bg-background shadow-lg border border-border rounded-md items-center gap-0 overflow-hidden p-0 flex-col">
      <div className="flex gap-2 p-2 w-full">
        <CheckCheck size={16} className="text-tag-text-green" />
        <div className="flex flex-col flex-1 gap-0">
          <Text size="sm" weight="medium" className="w-auto h-fit">
            Tasks export
          </Text>
          <Text size="xs" weight="regular" variant="muted" className="w-fit h-fit">
            Export completed
          </Text>
        </div>
      </div>
      <Progress value={value} className="h-1 bg-secondary" />
    </div>
  )

  // Create stable key from all props for dependency tracking
  // This avoids issues with array/object props changing the dependency array size
  const __propsKey = JSON.stringify({ value })

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