import React from 'react'
import cx from 'classnames'

interface ButtonTabbProps{
    title: string
    active: boolean
}
export default function ButtonTab(props: ButtonTabbProps) {
    const {title, active} = props
    const className = cx({
        "btn btn-status rounded-pill text-sm me-3": true,
        'btn-active': active
    })
  return (
    <a data-filter="*" href="#" className={className}>{title}</a>
  )
}
