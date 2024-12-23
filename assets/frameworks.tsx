import AngularIcon from "@/components/icons/Angular";
import CRAIcon from "@/components/icons/CRA";
import EmberIcon from "@/components/icons/Ember";
import GatsbyIcon from "@/components/icons/Gatsby";
import HugoIcon from "@/components/icons/Hugo";
import NextJSIcon from "@/components/icons/NextJS";
import NuxtJSIcon from "@/components/icons/NuxtJS";
import SvelteIcon from "@/components/icons/Svelte";
import VueIcon from "@/components/icons/VueIcon";

export interface FrameworkType{
  title: string,
  link: string,
  icon: JSX.Element,
  ariaLabel: string
}

const frameworks = [
  {
    title: 'Next.js',
    link: 'https://vercel.com/solutions/nextjs',
    icon: <NextJSIcon />,
    ariaLabel: 'Next.js solution page'
  },
  {
    title: 'Create React App',
    link: 'https://vercel.com/solutions/react',
    icon: <CRAIcon />,
    ariaLabel: 'React solution page'
  },
  {
    title: 'Svelte',
    link: 'https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsvelte&template=svelte&id=67753070&b=main',
    icon: <SvelteIcon />,
    ariaLabel: 'Deploy a new Svelte project'
  },
  {
    title: 'Nuxt.js',
    link: 'https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnuxtjs&template=nuxtjs&id=67753070&b=main',
    icon: <NuxtJSIcon />,
    ariaLabel: 'Nuxt template'
  },
  {
    title: 'Vue.js',
    link: 'https://vercel.com/solutions/vue',
    icon: <VueIcon />,
    ariaLabel: 'Vue solution page'
  },
  {
    title: 'Ember.js',
    link: 'https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fember&template=ember&id=67753070&b=main',
    icon: <EmberIcon />,
    ariaLabel: 'Deploy a new Ember project'
  },
  {
    title: 'Angular',
    link: 'https://vercel.com/solutions/angular',
    icon: <AngularIcon />,
    ariaLabel: 'Angular solution page'
  },
  {
    title: 'Hugo',
    link: 'https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fhugo&template=hugo&id=67753070&b=main',
    icon: <HugoIcon />,
    ariaLabel: 'Deploy a new Hugo project'
  },
  {
    title: 'Gatsby',
    link: 'https://vercel.com/solutions/gatsby',
    icon: <GatsbyIcon />,
    ariaLabel: 'Gatsby solution page'
  }
]

export default frameworks;