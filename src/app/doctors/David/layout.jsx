import React from 'react'

export const metadata = {
    title: 'David Johnson',
    description: 'Pediatric Dentistry',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
