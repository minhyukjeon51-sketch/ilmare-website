export default function Investment() {
  return (
    <section id="investment" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Initial Investment
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            초기 투자 비용
          </h2>
          <p className="mt-4 text-gray-500 font-serif font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            일마레 파트너십의 초기 비용은 매장 규모·상권에 따라 상이합니다.
            <br className="hidden sm:block" />
            정확한 견적은 상담 시 맞춤 제공해 드립니다.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 가맹 운영 */}
          <div className="bg-[#FAFAF7] rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
              Franchise
            </div>
            <h3 className="font-bold text-[#1A1A1A] text-xl mb-3">가맹 운영</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              초기 투자 비용은 <strong className="text-[#1A1A1A]">매장 형태·입지에 따라 결정</strong>됩니다.
              상담 신청 시 맞춤 비용 시뮬레이션을 무료로 제공해 드립니다.
            </p>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                상권 분석 기반 맞춤 견적
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                인테리어·설비·교육 전 항목 안내
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                투자 회수 시점 시뮬레이션 포함
              </li>
            </ul>
          </div>

          {/* 위탁 운영 */}
          <div className="bg-gradient-to-br from-[#F5EDE0] to-[#FAFAF7] rounded-2xl p-7 border-2 border-[#C8865A]/30 shadow-md relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-[#C8865A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                추천
              </span>
            </div>
            <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
              Managed Operations
            </div>
            <h3 className="font-bold text-[#1A1A1A] text-xl mb-3">위탁 운영</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <strong className="text-[#1A1A1A]">별도 초기 투자 없이 시작 가능</strong>합니다.
              기존 매장을 그대로 운영하면서 일마레 브랜드와 시스템을 도입합니다.
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                기존 매장 그대로 활용
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                브랜드·메뉴·SOP 즉시 이관
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8865A] mt-0.5 flex-shrink-0">✓</span>
                12개월 후 가맹 전환 우선권
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 max-w-3xl mx-auto bg-[#1A1A1A] rounded-2xl p-6 sm:p-7">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white text-sm sm:text-base font-semibold mb-1">
                가격 민감도가 높으시다면 위탁운영을 먼저 검토해 보세요.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                무료 상담 신청 시 매장 형태별 맞춤 비용 계획서를 제공해 드립니다.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-1.5 bg-[#C8865A] hover:bg-[#b07048] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            📨 맞춤 비용 시뮬레이션 받기
          </a>
        </div>
      </div>
    </section>
  )
}
