import CaseStudyCard from '@/components/case-study-card'
import DefaultLayout from '@/layouts/DefaultLayout'
import React from 'react'

const Index = () => {
  return (
    <DefaultLayout>
        <div className=' container border-x'>
   <div className=' p-4 grid grid-cols-1 gap-10 md:grid-cols-4 '>

        <CaseStudyCard href='/' title='Your Eyes' category='kawai-san' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbUfhZrv3xd75UGiiqBwoxonQOoI9yz867w&s' />



   </div>
        </div>
    </DefaultLayout>
  )
}

export default Index
