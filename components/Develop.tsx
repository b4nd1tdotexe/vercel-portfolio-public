import styles from '@/styles/Develop.module.css';

const Develop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.line} style={{
          '--height': '100px',
          '--start-color': 'var(--background)',
          '--end-color': 'var(--develop-line-end)'
        } as React.CSSProperties} />
        <div className={styles.header}>
          <div className={styles.ball} style={{
            '--start-color': 'var(--develop-start-gradient)',
            '--end-color': 'var(--develop-end-gradient)'
          } as React.CSSProperties}>1</div>
          <h3 className={styles.title} style={{
            '--start-color': 'var(--develop-start-gradient)',
            '--end-color': 'var(--develop-end-gradient)'
          } as React.CSSProperties}>Develop</h3>
        </div>
        <h4 className={styles.extra}>Build when inspiration strikes</h4>
        <p className={styles.description}>Free developers from time-consuming, unnecessary processes that slow your work, so you and your team can focus on creating.</p>
      </div>
    </div>
  )
}

export default Develop;