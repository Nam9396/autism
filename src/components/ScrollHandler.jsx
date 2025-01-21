'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"


export function ScrollHandler() { 
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    console.log(window.location.href)
    
    if (hash) { 
      console.log(hash)
      const element = document.getElementById(hash)
      if (element) { 
        setTimeout(() => {
          element.scrollIntoView({ block: 'end', behavior: 'smooth' })
        }, 1000)
      }
    } else {
      console.log('hash is not available')
      setTimeout(() => {
        window.scrollTo({ top: '0', behavior: 'smooth' })
      }, 1000)
    }
  }, [window.location.href])

  return null
}