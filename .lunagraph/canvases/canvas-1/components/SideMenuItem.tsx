import { Ellipsis } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../../../components/ui/button'
import { Text } from '../../../../components/ui/text'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../../../components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from '../../../../components/ui/input-group'

interface SideMenuItemProps {
  label: string
  itemCount: number
  selected?: boolean
  isEditMode?: boolean
  onEditModeChange?: (isEditMode: boolean) => void
}

export default function SideMenuItem({ label, itemCount, selected, isEditMode: isEditModeProp, onEditModeChange }: SideMenuItemProps) {
  const [internalEditMode, setInternalEditMode] = useState(false)
  
  const isEditMode = isEditModeProp ?? internalEditMode
  
  const handleEditClick = () => {
    setInternalEditMode(true)
    onEditModeChange?.(true)
  }
  
  const handleCancel = () => {
    setInternalEditMode(false)
    onEditModeChange?.(false)
  }

  if (isEditMode) {
    return (
      <div className="flex flex-col gap-2">
        <InputGroup className="h-10">
          <InputGroupInput placeholder="Category name" defaultValue={label} className="w-fit h-fit" />
          <InputGroupAddon align="inline-end" className="w-fit h-fit">
            <InputGroupButton size="xs" className="h-fit py-1.5 px-2" onClick={handleCancel}>
              Cancel
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }

  return (
    <div className={`flex flex-row gap-2 px-1.5 py-2 rounded-lg hover:bg-muted items-center group ${selected ? 'bg-muted' : ''}`}>
      <Text size="2xs" weight="medium" variant="muted" className="w-fit h-fit hover:text-primary text-muted-foreground group-hover:text-foreground">
        {label}
      </Text>
      <Text size="3xs" weight="regular" variant="muted" className="w-fit h-fit opacity-70 flex-1">
        {itemCount} items
      </Text>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" className="size-6 opacity-0 group-hover:opacity-100">
            <Ellipsis size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleEditClick}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}