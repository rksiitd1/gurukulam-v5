import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Building } from "lucide-react"
import Image from "next/image"

export function Mentors() {
  const mentors = [
    {
      name: "Prof. Dr. Rajesh Kumar Sharma",
      title: "Professor, IIT Delhi",
      department: "Department of Mechanical Engineering",
      expertise: "Educational Innovation, Rural Technology",
      contribution: "Strategic guidance on curriculum development and institutional growth",
      image: "/placeholder.svg?height=200&width=200",
      credentials: ["Ph.D. IIT Delhi", "25+ years experience", "100+ research papers"],
      role: "Academic Advisor",
    },
    {
      name: "Dr. Meera Gupta",
      title: "Professor, Delhi University",
      department: "Department of Education",
      expertise: "Rural Education, Teacher Training",
      contribution: "Mentorship in pedagogical approaches and teacher development programs",
      image: "/placeholder.svg?height=200&width=200",
      credentials: ["Ph.D. Education", "20+ years experience", "Expert in rural pedagogy"],
      role: "Education Consultant",
    },
    {
      name: "Shri Anil Prakash",
      title: "Former IAS Officer",
      department: "Bihar Education Service",
      expertise: "Educational Administration, Policy Development",
      contribution: "Guidance on government relations and policy compliance",
      image: "/placeholder.svg?height=200&width=200",
      credentials: ["IAS 1985 Batch", "Former Education Secretary", "Rural development expert"],
      role: "Policy Advisor",
    },
    {
      name: "Dr. Sunita Devi",
      title: "Agricultural Scientist",
      department: "Bihar Agricultural University",
      expertise: "Sustainable Agriculture, Organic Farming",
      contribution: "Technical guidance for agricultural and environmental programs",
      image: "/placeholder.svg?height=200&width=200",
      credentials: ["Ph.D. Agriculture", "15+ years research", "Organic farming pioneer"],
      role: "Agriculture Mentor",
    },
    {
      name: "Shri Ramesh Chandra",
      title: "Social Entrepreneur",
      department: "Founder, Rural Development Foundation",
      expertise: "NGO Management, Community Development",
      contribution: "Strategic advice on organizational growth and sustainability",
      image: "/placeholder.svg?height=200&width=200",
      credentials: ["30+ years NGO experience", "Award-winning social worker", "Rural development expert"],
      role: "Strategic Advisor",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Child Psychologist",
      department: "AIIMS, New Delhi",
      expertise: "Child Development, Educational Psychology",
      contribution: "Guidance on holistic child development and mental health programs",
      image: "/placeholder.svg?height=200&width=200",
      credentials: ["Ph.D. Psychology", "Child development specialist", "10+ years clinical experience"],
      role: "Child Development Advisor",
    },
  ]

  const advisoryBoard = [
    {
      name: "Padma Shri Dr. A.P.J. Abdul Kalam Institute",
      type: "Institutional Partner",
      contribution: "Technical education guidance",
    },
    {
      name: "Bihar Rural Development Society",
      type: "Government Partner",
      contribution: "Policy and implementation support",
    },
    {
      name: "Bhartiya Shiksha Board",
      type: "Educational Partner",
      contribution: "Curriculum and cultural education",
    },
    {
      name: "Organic Farming Association of India",
      type: "Technical Partner",
      contribution: "Agricultural training and certification",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Mentors & Advisors
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Guided by
            <span className="text-purple-600 block">Distinguished Mentors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is strengthened by the wisdom and guidance of renowned academicians, policy makers, and social
            leaders who believe in our vision of rural transformation.
          </p>
          <p className="text-lg font-devanagari text-purple-700 mt-2">प्रतिष्ठित मार्गदर्शकों का साथ</p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                {/* Profile Image */}
                <div className="relative mx-auto w-24 h-24">
                  <Image
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white p-1.5 rounded-full shadow-lg">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm font-semibold text-purple-600">{mentor.title}</p>
                  <p className="text-xs text-gray-600">{mentor.department}</p>
                </div>

                {/* Role Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  {mentor.role}
                </div>

                {/* Expertise */}
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900 mb-1">Expertise:</p>
                  <p className="text-xs text-gray-600">{mentor.expertise}</p>
                </div>

                {/* Credentials */}
                <div className="space-y-1">
                  {mentor.credentials.map((credential, credIndex) => (
                    <div key={credIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">{credential}</span>
                    </div>
                  ))}
                </div>

                {/* Contribution */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 italic">"{mentor.contribution}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board & Partners */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Advisory Board & Partners</h3>
            <p className="text-gray-600 font-devanagari">सलाहकार मंडल और भागीदार</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advisoryBoard.map((partner, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                    <p className="text-sm text-purple-600 mb-1">{partner.type}</p>
                    <p className="text-xs text-gray-600">{partner.contribution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentorship Impact */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mentorship Impact</h3>
            <p className="text-gray-600 font-devanagari">मार्गदर्शन का प्रभाव</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Expert Mentors</div>
              <div className="text-sm text-gray-500">From top institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700 font-medium">Hours of Guidance</div>
              <div className="text-sm text-gray-500">Monthly mentorship</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Partner Organizations</div>
              <div className="text-sm text-gray-500">Collaborative support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Quality Assurance</div>
              <div className="text-sm text-gray-500">Expert-validated programs</div>
            </div>
          </div>
        </div>

        {/* Testimonial from Mentor */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-xl lg:text-2xl italic leading-relaxed">
              "Mukund's vision of combining modern education with traditional values is exactly what rural India needs.
              His dedication and the systematic approach of Divya Bihar Mission gives me confidence that this model can
              be replicated across the country."
            </blockquote>
            <cite className="text-lg opacity-90 block">- Prof. Dr. Rajesh Kumar Sharma, IIT Delhi</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
