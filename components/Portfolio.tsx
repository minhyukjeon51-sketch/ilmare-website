const operatingModels = [
  {
    type: 'Grand Kitchen 모델',
    title: '브런치 카페·올데이 다이닝',
    desc: '아침·점심·디저트 라인업이 핵심. 테이크아웃과 홀 운영을 병행하는 형태에 최적화된 운영 표준.',
    tags: ['아침·점심 특화', '에그·파스타·디저트', '테이크아웃 병행'],
    bg: '#C8865A',
  },
  {
    type: 'Bistro 모델',
    title: '오피스 타운·런치 특화',
    desc: '평일 런치·디너 회전이 빠른 매장. 표준 SOP와 인력 운영으로 회전율을 안정화하는 형태.',
    tags: ['평일 런치 특화', '회전율 중심', '런치 세트 표준'],
    bg: '#8B6454',
  },
  {
    type: 'Cafe Restaurant 모델',
    title: '카페형 라이트 다이닝',
    desc: '카페와 식사 메뉴를 함께 운영하는 형태. 객단가와 체류시간 균형을 맞추는 운영 표준.',
    tags: ['카페·식사 병행', '객단가 균형', '배달 병행 가능'],
    bg: '#A67C6A',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Operating Models
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            적용 가능한 운영 모델
          </h2>
          <p className="mt-4 text-gray-500 font-serif font-light text-base sm:text-lg max-w-2xl mx-auto">
            본사 직영 플래그십에서 검증된 3가지 운영 표준.
            <br className="hidden sm:block" />
            매장 형태와 상권에 맞춰 맞춤형으로 적용해 드립니다.
          </p>
        </div>

        {/* Models grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {operatingModels.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Color banner */}
              <div
                className="h-32 relative flex items-center justify-center px-6"
                style={{ backgroundColor: m.bg }}
              >
                <div className="text-center">
                  <div className="text-white/60 text-xs font-medium uppercase tracking-widest mb-1">
                    {m.type}
                  </div>
                  <div className="text-white font-bold text-lg leading-tight">{m.title}</div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-[#FAFAF7]">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs bg-[#F5EDE0] text-[#C8865A] font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honesty note */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#FAFAF7] rounded-2xl p-6 border border-gray-100 text-center">
          <p className="text-gray-700 text-sm sm:text-base font-serif font-light leading-relaxed">
            본사 직영 플래그십 매장에서 위 3가지 모델의 운영 표준을 검증 완료했습니다.
            <br />
            현재 위탁운영 파일럿 파트너를 모집하고 있으며, 매장 형태에 맞는 맞춤형 운영 모델을 상담 시 제안드립니다.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-1.5 text-[#C8865A] font-semibold text-sm hover:text-[#b07048]"
          >
            상권 분석 무료 상담받기 →
          </a>
        </div>
      </div>
    </section>
  )
}
