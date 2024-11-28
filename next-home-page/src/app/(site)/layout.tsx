import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import React from 'react'

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default SiteLayout
