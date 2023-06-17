import React from 'react'

export const metadata = {
    title: 'Daniel Brown',
    description: 'Restorative Dentistry',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
