import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const programmingLanguages = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Python', level: 85, color: 'bg-blue-500' },
    { name: 'Java', level: 80, color: 'bg-red-500' },
    { name: 'C++', level: 75, color: 'bg-purple-500' },
    { name: 'C', level: 70, color: 'bg-gray-500' },
  ];

  const webTechnologies = [
    { name: 'React.js', level: 90, color: 'bg-blue-400' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'MongoDB', level: 80, color: 'bg-green-600' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
  ];

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`h-3 rounded-full ${skill.color}`}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Code className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              {programmingLanguages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Globe className="text-green-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">Web Technologies</h3>
            </div>
            <div className="space-y-4">
              {webTechnologies.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <Server className="text-blue-600 mx-auto mb-4" size={40} />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h4>
            <p className="text-gray-600">Building robust server-side applications with Node.js and database integration</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <Globe className="text-green-600 mx-auto mb-4" size={40} />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h4>
            <p className="text-gray-600">Creating responsive and interactive user interfaces with React.js</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <Database className="text-purple-600 mx-auto mb-4" size={40} />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Database Management</h4>
            <p className="text-gray-600">Designing and managing databases with MongoDB and SQL</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;