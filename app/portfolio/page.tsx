import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const categories = ["All", "Residential", "Commercial", "Interior", "Cultural", "Urban"]

  const projects = [
    {
      id: 1,
      title: "Modern Eco House",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
    {
      id: 2,
      title: "Urban Office Complex",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      year: "2022",
    },
    {
      id: 3,
      title: "Contemporary Art Gallery",
      category: "Cultural",
      image: "/placeholder.svg?height=400&width=600",
      year: "2021",
    },
    {
      id: 4,
      title: "Luxury Apartment Interior",
      category: "Interior",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
    {
      id: 5,
      title: "Sustainable Office Building",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      year: "2022",
    },
    {
      id: 6,
      title: "Minimalist Residence",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      year: "2021",
    },
    {
      id: 7,
      title: "Urban Plaza Design",
      category: "Urban",
      image: "/placeholder.svg?height=400&width=600",
      year: "2020",
    },
    {
      id: 8,
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      year: "2019",
    },
    {
      id: 9,
      title: "Boutique Hotel",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      year: "2018",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Explore our diverse collection of architectural projects
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-black text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                    >
                      <Link href={`/portfolio/${project.id}`}>View Project</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlighting our most innovative and impactful architectural work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Featured Project" fill className="object-cover" />
            </div>

            <div>
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-500">Commercial | 2023</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Urban Development</h3>
              <p className="text-gray-600 mb-6">
                This award-winning project represents our commitment to sustainable urban development. The complex
                integrates innovative green technologies, energy-efficient systems, and biophilic design principles to
                create a harmonious balance between the built environment and nature.
              </p>
              <p className="text-gray-600 mb-8">
                The development includes office spaces, residential units, and public areas, all designed to minimize
                environmental impact while maximizing user comfort and well-being.
              </p>

              <Button asChild className="bg-black text-white hover:bg-gray-800">
                <Link href="/portfolio/featured">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's collaborate to create an architectural solution that meets your unique needs and vision.
          </p>
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

