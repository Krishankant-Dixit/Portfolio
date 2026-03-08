import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiStar, FiGitBranch, FiCode, FiExternalLink } from 'react-icons/fi'

const GitHubSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: <FiCode size={32} />,
      label: 'Public Repositories',
      value: '15+',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <FiGitBranch size={32} />,
      label: 'Contributions',
      value: '500+',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: <FiStar size={32} />,
      label: 'Stars Earned',
      value: '50+',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Open source contributions and personal projects
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-12 rounded-2xl shadow-2xl text-white"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
                <FiGithub size={48} />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Krishankant Dixit
              </h3>
              <p className="text-gray-300 mb-4 text-lg">
                @Krishankant-Dixit
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Passionate developer building real-world solutions with Python, JavaScript, 
                and AI. Check out my repositories for web development projects, AI/ML experiments, 
                and computer vision applications.
              </p>
              <motion.a
                href="https://github.com/Krishankant-Dixit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={20} />
                Visit GitHub Profile
                <FiExternalLink size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Always learning, always building. Follow me to stay updated with my latest projects!
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GitHubSection
