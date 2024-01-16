import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  name: z.string(),
  url: z.string(),
  company: z.string(),
  exp: z.string(),
  status: z.string(),
})

export type Task = z.infer<typeof taskSchema>
