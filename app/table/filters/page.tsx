import { Button } from "@/components/ui/button"
import { ViewOptions } from "@/components/tasks-table/Options/ViewOptions"
import { DataTable } from "@/components/tasks-table"
import { AdvancedFilter, AdvancedFilterButton } from "@/components/tasks-table/AdvancedFilter"
import { SimpleFilter } from "@/components/tasks-table/SimpleFilter/SimpleFilter"
import { AddFilterButton } from "@/components/tasks-table/AddFilter/AddFilterButton"

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

export default function FiltersPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col gap-16 bg-gray-100 p-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">Advanced Filter Dropdown</h3>
          <div className="bg-popover text-popover-foreground rounded-md border p-4 shadow-md">
            <AdvancedFilter state="default" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">When dragging into a group: show ring-ring ring-2</h3>
          <div className="bg-popover text-popover-foreground rounded-md border p-4 shadow-md">
            <AdvancedFilter state="drag" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">Filter not set</h3>
          <div className="flex flex-col gap-2 bg-background p-4">
            <div className="flex items-center gap-2">
              <AddFilterButton />
            </div>
            <DataTable data={sampleData} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">Filter added &gt; Status</h3>
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
          <h3 className="text-xl font-bold text-gray-900">Filter added &gt; Status, Priority, and some filters selected</h3>
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
          <h3 className="text-xl font-bold text-gray-900">Advanced Filter Button with dropdown</h3>
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
  )
}
