import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'
import { MdCall, MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-sm text-white py-12">
      <div className="container-md mx-auto lg:px-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProspertyHomes</h3>
            <p className="mb-4 text-xs">Your trusted partner in finding the perfect home.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick as</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-100 text-xs">Home</a></li>
              <li><a href="#about" className="hover:text-gray-100 text-xs">About Us</a></li>
              <li><a href="#staff" className="hover:text-gray-100 text-xs">Our Team</a></li>
              <li><a href="#testimonials" className="hover:text-gray-100 text-xs">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gray-100 text-xs">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 text-xs">Property Listings</a></li>
              <li><a href="#" className="hover:text-blue-400 text-xs">Property Management</a></li>
              <li><a href="#" className="hover:text-blue-400 text-xs">Real Estate Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 text-xs">Market Analysis</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-blue-400 text-xs">T&C</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 text-xs">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 text-xs">Help Center</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=447460736929&text&type=phone_number&app_absent=0" className="hover:text-blue-400 text-xs">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 text-xs border border-slate-50 flex items-center rounded-md space-x-4 p-2"><FaLocationArrow /> <span>Building 74 Spaces, Hemel Hempstead HP2 7TG, United Kingdom</span></p>
            <a href="https://api.whatsapp.com/send/?phone=447460736929&text&type=phone_number&app_absent=0"><p className="mb-2 text-xs border border-slate-50 flex items-center rounded-md space-x-4 p-2"><FaWhatsapp /> <span>Whatsapp</span></p></a>
            <a href='tel:+447460736929'><p className="mb-2 text-xs border border-slate-50 flex items-center rounded-md space-x-4 p-2"><MdCall /> <span>+447460736929</span></p></a>
            <a href="mailto:help@prospertyhomes.com"><p className="mb-2 text-xs border border-slate-50 flex items-center rounded-md space-x-4 p-2"><MdEmail /> <span>help@prospertyhomes.com</span> </p></a>
          </div>
        </div>
        <div className="border-t border-gray-700 text-xs mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ProspertyHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

