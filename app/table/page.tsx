import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {ViewOptions} from "@/components/tasks-table/Options/ViewOptions"

import { DataTable } from "@/components/tasks-table"
import { AdvancedFilter, AdvancedFilterButton } from "@/components/tasks-table/AdvancedFilter"
import { SimpleFilter } from "@/components/tasks-table/SimpleFilter/SimpleFilter"
import { AddFilterButton } from "@/components/tasks-table/AddFilter/AddFilterButton"
import { Circle, Clock, AlertCircle, CheckCircle, PlayCircle } from "lucide-react"

const sampleData = [
  { id: "TASK-8782", title: "You can't compress the program without quantifying the open-source SSD pixel!", status: "in progress", label: "documentation", priority: "medium" },
  { id: "TASK-7878", title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!", status: "backlog", label: "documentation", priority: "medium" },
  { id: "TASK-7839", title: "We need to bypass the neural TCP card!", status: "todo", label: "bug", priority: "high" },
]

const statusOptions = [
  { label: "Backlog", value: "backlog", count: 12, selected: false },
  { label: "Todo", value: "todo", count: 8, selected: false },
  { label: "In Progress", value: "in-progress", count: 5, selected: false },
  { label: "Done", value: "done", count: 24, selected: false },
  { label: "Cancelled", value: "cancelled", count: 3, selected: false },
]

const statusOptionsWithSelected = [
  { label: "Backlog", value: "backlog", count: 12, selected: false },
  { label: "Todo", value: "todo", count: 8, selected: true },
  { label: "In Progress", value: "in-progress", count: 5, selected: false },
  { label: "Done", value: "done", count: 24, selected: true },
  { label: "Cancelled", value: "cancelled", count: 3, selected: false },
]

export default function TasksPage() {
  return (
    <div className="flex flex-1 flex-col">
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

          <div className="flex flex-col gap-16 bg-gray-100 p-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Advanced Filter Dropdown
              </h3>
              <div className="bg-popover text-popover-foreground rounded-md border p-4 shadow-md">
                <AdvancedFilter state="default" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                When dragging into a group: show ring-ring ring-2
              </h3>
              <div className="bg-popover text-popover-foreground rounded-md border p-4 shadow-md">
                <AdvancedFilter state="drag" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-20 bg-gray-100 p-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Filter not set
              </h3>
              <div className="flex flex-col gap-2 bg-background p-4">
                <div className="flex items-center gap-2">
                  <AddFilterButton />
                </div>
                <DataTable data={sampleData} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Filter added &gt; Status
              </h3>
              <div className="flex flex-col gap-2 bg-background p-4">
                <div className="flex items-center gap-2">
                  <SimpleFilter options={statusOptions} />
                  <AddFilterButton />
                  <Button className="self-end ml-auto text-muted-foreground" size="sm" variant="ghost">
                    Reset
                  </Button>
                  <ViewOptions />
                </div>
                <DataTable data={sampleData} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Filter added &gt; Status, Priority, and some filters selected for Status
              </h3>
              <div className="flex flex-col gap-2 bg-background p-4">
                <div className="flex items-center gap-2">
                  <SimpleFilter options={statusOptionsWithSelected} />
                  <SimpleFilter options={statusOptions} label="Priority" />
                  <AddFilterButton />
                  <Button className="self-end ml-auto text-muted-foreground" size="sm" variant="ghost">
                    Reset
                  </Button>
                  <ViewOptions />
                </div>
                <DataTable data={sampleData} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">
                Advanced Filter Button with dropdown
              </h3>
              <div className="flex flex-col gap-2 bg-background p-4">
                <div className="flex items-center gap-2">
                  <AdvancedFilterButton />
                  <AddFilterButton />
                  <Button className="self-end ml-auto text-muted-foreground" size="sm" variant="ghost">
                    Reset
                  </Button>
                  <ViewOptions />
                </div>
                <DataTable data={sampleData} />
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
