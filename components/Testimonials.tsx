const benefits = [
  {
    icon: '🌱',
    title: '우선 파트너십',
    desc: '브랜드 성장과 함께하는 첫 파트너에게 주어지는 기회입니다. 신규 브랜드의 초기 파트너만 누릴 수 있는 가치입니다.',
  },
  {
    icon: '🏠',
    title: '직영 노하우 100% 이관',
    desc: '본사 직영 플래그십 매장에서 검증된 운영 노하우·메뉴·서비스를 그대로 이관해 드립니다.',
  },
  {
    icon: '🤝',
    title: '의사결정 직접 참여',
    desc: '브랜드 성장 단계 의사결정에 파트너 의견이 직접 반영됩니다. 본사와 함께 브랜드를 만들어 갑니다.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Partnership Opportunity
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
            일마레 파트너십,
            <br />
            <span className="text-[#C8865A]">신규 브랜드의 첫 파트너십 기회</span>
          </h2>
          <p className="mt-5 text-gray-600 font-serif font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            본사 직영 플래그십 매장 운영 중 — 운영 노하우·메뉴·서비스 검증 완료.
            <br className="hidden sm:block" />
            현재 위탁운영 파일럿 파트너를 모집하고 있습니다.
          </p>
        </div>

        {/* First-mover positioning banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-3xl p-8 border-2 border-[#C8865A]/30 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">🚀</div>
            <div>
              <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-2">
                First Mover Advantage
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-xl mb-3">
                신규 브랜드의 첫 파트너가 누리는 이점
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                일마레는 본사 직영 매장에서 운영 시스템을 완성한 후,
                선별된 파일럿 파트너와 함께 브랜드를 확장합니다.
                기존 프랜차이즈와는 다른 — <strong className="text-[#1A1A1A]">함께 만들어가는</strong> 파트너십 구조입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Honesty note */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 text-center">
          <div className="text-[#C8865A] text-xs font-bold uppercase tracking-widest mb-3">
            우리의 약속
          </div>
          <p className="text-white text-base sm:text-lg font-serif font-light leading-relaxed">
            아직 검증되지 않은 후기와 매장 수 대신,
            <br />
            <strong className="text-[#C8865A] font-bold">정직한 시작</strong>으로 신뢰를 쌓아갑니다.
          </p>
          <p className="mt-4 text-white/60 text-sm">
            본사 직영 매장에서 검증된 시스템 · 투명한 운영 데이터 공유 · 함께 성장하는 파트너십
          </p>
        </div>
      </div>
    </section>
  )
}
