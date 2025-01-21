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
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    } else {
    //   window.scrollTo({ top: '0', behavior: 'smooth' })
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [pathname])

  return null
}