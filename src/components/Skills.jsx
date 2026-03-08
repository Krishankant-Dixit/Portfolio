import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOpencv,
  SiGit,
  SiGithub,
  SiDocker,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { TbBrain } from 'react-icons/tb'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-600' },
        { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-600' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
        { name: 'React', icon: <SiReact />, color: 'text-cyan-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
        { name: 'Python', icon: <SiPython />, color: 'text-blue-500' },
        { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-600' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
      ],
    },
    {
      title: 'AI / Computer Vision',
      skills: [
        { name: 'OpenCV', icon: <SiOpencv />, color: 'text-red-600' },
        { name: 'YOLO', icon: <TbBrain />, color: 'text-purple-600' },
        { name: 'Machine Learning', icon: <TbBrain />, color: 'text-indigo-600' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
        { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-800 dark:text-white' },
        { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
        { name: 'VS Code', icon: <VscCode />, color: 'text-blue-600' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const categoryVariants = {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={categoryVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={categoryVariants}
          className="mt-12 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 p-8 rounded-xl border border-blue-500/20 dark:border-blue-500/10"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Always learning and exploring new technologies to stay at the cutting edge of development
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
