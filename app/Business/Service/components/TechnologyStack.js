// 'use client'
// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Code, 
//   Database, 
//   Cloud, 
//   Smartphone, 
//   Globe, 
//   Shield,
//   Zap,
//   Layers,
//   Server,
//   Palette,
//   BarChart3,
//   Settings
// } from 'lucide-react'

// const TechnologyStack = () => {
//   const [activeCategory, setActiveCategory] = useState('frontend')

//   const techCategories = {
//     frontend: {
//       title: "Frontend Development",
//       icon: Code,
//       description: "Modern frameworks and libraries for creating exceptional user experiences",
//       technologies: [
//         {
//           name: "React.js",
//           description: "Component-based library for building interactive UIs",
//           icon: "⚛️",
//           proficiency: 95,
//           projects: "50+"
//         },
//         {
//           name: "Next.js",
//           description: "Full-stack React framework with SSR capabilities",
//           icon: "▲",
//           proficiency: 92,
//           projects: "40+"
//         },
//         {
//           name: "Vue.js",
//           description: "Progressive framework for building modern web apps",
//           icon: "🟢",
//           proficiency: 88,
//           projects: "25+"
//         },
//         {
//           name: "TypeScript",
//           description: "Typed superset of JavaScript for better code quality",
//           icon: "🔷",
//           proficiency: 90,
//           projects: "45+"
//         }
//       ]
//     },
//     backend: {
//       title: "Backend Development",
//       icon: Server,
//       description: "Robust server-side solutions and API development",
//       technologies: [
//         {
//           name: "Node.js",
//           description: "JavaScript runtime for scalable server applications",
//           icon: "🟢",
//           proficiency: 93,
//           projects: "60+"
//         },
//         {
//           name: "Python",
//           description: "Versatile language for web development and data processing",
//           icon: "🐍",
//           proficiency: 89,
//           projects: "35+"
//         },
//         {
//           name: "Express.js",
//           description: "Fast and minimal web framework for Node.js",
//           icon: "🚀",
//           proficiency: 94,
//           projects: "55+"
//         },
//         {
//           name: "GraphQL",
//           description: "Query language and runtime for APIs",
//           icon: "🔺",
//           proficiency: 85,
//           projects: "20+"
//         }
//       ]
//     },
//     database: {
//       title: "Database Solutions",
//       icon: Database,
//       description: "Scalable data storage and management systems",
//       technologies: [
//         {
//           name: "MongoDB",
//           description: "NoSQL document database for modern applications",
//           icon: "🍃",
//           proficiency: 91,
//           projects: "45+"
//         },
//         {
//           name: "PostgreSQL",
//           description: "Advanced open-source relational database",
//           icon: "🐘",
//           proficiency: 87,
//           projects: "30+"
//         },
//         {
//           name: "Redis",
//           description: "In-memory data structure store for caching",
//           icon: "🔴",
//           proficiency: 84,
//           projects: "25+"
//         },
//         {
//           name: "Firebase",
//           description: "Real-time database and backend services",
//           icon: "🔥",
//           proficiency: 88,
//           projects: "35+"
//         }
//       ]
//     },
//     cloud: {
//       title: "Cloud & DevOps",
//       icon: Cloud,
//       description: "Scalable infrastructure and deployment solutions",
//       technologies: [
//         {
//           name: "AWS",
//           description: "Comprehensive cloud computing platform",
//           icon: "☁️",
//           proficiency: 89,
//           projects: "40+"
//         },
//         {
//           name: "Docker",
//           description: "Containerization platform for consistent deployments",
//           icon: "🐳",
//           proficiency: 86,
//           projects: "35+"
//         },
//         {
//           name: "Kubernetes",
//           description: "Container orchestration for scalable applications",
//           icon: "⚙️",
//           proficiency: 82,
//           projects: "20+"
//         },
//         {
//           name: "Vercel",
//           description: "Frontend deployment platform with global CDN",
//           icon: "▲",
//           proficiency: 93,
//           projects: "50+"
//         }
//       ]
//     },
//     mobile: {
//       title: "Mobile Development",
//       icon: Smartphone,
//       description: "Cross-platform mobile applications",
//       technologies: [
//         {
//           name: "React Native",
//           description: "Cross-platform mobile app development framework",
//           icon: "📱",
//           proficiency: 88,
//           projects: "25+"
//         },
//         {
//           name: "Flutter",
//           description: "Google's UI toolkit for cross-platform apps",
//           icon: "🦋",
//           proficiency: 83,
//           projects: "15+"
//         },
//         {
//           name: "Expo",
//           description: "Platform for universal React applications",
//           icon: "⚡",
//           proficiency: 90,
//           projects: "30+"
//         },
//         {
//           name: "PWA",
//           description: "Progressive Web Apps for mobile-like experiences",
//           icon: "🌐",
//           proficiency: 92,
//           projects: "40+"
//         }
//       ]
//     },
//     design: {
//       title: "Design & Analytics",
//       icon: Palette,
//       description: "User experience design and data analytics tools",
//       technologies: [
//         {
//           name: "Figma",
//           description: "Collaborative design and prototyping tool",
//           icon: "🎨",
//           proficiency: 91,
//           projects: "60+"
//         },
//         {
//           name: "Adobe XD",
//           description: "User experience design and wireframing",
//           icon: "🎭",
//           proficiency: 85,
//           projects: "25+"
//         },
//         {
//           name: "Google Analytics",
//           description: "Web analytics and user behavior tracking",
//           icon: "📊",
//           proficiency: 89,
//           projects: "55+"
//         },
//         {
//           name: "Hotjar",
//           description: "User behavior analytics and feedback tools",
//           icon: "🔥",
//           proficiency: 87,
//           projects: "30+"
//         }
//       ]
//     }
//   }

