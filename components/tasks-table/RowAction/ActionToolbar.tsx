import { Trash2, X } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Separator } from '../../../components/ui/separator'
import { Text } from '../../../components/ui/text'
import { Tooltip, TooltipTrigger, TooltipContent } from '../../../components/ui/tooltip'
import { ColumnAction } from './ColumnAction'

export function ActionToolbar() {
  return (
    <div className="flex bg-background shadow-lg border border-border rounded-md items-center p-0 gap-0 overflow-hidden">
      <div className="flex py-1 pl-3 pr-1 items-center gap-1 bg-transparent">
        <Text variant="primary" weight="medium" size="sm" className="w-fit h-fit">
          5 Selected
        </Text>
        <Button size="icon-sm" variant="ghost" className="self-end ml-auto text-muted-foreground p-.5 size-6 p-0">
          <X size={16} />
        </Button>
      </div>
      <Separator orientation="vertical" className="!h-8 m-0" />
      <ColumnAction label="Status" />
      <Separator orientation="vertical" className="!h-8 m-0" />
      <ColumnAction label="Priority" />
      <Separator orientation="vertical" className="m-0 !h-8" />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="ghost" className="self-end ml-auto text-muted-foreground p-.5 size-6 px-2 h-8 size-unest rounded-none w-auto">
            <Trash2 size={24} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Delete Items
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
