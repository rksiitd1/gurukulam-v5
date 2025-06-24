import { ProgramsOverview } from "@/components/programs/programs-overview"
import { ProgramsGrid } from "@/components/programs/programs-grid"
import { AdmissionProcess } from "@/components/programs/admission-process"
import { CallToAction } from "@/components/call-to-action"

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsOverview />
      <ProgramsGrid />
      <AdmissionProcess />
      <CallToAction />
    </main>
  )
}
