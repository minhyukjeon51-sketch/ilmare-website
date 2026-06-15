const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const values = [
  {
    icon: '🎯',
    title: '시스템 우선',
    desc: '사람보다 시스템이 먼저입니다. 개인 역량에 의존하지 않는 매장 운영 체계를 구축합니다.',
  },
  {
    icon: '📊',
    title: '데이터 기반',
    desc: '매일 매출, 원가율, 인건비율을 집계합니다. 감이 아닌 숫자로 의사결정합니다.',
  },
  {
    icon: '🤝',
    title: '투명한 보고',
    desc: '주간·월간 리포트를 오너에게 직접 공유합니다. 숨기는 것 없이 모든 수치를 공개합니다.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
              About Ilmare
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
              F&B 위탁운영,
              <br />
              일마레가 다릅니다
            </h2>
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              일마레(Il Mare)는 &apos;그 바다&apos;라는 뜻입니다. 흔들리지 않는 바다처럼, 어떤
              상황에서도 매장 운영의 중심을 잡는다는 철학을 담았습니다.
            </p>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              단순 컨설팅이 아닙니다. 우리가 직접 들어가 운영합니다. 헤드셰프부터 홀 매니저까지,
              검증된 인력과 SOP 시스템으로 4주 안에 매장을 안정화시킵니다.
            </p>

            {/* Vision / Mission */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#F5EDE0] rounded-xl p-4">
                <div className="text-[#C8865A] font-bold text-xs uppercase tracking-widest mb-2">
                  Vision
                </div>
                <p className="text-[#1A1A1A] font-semibold text-sm leading-snug">
                  모든 F&B 오너가 매장 걱정 없이 성장에 집중하는 환경
                </p>
              </div>
              <div className="bg-[#F5EDE0] rounded-xl p-4">
                <div className="text-[#C8865A] font-bold text-xs uppercase tracking-widest mb-2">
                  Mission
                </div>
                <p className="text-[#1A1A1A] font-semibold text-sm leading-snug">
                  검증된 운영 시스템으로 위탁 매장의 수익성을 책임진다
                </p>
              </div>
            </div>
          </div>

          {/* Right: Food images + Values */}
          <div className="space-y-5">
            {/* Food image showcase */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`${basePath}/images/food-pasta.jpg`}
                  alt="시그니처 파스타"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-semibold tracking-wide">
                  시그니처 파스타
                </span>
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`${basePath}/images/food-table.jpg`}
                  alt="다이닝 공간"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-semibold tracking-wide">
                  다이닝 공간
                </span>
              </div>
            </div>

            {values.map((v, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}

            {/* History */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 text-white">
              <div className="text-[#C8865A] text-xs font-semibold uppercase tracking-widest mb-3">
                연혁
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-3">
                  <span className="text-[#C8865A] font-bold w-12 flex-shrink-0">2022</span>
                  <span className="text-white/80">F&B 위탁운영 사업 시작</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C8865A] font-bold w-12 flex-shrink-0">2023</span>
                  <span className="text-white/80">브런치 카페 특화 위탁운영 시스템 개발</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C8865A] font-bold w-12 flex-shrink-0">2024</span>
                  <span className="text-white/80">AI 기반 운영 플랫폼 도입, 다점포 확장</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C8865A] font-bold w-12 flex-shrink-0">2025</span>
                  <span className="text-white/80">CMP 운영 표준화 완성, 20+ 매장 운영</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
