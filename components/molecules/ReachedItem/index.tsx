import React from 'react'

interface ReachedItemProps{
    angka: string
    penjelasan:string
}
export default function ReachedItem(props: ReachedItemProps) {
    const {angka, penjelasan} = props
  return (
    <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{angka}</p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">{penjelasan}</p>
            </div>
  )
}
