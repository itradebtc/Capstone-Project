import React from 'react'

export const metadata = {
    title: 'Our Service',
    description: 'Our dental service',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
