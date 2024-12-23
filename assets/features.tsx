import CommentIcon from "@/components/icons/Comment";
import InfrastructureIcon from "@/components/icons/Infrastructure";
import GlobalIcon from "@/components/icons/Global";
import NextJSIcon from "@/components/icons/NextJS";
import AnalyticsIcon from "@/components/icons/Analytics";
import BackendIcon from "@/components/icons/Backend";

const features = [
  {
    title: 'Previews',
    description: 'Zero config, more innovation',
    link: 'https://vercel.com/features/previews',
    icon: <CommentIcon />
  },
  {
    title: 'Infrastructure',
    description: 'Always fast, always online',
    link: 'https://vercel.com/features/infrastructure',
    icon: <InfrastructureIcon />
  },
  {
    title: 'Edge Functions',
    description: 'Dynamic pages, static speed',
    link: 'https://vercel.com/features/edge-functions',
    icon: <GlobalIcon />
  },
  {
    title: 'Next.js',
    description: 'The native Next.js platform',
    link: 'https://vercel.com/solutions/nextjs',
    icon: <NextJSIcon />
  },
  {
    title: 'Analytics',
    description: 'Real-time insights, peak performance',
    link: 'https://www.vercel.com/analytics',
    icon: <AnalyticsIcon />
  },
  {
    title: 'Storage',
    description: 'Serverless storage for the frontend',
    link: 'https://vercel.com/storage/kv',
    icon: <BackendIcon />
  },
];

export default features;