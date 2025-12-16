import { Check, Ellipsis, LucideSignalHigh, LucideSignalLow, LucideSignalMedium, Plus, Trash2, X } from 'lucide-react'
import { Badge } from '../../../../components/ui/badge'
import { Button } from '../../../../components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../components/ui/dropdown-menu'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '../../../../components/ui/tabs'
import { Text } from '../../../../components/ui/text'
import { ToggleGroup, ToggleGroupItem } from '../../../../components/ui/toggle-group'

interface QuestionItemGroupProps {
  isEditMode?: boolean
  onEditModeChange?: (isEditMode: boolean) => void
  questionTitle?: string
  questions?: { text: string; answer: 'yes' | 'no' }[]
  matchType?: 'exact' | 'close' | 'partial'
}

export default function QuestionItemGroup({
  isEditMode = false,
  onEditModeChange,
  questionTitle = "Questions about what equities an employee can trade",
  questions = [
    { text: "Do I need to submit a preclearance request before doing a trade?", answer: "yes" },
    { text: "Can I trade restricted securities?", answer: "no" }
  ],
  matchType = 'exact'
}: QuestionItemGroupProps) {
  const setIsEditMode = (value: boolean) => {
    onEditModeChange?.(value)
  }

  const badgeVariant = matchType === 'exact' ? 'purple' : matchType === 'close' ? 'green' : 'orange'
  const matchLabel = matchType === 'exact' ? 'Exact Match' : matchType === 'close' ? 'Close Match' : 'Partial Match'
  const questionsText = questions.map(q => q.text).join(', ')

  if (isEditMode) {
    return (
      <Card className="w-[600px] py-6 px-0 shadow-none hover:shadow-sm">
        <CardContent className="h-fit flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <Label className="w-fit h-fit">Question Group</Label>
            <Input placeholder="Questions about what equities an employee can trade" defaultValue={questionTitle} className="h-fit" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="w-fit h-fit">Questions the AI can answer</Label>
            {questions.map((q, i) => (
              <div key={i} className="flex flex-row gap-1 items-stretch">
                <Input placeholder={q.text} defaultValue={q.text} className="h-fit" />
                <Tabs defaultValue={q.answer} className="w-fit">
                  <TabsList className="h-full">
                    <TabsTrigger value="yes" className={q.answer === 'yes' ? 'w-fit text-primary' : 'w-fit text-muted-foreground'}>
                      <Check size={24} />
                    </TabsTrigger>
                    <TabsTrigger value="no" className={q.answer === 'no' ? 'w-fit text-destructive' : 'w-fit text-muted-foreground'}>
                      <X size={24} />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button variant="ghost" size="icon" className="h-auto text-muted-foreground">
                  <Trash2 size={24} />
                </Button>
              </div>
            ))}
            <Button variant="secondary" size="sm" className="w-fit">
              <Plus size={24} />
              Add Question
            </Button>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="w-fit h-fit">How similar must the question be?</Label>
            <ToggleGroup type="single" variant="outline" defaultValue={matchType} value={matchType}>
              <ToggleGroupItem value="exact" className="text-tag-text-purple data-[state=on]:text-tag-text-purple data-[state=on]:bg-tag-bg-purple">
                <LucideSignalHigh size={24} />
                Exact match
              </ToggleGroupItem>
              <ToggleGroupItem value="close" className="text-tag-text-green data-[state=on]:text-tag-text-green data-[state=on]:bg-tag-bg-green">
                <LucideSignalMedium size={24} />
                Close match
              </ToggleGroupItem>
              <ToggleGroupItem value="partial" className="text-tag-text-orange data-[state=on]:text-tag-text-orange data-[state=on]:bg-tag-bg-orange">
                <LucideSignalLow size={24} />
                Partial match
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button size="sm" variant="ghost" className="ml-auto text-muted-foreground" onClick={() => setIsEditMode(false)}>
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-[600px] py-4 px-0 shadow-none hover:shadow-sm">
      <CardHeader className="h-fit items-center px-4 py-0">
        <CardTitle className="h-full w-full font-medium">
          <Text size="xs" weight="medium" className="flex-1 w-fit h-fit">
            {questionTitle}
          </Text>
        </CardTitle>
        <CardDescription className="w-fit h-[40px] line-clamp-2 overflow-hidden">
          <Text size="2xs" variant="muted" className="flex-1 w-fit line-clamp-2 h-full">
            Questions: {questionsText}
          </Text>
        </CardDescription>
        <CardAction className="w-fit h-fit gap-2">
          <div className="flex flex-row gap-0.5 items-center">
            <Badge variant={badgeVariant} className="gap-1">
              {matchType === 'exact' && <LucideSignalHigh size={12} />}
              {matchType === 'close' && <LucideSignalMedium size={12} />}
              {matchType === 'partial' && <LucideSignalLow size={12} />}
              {matchLabel}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="size-6">
                  <Ellipsis size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
