const stats = [
  { value: '20+', label: '위탁운영 매장', desc: '직영·위탁 포함 운영 경험' },
  { value: '4주', label: '안정화 기간', desc: '계약 후 운영 정상화까지' },
  { value: '95%', label: '고객 만족도', desc: '위탁 운영 매장 오너 기준' },
  { value: '30%', label: '평균 원가 절감', desc: '인수 후 3개월 내 기준' },
]

export default function Stats() {
  return (
    <section className="relative -mt-1 bg-[#FAFAF7] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#C8865A] mb-1">
                {stat.value}
              </div>
              <div className="text-[#1A1A1A] font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs leading-tight">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
