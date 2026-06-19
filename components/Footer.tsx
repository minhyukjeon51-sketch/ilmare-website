const links = [
  { label: '회사 소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '운영 프로세스', href: '#process' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '성공 사례', href: '#testimonials' },
  { label: '상담 신청', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold">일마레</span>
              <span className="text-[#C8865A] text-xs font-semibold uppercase tracking-widest">F&B 위탁운영</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              F&B 매장의 운영 전반을 책임지는 위탁경영 전문기업입니다.
              4주 안정화 시스템으로 매장의 수익성을 개선합니다.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#contact"
                className="bg-[#C8865A] hover:bg-[#b07048] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                무료 상담 신청
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">메뉴</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-[#C8865A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">파트너 상담 문의</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <span className="text-[#C8865A]">📨</span>{' '}
                <a href="#contact" className="hover:text-white transition-colors">
                  상담 신청 폼
                </a>
              </div>
              <div>
                <span className="text-[#C8865A]">✉️</span>{' '}
                <a href="mailto:info@ilmare.co.kr" className="hover:text-white transition-colors">
                  info@ilmare.co.kr
                </a>
              </div>
              <div>
                <span className="text-[#C8865A]">📍</span>{' '}
                <span>상담 시 안내드립니다</span>
              </div>
              <div className="pt-1 text-xs text-gray-500">
                영업일 기준 24시간 이내 담당자가 연락드립니다.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 일마레 F&B 위탁운영. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-300">서비스 이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
