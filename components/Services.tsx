const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '매장 인수 & 운영 이관',
    desc: '계약 즉시 현장 실사 후 7일 이내 운영 체계 이관. 기존 직원 전원 동시 교체 없이 안정적으로 전환합니다.',
    points: ['현장 실사 및 리스크 분류', '인력/장비/재고 인수 체크리스트', '운영 권한 단계별 이관'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '인력 관리 & 교육',
    desc: '헤드셰프부터 홀스태프까지 채용·교육·평가를 일마레가 책임집니다. 사장님은 인사 걱정에서 해방됩니다.',
    points: ['A/B/C 등급 인력 평가 체계', '주방 SOP 교육 및 인증', '30일 인력 전환 표준 프로세스'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: '원가 & 재고 관리',
    desc: '식자재 원가율을 목표 수준으로 맞춥니다. 발주·재고·폐기를 데이터 기반으로 관리해 낭비를 없앱니다.',
    points: ['주 2회 재고 실사 및 차이 분석', '거래처 단가 협상 및 관리', '원가율 KPI 실시간 모니터링'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '매출 & 마케팅',
    desc: '배달앱 최적화, 리뷰 관리, SNS 운영까지. 매장 매출을 높이는 마케팅 실행을 함께 합니다.',
    points: ['배달앱 상위 노출 최적화', '온라인 리뷰 관리 및 응대', '시즌 메뉴·프로모션 기획'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: '투명한 보고 체계',
    desc: '일일 마감 보고, 주간 KPI 리포트, 월간 손익 분석을 오너에게 직접 공유합니다.',
    points: ['일 매출·원가·인건비 리포트', '주간 KPI 대시보드', '월간 손익계산서 공유'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '리스크 관리',
    desc: '조기 경보 시스템으로 문제를 사전에 감지합니다. 위기 상황 시 신속하게 대응하는 체계를 갖추고 있습니다.',
    points: ['KPI 이탈 조기 경보 시스템', '위생·안전 컴플라이언스 관리', '조기 해지 기준 및 대응 매뉴얼'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            위탁운영, 이렇게 다릅니다
          </h2>
          <p className="mt-4 text-gray-500 font-serif font-light text-base sm:text-lg max-w-2xl mx-auto">
            단순 컨설팅이 아닙니다. 일마레가 직접 운영에 참여하여
            <br className="hidden sm:block" />
            매장의 모든 영역을 책임집니다.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#FAFAF7] rounded-2xl p-6 border border-gray-100 hover:border-[#C8865A]/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#F5EDE0] rounded-xl flex items-center justify-center text-[#C8865A] mb-4 group-hover:bg-[#C8865A] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2d2d2d] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            어떤 서비스가 필요한지 상담받기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
