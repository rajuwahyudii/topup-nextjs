import Image from 'next/image'
import React from 'react'


interface StepsItemProps{
    icon: 'step1' | 'step2' | 'step3'
    title: string
    desc1: string
    desc2:string
}
export default function StepsItem(props:StepsItemProps) {
    const {icon, desc1, desc2, title} = props;
  return (
    <div className="col-lg-4">
              <div className="card feature-card border-0">
                <Image src={`/icon/${icon}.svg`} width={80} height={80}/>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
                <p className="text-lg color-palette-1 mb-0">
                    {desc1}
                    <br />
                            {desc2}</p>
              </div>
            </div>
  )
}
