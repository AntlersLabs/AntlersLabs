import BorderSepartor from '@/components/border-separator'
import Hero from '@/components/Hero'
import { ThreeDMarqueeDemo } from '@/components/marquee'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern'
import DefaultLayout from '@/layouts/DefaultLayout'
import React from 'react'

const Home = () => {
  return (
    <div>
    <DefaultLayout>
        <div className=' container p-0 border-x '>
            <div className=" md:mt-0">
            <Hero  />

            </div>

        </div>
        
        <BorderSepartor />
        <div className=' container border-x '>
        <ThreeDMarqueeDemo />
        </div>

        <BorderSepartor />



    </DefaultLayout>
    </div>
  )
}

export default Home