const testimonials = [
  {
    quote:
      '직접 주방에 서야 했던 제가 지금은 매장을 신경 쓰지 않아도 됩니다. 일마레가 인수하고 5주 만에 매출이 30% 늘었어요. 처음엔 반신반의했는데, 숫자가 증명해주더라고요.',
    name: '김○○ 대표',
    store: '브런치 카페 운영 (서울 마포구)',
    rating: 5,
  },
  {
    quote:
      '원가가 40%를 넘어서 걱정이었는데, 일마레가 들어온 후 재고 체계가 완전히 바뀌었습니다. 지금은 25%대로 안정됐고, 주간 리포트로 수치를 직접 확인하고 있어요.',
    name: '이○○ 사장',
    store: '올데이 다이닝 운영 (경기 판교)',
    rating: 5,
  },
  {
    quote:
      '직원 관리가 제일 힘들었는데, 일마레가 채용부터 교육까지 다 해줍니다. 헤드셰프도 일마레가 직접 뽑았고 지금은 주방이 돌아가는 게 느껴져요. 추천합니다.',
    name: '박○○ 오너',
    store: '카페 레스토랑 (서울 강남구)',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            실제 오너들의 이야기
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg">
            숫자로 증명된 위탁운영의 변화를 직접 들어보세요.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#C8865A]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 font-serif font-light text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#C8865A] font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.store}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Result badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: '📈', text: '평균 매출 +28%' },
            { emoji: '💰', text: '원가율 -12%p' },
            { emoji: '⭐', text: '리뷰 평점 +0.9' },
            { emoji: '😌', text: '오너 업무 부담 -70%' },
          ].map((badge, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] rounded-xl px-4 py-4 text-center"
            >
              <div className="text-2xl mb-1">{badge.emoji}</div>
              <div className="text-white font-semibold text-sm">{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
