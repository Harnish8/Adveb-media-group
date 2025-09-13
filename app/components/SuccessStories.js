export default function SuccessStories() {
  const stories = [
    {
      category: "Manufacturing",
      title: "Complete Digital Transformation",
      description: "How advanced enterprise solutions streamlined operations and boosted efficiency.",
      stats: [
        { value: "340%", label: "Revenue increase", color: "text-cyan-500" },
        { value: "80%", label: "Cost reduction", color: "text-blue-500" },
        { value: "12mo", label: "ROI timeline", color: "text-green-500" }
      ],
      bgGradient: "from-blue-100 to-cyan-100",
      emoji: "🏭"
    },
    {
      category: "Healthcare", 
      title: "Patient Experience Revolution",
      description: "Transforming patient care through innovative digital solutions and process optimization.",
      stats: [
        { value: "95%", label: "Patient satisfaction", color: "text-cyan-500" },
        { value: "60%", label: "Wait time reduction", color: "text-blue-500" },
        { value: "$2.1M", label: "Annual savings", color: "text-green-500" }
      ],
      bgGradient: "from-green-100 to-blue-100",
      emoji: "🏥"
    },
    {
      category: "Technology",
      title: "Market Expansion Strategy", 
      description: "Strategic consulting and marketing solutions that accelerated market penetration.",
      stats: [
        { value: "450%", label: "Market growth", color: "text-cyan-500" },
        { value: "5x", label: "Lead generation", color: "text-blue-500" },
        { value: "18mo", label: "Expansion timeline", color: "text-green-500" }
      ],
      bgGradient: "from-purple-100 to-pink-100",
      emoji: "🚀"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integrated Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our multi-domain approach delivers measurable business transformations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${story.bgGradient} flex items-center justify-center`}>
                <div className="text-6xl">{story.emoji}</div>
              </div>
              <div className="p-6">
                <span className="text-sm text-cyan-500 font-medium">{story.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {story.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  )
}