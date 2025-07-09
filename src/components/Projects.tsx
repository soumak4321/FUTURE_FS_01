import React from 'react';
import { ExternalLink, Github, ShoppingCart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Full-stack e-commerce platform with product browsing, shopping cart, order management, and user authentication. Features include product search, filtering, secure payment integration, and admin dashboard.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'User authentication (login/logout)',
        'Product browsing and search',
        'Shopping cart functionality',
        'Order management system',
        'Responsive design'
      ],
      icon: <ShoppingCart className="text-blue-600" size={24} />,
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Canteen Service Website',
      description: 'Modern canteen management system designed for educational institutions. Features menu management, order tracking, and efficient service delivery with real-time updates.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      features: [
        'Menu management system',
        'Order tracking',
        'Real-time notifications',
        'User-friendly interface',
        'Admin dashboard'
      ],
      icon: <Coffee className="text-green-600" size={24} />,
      gradient: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-48 ${project.bgColor} relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      <Github size={16} />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;