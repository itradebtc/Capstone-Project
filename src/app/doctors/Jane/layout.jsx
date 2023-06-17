import React from 'react'

export const metadata = {
    title: 'Jane Smith',
    description: 'Endodontics',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
