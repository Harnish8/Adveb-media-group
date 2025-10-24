
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const MissionSection = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "We don't just execute projects—we architect digital strategies that create lasting competitive advantages for our clients."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "Unlike traditional agencies, we become an extension of your team, deeply understanding your business goals and challenges."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology curves, ensuring our clients always have access to cutting-edge solutions and emerging opportunities."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every solution we deliver undergoes rigorous testing and optimization to ensure peak performance and reliability."
    }
  ];

  const comparisonData = [
    {
      category: "Approach",
      traditional: "Project-based execution",
      adveb: "Strategic partnership & consultation"
    },
    {
      category: "Timeline",
      traditional: "Fixed deadlines, rushed delivery",
      adveb: "Iterative development with quality focus"
    },
    {
      category: "Communication",
      traditional: "Periodic status updates",
      adveb: "Real-time collaboration & transparency"
    },
    {
      category: "Technology",
      traditional: "Standard solutions",
      adveb: "Cutting-edge, future-ready tech stack"
    },
    {
      category: "Support",
      traditional: "Limited post-launch support",
      adveb: "Ongoing optimization & growth support"
    }
  ];

  return (
    <section className="bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Our Mission
            </span>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Bridging the Gap Between
            <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Vision & Execution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We exist to transform how businesses approach digital innovation, moving beyond traditional agency relationships to become true strategic partners.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">What Drives Us</h3>

            {/* Changed to 2-column grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">What Drives Us</h3>
            <div className="space-y-6">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div> */}

        {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 text-center">The Adveb Difference</h3>
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="relative w-48 h-48 mx-auto">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 border-8 border-blue-200 rounded-full"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-800 rounded-full flex items-center justify-center"
                    >
                      <div className="text-center text-white">
                        <div className="text-3xl font-bold">95%</div>
                        <div className="text-sm">Client Satisfaction</div>
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        {/* </div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Traditional Agencies vs. Our Approach
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-4 px-6 font-semibold text-gray-600">Aspect</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-600">Traditional Agencies</th>
                  <th className="text-left py-4 px-6 font-semibold text-blue-600">Adveb Approach</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-semibold">{item.category}</td>
                    <td className="py-4 px-6 text-gray-600">{item.traditional}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{item.adveb}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;