import styles from '@/styles/ShipStats.module.css';

const Stats = ({
  value,
  type
}: {
  value: string,
  type: string
}) => {
  return (
    <div className={styles.stats}>
      <p className={styles.value}>{value}</p>
      <p className={styles.type}>{type}</p>
    </div>
  )
}

const ShipStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Stats value='90' type='cities' />
        <Stats value='41B+' type='requests per week' />
        <Stats value='10PB' type='data served' />
        <Stats value='99.99%' type='guaranteed uptime' />
      </div>
    </div>
  )
}

export default ShipStats;