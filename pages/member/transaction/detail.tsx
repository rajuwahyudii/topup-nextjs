import React from 'react'
import SideBar from '../../../components/organisms/SideBar'
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent'

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
        <main className="main-wrapper">
            <TransactionDetailContent/>
        </main>
    </section>
  )
}
