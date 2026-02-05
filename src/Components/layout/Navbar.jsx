import React , {useState, useEffect} from 'react'
import { NAV_LINKS } from '../../utils/constans'
import {Code,Menu,X} from 'lucide-react'  

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) =>{
    scroolToSection(sectionId)
    setIsMenuOpen(false)
  }
  return (
    <div className='text-white'>
      NAVBAR
    </div>
  )
}

