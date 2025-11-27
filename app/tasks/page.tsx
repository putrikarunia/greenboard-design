import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { DataTableTasks, columns } from "@/components/tasks-table"
import tasksData from "@/components/tasks-table/tasks.json"

export default function TasksPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">Tasks</h1>
              <p className="text-muted-foreground">
                Manage and track your tasks.
              </p>
            </div>
            <DataTableTasks data={tasksData} columns={columns} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
