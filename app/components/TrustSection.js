import { Shield, Award, Users, FileText, Globe, Zap } from 'lucide-react'

export default function TrustSection() {
  const trustItems = [
    { icon: <Shield className="w-8 h-8" />, label: "ISO 27001" },
    { icon: <Award className="w-8 h-8" />, label: "AWS Tier 1" },
    { icon: <Users className="w-8 h-8" />, label: "SOC Partner" },
    { icon: <FileText className="w-8 h-8" />, label: "Microsoft Gold" },
    { icon: <Globe className="w-8 h-8" />, label: "Global Compliant" },
    { icon: <Zap className="w-8 h-8" />, label: "PCI DSS" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Trust & Security</h2>
          <p className="text-lg text-gray-600">
            Industry-leading security standards and compliance that enterprise clients trust.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-blue-600 mb-2">{item.icon}</div>
              <span className="text-sm font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}