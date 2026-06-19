export default function Exclusivity() {
  return (
    <section id="exclusivity" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2D2010] to-[#3D2415] p-8 sm:p-12 border border-[#C8865A]/20 shadow-xl">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #C8865A 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#C8865A]/20 border border-[#C8865A]/40 rounded-full px-4 py-1.5 mb-5">
              <span className="text-xl">📌</span>
              <span className="text-[#C8865A] text-xs font-bold uppercase tracking-widest">
                Territory Exclusivity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              지역별 독점 계약
              <br />
              <span className="text-[#C8865A]">동일 상권 내 중복 출점 없음</span>
            </h2>

            <p className="text-white/80 font-serif font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              일마레는 계약 시 설정된 상권 내에 동일 브랜드 추가 출점을 허용하지 않습니다.
              <br />
              귀하의 상권을 선점하고 싶다면 지금 바로 상담을 신청해 주세요.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-white text-sm mb-1.5">상권 분석 리포트</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  귀하의 상권에 대한 무료 분석 리포트 제공
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="font-bold text-white text-sm mb-1.5">경쟁 매장 분석</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  동일 상권 내 경쟁 매장 현황 및 차별화 포인트
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-bold text-white text-sm mb-1.5">예상 손익 시뮬레이션</h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  매장 형태별 손익분기 도달 시점 예측
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#C8865A] hover:bg-[#b07048] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-[#C8865A]/30"
              >
                📨 상권 선점 상담 신청
              </a>
              <p className="text-white/50 text-xs sm:text-sm">
                상권은 선점 순으로 확정됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
