import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      category: "Residential",
      title: "Modern Eco House",
      description: "Sustainable living space with minimalist design approach",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      category: "Commercial",
      title: "Urban Office Complex",
      description: "Contemporary workspace design for modern businesses",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      category: "Cultural",
      title: "Art Gallery",
      description: "Innovative space designed for artistic expression",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">LATEST PROJECTS</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Works</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Discover our innovative architectural solutions and creative designs
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-black font-medium hover:underline"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">OUR TEAM</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Experts</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our team of skilled architects and designers bring your vision to life
            </p>
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from those who have experienced our architectural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Anderson",
                role: "Commercial Client",
                quote:
                  "Working with this architectural firm was an absolute pleasure. Their attention to detail and innovative design solutions transformed our vision into reality. Highly recommended!",
              },
              {
                name: "Jennifer Mitchell",
                role: "Residential Client",
                quote:
                  "The team's creative approach and professional execution exceeded our expectations. They created a space that perfectly balances functionality with aesthetic appeal.",
              },
              {
                name: "Mark Thompson",
                role: "Corporate Client",
                quote:
                  "Their sustainable design solutions and innovative thinking helped us create an environmentally conscious building without compromising on style.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0 space-y-4">
                  <p className="italic text-gray-600">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Create Something
                <br />
                Amazing Together
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your architectural vision into reality? Get in touch with our expert team today.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Office Location</h4>
                  <p className="text-gray-300">
                    123 Architecture Street
                    <br />
                    Design District, NY 10001
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-300">info@archix.com</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

