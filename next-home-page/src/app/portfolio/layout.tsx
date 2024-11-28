import React from 'react'

export interface ProfileLayoutProps {
  children: React.ReactNode
}

export default async function ProfileLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='p-4'>
      {/* <SidebarTrigger/> */}
      {children}
    </main>
  )
}
