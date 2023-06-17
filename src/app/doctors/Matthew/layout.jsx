import React from 'react'

export const metadata = {
    title: 'Matthew Anderson',
    description: 'Dental Implants',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
