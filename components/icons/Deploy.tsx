const DeployIcon = ({
  className
}: {
  className?: string
}) => {
  return (
    <svg className={className} fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" color='currentColor'><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path><path d="M16 6l-4-4-4 4"></path><path d="M12 2v13"></path></svg>
  )
}

export default DeployIcon;