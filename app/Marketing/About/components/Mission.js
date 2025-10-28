'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AppIcon from '../../../components/AppIcon'
import Button from './../../../components/ui/Button'

const brandStory = {
  mission: {
    title: "Our Mission",
    icon: "Target",
    content: `We exist to transform businesses through the convergence of expertise. In an interconnected world, 
              success requires more than isolated solutions it demands integrated excellence across technology, 
              marketing, and strategy.`,
    highlights: [
      "Integrated expertise across all business functions",
      "Transformational outcomes through collaboration",
      "Strategic partnerships that drive growth",
      "Innovation at the intersection of disciplines"
    ]
  },
  approach: {
    title: "Our Approach",
    icon: "Zap",
    content: `Our professional services versatile yet specialized, comprehensive yet focused. 
              We don't just deliver services; we create ecosystems where IT infrastructure enables marketing excellence, 
              marketing insights drive business strategy, and business goals shape technology decisions.`,
    highlights: [
      "Cross functional collaboration from day one",
      "Holistic solutions that amplify each other",
      "Data driven insights across all domains",
      "Scalable frameworks for sustainable growth"
    ]
  },
  values: {
    title: "Our Values",
    icon: "Heart",
    content: `Empowerment through expertise defines everything we do. Our clients don't just hire services they gain 
              strategic allies who understand that every decision impacts the entire business ecosystem.`,
    highlights: [
      "Expertise backed by proven methodologies",
      "Partnership over vendor relationships",
      "Innovation balanced with reliability",
      "Transparency in all our interactions"
    ]
  }
}

const amplificationExamples = [
  {
    primary: "IT Infrastructure",
    secondary: "Marketing Reach",
    description: "Robust cloud architecture enables global marketing campaigns with 99.9% uptime",
    icon: "Server",
    color: "primary"
  },
  {
    primary: "Marketing Insights",
    secondary: "Business Strategy",
    description: "Customer data analytics inform product development and market expansion decisions",
    icon: "TrendingUp",
    color: "secondary"
  },
  {
    primary: "Business Process",
    secondary: "Technology Solutions",
    description: "Operational requirements drive custom software development and automation",
    icon: "Users",
    color: "accent"
  }
]

const Mission = () => {
  const [activeTab, setActiveTab] = useState('mission')

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "text-blue-600 bg-blue-50 border-blue-200",
      secondary: "text-cyan-500 bg-cyan-50 border-cyan-200",
      accent: "text-green-600 bg-green-50 border-green-200"
    }
    return colorMap[color]
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <AppIcon name="Compass" size={16} />
              <span>The Adveb Solutions Story</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Where Expertise{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Amplifies
              </span>{' '}
              Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our integrated approach creates exponential value by making each service domain stronger through collaboration.
            </p>
          </motion.div>
        </div>

        {/* Brand Story Tabs */}
        <div className="">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl flex">
              {Object.entries(brandStory).map(([key, story]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <AppIcon name={story.icon} size={18} />
                  <span>{story.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AppIcon name={brandStory[activeTab].icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {brandStory[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {brandStory[activeTab].content}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {brandStory[activeTab].highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <AppIcon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-gray-900">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}

export default Mission