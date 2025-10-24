"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from '../../components/MarketingHeader'; // Add this import
import Footer from '../../../components/Footer';
import {
  Globe,
  Cloud,
  Shield,
  Headphones,
  Database,
  Smartphone,
  Code,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  Mail,
  Share2,
  Search,
  PenTool,
  Layers,
  Feather
} from "lucide-react";

// Helper function to render a button-like Link with Tailwind classes
const Button = ({ children, variant, size, className, href }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const sizeClasses = {
    lg: "px-8 py-4 text-lg",
    md: "px-6 py-3 text-base",
  };
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    accent: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`}
    >
      {children}
    </Link>
  );
};

const ServiceDetail = () => {
  const params = useParams();
  const slug = params.slug;

  // const servicesData = {
  //   "web-development": {
  //     icon: Globe,
  //     title: "Web Development",
  //     description: "Transform your digital presence with modern, responsive websites and powerful web applications built using cutting-edge technologies.",
  //     longDescription: "Our web development services combine aesthetic design with robust functionality to create exceptional digital experiences. We specialize in creating responsive, fast-loading websites that not only look great but also drive business results. From simple business websites to complex web applications, our team delivers solutions that scale with your business growth.",
  //     features: [
  //       "Custom Website Design & Development",
  //       "Responsive Mobile-First Design",
  //       "E-commerce Solutions",
  //       "Content Management Systems (CMS)",
  //       "Progressive Web Applications (PWA)",
  //       "API Development & Integration",
  //       "SEO Optimization",
  //       "Performance Optimization",
  //       "Cross-browser Compatibility",
  //       "Ongoing Maintenance & Support"
  //     ],
  //     technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  //     benefits: [
  //       "Increased online visibility and brand awareness",
  //       "Enhanced user experience across all devices",
  //       "Improved conversion rates and customer engagement",
  //       "Search engine optimized for better rankings",
  //       "Scalable architecture for future growth",
  //       "Fast loading times and optimal performance"
  //     ]
  //   },
  //   "cloud-solutions": {
  //     icon: Cloud,
  //     title: "Cloud Solutions",
  //     description: "Leverage the power of cloud computing with our comprehensive migration, infrastructure, and optimization services.",
  //     longDescription: "Embrace the flexibility and scalability of cloud computing with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize their infrastructure, and build cloud-native applications that take full advantage of modern cloud platforms. Our expertise spans across major cloud providers including AWS, Azure, and Google Cloud Platform.",
  //     features: [
  //       "Cloud Migration Strategy & Execution",
  //       "Infrastructure as Code (IaC)",
  //       "Auto-scaling & Load Balancing",
  //       "Cloud Security & Compliance",
  //       "Disaster Recovery Planning",
  //       "Cost Optimization",
  //       "Serverless Architecture",
  //       "Container Orchestration",
  //       "Cloud Monitoring & Analytics",
  //       "24/7 Cloud Support"
  //     ],
  //     technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
  //     benefits: [
  //       "Reduced infrastructure costs and complexity",
  //       "Improved scalability and flexibility",
  //       "Enhanced security and compliance",
  //       "Better disaster recovery capabilities",
  //       "Increased operational efficiency",
  //       "Global availability and performance"
  //     ]
  //   },
  //   "cybersecurity": {
  //     icon: Shield,
  //     title: "Cybersecurity",
  //     description: "Protect your digital assets with comprehensive security solutions designed to defend against modern cyber threats.",
  //     longDescription: "In today's digital landscape, cybersecurity is not optional—it's essential. Our comprehensive cybersecurity services protect your business from evolving threats while ensuring compliance with industry regulations. We provide multi-layered security solutions that safeguard your data, systems, and reputation.",
  //     features: [
  //       "Security Risk Assessment",
  //       "Vulnerability Testing & Management",
  //       "Network Security Solutions",
  //       "Endpoint Protection",
  //       "Data Encryption & Privacy",
  //       "Identity & Access Management",
  //       "Security Incident Response",
  //       "Compliance Management",
  //       "Security Training & Awareness",
  //       "24/7 Security Monitoring"
  //     ],
  //     technologies: ["Next-gen Firewalls", "SIEM", "EDR", "Multi-factor Authentication", "Zero Trust Architecture"],
  //     benefits: [
  //       "Protection against cyber threats and data breaches",
  //       "Compliance with industry regulations",
  //       "Reduced risk of financial and reputational damage",
  //       "Enhanced customer trust and confidence",
  //       "Business continuity assurance",
  //       "Proactive threat detection and response"
  //     ]
  //   },
  //   "it-support": {
  //     icon: Headphones,
  //     title: "IT Support",
  //     description: "Comprehensive technical support and maintenance services to keep your business running smoothly around the clock.",
  //     longDescription: "Our IT support services ensure your technology infrastructure operates at peak performance. With 24/7 monitoring, proactive maintenance, and rapid response times, we minimize downtime and maximize productivity. Our experienced team provides both reactive support and proactive management to prevent issues before they impact your business.",
  //     features: [
  //       "24/7 Help Desk Support",
  //       "Remote Technical Support",
  //       "On-site Support Services",
  //       "System Monitoring & Maintenance",
  //       "Hardware & Software Management",
  //       "Network Administration",
  //       "Backup & Recovery Services",
  //       "Software Updates & Patches",
  //       "User Training & Documentation",
  //       "IT Asset Management"
  //     ],
  //     technologies: ["Remote Management Tools", "Monitoring Software", "Ticketing Systems", "VPN Solutions"],
  //     benefits: [
  //       "Minimized system downtime and disruptions",
  //       "Improved productivity and efficiency",
  //       "Predictable IT costs and budgeting",
  //       "Access to expert technical knowledge",
  //       "Proactive issue prevention",
  //       "Focus on core business activities"
  //     ]
  //   },
  //   "software-development": {
  //     icon: Code,
  //     title: "Software Development",
  //     description: "Custom software solutions tailored to your unique business requirements and workflows.",
  //     longDescription: "Every business has unique needs that off-the-shelf software can't always address. Our custom software development services create tailored solutions that fit your specific requirements, integrate with your existing systems, and grow with your business. From desktop applications to complex enterprise systems, we deliver software that drives efficiency and competitive advantage.",
  //     features: [
  //       "Custom Application Development",
  //       "Enterprise Software Solutions",
  //       "Legacy System Modernization",
  //       "API Development & Integration",
  //       "Database Design & Optimization",
  //       "User Interface & Experience Design",
  //       "Quality Assurance & Testing",
  //       "Deployment & Configuration",
  //       "Training & Documentation",
  //       "Ongoing Support & Updates"
  //     ],
  //     technologies: ["Python", "Java", ".NET", "React", "Angular", "PostgreSQL", "MongoDB"],
  //     benefits: [
  //       "Solutions tailored to your specific needs",
  //       "Improved operational efficiency",
  //       "Better integration with existing systems",
  //       "Competitive advantage through innovation",
  //       "Scalable architecture for growth",
  //       "Full control over features and functionality"
  //     ]
  //   },
  //   "data-management": {
  //     icon: Database,
  //     title: "Data Management",
  //     description: "Comprehensive database solutions to organize, secure, and optimize your valuable business data.",
  //     longDescription: "Data is one of your most valuable business assets. Our data management services help you organize, secure, and leverage your data effectively. From database design and optimization to data migration and backup solutions, we ensure your data is always available, accurate, and secure.",
  //     features: [
  //       "Database Design & Architecture",
  //       "Data Migration Services",
  //       "Performance Tuning & Optimization",
  //       "Backup & Recovery Solutions",
  //       "Data Security & Encryption",
  //       "Business Intelligence & Analytics",
  //       "Data Warehouse Solutions",
  //       "Real-time Data Processing",
  //       "Compliance & Governance",
  //       "24/7 Database Monitoring"
  //     ],
  //     technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka", "Elasticsearch"],
  //     benefits: [
  //       "Improved data accuracy and consistency",
  //       "Enhanced data security and compliance",
  //       "Better business insights and decision-making",
  //       "Reduced data redundancy and storage costs",
  //       "Faster query performance and response times",
  //       "Reliable data backup and recovery"
  //     ]
  //   },
  //   "it-consulting": {
  //     icon: Settings,
  //     title: "IT Consulting",
  //     description: "Strategic technology consulting to help you make informed decisions and optimize your IT investments.",
  //     longDescription: "Navigate the complex world of technology with confidence. Our IT consulting services provide strategic guidance to help you align technology with your business objectives, optimize costs, and prepare for future growth. We assess your current IT landscape and provide actionable recommendations for improvement.",
  //     features: [
  //       "IT Strategy & Planning",
  //       "Technology Assessment & Audit",
  //       "Digital Transformation Roadmap",
  //       "Vendor Selection & Management",
  //       "Cost Optimization Analysis",
  //       "Risk Assessment & Mitigation",
  //       "Process Improvement",
  //       "Change Management",
  //       "Project Management",
  //       "Training & Knowledge Transfer"
  //     ],
  //     technologies: ["Various platforms based on assessment", "Industry-leading tools", "Best practices frameworks"],
  //     benefits: [
  //       "Aligned technology strategy with business goals",
  //       "Optimized IT costs and investments",
  //       "Reduced technology risks and vulnerabilities",
  //       "Improved operational efficiency",
  //       "Better decision-making with expert insights",
  //       "Prepared for future growth and challenges"
  //     ]
  //   },
  //   "mobile-solutions": {
  //     icon: Smartphone,
  //     title: "Mobile Solutions",
  //     description: "Native and cross-platform mobile applications that engage users and drive business results.",
  //     longDescription: "Reach your customers wherever they are with powerful mobile applications. Our mobile development services create engaging, user-friendly apps for iOS and Android platforms. Whether you need a native app for optimal performance or a cross-platform solution for broader reach, we deliver mobile experiences that drive engagement and business growth.",
  //     features: [
  //       "Native iOS & Android Development",
  //       "Cross-platform App Development",
  //       "Mobile UI/UX Design",
  //       "App Performance Optimization",
  //       "Push Notifications & Analytics",
  //       "Offline Functionality",
  //       "Third-party Integrations",
  //       "App Store Optimization",
  //       "Security & Data Protection",
  //       "Ongoing Updates & Support"
  //     ],
  //     technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
  //     benefits: [
  //       "Direct connection with customers on mobile devices",
  //       "Increased brand visibility and engagement",
  //       "Enhanced customer experience and loyalty",
  //       "New revenue streams and business opportunities",
  //       "Real-time customer insights and analytics",
  //       "Competitive advantage in mobile-first market"
  //     ]
  //   }
  // };
  const servicesData = {
    "web-development": {
      icon: Globe,
      title: "Web Development",
      description: "Build a powerful online presence with a custom, high-performing website that truly represents your brand.",
      longDescription: "Ready to stand out in the Australian market? Our web development services go beyond just code. We craft beautiful, responsive, and SEO-friendly websites that not only look incredible but also drive results. Whether you're a small business in Sydney needing a showcase site or a national e-commerce brand, we build a digital home that's fast, secure, and ready to grow with you.",
      features: [
        "Custom, Mobile-First Web Design",
        "E-commerce & Online Store Solutions",
        "WordPress & CMS Development",
        "Lightning-Fast Performance Optimisation",
        "SEO-Ready Architecture",
        "Ongoing Maintenance & Support"
      ],
      technologies: ["React", "Next.js", "WordPress", "Shopify"],
      benefits: [
        "Attract more customers with a professional website",
        "Enhance user experience on any device",
        "Outrank your competitors on Google in Australia",
        "Boost sales and lead generation",
        "Get a scalable platform for future growth"
      ]
    },
    "app-development": {
      icon: Smartphone,
      title: "App Development",
      description: "Connect with your customers on the go with a custom mobile app for iOS and Android.",
      longDescription: "In a mobile-first world, an app is your direct line to customers. We design and build intuitive, user-friendly mobile applications that solve problems and create value. From a local service app for Melbourne to a global enterprise tool, we handle the full development lifecycle to deliver an app that your users will love and a solution that drives your business forward.",
      features: [
        "Native iOS & Android App Development",
        "Cross-Platform Solutions (React Native)",
        "Intuitive UI/UX Design",
        "App Store Optimisation (ASO)",
        "Secure API Integration",
        "Ongoing App Maintenance & Updates"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter"],
      benefits: [
        "Increase customer engagement and loyalty",
        "Create new revenue streams",
        "Enhance brand visibility on app stores",
        "Gain a competitive edge in your market"
      ]
    },
    "email-marketing": {
      icon: Mail,
      title: "Email Marketing",
      description: "Build a loyal customer base and drive repeat business with smart, personalised email campaigns.",
      longDescription: "Email is still one of the most powerful tools for growing a business. Our email marketing services help you nurture leads, connect with your audience, and keep them coming back for more. We create compelling newsletters, automated welcome sequences, and targeted campaigns that feel personal and genuine—not like just another sales pitch. It's about building relationships, one email at a time.",
      features: [
        "Custom Email Template Design",
        "Automated Email Sequences",
        "List Segmentation & Management",
        "A/B Testing for Optimisation",
        "Email Marketing Strategy",
        "Detailed Performance Reporting"
      ],
      technologies: ["Mailchimp", "ActiveCampaign", "SendGrid", "Klaviyo"],
      benefits: [
        "Boost customer retention and loyalty",
        "Generate more sales from your existing customers",
        "Keep your brand top-of-mind",
        "Get valuable insights into your audience"
      ]
    },
    "seo": {
      icon: Search,
      title: "Search Engine Optimisation (SEO)",
      description: "Get found on Google by the right people at the right time. Your business deserves to be at the top.",
      longDescription: "Tired of being on page two? Our SEO services are designed to get your website noticed by potential customers in Australia. We do the heavy lifting from keyword research and on-page optimisation to building quality backlinks. Our goal is to increase your organic traffic, improve your search rankings, and turn your website into a powerful lead-generating machine. We'll make sure when someone searches for 'web developer Sydney' or 'digital marketing Melbourne,' they find you.",
      features: [
        "Local & National SEO Strategies",
        "In-Depth Keyword Research",
        "On-Page & Technical SEO Audits",
        "High-Quality Content Strategy",
        "Link Building & Authority Building",
        "Regular Performance Reporting"
      ],
      technologies: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"],
      benefits: [
        "Increase organic website traffic",
        "Improve your search engine rankings",
        "Attract highly-qualified leads",
        "Gain long-term visibility and authority"
      ]
    },
    "graphic-design": {
      icon: PenTool,
      title: "Graphic Design",
      description: "Create a visual identity that is memorable, professional, and connects with your audience.",
      longDescription: "Your brand is a story, and great design is how you tell it. Our graphic designers are passionate about creating stunning visuals that capture your brand's essence and make a lasting impression. From a new logo to social media graphics and marketing collateral, we ensure every visual element is cohesive, professional, and speaks directly to your ideal customer. Let's make your brand unforgettable.",
      features: [
        "Logo & Brand Identity Design",
        "Website & App Visuals",
        "Social Media Graphics",
        "Digital Ads & Banners",
        "Print Design (Brochures, Flyers)",
        "Infographics & Illustrations"
      ],
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"],
      benefits: [
        "Establish a strong, recognisable brand",
        "Build trust and credibility with your audience",
        "Communicate your message clearly",
        "Stand out from the competition"
      ]
    },
    "ui-ux-design": {
      icon: Layers,
      title: "UI/UX Design",
      description: "Ensure your website or app is easy, intuitive, and a pleasure to use for every visitor.",
      longDescription: "We believe that the best digital products are the ones you don't even have to think about using. Our UI/UX designers focus on creating seamless user experiences that are intuitive, efficient, and enjoyable. By putting your users first, we design interfaces that not only look great but also guide them effortlessly toward your desired actions, leading to higher conversions and happier customers.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Prototyping",
        "Usability Testing & Feedback",
        "Responsive UI Design",
        "Accessibility Optimisation",
        "User Flow Mapping"
      ],
      technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
      benefits: [
        "Increase customer engagement and retention",
        "Improve conversion rates and sales",
        "Reduce user frustration and support queries",
        "Create a positive and memorable brand experience"
      ]
    },
    "social-media-management": {
      icon: Share2,
      title: "Social Media Management",
      description: "Build a thriving community and connect with your audience where they spend their time on social media.",
      longDescription: "Social media is more than just posting photos; it's about building a community around your brand. We handle everything from content strategy and creation to daily posting and audience engagement. Our goal is to grow your following, boost brand awareness, and drive meaningful conversations that turn followers into loyal customers. Let's make your social presence a powerful asset for your business.",
      features: [
        "Social Media Strategy & Planning",
        "Content Creation (Photos, Videos, Graphics)",
        "Daily Posting & Scheduling",
        "Audience Engagement & Community Building",
        "Social Media Advertising Management",
        "Performance Analytics & Reporting"
      ],
      technologies: ["Facebook", "Instagram", "LinkedIn", "TikTok", "Hootsuite"],
      benefits: [
        "Increase brand awareness and visibility",
        "Build a loyal and engaged community",
        "Drive traffic to your website",
        "Generate valuable customer insights"
      ]
    },
    "content-writing": {
      icon: Feather,
      title: "Content Writing",
      description: "Fuel your digital marketing with compelling, high-quality content that engages your audience and boosts your SEO.",
      longDescription: "Every piece of content you put out—from your website's homepage to a blog post—is a chance to tell your story and connect with your audience. Our content writers craft compelling, human-friendly copy that not only informs and entertains but is also optimised to rank well on Google. We help you establish your voice as a trusted authority, attract organic traffic, and convert visitors into customers with words that matter.",
      features: [
        "Website Copy & Landing Pages",
        "Blog Posts & Articles",
        "Case Studies & Whitepapers",
        "Email & Newsletter Copy",
        "SEO-Driven Content Strategy",
        "Editing & Proofreading"
      ],
      technologies: ["Google Docs", "Grammarly", "SEO Tools"],
      benefits: [
        "Boost your SEO and organic rankings",
        "Engage and educate your target audience",
        "Establish your brand as an industry leader",
        "Drive more conversions and leads"
      ]
    }
  };


  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service youre looking for doesnt exist.</p>
          <Button href="/services" variant="primary" size="md">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 mb-8">{service.longDescription}</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Fast</div>
                  <div className="text-sm text-gray-600">Delivery</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Expert</div>
                  <div className="text-sm text-gray-600">Team</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Quality</div>
                  <div className="text-sm text-gray-600">Assurance</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5-Star</div>
                  <div className="text-sm text-gray-600">Service</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <p className="text-gray-600">Whats included in our {service.title.toLowerCase()} service</p>
              </div>
              <div className="space-y-3">
                {service.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Complete Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Complete Feature Set</h3>
                <p className="text-gray-600">Everything included in our comprehensive {service.title.toLowerCase()} package</p>
              </div>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Business Benefits</h3>
                <p className="text-gray-600">How our {service.title.toLowerCase()} service drives value for your business</p>
              </div>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise is built on a foundation of cutting-edge technology and proven methodologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <div key={index} className="bg-blue-600 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Lets discuss your project requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              <CheckCircle className="mr-2 w-5 h-5" />
              Start Your Project
            </Button>
            <Button href="/services" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <ArrowRight className="mr-2 w-5 h-5" />
              View All Services
            </Button>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default ServiceDetail;