export default function RevenueShare() {
  return (
    <section id="revenue" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Revenue Structure
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            위탁운영, 이렇게 수익이 나뉩니다
          </h2>
          <p className="mt-4 text-gray-500 font-serif font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            일마레 위탁운영은 오너가 매장을 직접 운영하면서
            <br className="hidden sm:block" />
            브랜드·메뉴·운영·마케팅 지원을 본사로부터 받는 구조입니다.
          </p>
        </div>

        {/* Hero card: revenue structure */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#C8865A]/20 shadow-lg">
          <div className="text-center mb-8">
            <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
              수익 분배 구조
            </div>
            <p className="text-[#1A1A1A] text-lg sm:text-xl font-bold leading-relaxed">
              수익 분배는 매장 형태(소형 / 중형 / 대형)에 따라{' '}
              <span className="text-[#C8865A]">협의</span>하며,
              <br />
              상담 시 <span className="text-[#C8865A]">투명하게 공개</span>해 드립니다.
            </p>
          </div>

          {/* Key points */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#FAFAF7] rounded-2xl p-5 border border-gray-100">
              <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
                계약 기간
              </div>
              <div className="font-bold text-[#1A1A1A] text-base mb-1">12개월 기본</div>
              <p className="text-gray-500 text-xs leading-relaxed">
                연장 가능. 매장 운영 안정화 기간 확보.
              </p>
            </div>
            <div className="bg-[#FAFAF7] rounded-2xl p-5 border border-gray-100">
              <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
                가맹 전환
              </div>
              <div className="font-bold text-[#1A1A1A] text-base mb-1">12개월 후 우선권</div>
              <p className="text-gray-500 text-xs leading-relaxed">
                위탁 12개월 이상 운영 시 가맹 전환 우선권 부여.
              </p>
            </div>
            <div className="bg-[#FAFAF7] rounded-2xl p-5 border border-gray-100">
              <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
                식자재
              </div>
              <div className="font-bold text-[#1A1A1A] text-base mb-1">핵심 재료만 본사 공급</div>
              <p className="text-gray-500 text-xs leading-relaxed">
                품질 기준 유지를 위한 핵심 품목에 한정.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-start gap-3 bg-white rounded-2xl px-6 py-4 border border-gray-100 shadow-sm max-w-2xl">
            <span className="text-xl flex-shrink-0">💡</span>
            <p className="text-gray-700 text-sm text-left leading-relaxed">
              매장 형태와 운영 규모에 따른{' '}
              <strong className="text-[#1A1A1A]">맞춤 수익 시뮬레이션</strong>을 상담 시 제공합니다.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C8865A] hover:bg-[#b07048] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors shadow-md"
            >
              📨 수익 시뮬레이션 상담 신청
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
