import { FaLinkedin, FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">Job</span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Sphere
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
            Connecting talent with opportunity. Discover your dream job
            and take the next step toward a successful career.
          </p>

          
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition duration-300 hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition duration-300 hover:scale-110"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition duration-300 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300 hover:scale-110"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Jobs
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Browse
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-5 text-lg">Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
              FAQs
            </li>
          </ul>
        </div>
      </div>

   
      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} JobSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;