import { Button } from '../../../../components/ui/button'
import { InputGroupInput } from '../../../../components/ui/input-group'
import { Label } from '../../../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../../../../components/ui/select'
import { Separator } from '../../../../components/ui/separator'

export default function RangeFilter() {
  return (
    <div style={{
    "display": "flex",
    "flexDirection": "column",
    "gap": "24px"
  }}>
      <div style={{
    "display": "flex",
    "flexDirection": "row",
    "gap": 8,
    "width": "100%"
  }} className="items-end">
        <div style={{
    "display": "flex",
    "flexDirection": "column",
    "gap": 8,
    "height": "fit-content",
    "width": "auto"
  }} className="flex-col flex-1">
          <Label style={{
    "width": "fit-content",
    "height": "fit-content"
  }}>
            Min
          </Label>
          <Select>
            <SelectTrigger className="w-fit bg-background">
              <InputGroupInput style={{"height":"fit-content"}} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">
                $1,000
              </SelectItem>
              <SelectItem value="status">
                $5,000
              </SelectItem>
              <SelectItem value="priority">
                $10,000
              </SelectItem>
              <SelectItem value="priority">
                $20,000
              </SelectItem>
              <SelectItem value="priority">
                $50,000
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div style={{
    "display": "flex",
    "flexDirection": "row",
    "gap": 8,
    "height": "30px"
  }} className="items-center">
          <Separator style={{
    "width": "8px",
    "height": "2px"
  }} orientation="horizontal" />
        </div>
        <div style={{
    "display": "flex",
    "flexDirection": "column",
    "gap": 8,
    "height": "fit-content"
  }} className="flex-col flex-1">
          <Label style={{
    "width": "fit-content",
    "height": "fit-content"
  }}>
            Max
          </Label>
          <Select>
            <SelectTrigger className="w-fit bg-background">
              <InputGroupInput style={{"height":"fit-content"}} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">
                $1,000
              </SelectItem>
              <SelectItem value="status">
                $5,000
              </SelectItem>
              <SelectItem value="priority">
                $10,000
              </SelectItem>
              <SelectItem value="priority">
                $20,000
              </SelectItem>
              <SelectItem value="priority">
                $50,000
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div style={{"padding":"0px"}} className="flex gap-2 border-t border-border pt-2 border-none">
        <Button size="sm" variant="default" className="w-fit">
          Apply
        </Button>
        <Button size="sm" variant="secondary" className="w-fit">
          Reset
        </Button>
      </div>
    </div>
  )
}
