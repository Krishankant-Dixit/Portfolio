import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiAward, FiTarget, FiBookOpen, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const ref = useRef(null)
  const [photoError, setPhotoError] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const highlights = [
    {
      icon: <FiBookOpen size={24} />,
      title: 'Education',
      description: 'Computer Science Student with strong foundation in algorithms, data structures, and software engineering',
    },
    {
      icon: <FiTarget size={24} />,
      title: 'Current Focus',
      description: 'Building scalable web applications, AI/ML projects, and computer vision solutions',
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Career Goals',
      description: 'Aspiring to become a full-stack developer while exploring AI/ML innovations',
    },
    {
      icon: <FiAward size={24} />,
      title: 'Key Strengths',
      description: 'Problem-solving, rapid learning, clean code practices, and collaborative development',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Computer Science student with a deep passion for creating technology 
              that solves real-world problems. My journey in tech has led me through web 
              development, Python automation, and AI/ML applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building full-stack web applications using modern technologies 
              like React, Node.js, and Python. My recent projects focus on practical AI 
              solutions, including infrastructure detection systems, food quality analysis 
              tools, and intelligent automation platforms.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond coding, I'm constantly exploring new technologies, contributing to 
              open-source projects, and seeking opportunities to collaborate on innovative 
              solutions that make a positive impact.
            </p>
          </motion.div>

          {/* Image/Visual Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              {photoError ? (
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center text-white text-6xl font-bold">
                  KD
                </div>
              ) : (
                <img
                  src="/profile.jpg"
                  alt="Krishankant Dixit profile photo"
                  className="w-full h-full rounded-2xl object-cover"
                  loading="lazy"
                  onError={() => setPhotoError(true)}
                />
              )}
            </div>
            {/* Floating decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
