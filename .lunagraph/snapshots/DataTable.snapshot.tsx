import * as React from "react";
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DataTablePagination } from "../../components/tasks-table/data-table-pagination";
import { DataTableToolbar } from "../../components/tasks-table/data-table-toolbar";
import { columns as tasksColumns } from "../../components/tasks-table/columns";
import tasksData from "@/components/tasks-table/tasks.json";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTableSnapshot({
  __onRender,
  columns = tasksColumns,
  data = tasksData,
  rowSelection,
  columnVisibility,
  columnFilters,
  sorting,
}: {
  columns?: import("/Users/putri/code/greenboard-design/node_modules/.pnpm/@tanstack+table-core@8.21.3/node_modules/@tanstack/table-core/build/lib/types").ColumnDef<TData, TValue>[]
  data?: TData[]
  rowSelection?: Record<string, any>
  columnVisibility?: Record<string, any>
  columnFilters?: any[]
  sorting?: any[]
} & { __onRender?: (element: React.ReactElement) => void }) {
  const setRowSelection = () => {}
  const setColumnVisibility = () => {}
  const setColumnFilters = () => {}
  const setSorting = () => {}
  const table = useReactTable({
  data,
  columns,
  state: {
    sorting,
    columnVisibility,
    rowSelection,
    columnFilters
  },
  initialState: {
    pagination: {
      pageSize: 25
    }
  },
  enableRowSelection: true,
  onRowSelectionChange: setRowSelection,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  onColumnVisibilityChange: setColumnVisibility,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues()
});

  const __element = (
    <div className="flex flex-col gap-4">
      <DataTableToolbar table={table} />
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
            return <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>;
          })}
              </TableRow>)}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? table.getRowModel().rows.map(row => <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map(cell => <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>)}
                </TableRow>) : <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )

  // Pass element tree to parent via callback once on mount
  // Only run once to avoid infinite loop (setElements triggers re-render)
  const __didRender = React.useRef(false)
  React.useLayoutEffect(() => {
    if (!__didRender.current && __onRender) {
      __didRender.current = true
      __onRender(__element)
    }
  }, [])

  // Return the actual element for rendering in canvas
  return __element
}