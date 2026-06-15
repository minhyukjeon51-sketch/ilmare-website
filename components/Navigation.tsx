'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: '회사 소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '운영 프로세스', href: '#process' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '성공 사례', href: '#testimonials' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              일마레
            </span>
            <span
              className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
                scrolled ? 'text-[#C8865A]' : 'text-[#F5EDE0]/80'
              }`}
            >
              fine team. fine dining.
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C8865A] ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-[#C8865A] hover:bg-[#b07048] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            무료 상담 신청
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                menuOpen ? 'top-2 rotate-45 bg-[#1A1A1A]' : `top-0 ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 top-2 transition-all duration-300 ${
                menuOpen ? 'opacity-0 bg-[#1A1A1A]' : `opacity-100 ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                menuOpen ? 'top-2 -rotate-45 bg-[#1A1A1A]' : `top-4 ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[#1A1A1A] text-base font-medium py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-[#C8865A] text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            무료 상담 신청
          </a>
        </div>
      </div>
    </header>
  )
}
