"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from '../../components/MarketingHeader'; // Add this import
import Footer from '../../components/MarketingFooter';
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

  const servicesData = {
    "web-development": {
      icon: Globe,
      title: "Web Development",
      description: "Build a powerful online presence with a custom, high performing website that truly represents your brand.",
      longDescription: "Ready to stand out in the Australian market? Our web development services go beyond just code. We craft beautiful, responsive, and SEO friendly websites that not only look incredible but also drive results. Whether you're a small business in Sydney needing a showcase site or a national e-commerce brand, we build a digital home that's fast, secure, and ready to grow with you.",
      features: [
        "Custom, Mobile First Web Design",
        "E-commerce & Online Store Solutions",
        "WordPress & CMS Development",
        "Lightning Fast Performance Optimisation",
        "SEO Ready Architecture",
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
      longDescription: "In a mobile first world, an app is your direct line to customers. We design and build intuitive, user friendly mobile applications that solve problems and create value. From a local service app for Melbourne to a global enterprise tool, we handle the full development lifecycle to deliver an app that your users will love and a solution that drives your business forward.",
      features: [
        "Native iOS & Android App Development",
        "Cross Platform Solutions (React Native)",
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
      longDescription: "Email is still one of the most powerful tools for growing a business. Our email marketing services help you nurture leads, connect with your audience, and keep them coming back for more. We create compelling newsletters, automated welcome sequences, and targeted campaigns that feel personal and genuine not like just another sales pitch. It's about building relationships, one email at a time.",
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
        "Keep your brand top of mind",
        "Get valuable insights into your audience"
      ]
    },
    "seo": {
      icon: Search,
      title: "Search Engine Optimisation (SEO)",
      description: "Get found on Google by the right people at the right time. Your business deserves to be at the top.",
      longDescription: "Tired of being on page two? Our SEO services are designed to get your website noticed by potential customers in Australia. We do the heavy lifting from keyword research and on page optimisation to building quality backlinks. Our goal is to increase your organic traffic, improve your search rankings, and turn your website into a powerful lead generating machine. We'll make sure when someone searches for 'web developer Sydney' or 'digital marketing Melbourne,' they find you.",
      features: [
        "Local & National SEO Strategies",
        "In Depth Keyword Research",
        "On Page & Technical SEO Audits",
        "High Quality Content Strategy",
        "Link Building & Authority Building",
        "Regular Performance Reporting"
      ],
      technologies: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"],
      benefits: [
        "Increase organic website traffic",
        "Improve your search engine rankings",
        "Attract highly qualified leads",
        "Gain long term visibility and authority"
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
      description: "Fuel your digital marketing with compelling, high quality content that engages your audience and boosts your SEO.",
      longDescription: "Every piece of content you put out from your website's homepage to a blog post is a chance to tell your story and connect with your audience. Our content writers craft compelling, human friendly copy that not only informs and entertains but is also optimised to rank well on Google. We help you establish your voice as a trusted authority, attract organic traffic, and convert visitors into customers with words that matter.",
      features: [
        "Website Copy & Landing Pages",
        "Blog Posts & Articles",
        "Case Studies & Whitepapers",
        "Email & Newsletter Copy",
        "SEO Driven Content Strategy",
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

              {/* <div className="grid grid-cols-2 gap-6">
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
              </div> */}
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