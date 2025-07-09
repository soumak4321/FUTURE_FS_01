import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-blue-600" size={40} />,
      title: 'Custom Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React.js, Node.js, and MongoDB. From concept to deployment.',
      features: ['Custom web applications', 'API development', 'Database design', 'Performance optimization'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Server className="text-green-600" size={40} />,
      title: 'Frontend + Backend Integration',
      description: 'Seamless integration of frontend interfaces with robust backend systems, ensuring smooth data flow and optimal user experience.',
      features: ['RESTful API integration', 'Database connectivity', 'Authentication systems', 'Real-time features'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <Palette className="text-purple-600" size={40} />,
      title: 'Responsive UI Design',
      description: 'Creating beautiful, responsive user interfaces that work perfectly across all devices and screen sizes.',
      features: ['Mobile-first design', 'Cross-browser compatibility', 'Modern CSS frameworks', 'Interactive components'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Smartphone className="text-orange-600" size={40} />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with shopping cart, payment integration, inventory management, and admin dashboards.',
      features: ['Shopping cart functionality', 'Payment gateway integration', 'Order management', 'Admin dashboard'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;