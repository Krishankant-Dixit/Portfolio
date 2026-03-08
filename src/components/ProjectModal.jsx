import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import { useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl my-8"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={24} />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      ?
                    </span>
                    Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    Solution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Architecture */}
                {project.architecture && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                        ⚙
                      </span>
                      Architecture
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {/* Outcome */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
                      ★
                    </span>
                    Outcome
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub size={20} />
                      View on GitHub
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink size={20} />
                      View Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
