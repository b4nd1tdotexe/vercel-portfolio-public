const AngularIcon = ({
  className
}: {
  className?: string
}) => {
  return (
    <svg className={className} fill="none" height="37" viewBox="0 0 188 200"><path d="M94 0L0.899994 33.2L15.1 156.3L94 200L172.9 156.3L187.1 33.2L94 0Z" fill="var(--foreground)"></path><path d="M94 0V22.2V22.1V123.4V200L172.9 156.3L187.1 33.2L94 0Z" fill="var(--accents-6)"></path><path d="M94 22.1L35.8 152.6H57.5L69.2 123.4H118.6L130.3 152.6H152L94 22.1ZM111 105.4H77L94 64.5L111 105.4Z" fill="var(--background)"></path></svg>
  )
}

export default AngularIcon;
