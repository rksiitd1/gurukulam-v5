import { GurukulHero } from "@/components/programs/gurukul/gurukul-hero"
import { GurukulCurriculum } from "@/components/programs/gurukul/gurukul-curriculum"
import { GurukulFacilities } from "@/components/programs/gurukul/gurukul-facilities"
import { GurukulAdmission } from "@/components/programs/gurukul/gurukul-admission"
import { GurukulTestimonials } from "@/components/programs/gurukul/gurukul-testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function GurukulPage() {
  return (
    <main>
      <GurukulHero />
      <GurukulCurriculum />
      <GurukulFacilities />
      <GurukulAdmission />
      <GurukulTestimonials />
      <CallToAction />
    </main>
  )
}
