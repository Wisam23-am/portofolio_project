export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-heading font-black text-2xl mb-4">Portfolio</h3>
              <p className="font-body text-primary-foreground/80 leading-relaxed">
                Crafting beautiful, functional web experiences with modern technologies and creative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body">
                {["About", "Projects", "Skills", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-2 font-body text-primary-foreground/80">
                <p>aqilamadani23@gmail.com</p>
                <p>+6285175426496</p>
                <p>Paciran, Lamongan</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-primary-foreground/60 text-sm">© 2025 Wisam Portfolio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
