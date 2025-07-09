import React from 'react';
import { GraduationCap, User, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <User className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Bio</h3>
              <p className="text-gray-600 leading-relaxed">
                Hi, I'm Soumak Paul, a passionate Web Developer with a strong foundation in building 
                modern, responsive, and user-friendly websites and web applications. I specialize in 
                HTML, CSS, JavaScript, React.js, and backend technologies like Node.js and MongoDB. 
                Whether it's crafting clean UI designs or writing robust backend logic, I enjoy turning 
                ideas into reality through code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">B.Tech CSE (AI & ML)</h4>
                  <p className="text-gray-600">Brainware University</p>
                  <p className="text-sm text-gray-500">2023 – 2027</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Higher Secondary</h4>
                  <p className="text-gray-600">Jhakra High School</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Madhyamik</h4>
                  <p className="text-gray-600">Bala High School (H.S.)</p>
                  <p className="text-sm text-gray-500">2021</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="text-red-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Playing Football
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Drawing
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;