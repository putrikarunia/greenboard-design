import { Button } from "@/components/ui/button"
import { ViewOptions } from "@/components/tasks-table/Options/ViewOptions"
import { DataTable } from "@/components/tasks-table"
import { SimpleFilter } from "@/components/tasks-table/SimpleFilter/SimpleFilter"
import { AddFilterButton } from "@/components/tasks-table/AddFilter/AddFilterButton"
import { SortButton, SortPopoverContent, SortColumnPicker } from "@/components/tasks-table/Sort"

const sampleData = [
  { id: "TASK-8782", title: "You can't compress the program without quantifying the open-source SSD pixel!", status: "in progress", label: "documentation", priority: "medium" },
  { id: "TASK-7878", title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!", status: "backlog", label: "documentation", priority: "medium" },
  { id: "TASK-7839", title: "We need to bypass the neural TCP card!", status: "todo", label: "bug", priority: "high" },
]

const statusOptions = [
  { label: "Backlog", value: "backlog", count: 12, selected: false },
  { label: "Todo", value: "todo", count: 8, selected: true },
  { label: "In Progress", value: "in-progress", count: 5, selected: false },
  { label: "Done", value: "done", count: 24, selected: true },
  { label: "Cancelled", value: "cancelled", count: 3, selected: false },
]

export default function SortPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:gap-10 md:p-6">

      {/* Box 1: Empty Sort */}
      <div className="flex flex-col gap-4 bg-gray-100 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900">Empty Sort</h3>
        <p className="text-sm text-muted-foreground">No sorts applied - shows column picker dropdown</p>
        <div className="flex items-start gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase">Button</span>
            <SortButton isEmpty={true} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase">Dropdown Content</span>
            <div className="bg-popover text-popover-foreground rounded-md border shadow-md w-fit">
              <SortColumnPicker />
            </div>
          </div>
        </div>
      </div>

      {/* Box 2: Active Sort */}
      <div className="flex flex-col gap-4 bg-gray-100 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900">Active Sort</h3>
        <p className="text-sm text-muted-foreground">Sorts applied - Priority is first (matching button text), Status is second (+1)</p>
        <div className="flex items-start gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase">Button</span>
            <SortButton isEmpty={false} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase">Dropdown Content</span>
            <div className="bg-popover text-popover-foreground rounded-md border shadow-md w-fit p-4">
              <SortPopoverContent />
            </div>
          </div>
        </div>
      </div>

      {/* Box 3: Table Mocks */}
      <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Table Mocks</h3>
          <p className="text-sm text-muted-foreground">Full table toolbar with sort button</p>
        </div>

        {/* Empty Sort Table */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase">Empty Sort</span>
          <div className="flex flex-col gap-2 bg-background p-4 rounded-md">
            <div className="flex items-center gap-2">
              <SortButton isEmpty={true} />
              <div className="h-6 w-px bg-border" />
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

        {/* Active Sort Table */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase">Active Sort</span>
          <div className="flex flex-col gap-2 bg-background p-4 rounded-md">
            <div className="flex items-center gap-2">
              <SortButton isEmpty={false} />
              <div className="h-6 w-px bg-border" />
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
      </div>

    </div>
  )
}
