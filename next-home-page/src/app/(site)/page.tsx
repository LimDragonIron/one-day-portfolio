import HomeCard from '@/app/(site)/components/home-card'
import Image from 'next/image'
import { Gamepad2, IdCard, NotebookText } from 'lucide-react'

const titleItems = [
  {
    title: 'Portfolio',
    url: '/portfolio/resume',
    icon: IdCard,
    size: 200
  },
  {
    title: 'Blog',
    // url: '/blog/daily',
    icon: NotebookText,
    size: 200
  },
  {
    title: 'Game',
    // url: '/game',
    icon: Gamepad2,
    size: 200
  }
]

export default function Home() {
  return (
    <section className='py-40'>
      <div className='container'>
        <div className='flex w-full flex-col items-center justify-center gap-4 pt-8 md:flex-row lg:gap-16'>
          {titleItems.map(item => (
            <HomeCard title={item.title} url={item.url} key={item.title}>
              <item.icon size={item.size} />
            </HomeCard>
          ))}
        </div>
      </div>
    </section>
  )
}
