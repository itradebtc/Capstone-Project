import React from 'react'

export const metadata = {
    title: 'John Doe',
    description: 'Orthodontics',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
