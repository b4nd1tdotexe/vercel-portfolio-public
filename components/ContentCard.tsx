import styles from '@/styles/ContentCard.module.css';

const ContentCard = ({
  icon,
  title,
  content
}: {
  icon: React.ReactNode,
  title: string,
  content: string
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.content}>{content}</p>
    </div>
  )
}

export default ContentCard;