const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: info@essaouiralive.com</p>
              <p>Phone: +212 524 123 456</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-300 transition duration-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-yellow-300 transition duration-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-yellow-300 transition duration-300">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <a href="#" className="block hover:text-yellow-300 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-yellow-300 transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Essaouira Live. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  