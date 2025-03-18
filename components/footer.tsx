import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">DRA WORLD</h3>
            <p className="text-sm text-gray-400">
              Creating innovative architectural solutions that inspire and transform spaces since 2023.
            </p>
            <p className="text-sm text-gray-400">© 2024 DRA. All rights reserved.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#architectural-design"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="/services#interior-planning" className="text-gray-400 hover:text-white transition-colors">
                  Interior Planning
                </Link>
              </li>
              <li>
                <Link href="/services#project-management" className="text-gray-400 hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Subscribe to our newsletter</h4>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
              <Button variant="outline" className="whitespace-nowrap bg-white text-black hover:bg-gray-200">
                Subscribe
              </Button>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              {" | "}
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              {" | "}
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

