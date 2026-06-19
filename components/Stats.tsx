const stats = [
  { value: '직영', label: '본사 플래그십', desc: '운영 시스템·메뉴 검증 완료' },
  { value: '4주', label: '안정화 기간', desc: '계약 후 운영 정상화까지' },
  { value: '12개월', label: '기본 계약', desc: '위탁 후 가맹 전환 우선권' },
  { value: '지역 독점', label: '상권 보호', desc: '동일 상권 중복 출점 없음' },
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
              <div className="text-2xl sm:text-3xl font-bold text-[#C8865A] mb-1">
                {stat.value}
              </div>
              <div className="text-[#1A1A1A] font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-xs leading-tight">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
