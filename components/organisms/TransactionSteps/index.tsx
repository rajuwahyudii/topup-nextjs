import React from 'react'
import StepsItem from '../../molecules/StapsItems'

export default function TransactionSteps() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br /> Easy to Win the Game
            </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <StepsItem icon='step1' title='1. Start' desc1='pilih salah satu game' desc2='yang ingi kamu topup'/>
            <StepsItem icon='step2' title='1. Fill up' desc1='Top up sesuai dengan' desc2='nominal yang tersedia'/>
            <StepsItem icon='step3' title='3. Be a winner' desc1='Siap digunakan untuk' desc2='improve permainan kamu'/>
            
          </div>
        </div>
      </section>
  )
}
