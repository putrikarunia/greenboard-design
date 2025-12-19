import { Check, Ellipsis, LucideSignalHigh, LucideSignalLow, LucideSignalMedium, LucideX } from 'lucide-react'
import { Badge } from '../../../../components/ui/badge'
import { Button } from '../../../../components/ui/button'
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../components/ui/dropdown-menu'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '../../../../components/ui/tabs'
import { Text } from '../../../../components/ui/text'
import { ToggleGroup, ToggleGroupItem } from '../../../../components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../components/ui/tooltip'

type SimilarityMatch = 'exact' | 'close' | 'partial'

interface QuestionItemToggleProps {
  question?: string
  similarity?: SimilarityMatch
  isAllowed?: boolean
  isEditMode?: boolean
  isShowToggle?: boolean
  onEditModeChange?: (isEditMode: boolean) => void
  onQuestionChange?: (question: string) => void
  onSimilarityChange?: (similarity: SimilarityMatch) => void
}

export default function QuestionItemToggle({
  question = "Do I need to submit a preclearance request before doing a trade?",
  similarity = "exact",
  isAllowed = true,
  isEditMode = false,
  isShowToggle = true,
  onEditModeChange,
  onQuestionChange,
  onSimilarityChange
}: QuestionItemToggleProps) {
  const setIsEditMode = (value: boolean) => {
    onEditModeChange?.(value)
  }

  const badgeVariant = similarity === 'exact' ? 'purple' : similarity === 'close' ? 'green' : 'orange'
  const matchLabel = similarity === 'exact' ? 'Exact Match' : similarity === 'close' ? 'Close Match' : 'Partial Match'

  if (isEditMode) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-start">
          <Card className="w-full min-w-[600px] shadow-none hover:shadow-sm p-6">
            <CardContent className="h-fit flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <Label className="w-fit h-fit">Question</Label>
                <Input
                  placeholder="Do I need to submit a preclearance request before doing a trade?"
                  defaultValue={question}
                  onChange={(e) => onQuestionChange?.(e.target.value)}
                  className="h-fit px-3.5 py-2.5"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="w-fit h-fit">How similar must the question be?</Label>
                <ToggleGroup
                  type="single"
                  variant="outline"
                  defaultValue={similarity}
                  value={similarity}
                  onValueChange={(value) => value && onSimilarityChange?.(value as SimilarityMatch)}
                >
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
          {isShowToggle && (
            <Tabs defaultValue={isAllowed ? "yes" : "no"} className="w-fit h-fit mt-3.5">
              <TabsList className="h-full">
                <Tooltip>
                  <TooltipTrigger className="w-fit h-fit">
                    <TabsTrigger value="yes" className="w-fit text-primary">
                      <Check size={24} />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent className="w-fit h-fit">Allow AI to answer this question</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger className="w-fit h-fit">
                    <TabsTrigger value="no" className="w-fit text-muted-foreground">
                      <LucideX size={24} />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent className="w-fit h-fit">Disallow AI to answer this question</TooltipContent>
                </Tooltip>
              </TabsList>
            </Tabs>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <Card className={`w-auto min-w-[600px] h-fit py-4 px-0 hover:shadow-sm flex-1 shadow-none ${!isAllowed ? 'bg-muted border-none opacity-70' : ''}`}>
        <CardHeader className="h-fit items-center px-4 py-0 gap-0">
          <CardTitle className="min-h-[26px] h-full w-full font-medium flex items-center">
            <Text size="xs" weight="regular" className="flex-1 w-fit h-fit">
              {question}
            </Text>
          </CardTitle>
          <CardAction className="w-fit h-fit gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Badge variant={badgeVariant} className="gap-1">
                {similarity === 'exact' && <LucideSignalHigh size={12} />}
                {similarity === 'close' && <LucideSignalMedium size={12} />}
                {similarity === 'partial' && <LucideSignalLow size={12} />}
                {matchLabel}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-sm" className="size-6">
                    <Ellipsis size={24} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setIsEditMode(true)}>Edit</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardAction>
        </CardHeader>
      </Card>
      {isShowToggle && (
        <Tabs defaultValue={isAllowed ? "yes" : "no"} className="w-fit h-fit">
          <TabsList className="h-full">
            <Tooltip>
              <TooltipTrigger className="w-fit h-fit">
                <TabsTrigger value="yes" className="w-fit text-primary">
                  <Check size={24} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent className="w-fit h-fit">Allow AI to answer this question</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="w-fit h-fit">
                <TabsTrigger value="no" className="w-fit text-muted-foreground">
                  <LucideX size={24} />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent className="w-fit h-fit">Disallow AI to answer this question</TooltipContent>
            </Tooltip>
          </TabsList>
        </Tabs>
      )}
    </div>
  )
}