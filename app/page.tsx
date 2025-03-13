import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Lightbulb,
  Leaf,
  CheckCircle,
  Clock,
  PenTool,
  LayoutGrid,
  Recycle,
  ClipboardList,
  FileText,
  DollarSign,
} from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Crafting Spaces
              <br />
              Designing Dreams
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Transform your vision into reality with our innovative architectural solutions. We create spaces that
              inspire, endure, and elevate the human experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-gray-200">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">ABOUT US</h2>
          <h3 className="section-heading">
            Two Decades of Architectural
            <br />
            Excellence
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Founded in 2003, our architectural firm has been at the forefront of innovative design and sustainable
            architecture. We believe in creating spaces that not only meet functional requirements but also inspire and
            transform lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-black text-white p-8 text-center">
            <CardContent className="p-0">
              <h3 className="text-4xl font-bold mb-2">250+</h3>
              <p>Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="bg-black text-white p-8 text-center">
            <CardContent className="p-0">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p>Years Experience</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Innovation</h4>
            <p className="text-gray-600">Pushing boundaries in architectural design</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Leaf size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
            <p className="text-gray-600">Eco-friendly design solutions</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Quality</h4>
            <p className="text-gray-600">Uncompromising attention to detail</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Experience</h4>
            <p className="text-gray-600">Two decades of excellence</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">OUR SERVICES</h2>
            <h3 className="section-heading">Comprehensive Architectural Solutions</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              From concept to completion, we provide end-to-end architectural services tailored to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <PenTool size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Architectural Design</h4>
                <p className="text-gray-600 text-center">
                  Innovative and functional designs that transform spaces into memorable experiences.
                </p>
                <div className="text-center mt-4">
                  <Link href="/services#architectural-design" className="text-black font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <LayoutGrid size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Interior Planning</h4>
                <p className="text-gray-600 text-center">
                  Thoughtful interior layouts that maximize space efficiency and enhance user experience.
                </p>
                <div className="text-center mt-4">
                  <Link href="/services#interior-planning" className="text-black font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Recycle size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Sustainable Design</h4>
                <p className="text-gray-600 text-center">
                  Eco-friendly architectural solutions that minimize environmental impact
                </p>
                <div className="text-center mt-4">
                  <Link href="/services#sustainable-design" className="text-black font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <ClipboardList size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Project Management</h4>
                <p className="text-gray-600 text-center">
                  Comprehensive project oversight from initial concept to final construction
                </p>
                <div className="text-center mt-4">
                  <Link href="/services#project-management" className="text-black font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <FileText size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Building Permits</h4>
                <p className="text-gray-600 text-center">
                  Expert handling of all necessary permits and regulatory requirements.
                </p>
                <div className="text-center mt-4">
                  <Link href="/services#building-permits" className="text-black font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <DollarSign size={40} className="text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">Cost Estimation</h4>
                <p className="text-gray-600 text-center">
                  Detailed cost analysis and budget planning for your construction project.
                </p>
                <div className="text-center mt-4">
                  <Link href="/services#cost-estimation" className="text-black font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">PORTFOLIO</h2>
          <h3 className="section-heading">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-gray-600">Explore our diverse portfolio of architectural achievements</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <Button variant="ghost" className="rounded-l-md rounded-r-none border">
              All
            </Button>
            <Button variant="ghost" className="rounded-none border-t border-b border-r">
              Residential
            </Button>
            <Button variant="ghost" className="rounded-none border-t border-b border-r">
              Commercial
            </Button>
            <Button variant="ghost" className="rounded-r-md rounded-l-none border">
              Interior
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-200 aspect-square relative group overflow-hidden">
              <Image
                src={`/placeholder.svg?height=400&width=400`}
                alt={`Project ${item}`}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  <Link href={`/portfolio/project-${item}`}>View Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

