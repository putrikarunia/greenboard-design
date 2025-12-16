import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Separator } from '../../../../components/ui/separator'
import { Slider } from '../../../../components/ui/slider'

export default function SliderFilter() {
  return (
    <div style={{
    "display": "flex",
    "flexDirection": "column",
    "gap": "24px"
  }} className="flex-col">
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
          <Input style={{
    "width": "100%",
    "height": "fit-content"
  }} />
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
          <Input style={{
    "width": "100%",
    "height": "fit-content"
  }} />
        </div>
      </div>
      <Slider style={{
    "width": "100%",
    "height": "fit-content"
  }} min={0} max={999} defaultValue={[30,900]} />
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
