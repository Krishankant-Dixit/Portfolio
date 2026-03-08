import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add the actual resume PDF to the public folder
    link.download = 'Krishankant_Dixit_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={24} />,
      url: 'https://github.com/Krishankant-Dixit',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/krishankant-dixit-xb5',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: <FiMail size={24} />,
      url: 'mailto:krishankantdixit778@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
            Hi there! 👋 I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient"
        >
          Krishankant Dixit
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium"
        >
          Computer Science Student | Web Developer | Python Developer | AI Enthusiast
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about building real-world tech solutions that make a difference. 
          Specializing in web development, Python automation, and AI-powered applications 
          that solve practical problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={handleViewProjects}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <FiArrowDown className="animate-bounce" />
          </motion.button>

          <motion.button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
