'use client'
import React from 'react'

export interface layoutProps {}
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default layout
