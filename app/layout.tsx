import '@/styles/globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const metadata = {
  title: 'Vercel: Develop. Preview. Ship. For the best frontend teams',
  description: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if(theme == null){
                if(window.matchMedia('(prefers-color-scheme: dark)')) document.documentElement.classList.add('dark-theme');
                else document.documentElement.classList.remove('dark-theme');
                localStorage.setItem('theme', 'system');
              }else if(theme === 'dark') document.documentElement.classList.add('dark-theme');
              else if(theme === 'light') document.documentElement.classList.remove('dark-theme');
              else{
                if(window.matchMedia('(prefers-color-scheme: dark)')) document.documentElement.classList.add('dark-theme');
                else document.documentElement.classList.remove('dark-theme');
              }
            })();
          `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
