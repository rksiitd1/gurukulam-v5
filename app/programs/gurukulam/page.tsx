import { GurukulHero } from "@/components/programs/gurukulam/gurukul-hero"
import { GurukulCurriculum } from "@/components/programs/gurukulam/gurukul-curriculum"
import { GurukulFacilities } from "@/components/programs/gurukulam/gurukul-facilities"
import { GurukulAdmission } from "@/components/programs/gurukulam/gurukul-admission"
import { GurukulTestimonials } from "@/components/programs/gurukulam/gurukul-testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function GurukulamPage() {
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
