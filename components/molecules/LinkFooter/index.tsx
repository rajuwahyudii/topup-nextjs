import Link from 'next/link'
import React from 'react'


interface LinkFooterProps{
    href:string
    title:string
}
export default function LinkFooter(props:LinkFooterProps) {
    const {href, title}=props
  return (
    <li className="mb-6">
        <Link href={href}>
            <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
        </Link>
    </li>
  )
}
