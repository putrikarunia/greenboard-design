import {  CheckCircle2 } from 'lucide-react'
import { Progress } from '../../../components/ui/progress'
import { Text } from '../../../components/ui/text'
import { Spinner } from '@/components/ui/spinner'

export default function ExportProgressToast({
  value
}: {
  value: number
}) {
  return (
    <div className="flex w-[322px] bg-background shadow-lg border border-border rounded-md items-center gap-0 overflow-hidden p-0 flex-col">
      <div className="flex gap-2 p-2 w-full">
        {
          value >= 100 ?
            <CheckCircle2 className="w-4 h-fit text-primary my-1" />
            :
            <Spinner className="w-4 h-fit text-muted-foreground my-1" />
        }

        <div className="flex flex-col flex-1 gap-0">
          <Text size="sm" weight="medium" className="w-auto h-fit">
            Tasks export
          </Text>
          {
            value >= 100 ?
              <Text size="xs" weight="regular" variant="muted" className="w-fit h-fit">
                Export completed
              </Text> :
              <Text size="xs" weight="regular" variant="muted" className="w-fit h-fit">
                Preparing export...
              </Text>
          }
        </div>
      </div>
      <Progress className="h-1 bg-secondary" value={value} />
    </div>
  )
}
