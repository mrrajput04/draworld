import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PenTool, LayoutGrid, Recycle, ClipboardList, FileText, DollarSign, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "architectural-design",
      icon: <PenTool className="h-12 w-12" />,
      title: "Architectural Design",
      description:
        "Our architectural design services focus on creating innovative and functional spaces that meet your specific needs while pushing the boundaries of conventional design. We blend aesthetics with practicality to deliver unique architectural solutions.",
      features: [
        "Custom residential and commercial designs",
        "Concept development and visualization",
        "3D modeling and rendering",
        "Design documentation and presentation",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "interior-planning",
      icon: <LayoutGrid className="h-12 w-12" />,
      title: "Interior Planning",
      description:
        "Our interior planning services ensure that your spaces are not only beautiful but also functional and efficient. We create thoughtful layouts that maximize space utilization and enhance the overall user experience.",
      features: [
        "Space planning and optimization",
        "Interior layout design",
        "Furniture and fixture selection",
        "Material and finish recommendations",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "sustainable-design",
      icon: <Recycle className="h-12 w-12" />,
      title: "Sustainable Design",
      description:
        "Our sustainable design approach focuses on creating environmentally responsible buildings that minimize resource consumption and environmental impact while maximizing comfort and efficiency.",
      features: [
        "Energy-efficient building design",
        "Sustainable material selection",
        "Passive design strategies",
        "Green building certification assistance",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "project-management",
      icon: <ClipboardList className="h-12 w-12" />,
      title: "Project Management",
      description:
        "Our project management services ensure that your project is completed on time, within budget, and to the highest quality standards. We oversee every aspect of the project from initial concept to final construction.",
      features: [
        "Comprehensive project planning",
        "Budget management and cost control",
        "Schedule development and tracking",
        "Contractor coordination and oversight",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "building-permits",
      icon: <FileText className="h-12 w-12" />,
      title: "Building Permits",
      description:
        "Our building permit services handle all the necessary regulatory requirements to ensure your project complies with local building codes and regulations, streamlining the approval process.",
      features: [
        "Code analysis and compliance review",
        "Permit application preparation",
        "Regulatory agency coordination",
        "Permit expediting services",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "cost-estimation",
      icon: <DollarSign className="h-12 w-12" />,
      title: "Cost Estimation",
      description:
        "Our cost estimation services provide detailed analysis and budget planning for your construction project, helping you make informed decisions and avoid unexpected expenses.",
      features: [
        "Preliminary budget development",
        "Detailed cost estimates",
        "Value engineering options",
        "Budget tracking and management",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Comprehensive architectural solutions tailored to your vision
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we provide end-to-end architectural services that transform your ideas into
              reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  <div className="text-center">
                    <Link href={`#${service.id}`} className="text-black font-medium hover:underline">
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-16 ${index % 2 === 1 ? "bg-gray-100" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "order-2 lg:order-1" : ""}`}>
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="/contact">Request This Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how our architectural services can bring your vision to life.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

