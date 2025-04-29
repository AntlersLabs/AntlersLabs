import { cn } from '@/lib/utils'
import React from 'react'

interface BorderSepartorProps {
    className?: string
}
const BorderSepartor = ({className}:BorderSepartorProps) => {
  return (
    <div><div className={cn(' border-y ',className)}>

    <div className=' py-6 container border-x '>

    </div>
    
    </div>
    </div>
  )
}

export default BorderSepartor