import React from 'react'

export const metadata = {
    title: 'Sarah Williams',
    description: 'Periodontics',
  }

export default function layout({children}) {
  return (
    <div>
      {children}
    </div>
  )
}
