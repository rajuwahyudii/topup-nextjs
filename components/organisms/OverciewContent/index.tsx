import Image from 'next/image'
import React from 'react'
import Category from './Category'
import TableRow from './TableRow'

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
    <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
            <div className="main-content">
                <div className="row">
                    <Category nominal={180000} icon='ic-desktop'>Game <br/> Desktop</Category>
                    <Category nominal={8455000} icon='ic-mobile'>Game <br/> Mobile</Category>
                    <Category nominal={8455000} icon="ic-other">Other <br/> Categories</Category>
                </div>
            </div>
        </div>
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="text-start" scope="col">Game</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow title='Mobile legend' image='overview-1' item={320} price={500000} status={'pending'} categori={'mobile'}/>
                        <TableRow title='Call of Duty:Modern' image='overview-2' item={550} price={740000} status={'success'} categori={'desktop'}/>
                        <TableRow title='Clash of Clans ' image='overview-3' item={320} price={500000} status={'failed'} categori={'mobile'}/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
  )
}
