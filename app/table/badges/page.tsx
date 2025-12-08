import { Badge } from "@/components/ui/badge"
import { Circle, Clock, AlertCircle, CheckCircle, PlayCircle } from "lucide-react"

export default function BadgesPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col gap-16 bg-gray-100 p-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-gray-900">Badge Variants</h2>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Type: Tag (rounded corners) - Solid</h3>
            <div className="bg-background rounded-md border p-6">
              <div className="flex flex-wrap gap-4">
                <Badge type="tag" variant="purple"><Circle />Action Required</Badge>
                <Badge type="tag" variant="gray"><Clock />Scheduled for 9/15</Badge>
                <Badge type="tag" variant="red"><AlertCircle />Overdue</Badge>
                <Badge type="tag" variant="green"><CheckCircle />Done</Badge>
                <Badge type="tag" variant="orange"><PlayCircle />In Progress</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Type: Pill (fully rounded) - Solid</h3>
            <div className="bg-background rounded-md border p-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Badge type="pill" variant="purple"><Circle />Action Required</Badge>
                <Badge type="pill" variant="gray"><Clock />Scheduled for 9/15</Badge>
                <Badge type="pill" variant="red"><AlertCircle />Overdue</Badge>
                <Badge type="pill" variant="green"><CheckCircle />Done</Badge>
                <Badge type="pill" variant="orange"><PlayCircle />In Progress</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Badge type="pill" size="sm" variant="purple"><Circle />Action Required</Badge>
                <Badge type="pill" size="sm" variant="gray"><Clock />Scheduled</Badge>
                <Badge type="pill" size="sm" variant="red"><AlertCircle />Overdue</Badge>
                <Badge type="pill" size="sm" variant="green"><CheckCircle />Done</Badge>
                <Badge type="pill" size="sm" variant="orange"><PlayCircle />In Progress</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Type: Pill - Outline</h3>
            <div className="bg-background rounded-md border p-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Badge type="pill" variant="outline-purple"><Circle />Action Required</Badge>
                <Badge type="pill" variant="outline-gray"><Clock />Scheduled for 9/15</Badge>
                <Badge type="pill" variant="outline-red"><AlertCircle />Overdue</Badge>
                <Badge type="pill" variant="outline-green"><CheckCircle />Done</Badge>
                <Badge type="pill" variant="outline-orange"><PlayCircle />In Progress</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Badge type="pill" size="sm" variant="outline-purple"><Circle />Action</Badge>
                <Badge type="pill" size="sm" variant="outline-gray"><Clock />Scheduled</Badge>
                <Badge type="pill" size="sm" variant="outline-red"><AlertCircle />Overdue</Badge>
                <Badge type="pill" size="sm" variant="outline-green"><CheckCircle />Done</Badge>
                <Badge type="pill" size="sm" variant="outline-orange"><PlayCircle />In Progress</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-900">Default Variants (existing)</h3>
            <div className="bg-background rounded-md border p-6">
              <div className="flex flex-wrap gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
