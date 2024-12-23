import styles from '@/styles/Ship.module.css';
import ContentCard from './ContentCard';
import Link from 'next/link';
import GlobalIcon from './icons/Global';
import StatisticsIcon from './icons/Statistics';

const Ship = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.line} style={{
          '--height': '100px',
          '--start-color': 'var(--background)',
          '--end-color': 'var(--ship-line-end)'
        } as React.CSSProperties} />
        <div className={styles.header}>
          <div className={styles.ball} style={{
            '--start-color': 'var(--ship-start-gradient)',
            '--end-color': 'var(--ship-end-gradient)'
          } as React.CSSProperties}>3</div>
          <h3 className={styles.title} style={{
            '--start-color': 'var(--ship-start-gradient)',
            '--end-color': 'var(--ship-end-gradient)'
          } as React.CSSProperties}>Ship</h3>
        </div>
        <h4 className={styles.extra}>Delight every visitor</h4>
        <div className={styles.shipExtra}>
          <h5 className={styles.extraFirst}>Speed is critical to customers — and SEO</h5>
          <p className={styles.extraSecond}>Next.js and Vercel work together to deliver the best performance for your end users, while maintaining best-in-class SEO practices.</p>
        </div>
        <p className={styles.description}>Built on cutting-edge serverless technology, Vercel can withstand any traffic spike, with automatic failover and global replication of assets.</p>
        <ContentCard icon={<GlobalIcon />} title='Global Edge Network' content='Your site, fast everywhere. Deploy content around the world and update it in 300ms.' />
        <div className={styles.lastCard}>
          <ContentCard icon={<StatisticsIcon />}  title='First-party monitoring and observability' content='Analyze logs, understand traffic and usage, and easily optimize your applications, without extra tooling or code.' />
          <Link href='https://vercel.com/docs/workflow-collaboration/comments' className='newLink' target='_blank'>
            <span className='pill' style={{
              '--pill-color': '#fc6d26'
            } as React.CSSProperties}>New</span>
            <p>Now available for Pro and Enterprise customers →</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Ship;