export function Card({ children, className, ...props }) {
  return (
    <div className={`border border-border bg-card rounded-lg shadow-sm ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }) {
  return (
    <>
      <div className={`px-6 pt-6 pb-4 ${className || ''}`} {...props}>
        {children}
      </div>
      <hr className="rule" />
    </>
  )
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h2 className={`text-lg font-semibold ${className || ''}`} {...props}>
      {children}
    </h2>
  )
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={`text-sm text-muted-foreground ${className || ''}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`px-6 py-4 ${className || ''}`} {...props}>
      {children}
    </div>
  )
}
