import styles from '@/styles/Preview.module.css';
import Link from 'next/link';

const Preview = () => {
  return (
    <div className={styles.preview}>
      <div className={styles.container}>
        <div className={styles.line} style={{
          '--height': '100px',
          '--start-color': 'var(--background)',
          '--end-color': 'var(--preview-line-end)'
        } as React.CSSProperties} />
        <div className={styles.header}>
          <div className={styles.ball} style={{
            '--start-color': 'var(--preview-start-gradient)',
            '--end-color': 'var(--preview-end-gradient)'
          } as React.CSSProperties}>2</div>
          <h3 className={styles.title} style={{
            '--start-color': 'var(--preview-start-gradient)',
            '--end-color': 'var(--preview-end-gradient)'
          } as React.CSSProperties}>Preview</h3>
        </div>
        <h4 className={styles.extra}>Iterate with your team</h4>
        <p className={styles.description}>
          Make frontend development a collaborative experience with automatic Preview Deployments for every code change, by seamlessly integrating with
          <Link href='https://vercel.com/docs/concepts/deployments/git/vercel-for-github' className={styles.link}>GitHub</Link>,
          <Link href='https://vercel.com/docs/concepts/deployments/git/vercel-for-gitlab' className={styles.link}>GitLab</Link> and
          <Link href='https://vercel.com/docs/concepts/deployments/git/vercel-for-bitbucket' className={styles.link}>Bitbucket</Link>.
        </p>
      </div>
    </div>
  )
}

export default Preview;