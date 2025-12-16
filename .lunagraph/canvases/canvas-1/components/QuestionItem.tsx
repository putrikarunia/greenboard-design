import { Ellipsis, SignalHigh, SignalMedium, SignalLow } from 'lucide-react'
import { Badge } from '../../../../components/ui/badge'
import { Button } from '../../../../components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '../../../../components/ui/toggle-group'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../../components/ui/dropdown-menu'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Text } from '../../../../components/ui/text'
import { Textarea } from '../../../../components/ui/textarea'

type MatchType = 'exact' | 'close' | 'partial'

const matchConfig: Record<MatchType, { label: string; variant: 'purple' | 'green' | 'orange'; icon: typeof SignalHigh }> = {
  exact: { label: 'Exact Match', variant: 'purple', icon: SignalHigh },
  close: { label: 'Close Match', variant: 'green', icon: SignalMedium },
  partial: { label: 'Partial Match', variant: 'orange', icon: SignalLow },
}

interface QuestionItemProps {
  title?: string
  subtitle?: string
  matchType?: MatchType
  isEditMode?: boolean
}

export default function QuestionItem({
  title = 'Do I need to submit a preclearance request before doing a trade?',
  subtitle = 'Q: Must I request preclearance prior to trading? A: Yes, all trades require prior approval.',
  matchType = 'exact',
  isEditMode = false,
}: QuestionItemProps) {
  const label = matchConfig[matchType].label
  const variant = matchConfig[matchType].variant
  const Icon = matchConfig[matchType].icon

  if (isEditMode) {
    return (
      <Card className="w-[600px] py-6 px-0 shadow-none hover:shadow-sm">
        <CardContent className="h-fit flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <Label className="w-fit h-fit">
              Title
            </Label>
            <Input placeholder={title} defaultValue={title} className="h-fit" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="w-fit h-fit">
              Example questions and answers
            </Label>
            <Textarea placeholder={subtitle} defaultValue={subtitle} className="h-fit" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="w-fit h-fit">
              How similar must the question be?
            </Label>
            <ToggleGroup type="single" variant="outline" defaultValue="" value={matchType}>
              <ToggleGroupItem value="exact" aria-label="Toggle bold" className="text-tag-text-purple data-[state=on]:text-tag-text-purple data-[state=on]:bg-tag-bg-purple">
                <SignalHigh size={24} />
                Exact match
              </ToggleGroupItem>
              <ToggleGroupItem value="close" aria-label="Toggle italic" className="text-tag-text-green data-[state=on]:text-tag-text-green">
                <SignalMedium size={24} />
                Close match
              </ToggleGroupItem>
              <ToggleGroupItem value="partial" aria-label="Toggle strikethrough" className="text-tag-text-orange data-[state=on]:text-tag-text-orange">
                <SignalLow size={24} />
                Partial match
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button className="ml-auto text-muted-foreground" size="sm" variant="ghost">
            Cancel
          </Button>
          <Button size="sm">
            Save
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-[600px] py-4 px-0 shadow-none hover:shadow-sm">
      <CardHeader className="h-fit items-center px-4 py-0">
        <CardTitle className="h-full w-full font-medium">
          <Text size="xs" weight="medium" className="flex-1 w-fit h-fit">
            {title}
          </Text>
        </CardTitle>
        <CardDescription className="w-fit h-fit">
          <Text size="2xs" variant="muted" className="flex-1 w-fit h-fit">
            {subtitle}
          </Text>
        </CardDescription>
        <CardAction className="w-fit h-fit gap-2">
          <div className="flex flex-row gap-0.5 items-center">
            <Badge variant={variant} className="gap-1">
              <Icon size={12} />
              {label}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="size-6">
                  <Ellipsis size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardAction>
      </CardHeader>
    </Card>
  )
}