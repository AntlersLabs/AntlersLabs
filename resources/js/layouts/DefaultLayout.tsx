import BorderSepartor from '@/components/border-separator'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const DefaultLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
<Navbar/>
<div >
  {children}
</div>

<BorderSepartor/>

<div className="container border-x">
    <Footer />
</div>

    </div>
  )
}

export default DefaultLayout
