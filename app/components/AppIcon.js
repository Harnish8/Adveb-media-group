import { 
  Server, 
  TrendingUp, 
  Users, 
  Zap, 
  ArrowRight, 
  Play, 
  ChevronDown,
  Target,
  Heart,
  Compass,
  Check,
  Plus,
  Calendar,
  Award,
  Code,
  Palette,
  Globe,
  Smartphone,
  Mail,
  Share2,
  Search,
  Lightbulb,
  FileText,
  PenTool,
  Layers,
  Feather
} from 'lucide-react'

const iconMap = {
  Server,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Play,
  ChevronDown,
  Target,
  Heart,
  Compass,
  Check,
  Plus,
  Calendar,
  Award,
  Code,
  Palette,
  FileText,
  Mail,
  Lightbulb,
  Share2,
  Search,
  Globe,
  Smartphone,
  PenTool,
  Layers,
  Feather
}

export default function AppIcon({ name, size = 24, className = "" }) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    return null
  }
  
  return <IconComponent size={size} className={className} />
}