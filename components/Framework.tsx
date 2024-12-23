'use client';
import styles from '@/styles/Framework.module.css';
import { FrameworkType } from "@/assets/frameworks";
import Link from "next/link";
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const FrameworkTooltip = dynamic(() => import('@/components/FrameworkTooltip'), {
  ssr: false
});

const Framework = ({
  framework
}: {
  framework: FrameworkType
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleEnter = () => { setShowTooltip(true); }
  const handleLeave = () => { setShowTooltip(false); }
  const elRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={elRef} className={styles.container}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}>
      <Link href={framework.link} className={styles.link} aria-label={framework.ariaLabel}>
        {framework.icon}
      </Link>
      <FrameworkTooltip show={showTooltip} title={framework.title} parent={elRef} />
    </div>
  )
}

export default Framework;