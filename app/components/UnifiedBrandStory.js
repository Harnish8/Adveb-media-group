'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AppIcon from './AppIcon'
import Button from './ui/Button'

const brandStory = {
  mission: {
    title: "Our Mission",
    icon: "Target",
    content: `We exist to transform businesses through the convergence of expertise. In an interconnected world, 
              success requires more than isolated solutions—it demands integrated excellence across technology, 
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
    content: `The 'Swiss Army knife' of professional services—versatile yet specialized, comprehensive yet focused. 
              We don't just deliver services; we create ecosystems where IT infrastructure enables marketing excellence, 
              marketing insights drive business strategy, and business goals shape technology decisions.`,
    highlights: [
      "Cross-functional collaboration from day one",
      "Holistic solutions that amplify each other",
      "Data-driven insights across all domains",
      "Scalable frameworks for sustainable growth"
    ]
  },
  values: {
    title: "Our Values",
    icon: "Heart",
    content: `Empowerment through expertise defines everything we do. Our clients don't just hire services—they gain 
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

const UnifiedBrandStory = () => {
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
            {/* <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-500 px-4 py-2 rounded-full text-sm font-medium">
              <AppIcon name="Compass" size={16} />
              <span>The Adveb Solutions Story</span>
            </div> */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How Each Service{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                Amplifies
              </span>{' '}
              the Others
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach creates synergies that multiply the value of each individual service.
            </p>
          </motion.div>
        </div>

        

        {/* Service Amplification */}
        <div className="mb-16">

          <div className="grid lg:grid-cols-3 gap-8">
            {amplificationExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-6 rounded-2xl border-2 ${getColorClasses(example.color)}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    example.color === 'primary' ? 'bg-blue-600' :
                    example.color === 'secondary' ? 'bg-cyan-500' : 'bg-green-600'
                  }`}>
                    <AppIcon name={example.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {example.primary}
                  </h4>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <AppIcon name="Plus" size={16} className="text-gray-500" />
                  </div>
                  <h5 className="text-md font-medium text-gray-600">
                    {example.secondary}
                  </h5>
                </div>
                <p className="text-sm text-gray-900 text-center leading-relaxed">
                  {example.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Swiss Army Knife Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 text-center border"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                The Swiss Army Knife of Professional Services
              </h3>
              <p className="text-lg text-gray-600">
                Versatile yet specialized, comprehensive yet focused—every tool working in perfect harmony.
              </p>
            </div>

            {/* Visual Representation */}
            <div className="relative mb-8">
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-8">
                {/* IT Services */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
                    <AppIcon name="Server" size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">IT Services</span>
                </div>

                {/* Connection Lines */}
                <div className="hidden lg:flex items-center space-x-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                  <AppIcon name="Zap" size={20} className="text-green-600" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-green-600"></div>
                </div>

                {/* Marketing */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
                    <AppIcon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Marketing</span>
                </div>

                {/* Connection Lines */}
                <div className="hidden lg:flex items-center space-x-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-green-600"></div>
                  <AppIcon name="Zap" size={20} className="text-blue-600" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-green-600 to-blue-600"></div>
                </div>

                {/* Business Consulting */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
                    <AppIcon name="Users" size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Business</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-900 font-medium">
                Your strategic advantage in an integrated world
              </p>
              <p className="text-gray-600">
                Every tool sharpens the others. Every solution strengthens the whole.
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="default"
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Experience the Integration
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UnifiedBrandStory