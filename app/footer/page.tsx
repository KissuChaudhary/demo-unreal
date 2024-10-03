const Footer = () => {
  return (
        <footer className="bg-gray-900 text-gray-300 py-10 pt-18">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="footer-logo mb-5">
  <img src="/content/footer-logo.svg" alt="Unrealshot AI Logo" className="w-50 h-auto" />
</div>

          <p className="text-gray-400 text-sm mb-6">
            Create professional, high-quality AI-generated headshots in minutes with Unrealshot AI, our easy-to-use AI headshot generator. Perfect for businesses and individuals looking to elevate their profile with stunning, custom portraits.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            
            <li>
              <a href="/contact-us" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
             <li>
              <a href="/faqs" className="hover:text-white transition">
                FAQs
              </a>
            </li>
             <li>
              <a href="/terms" className="hover:text-white transition">
                Terms
              </a>
            </li>
            <li>
              <a href="/refund-policy" className="hover:text-white transition">
                Refunds
              </a>
            </li>
           
            <li>
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
           
      
          </ul>
        </div>
 {/* Free AI Tools Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Free AI Tools</h3>
          <ul className="space-y-2">
            <li>
              <a href="/linkedin-bio-generator" className="hover:text-white transition">
                LinkedIn Bio Generator
              </a>
            </li>
             <li>
              <a href="/linkedin-headline-generator" className="hover:text-white transition">
                LinkedIn Headline Generator
              </a>
            </li>
             <li>
              <a href="/linkedin-post-generator" className="hover:text-white transition">
                LinkedIn Post Generator
              </a>
            </li>
             <li>
              <a href="/instagram-bio-generator" className="hover:text-white transition">
                Instagram Bio Generator
              </a>
            </li>
             <li>
              <a href="/instagram-caption-generator" className="hover:text-white transition">
                Instagram Caption Generator
              </a>
            </li>
          </ul>
        </div>
       {/* Social Links */}
<div>
  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com/profile.php?id=61565396552674" aria-label="Facebook" className="hover:text-blue-500 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-6 h-6"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
    </a>
    <a href="https://x.com/UnrealshotAI" aria-label="Twitter" className="hover:text-blue-400 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-6 h-6"
      >
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg>
    </a>
    <a href="https://www.instagram.com/UnrealshotAI/" aria-label="Instagram" className="hover:text-indigo-600 transition">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 16 16"
        className="w-6 h-6"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
      </svg>
    </a>
  </div>
</div>
      </div>
            {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-white-500">
          © 2024 UnrealShot AI. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
