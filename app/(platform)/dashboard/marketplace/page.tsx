import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next" 
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h3 className="text-lg font-medium">Candidates</h3>
            <p className="text-sm text-muted-foreground">
              Get the list of candidates here
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button>Send Email</Button>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div >
    </>
  )
}
