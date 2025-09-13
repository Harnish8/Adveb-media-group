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
  Plus
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
}

export default function AppIcon({ name, size = 24, className = "" }) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    return null
  }
  
  return <IconComponent size={size} className={className} />
}