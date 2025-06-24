import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, CheckCircle, Calendar, Phone, Mail } from "lucide-react"

export function AdmissionProcess() {
  const steps = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online application form with required details",
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      duration: "5-10 minutes",
      requirements: ["Basic student information", "Parent/guardian details", "Academic records"],
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents for verification",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      duration: "1-2 days",
      requirements: [
        "Birth certificate",
        "Academic transcripts",
        "Income certificate",
        "Caste certificate (if applicable)",
      ],
    },
    {
      step: 3,
      title: "Interview & Assessment",
      description: "Personal interview with student and parents",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      duration: "30-45 minutes",
      requirements: ["Student interaction", "Parent counseling", "Academic assessment", "Financial discussion"],
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Receive admission decision and complete enrollment",
      icon: <Calendar className="w-6 h-6 text-purple-500" />,
      duration: "2-3 days",
      requirements: ["Admission letter", "Fee payment", "Medical checkup", "Hostel allocation (if applicable)"],
    },
  ]

  const admissionCriteria = {
    gurukul: {
      title: "Divya Bihar Gurukul",
      criteria: [
        "Age: 5-16 years for new admissions",
        "Basic literacy for higher grades",
        "Commitment to residential life",
        "Family income below ₹2 lakh/year (preferred)",
        "Willingness to follow gurukul discipline",
      ],
      documents: [
        "Birth certificate",
        "Previous school records",
        "Income certificate",
        "Medical fitness certificate",
        "Character certificate",
      ],
    },
    shriClasses: {
      title: "Shri Classes",
      criteria: [
        "Students in grades 9-12",
        "Basic proficiency in Mathematics and Science",
        "Regular attendance commitment",
        "Serious about competitive exams",
        "Local residence preferred",
      ],
      documents: ["School ID card", "Previous year mark sheet", "Parent consent letter", "Address proof"],
    },
    agriculture: {
      title: "Agriculture Program",
      criteria: [
        "Age: 18+ years",
        "Own or access to farmland",
        "Basic literacy",
        "Commitment to sustainable farming",
        "Willingness to adopt new techniques",
      ],
      documents: ["Land ownership documents", "Identity proof", "Address proof", "Bank account details"],
    },
    udyamita: {
      title: "Udyamita Program",
      criteria: [
        "Age: 18-45 years",
        "Basic education (Class 8+)",
        "Entrepreneurial mindset",
        "Local residence",
        "Women candidates preferred",
      ],
      documents: [
        "Educational certificates",
        "Identity proof",
        "Address proof",
        "Bank account details",
        "Business idea proposal",
      ],
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Admission Process
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple & Transparent
            <span className="text-blue-600 block">Admission Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe education should be accessible to all. Our admission process is designed to be simple,
            transparent, and focused on identifying students who will benefit most from our programs.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">सरल और पारदर्शी प्रवेश प्रक्रिया</p>
        </div>

        {/* Admission Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">4-Step Admission Process</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={step.step} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">{step.icon}</div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-gray-700 mb-2">Duration: {step.duration}</p>
                      <div className="space-y-1">
                        {step.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 inline-block">
              <h4 className="font-semibold text-gray-900 mb-2">Total Process Duration</h4>
              <p className="text-2xl font-bold text-blue-600">7-10 Days</p>
              <p className="text-sm text-gray-600">From application to admission confirmation</p>
            </div>
          </div>
        </div>

        {/* Program-wise Admission Criteria */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Program-wise Admission Criteria</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(admissionCriteria).map(([key, program]) => (
              <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">{program.title}</h4>

                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Eligibility Criteria:</h5>
                      <div className="space-y-2">
                        {program.criteria.map((criterion, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{criterion}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Required Documents:</h5>
                      <div className="space-y-2">
                        {program.documents.map((document, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Help with Admissions?</h3>
            <p className="text-gray-600 font-devanagari">प्रवेश में सहायता चाहिए?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-sm text-gray-600 mb-2">Admission Helpline</p>
              <p className="text-blue-600 font-medium">+91 98765 43210</p>
              <p className="text-xs text-gray-500">Mon-Sat, 9 AM - 6 PM</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
              <p className="text-sm text-gray-600 mb-2">Admission Queries</p>
              <p className="text-green-600 font-medium">admissions@divyabiharmission.in</p>
              <p className="text-xs text-gray-500">Response within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-sm text-gray-600 mb-2">Campus Tour</p>
              <p className="text-orange-600 font-medium">Schedule a Visit</p>
              <p className="text-xs text-gray-500">Prior appointment required</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
              Start Application
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
