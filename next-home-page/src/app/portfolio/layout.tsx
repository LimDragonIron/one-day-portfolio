import React from 'react'

export interface ProfileLayoutProps {
  children: React.ReactNode
}

export default async function ProfileLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main
      className={`overflow-y-scroll p-4 [&::-webkit-scrollbar]:hidden`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {/* <SidebarTrigger/> */}
      {children}
    </main>
  )
}
