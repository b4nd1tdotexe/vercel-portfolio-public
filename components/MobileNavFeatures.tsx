import features from '@/assets/features';
import styles from '@/styles/MobileNavFeatures.module.css';
import Link from 'next/link';
import { useState } from "react";

const MobileNavFeatures = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => { setOpen((o) => !o); }}>
        <p>Features</p>
        <svg className={`${open && styles.open}`} xmlns="http://www.w3.org/2000/svg" color='currentColor' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </div>
      <div className={`${styles.content} ${open && styles.contentOpen}`}>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <Link href={feature.link} className={styles.link}>
                <div className={styles.featureHeader}>
                  {feature.icon}
                  <p>{feature.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavFeatures;