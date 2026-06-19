'use client'
import { useState, useEffect } from 'react'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t border-gray-200 px-4 py-3 pb-safe flex gap-3">
        <a
          href="#contact"
          className="flex-1 bg-[#C8865A] text-white font-bold py-3 px-6 rounded-xl text-sm text-center shadow-md"
        >
          📨 무료 상담 신청
        </a>
      </div>
    </div>
  )
}
