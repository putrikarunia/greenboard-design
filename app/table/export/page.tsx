"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { ExportButton } from "@/components/tasks-table/Export/ExportButton"
import ExportProgressToast from "@/components/tasks-table/Export/ExportProgressToast"
import { Button } from "@/components/ui/button"
import { ViewOptions } from "@/components/tasks-table/Options/ViewOptions"
import { Text } from "@/components/ui/text"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DataTable } from "@/components/tasks-table"
import { SimpleFilter } from "@/components/tasks-table/SimpleFilter/SimpleFilter"
import { AddFilterButton } from "@/components/tasks-table/AddFilter/AddFilterButton"
import { ActionToolbar } from "@/components/tasks-table/RowAction/ActionToolbar"
import { SortRow } from "@/.lunagraph/components"


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

export default function ExportPage() {
  const [exportValue, setExportValue] = useState(45)

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-8 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900">Export Progress Toast</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">Interactive Demo</h3>
          <div className="bg-background rounded-md border p-6">
            <div className="flex items-center gap-8">
              <div className="flex-1 flex items-center justify-center">
                <ExportProgressToast value={exportValue} />
              </div>
              <div className="flex flex-col gap-2 w-48">
                <label className="text-sm font-medium text-muted-foreground">
                  Progress: {exportValue}%
                </label>
                <Slider
                  value={[exportValue]}
                  onValueChange={([val]) => setExportValue(val)}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">States</h3>
          <div className="bg-background rounded-md border p-6">
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <div className="flex flex-col gap-2 items-center">
                <span className="text-sm text-muted-foreground">In Progress (10%)</span>
                <ExportProgressToast value={10} />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-sm text-muted-foreground">Completed (100%)</span>
                <ExportProgressToast value={100} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-900">Export Button</h3>
          <div className="bg-background rounded-md border p-6">
            <ExportButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900">Full Page Preview (1440 x 900)</h2>
        <div className="flex justify-center">
          <div className="relative w-[1440px] h-[900px] bg-gray-50 flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            {/* Header */}
            <div className="w-full h-16 bg-primary flex-shrink-0" />

            {/* Content */}
            <div className="flex-1 flex flex-col items-center overflow-auto">
              <div className="w-full max-w-[1200px] flex flex-col px-6">
                {/* Breadcrumb & Title Section */}
                <div className="flex flex-col py-8 gap-6">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <span>Home</span>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <span>Tasks</span>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="flex flex-col gap-1">
                    <Text size="2xl" weight="semibold">Tasks List</Text>
                    <Text size="sm" weight="regular" variant="muted">Manage all your administrator tasks here</Text>
                  </div>
                </div>

                {/* Filters & Table */}
                <div className="bg-background p-6 flex flex-col gap-3 border">
                  <div className="flex items-center gap-2">
                    <SimpleFilter options={statusOptionsWithSelected} />
                    <SimpleFilter options={statusOptions} label="Priority" />
                    <AddFilterButton />
                    <Button className="ml-auto text-muted-foreground" size="sm" variant="ghost">
                      Reset
                    </Button>
                    <ViewOptions />
                    <ExportButton />
                  </div>
                  <DataTable data={sampleData} />
                </div>
              </div>
            </div>

            {/* Export Toast - Floating at bottom right */}
            <div className="absolute bottom-6 right-6">
              <ExportProgressToast value={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
