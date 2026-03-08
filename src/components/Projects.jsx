import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      id: 1, 
      title: 'MessageBoard-CHATIFY', 
      description: 'Chatify is a secure message board that enables users to communicate through a clean and simple chat interface.', 
      technologies: ['React.js', 'Node.js', 'Blockchain', 'Smart Contracts', 'Firebase'], 
      featured: true, 
      githubUrl: 'https://github.com/Krishankant-Dixit', 
      liveUrl: '', 
      problem: 'Lack of secure communication in traditional message boards,Risk of message tampering or data loss in centralized systems,Weak user authentication systems in many chat platforms,Poor integration of modern technologies like Web3 and blockchain for secure messaging.', 
      solution: 'Chatify solves this by using Web3 and blockchain technology to provide secure authentication and immutable message records, ensuring safe, transparent, and trustworthy communication for users.', 
      architecture: 'Chatify uses a mobile-first frontend (React/Expo) connected to Firebase backend services for authentication and real-time messaging, while blockchain smart contracts store cryptographic message proofs for tamper-proof verification.', 
      outcome: 'This architecture ensures secure, transparent, and trustworthy communication, enabling users to send messages confidently with verified integrity and scalable real-time performance.',
    },
    {
      id: 2,
      title: 'Pothole Detection System',
      description: 'Computer vision system that detects potholes in road images using Python and OpenCV, helping improve road infrastructure monitoring.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Image Processing'],
      featured: true,
      githubUrl: 'https://github.com/Krishankant-Dixit',
      liveUrl: 'https://potholdetection.vercel.app/',
      problem: 'Road infrastructure monitoring is time-consuming and often inefficient. Potholes can cause accidents and vehicle damage, but manual detection is labor-intensive and doesn\'t scale well.',
      solution: 'Developed an automated computer vision system using Python and OpenCV that analyzes road images to detect potholes. The system uses image processing techniques and machine learning algorithms to identify and classify road defects with high accuracy.',
      architecture: 'Built using Python with OpenCV for image processing, implementing edge detection, contour analysis, and custom ML models trained on road imagery datasets. The system processes images in real-time and provides detailed reports on detected potholes.',
      outcome: 'Successfully created a working prototype that can detect potholes with good accuracy. The system can process multiple images efficiently and provides valuable data for infrastructure maintenance planning.',
    },
    {
      id: 3,
      title: 'MessFoodLens',
      description: 'AI-based system that analyzes food images to detect hygiene and quality in mess food, ensuring better food safety standards.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'MongoDB'],
      featured: true,
      githubUrl: 'https://github.com/Krishankant-Dixit',
      liveUrl: '',
      problem: 'Food quality and hygiene in institutional mess facilities are critical concerns, but manual inspection is inconsistent and subjective. Students and staff need an objective way to assess food quality and report issues.',
      solution: 'Created an AI-powered application using YOLOv8 for object detection to analyze food images. The system detects potential hygiene issues, freshness indicators, and quality metrics. Backend built with FastAPI handles image processing and stores data in MongoDB.',
      architecture: 'Utilizes YOLOv8 for real-time object detection and classification, OpenCV for image preprocessing, FastAPI for RESTful backend services, and MongoDB for storing analysis results and user feedback. The system provides a confidence score for each analysis.',
      outcome: 'Developed a functional AI system that can analyze food images and provide objective quality assessments. The tool has potential to improve food safety monitoring in institutional settings and empower users to make informed decisions.',
    },
    // {
    //   id: 4,
    //   title: 'Blog Platform',
    //   description: 'Full-stack blogging platform with rich text editor, user authentication, and content management.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    //   featured: false,
    //   githubUrl: 'https://github.com/Krishankant-Dixit',
    //   liveUrl: '',
    //   problem: 'Content creators need a simple yet powerful platform to share their thoughts and ideas without the complexity of major blogging platforms.',
    //   solution: 'Developed a clean, user-friendly blogging platform with modern UI, rich text editing capabilities, user authentication, and SEO-optimized content delivery.',
    //   architecture: 'Full MERN stack application with React frontend, Node.js/Express backend, and MongoDB database. Implements JWT authentication, role-based access control, and optimized content delivery.',
    //   outcome: 'Built a fully functional blogging platform that demonstrates full-stack development skills and provides a great user experience for both writers and readers.',
    // },
    // {
    //   id: 5,
    //   title: 'Freelance Marketplace',
    //   description: 'Platform connecting freelancers with clients, featuring project posting, bidding, and secure payments.',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    //   featured: false,
    //   githubUrl: 'https://github.com/Krishankant-Dixit',
    //   liveUrl: '',
    //   problem: 'Small businesses and freelancers need a streamlined way to connect, collaborate, and handle transactions securely.',
    //   solution: 'Created a marketplace platform where clients can post projects, freelancers can submit proposals, and both parties can manage work and payments through an integrated system with Stripe payment processing.',
    //   architecture: 'React frontend with Redux state management, Node.js/Express RESTful API, PostgreSQL database with complex relational schema, and Stripe integration for secure payment processing.',
    //   outcome: 'Developed a marketplace platform showcasing skills in building complex business logic, payment integrations, and user management systems.',
    // },
    // {
    //   id: 6,
    //   title: 'Finance Tracker',
    //   description: 'Personal finance management app with expense tracking, budgeting, and financial insights.',
    //   technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    //   featured: false,
    //   githubUrl: 'https://github.com/Krishankant-Dixit',
    //   liveUrl: '',
    //   problem: 'Individuals struggle to track expenses and manage personal finances effectively without proper tools and insights.',
    //   solution: 'Built a comprehensive finance tracking application that allows users to record expenses, set budgets, categorize spending, and visualize financial data through interactive charts and reports.',
    //   architecture: 'React frontend with data visualization libraries, Python/FastAPI backend for business logic and data processing, PostgreSQL for secure data storage, and custom algorithms for financial analysis.',
    //   outcome: 'Created a practical finance management tool that helps users gain control over their spending habits and make informed financial decisions through clear visualizations and actionable insights.',
    // },
  ]

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects demonstrating expertise in web development, Python, AI, and computer vision
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            More projects coming soon! Check out my GitHub for additional work.
          </p>
          <motion.a
            href="https://github.com/Krishankant-Dixit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All on GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects
