import React from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'
import PageSiderbar from '@/components/common/page-siderbar'
import { cookies } from 'next/headers'
import { SideItem } from '@/types/common'

export interface ProfileLayoutProps {
  children: React.ReactNode
}

const items: SideItem[] = [
  {
    title: 'Resume',
    url: '/portfolio/resume',
    icon: 'FileUser'
  }
]

export default async function ProfileLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <PageSiderbar items={items} title={'Portfolio'} />
      <SidebarInset>
        <main className='p-4'>
          {/* <SidebarTrigger/> */}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
