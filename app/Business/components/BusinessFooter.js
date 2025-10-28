import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {

  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have accelerated their growth with our 
            Integrated IT, Marketing, and Business Consulting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Meet Our Leadership Team
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-white">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">Adveb Solutions</span>
            </div>
            <p className="text-white mb-4">
              Excellence in IT, Marketing and Business capabilities amplifying your success exponentially.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-white hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-white hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white">
              <li><a href="https://adveb-media-group-it.vercel.app/" className="hover:text-white" target="_blank">IT Services</a></li>
              <li><a href="Marketing" className="hover:text-white" target="_blank">Marketing Solutions</a></li>
              <li><a href="Business" className="hover:text-white" target="_blank">Business Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Leadership Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">News & Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-white">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@advebsolutions.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Sydney, CA 94102</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-white">
          <p>&copy; 2025 Adveb Media Group. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

