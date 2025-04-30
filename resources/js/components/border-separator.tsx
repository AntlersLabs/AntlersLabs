import { cn } from '@/lib/utils'
import React from 'react'

interface BorderSepartorProps {
    className?: string
}
const BorderSepartor = ({className}:BorderSepartorProps) => {
  return (
    <div>
      <div className={cn(' border-y ',className)}>
      <div className=' py-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35   '>
<div className=' container border-x '>

</div>

    </div>
    
    </div>
    </div>
  )
}

export default BorderSepartor