//   const categoryKeys = Object.keys(techCategories)
//   const currentTech = techCategories[activeCategory]
//   const CurrentIcon = currentTech.icon

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Layers size={16} />
//             <span>Technology Stack</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Cutting-Edge{' '}
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               Technologies
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We leverage the latest technologies and industry best practices to build scalable, performant, and future-ready solutions.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Category Navigation */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-8 space-y-3">
//               {categoryKeys.map((categoryKey, index) => {
//                 const category = techCategories[categoryKey]
//                 const CategoryIcon = category.icon
//                 return (
//                   <motion.button
//                     key={categoryKey}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     onClick={() => setActiveCategory(categoryKey)}
//                     className={`w-full p-4 rounded-xl text-left transition-all duration-300 border ${
//                       activeCategory === categoryKey
//                         ? 'bg-blue-600 text-white shadow-lg border-blue-600'
//                         : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                         activeCategory === categoryKey
//                           ? 'bg-white/20'
//                           : 'bg-gray-100'
//                       }`}>
//                         <CategoryIcon size={20} className={
//                           activeCategory === categoryKey ? 'text-white' : 'text-gray-600'
//                         } />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-sm">{category.title}</h3>
//                         <p className={`text-xs mt-1 ${
//                           activeCategory === categoryKey ? 'text-white/80' : 'text-gray-500'
//                         }`}>
//                           {category.technologies.length} technologies
//                         </p>
//                       </div>
//                     </div>
//                   </motion.button>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Technology Details */}
//           <div className="lg:col-span-2">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
//             >
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
//                   <CurrentIcon size={28} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">{currentTech.title}</h3>
//                   <p className="text-gray-600 mt-1">{currentTech.description}</p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {currentTech.technologies.map((tech, index) => (
//                   <motion.div
//                     key={tech.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className="text-3xl">{tech.icon}</div>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between mb-2">
//                           <h4 className="font-semibold text-gray-900">{tech.name}</h4>
//                           <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
//                             {tech.projects} projects
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
                        
