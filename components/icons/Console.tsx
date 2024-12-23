const ConsoleIcon = ({
  className
}: {
  className?: string
}) => {
  return (
    <svg className={className} fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" color='currentColor'><path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path></svg>
  )
}

export default ConsoleIcon;