import React from 'react'

export const metadata = {
    title: 'Andrew Wilson',
    description: 'Cosmetic Dentistry',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
