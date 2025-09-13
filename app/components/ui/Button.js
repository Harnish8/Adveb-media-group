import AppIcon from '../AppIcon'

export default function Button({ 
  children, 
  variant = "default", 
  size = "md", 
  className = "", 
  iconName, 
  iconPosition = "left",
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700"
  }
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg"
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} {...props}>
      {iconName && iconPosition === "left" && (
        <AppIcon name={iconName} size={size === "lg" ? 20 : 16} className="mr-2" />
      )}
      {children}
      {iconName && iconPosition === "right" && (
        <AppIcon name={iconName} size={size === "lg" ? 20 : 16} className="ml-2" />
      )}
    </button>
  )
}