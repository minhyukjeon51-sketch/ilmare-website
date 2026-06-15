export default function CTABanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #C8865A 0%, #8B4513 100%)',
      }}
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          지금 매장이 힘드신가요?
        </h2>
        <p className="text-white/80 text-lg sm:text-xl mb-3">
          혼자 감당하지 마세요. 일마레가 함께합니다.
        </p>
        <p className="text-white/60 text-base max-w-xl mx-auto mb-10">
          상담은 무료입니다. 매장 상황을 말씀해 주시면
          구체적인 운영 개선 방안을 제안드립니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white text-[#C8865A] font-bold px-10 py-4 rounded-full text-lg hover:bg-[#F5EDE0] transition-colors shadow-lg"
          >
            무료 상담 신청하기
          </a>
          <a
            href="tel:010-0000-0000"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            📞 전화 상담
          </a>
        </div>

        <p className="mt-6 text-white/40 text-sm">
          평일 10:00–18:00 운영 · 토요일 오전 상담 가능
        </p>
      </div>
    </section>
  )
}
