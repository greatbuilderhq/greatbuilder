import { Separator } from "@/components/ui/separator"
import { JobForm } from "./jobs"
import { Button } from "@/components/ui/button"

export default function JobPage() {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between space-y-2">
        <div>
          <h3 className="text-lg font-medium">Jobs</h3>
          <p className="text-sm text-muted-foreground">
            Fill out the job Detials you want to hire
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>Start Scouting</Button>
        </div>
      </div>
      <Separator />
      <JobForm />
    </div>
  )
}
