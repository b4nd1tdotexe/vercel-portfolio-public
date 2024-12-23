const StatisticsIcon = ({
  className
}: {
  className?: string
}) => {
  return (
    <svg className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14.25V16.5M10.5 12V16.5M13.5 9.75V16.5M16.5 7.5V16.5M6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V6C20.25 5.40326 20.0129 4.83097 19.591 4.40901C19.169 3.98705 18.5967 3.75 18 3.75H6C5.40326 3.75 4.83097 3.98705 4.40901 4.40901C3.98705 4.83097 3.75 5.40326 3.75 6V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
  )
}

export default StatisticsIcon;