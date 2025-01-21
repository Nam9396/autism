'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"


export function ScrollHandler() { 
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) { 
      const element = document.getElementById(hash)
      if (element) { 
        setTimeout(() => {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, 1000)
      }
    } else {
      setTimeout(() => {
        window.scrollTo({ top: '0', behavior: 'smooth' })
      }, 1000)
    }
  }, [pathname])

  return null
}