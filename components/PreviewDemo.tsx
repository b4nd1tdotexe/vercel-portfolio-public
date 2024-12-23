import styles from '@/styles/PreviewDemo.module.css';
import ContentCard from './ContentCard';
import Link from 'next/link';
import DeployIcon from './icons/Deploy';
import PreviewIcon from './icons/Preview';
import CollaborateIcon from './icons/Collaborate';

const PreviewDemo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ContentCard icon={<DeployIcon />} title='Push to deploy' content='Every deploy automatically generates a shareable live preview site that stays up-to-date with your changes.' />
        <ContentCard icon={<PreviewIcon />} title='Automatic Previews for every branch' content='Each new branch receives a live, production-like URL that everyone on your team can visit.' />
        <div className={styles.lastCard}>
          <ContentCard icon={<CollaborateIcon />} title='Collaborative reviews on UI' content='Comment directly on components, layouts, copy, and more in real context and real time, integrated seamlessly with GitHub and Slack.' />
          <Link href='https://vercel.com/docs/workflow-collaboration/comments' className='newLink' target='_blank'>
            <span className='pill' style={{
              '--pill-color': 'var(--highlight-magenta)'
            } as React.CSSProperties}>New</span>
            <p>Commenting is now available →</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PreviewDemo;