//                         {/* Proficiency Bar */}
//                         <div className="space-y-2">
//                           <div className="flex justify-between items-center">
//                             <span className="text-xs font-medium text-gray-600">Proficiency</span>
//                             <span className="text-xs font-medium text-gray-900">{tech.proficiency}%</span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <motion.div 
//                               initial={{ width: 0 }}
//                               animate={{ width: `${tech.proficiency}%` }}
//                               transition={{ duration: 1, delay: index * 0.2 }}
//                               className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
//                             ></motion.div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Technology Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
//             Our Technology Expertise
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { 
//                 icon: Code, 
//                 label: "Programming Languages", 
//                 value: "15+",
//                 color: "text-blue-600"
//               },
//               { 
//                 icon: Database, 
//                 label: "Database Systems", 
//                 value: "12+",
//                 color: "text-green-600"
//               },
//               { 
//                 icon: Cloud, 
//                 label: "Cloud Platforms", 
//                 value: "8+",
//                 color: "text-purple-600"
//               },
//               { 
//                 icon: Shield, 
//                 label: "Security Tools", 
//                 value: "10+",
//                 color: "text-red-600"
//               }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200"
//               >
//                 <stat.icon size={32} className={`mx-auto mb-3 ${stat.color}`} />
//                 <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
//                 <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default TechnologyStack

'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Shield,
  Zap,
  Layers,
  Server,
  Palette,
  BarChart3,
  Settings
} from 'lucide-react'

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const techCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      count: "6 technologies",
      description: "Modern frameworks and libraries for creating exceptional user experiences",
      technologies: [
        {
          name: "React.js",
          description: "Component-based library for building interactive UIs",
          icon: "⚛️",
          proficiency: 95,
          projects: "50+ projects"
        },
        {
          name: "Next.js", 
          description: "Full-stack React framework with SSR capabilities",
          icon: "▲",
          proficiency: 92,
          projects: "40+ projects"
        },
        {
          name: "Vue.js",
          description: "Progressive framework for building modern web apps",
          icon: "🟢",
          proficiency: 88,
          projects: "25+ projects"
        },
        {
          name: "TypeScript",
          description: "Typed superset of JavaScript for better code quality",
          icon: "🔷",
          proficiency: 90,
          projects: "45+ projects"
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
          icon: "🎨",
          proficiency: 92,
          projects: "35+ projects"
        },
        {
          name: "Angular",
          description: "Platform for building mobile and desktop web applications",
          icon: "🅰️",
          proficiency: 80,
          projects: "20+ projects"
        }
      ]
    },
    backend: {
      title: "Backend Development", 
      icon: Server,
      count: "4 technologies",
      description: "Robust server-side solutions and API development",
      technologies: [
        {
          name: "Node.js",
          description: "JavaScript runtime for scalable server applications",
          icon: "🟢",
          proficiency: 93,
          projects: "60+ projects"
        },
        {
          name: "Python",
          description: "Versatile language for web development and data processing", 
          icon: "🐍",
          proficiency: 89,
          projects: "35+ projects"
        },
        {
          name: "Express.js",
          description: "Fast and minimal web framework for Node.js",
          icon: "🚀",
          proficiency: 94,
          projects: "55+ projects"
        },
        {
          name: "GraphQL",
          description: "Query language and runtime for APIs",
          icon: "🔺", 
          proficiency: 85,
          projects: "20+ projects"
        }
      ]
    },
    database: {
      title: "Database Solutions",
      icon: Database,
      count: "4 technologies", 
      description: "Scalable data storage and management systems",
      technologies: [
        {
          name: "MongoDB",
          description: "NoSQL document database for modern applications",
          icon: "🍃",
          proficiency: 91,
          projects: "45+ projects"
        },
        {
          name: "PostgreSQL",
          description: "Advanced open-source relational database",
          icon: "🐘",
          proficiency: 87,
          projects: "30+ projects"
        },
        {
          name: "Redis",
          description: "In-memory data structure store for caching",
          icon: "🔴",
          proficiency: 84,
          projects: "25+ projects"
        },
        {
          name: "Firebase",
          description: "Real-time database and backend services",
          icon: "🔥",
          proficiency: 88,
          projects: "35+ projects"
        }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      count: "4 technologies",
      description: "Scalable infrastructure and deployment solutions", 
      technologies: [
        {
          name: "AWS",
          description: "Comprehensive cloud computing platform",
          icon: "☁️",
          proficiency: 89,
          projects: "40+ projects"
        },
        {
          name: "Docker", 
          description: "Containerization platform for consistent deployments",
          icon: "🐳",
          proficiency: 86,
          projects: "35+ projects"
        },
        {
          name: "Kubernetes",
          description: "Container orchestration for scalable applications",
          icon: "⚙️",
          proficiency: 82,
          projects: "20+ projects"
        },
        {
          name: "Vercel",
          description: "Frontend deployment platform with global CDN",
          icon: "▲",
          proficiency: 93,
          projects: "50+ projects"
        }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      count: "4 technologies",
      description: "Cross-platform mobile applications",
      technologies: [
        {
          name: "React Native",
          description: "Cross-platform mobile app development framework",
          icon: "📱",
          proficiency: 88,
          projects: "25+ projects"
        },
        {
          name: "Flutter",
          description: "Google's UI toolkit for cross-platform apps",
          icon: "🦋", 
          proficiency: 83,
          projects: "15+ projects"
        },
        {
          name: "Expo",
          description: "Platform for universal React applications",
          icon: "⚡",
          proficiency: 90,
          projects: "30+ projects"
        },
        {
          name: "PWA",
          description: "Progressive Web Apps for mobile-like experiences",
          icon: "🌐",
          proficiency: 92,
          projects: "40+ projects"
        }
      ]
    },
    design: {
      title: "AI & Emerging Tech",
      icon: Zap,
      count: "4 technologies",
      description: "Artificial intelligence and cutting-edge technologies",
      technologies: [
        {
          name: "Machine Learning",
          description: "AI algorithms for predictive analytics and automation",
          icon: "🤖",
          proficiency: 82,
          projects: "15+ projects"
        },
        {
          name: "Blockchain",
          description: "Decentralized technology for secure transactions",
          icon: "⛓️",
          proficiency: 75,
          projects: "10+ projects"
        },
        {
          name: "IoT Solutions",
          description: "Internet of Things for connected device ecosystems",
          icon: "📡",
          proficiency: 78,
          projects: "12+ projects"
        },
        {
          name: "AR/VR",
          description: "Augmented and Virtual Reality experiences",
          icon: "🥽",
          proficiency: 73,
          projects: "8+ projects"
        }
      ]
    }
  }

  const categoryKeys = Object.keys(techCategories)
  const currentTech = techCategories[activeCategory]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and industry best practices to build scalable, performant, and future-ready solutions.
          </p>
        </motion.div>

        {/* Horizontal Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryKeys.map((categoryKey, index) => {
            const category = techCategories[categoryKey]
            const CategoryIcon = category.icon
            return (
              <motion.button
                key={categoryKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(categoryKey)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === categoryKey
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <CategoryIcon size={18} />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="text-xs opacity-75 hidden md:inline">
                  {category.count}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <currentTech.icon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTech.title}</h3>
            <p className="text-gray-600">{currentTech.description}</p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTech.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                      {/* <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {tech.projects}
                      </span> */}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
                  </div>
                </div>
                
                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-600">Proficiency</span>
                    <span className="text-xs font-medium text-gray-900">{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologyStack