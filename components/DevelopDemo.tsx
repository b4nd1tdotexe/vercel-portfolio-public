import styles from '@/styles/DevelopDemo.module.css';
import ContentCard from "./ContentCard";
import ToolkitIcon from './icons/Toolkit';
import BackendIcon from './icons/Backend';
import ConsoleIcon from './icons/Console';
import frameworks from '@/assets/frameworks';
import Framework from './Framework';

const DevelopDemo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContent}>
        <ContentCard icon={<ToolkitIcon />} title='The complete toolkit for the Web' content='Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.' />
        <ContentCard icon={<BackendIcon />} title='Easy integration with your backend' content='Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.' />
        <ContentCard icon={<ConsoleIcon />} title='End-to-end testing on Localhost' content='From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.' />
        <p className='sectionText'>Works with 30+ frameworks</p>
      </div>
      <div className={styles.frameworks}>
        {frameworks.map((framework, index) => (
          <Framework key={index} framework={framework} />
        ))}
      </div>
    </div>
  )
}

export default DevelopDemo;