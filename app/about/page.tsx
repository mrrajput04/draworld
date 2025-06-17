import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Leaf, CheckCircle, Clock, Award, Users, Building, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation",
      description:
        "We constantly push the boundaries of architectural design, embracing new technologies and methodologies to create forward-thinking solutions.",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible design practices that minimize ecological impact while maximizing efficiency and comfort.",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Quality",
      description:
        "We maintain uncompromising attention to detail in every aspect of our work, ensuring the highest standards of design and execution.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Experience",
      description:
        "With over two decades in the industry, our seasoned team brings valuable expertise and insights to every project we undertake.",
    },
  ]

  const milestones = [
    {
      year: "2003",
      title: "Company Founded",
      description: "Draworld was established with a vision to create innovative architectural solutions.",
    },
    {
      year: "2008",
      title: "First Major Project",
      description: "Completed our first landmark commercial project, establishing our reputation in the industry.",
    },
    {
      year: "2012",
      title: "Sustainability Focus",
      description: "Implemented our green building initiative, committing to sustainable design practices.",
    },
    {
      year: "2015",
      title: "International Expansion",
      description: "Opened our first international office, extending our services to global clients.",
    },
    {
      year: "2018",
      title: "Design Award",
      description: "Received prestigious architectural design award for innovative urban development project.",
    },
    {
      year: "2023",
      title: "20th Anniversary",
      description: "Celebrated two decades of architectural excellence and innovation.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Two decades of architectural excellence and innovation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2003, Draworld has grown from a small design studio to a leading architectural firm with a
                global presence. Our journey has been defined by a relentless pursuit of excellence and innovation in
                architectural design.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past two decades, we have successfully completed over 250 projects across residential,
                commercial, and cultural sectors, each reflecting our commitment to creating spaces that inspire and
                transform lives.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced architects, designers, and project managers brings diverse expertise and
                perspectives to every project, ensuring comprehensive solutions that exceed client expectations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-2 text-black" />
                  <span className="font-medium">Award-winning designs</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-black" />
                  <span className="font-medium">Expert team</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-6 w-6 mr-2 text-black" />
                  <span className="font-medium">250+ projects</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-black" />
                  <span className="font-medium">Global presence</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Draworld team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide our approach to architecture and design, shaping every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our two decades of architectural excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black z-10"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-sm font-bold text-gray-500 mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the experts who lead our architectural practice</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Principal Architect" },
              { name: "Michael Chen", role: "Senior Designer" },
              { name: "Emily Martinez", role: "Project Manager" },
              { name: "David Wilson", role: "Interior Designer" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 aspect-square relative mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold mb-2">250+</h3>
                <p>Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold mb-2">20+</h3>
                <p>Years Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold mb-2">40+</h3>
                <p>Team Members</p>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p>Design Awards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your architectural vision to life. Contact our team today to get started.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

