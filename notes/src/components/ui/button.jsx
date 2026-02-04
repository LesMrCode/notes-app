export function Button({ children, className, variant = "default", size = "default", ...props }) {
  const baseClasses = "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparent hover:bg-gray-100 focus:ring-gray-500"
  }

  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-1.5 text-sm"
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className || ''}`.trim()

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
