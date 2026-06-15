export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2010 50%, #3D2415 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C8865A 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-[#C8865A] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">F&B 위탁운영 전문기업</span>
        </div>

        {/* Brand slogan line */}
        <p className="text-[#C8865A] text-sm tracking-[0.28em] uppercase font-medium mb-6 opacity-90">
          fine team. fine dining.
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          검증된 팀과 함께,
          <br />
          <span className="text-[#C8865A]">28년 외식 브랜드를 내 매장으로</span>
        </h1>

        {/* Sub Headline */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          1998년부터 이어온 일마레의 운영 시스템을 파트너와 공유합니다.
          <br className="hidden sm:block" />
          가맹 창업과 위탁운영, 두 갈래 길을 한 번의 상담으로 비교해 보세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#C8865A] hover:bg-[#b07048] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-[#C8865A]/30 hover:-translate-y-0.5"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all backdrop-blur-sm"
          >
            서비스 알아보기
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#C8865A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            계약 후 4주 안정화 보장
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#C8865A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            투명한 매출·원가 리포트
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#C8865A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            사장님 상주 불필요
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
