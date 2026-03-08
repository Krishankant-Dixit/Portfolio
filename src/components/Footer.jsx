import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/Krishankant-Dixit',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/krishankant-dixit-xb5',
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      url: 'mailto:krishankantdixit778@gmail.com',
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Krishankant Dixit
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Building innovative solutions through code. Passionate about web development, 
              Python, and AI technologies.
            </p>
            <p className="text-sm text-gray-500">
              Available for freelance projects and collaborations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center sm:text-left">
              <p className="flex items-center justify-center sm:justify-start gap-2">
                © {currentYear} Krishankant Dixit. Made with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FiHeart className="text-red-500" />
                </motion.span>{' '}
                and React
              </p>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
