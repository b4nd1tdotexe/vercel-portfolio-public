import brands from '@/assets/sliderBrands';
import styles from '@/styles/Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Adobe from '@/public/adobe.svg';
import EBay from '@/public/ebay.svg';
import Hashicorp from '@/public/hashicorp.svg';
import Loom from '@/public/loom.svg';
import Okta from '@/public/okta.svg';
import Tailwind from '@/public/tailwindcss.svg';
import UnderArmour from '@/public/underarmour.svg';
import Washingtonpost from '@/public/washingtonpost.svg';
import Zapier from '@/public/zapier.svg';

const Brands = () => {
  return (
    <>
      {brands.map((brand, index) => {
        return <Image key={index} src={brand.src} alt={brand.title} className={styles.brand} />
      })}
    </>
  )
}

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          <span className={styles.bgContainer} style={{
            '--content': '"Develop."'
          } as React.CSSProperties}>
            <span className={styles.develop} style={{
              '--start-color': 'var(--develop-start-gradient)',
              '--end-color': 'var(--develop-end-gradient)'
            } as React.CSSProperties}>Develop.</span>
          </span>
          <span className={styles.bgContainer} style={{
            '--content': "'Preview.'"
          } as React.CSSProperties}>
            <span className={styles.preview} style={{
              '--start-color': 'var(--preview-start-gradient)',
              '--end-color': 'var(--preview-end-gradient)'
            } as React.CSSProperties}>Preview.</span>
          </span>
          <span className={styles.bgContainer} style={{
            '--content': '"Ship."'
          } as React.CSSProperties}>
            <span className={styles.ship} style={{
              '--start-color': 'var(--ship-start-gradient)',
              '--end-color': 'var(--ship-end-gradient)'
            } as React.CSSProperties}>Ship.</span>
          </span>
        </h1>
        <h2 className={styles.description}>
          Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
        </h2>
        <div className={styles.btnWrapper}>
          <div className={styles.btnContainer}>
            <Link href='https://vercel.com/new' className={`${styles.link} ${styles.deployBtn}`}>
              <div className={styles.btn}>
                  <svg aria-label="Vercel Logo" fill="currentColor" viewBox="0 0 75 65" height="15.600000000000001" width="18"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
                  <p className={styles.btnText}>Start Deploying</p>
              </div>
            </Link>
            <Link href='https://vercel.com/contact/sales' className={`${styles.link} ${styles.demoBtn}`}>
              <div className={styles.btmBgContainer}>
                <span className={styles.border1} style={{
                    '--start-color': 'var(--develop-start-gradient)',
                    '--end-color': 'var(--develop-end-gradient)'
                  } as React.CSSProperties} />
                  <span className={styles.border2} style={{
                    '--start-color': 'var(--preview-start-gradient)',
                    '--end-color': 'var(--preview-end-gradient)'
                  } as React.CSSProperties} />
                  <span className={styles.border3} style={{
                    '--start-color': 'var(--ship-start-gradient)',
                    '--end-color': 'var(--ship-end-gradient)'
                  } as React.CSSProperties} />
                  <div className={styles.btn}>
                    <p className={styles.btnText}>Get a Demo</p>
                  </div>
                </div>
              </Link>
          </div>
        </div>
        <div className={styles.brandDetails}>
            <Link href='https://www.vercel.com/customers' className={styles.link}>
              <p className='sectionText'>Trusted by the best frontend teams</p>
            </Link>
            <div className={styles.sliderContainer}>
              <div className={styles.fadeLeft} />
              <div className={styles.brandSlider}>
                <div className={styles.brands}>
                  <Brands />
                  <Brands />
                </div>
              </div>
              <div className={styles.fadeRight} />
            </div>
          <div className={styles.brandDetailsDesktop}>
            <div className={styles.brandsDesktop}>
              <div className={styles.brandsTop}>
                <Image src={Adobe} alt='Adobe' />
                <Image src={Okta} alt='Okta' />
                <Image src={UnderArmour} alt='Under Armour' />
                <Image src={EBay} alt='EBay' />
                <Image src={Zapier} alt='Zapier' />
              </div>
              <div className={styles.brandsBtm}>
                <Image src={Loom} alt='Loom' />
                <Image src={Hashicorp} alt='Hashicorp' />
                <Image src={Tailwind} alt='Tailwind' />
                <Image src={Washingtonpost} alt='The Washington Post' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='sectionText'>Explore the vercel way</p>
    </div>
  )
}

export default Hero;