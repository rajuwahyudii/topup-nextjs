import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './profile'

interface SideBarProps{
  activeMenu: 'overview' | 'transaction' | 'settings'
}

export default function SideBar(props:SideBarProps) {
  const {activeMenu}= props
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile/>
                <div className="menus">
                    <MenuItem title='Overview' icon='overview' active={activeMenu==='overview'} href={'/member'}/>
                    <MenuItem title='Transaction' icon='transaction' active={activeMenu==='transaction'} href='/member/transaction'/>
                    <MenuItem title='Messages' icon="messages" href={'/member'}/>
                    <MenuItem title='Card' icon='card' href={'/member'}/>
                    <MenuItem title='Reward' icon='reward' href={'/member'}/>
                    <MenuItem title='Settings' icon='setting' active={activeMenu==='settings'} href={'/member/edit-profile'}/>
                    <MenuItem title='Log Out' icon='logout' href='/member/sign-in'/>
                    
                </div>
                <Footer/>
            </div>
        </section>
  )
}
