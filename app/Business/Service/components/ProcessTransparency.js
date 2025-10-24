'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Palette, Code, Rocket, Package, Activity, Check, ArrowRight } from 'lucide-react'

const ProcessTransparency = () => {
    const [activePhase, setActivePhase] = useState(0)

    const phases = [
        {
            title: "Discovery & Strategy",
            duration: "1-2 weeks",
            icon: Search,
            description: "Deep dive into your business goals, target audience, and competitive landscape to create a strategic foundation that drives success.",
            deliverables: [
                "Comprehensive project brief and scope definition",
                "Technical requirements and architecture document",
                "Detailed timeline and milestone planning",
                "Risk assessment and mitigation strategy"
            ],
            activities: [
                "Stakeholder interviews and requirement gathering",
                "Market research and competitive analysis",
                "Technical feasibility study and planning",
                "Resource allocation and team assignment"
            ]
        },
        {
            title: "Design & Prototyping",
            duration: "2-3 weeks",
            icon: Palette,
            description: "Create user-centered designs and interactive prototypes that align perfectly with your brand identity and business objectives.",
            deliverables: [
                "User journey maps and wireframes",
                "High-fidelity mockups and visual designs",
                "Interactive prototypes and demonstrations",
                "Comprehensive design system documentation"
            ],
            activities: [
                "User experience research and mapping",
                "Visual design creation and iteration",
                "Interactive prototype development",
                "Stakeholder review and feedback integration"
            ]
        },
        {
            title: "Development & Testing",
            duration: "4-8 weeks",
            icon: Code,
            description: "Build robust, scalable solutions using cutting-edge technologies with rigorous testing and quality assurance at every development stage.",
            deliverables: [
                "Fully functional application with all features",
                "Comprehensive quality assurance reports",
                "Performance optimization and speed enhancements",
                "Security implementation and vulnerability testing"
            ],
            activities: [
                "Frontend and backend development",
                "Database design and implementation",
                "API integration and third-party services",
                "Cross-platform compatibility and testing"
            ]
        },
        {
            title: "Launch & Optimization",
            duration: "1-2 weeks",
            icon: Rocket,
            description: "Deploy your solution with comprehensive monitoring systems and continuous optimization strategies for sustained peak performance.",
            deliverables: [
                "Production deployment and go-live support",
                "Performance monitoring and analytics setup",
                "User training materials and documentation",
                "Post-launch optimization and fine-tuning"
            ],
            activities: [
                "Production environment setup and configuration",
                "Go-live coordination and launch management",
                "Real-time performance monitoring implementation",
                "Continuous optimization and improvement"
            ]
        }
    ]

    const IconComponent = phases[activePhase]?.icon

    return (
        <section className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span>Our Process</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Process{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            Transparency
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our proven methodology ensures predictable outcomes and exceptional results through every phase of your project with complete visibility.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Phase Navigation */}
                    <div className="space-y-4">
                        {phases.map((phase, index) => {
                            const PhaseIcon = phase.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${activePhase === index
                                            ? 'bg-white shadow-lg ring-2 ring-blue-500 border-blue-200'
                                            : 'bg-white hover:bg-gray-50 hover:shadow-md border-gray-200'
                                        }`}
                                    onClick={() => setActivePhase(index)}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${activePhase === index
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            <PhaseIcon size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className={`font-semibold transition-colors duration-300 ${activePhase === index ? 'text-gray-900' : 'text-gray-700'
                                                    }`}>
                                                    {phase.title}
                                                </h3>
                                                {/* <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                                                    {phase.duration}
                                                </span> */}
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Phase Details */}
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                                {IconComponent && <IconComponent size={28} className="text-white" />}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {phases[activePhase]?.title}
                                </h3>
                                {/* <p className="text-blue-600 font-medium">
                                    Duration: {phases[activePhase]?.duration}
                                </p> */}
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            {phases[activePhase]?.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                                    <Package size={18} className="mr-2 text-blue-600" />
                                    Key Deliverables
                                </h4>
                                <ul className="space-y-3">
                                    {phases[activePhase]?.deliverables?.map((deliverable, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="flex items-start text-sm text-gray-700"
                                        >
                                            <Check size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{deliverable}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                                    <Activity size={18} className="mr-2 text-blue-600" />
                                    Core Activities
                                </h4>
                                <ul className="space-y-3">
                                    {phases[activePhase]?.activities?.map((activity, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="flex items-start text-sm text-gray-700"
                                        >
                                            <ArrowRight size={16} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{activity}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        {/* <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600">Phase Progress</span>
                                <span className="text-sm font-medium text-blue-600">
                                    {activePhase + 1} of {phases.length}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                                ></div>
                            </div>
                        </div> */}
                    </motion.div>
                </div>

                {/* Timeline Overview */}
                {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Timeline Overview
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {phases.map((phase, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= activePhase ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  {index < phases.length - 1 && (
                    <div className={`hidden md:block w-full h-0.5 ml-4 ${
                      index < activePhase ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{phase.title}</h4>
                <p className="text-xs text-blue-600 font-medium mt-1">{phase.duration}</p>
              </div>
            ))}
          </div>
        </motion.div> */}

                {/* Timeline Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                        Project Timeline Overview
                    </h3>

                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-300"></div>

                            <div className="relative flex justify-between items-start">
                                {phases.map((phase, index) => (
                                    <div key={index} className="flex flex-col items-center flex-1">
                                        {/* Circle */}
                                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-4 ${index <= activePhase
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-gray-200 text-gray-600'
                                            }`}>
                                            {index + 1}
                                        </div>

                                        {/* Content */}
                                        <div className="text-center max-w-[200px]">
                                            <h4 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">
                                                {phase.title}
                                            </h4>
                                            {/* <p className="text-xs text-blue-600 font-medium">
                                                {phase.duration}
                                            </p> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-4">
                        {phases.map((phase, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                {/* Circle with Line */}
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${index <= activePhase
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    {index < phases.length - 1 && (
                                        <div className={`w-0.5 h-8 mt-2 ${index < activePhase ? 'bg-blue-600' : 'bg-gray-200'
                                            }`}></div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-4">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                        {phase.title}
                                    </h4>
                                    {/* <p className="text-xs text-blue-600 font-medium mb-2">
                                        {phase.duration}
                                    </p> */}
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    {/* <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-medium text-gray-600">Overall Progress</span>
                            <span className="text-sm font-medium text-blue-600">
                                {activePhase + 1} of {phases.length} phases
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                                transition={{ duration: 0.8 }}
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                            ></motion.div>
                        </div>
                    </div> */}
                </motion.div>

            </div>
        </section>
    )
}

export default ProcessTransparency