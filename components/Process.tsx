const steps = [
  {
    week: 'Day 1–7',
    title: '현장 인수 & 실사',
    color: '#C8865A',
    items: [
      '계약서·인허가·자산 접근권 확보',
      'POS·장비·재고 실사',
      '기존 직원 인터뷰 및 A/B/C 등급 평가',
      '리스크 즉시 조치 / 7일·30일 내 조치 분류',
    ],
  },
  {
    week: '2주차',
    title: '기준 운영 안착',
    color: '#B5734A',
    items: [
      '일 매출·원가율·인건비율 집계 시작',
      '재고 주 2회 실사 체계 가동',
      '오픈·마감 SOP 교육 및 서명 확인',
      '인력 1차 평가 반영 — 교육 연장·직무 조정',
    ],
  },
  {
    week: '3주차',
    title: '인력 재배치 & 강화',
    color: '#9A6040',
    items: [
      '헤드셰프 중심 주방 권한 체계 전환',
      'C등급 인력 순차 교체 시작',
      '발주·폐기 편차 품목 시정 조치',
      '핵심 직원 역할 기대치 재공지',
    ],
  },
  {
    week: '4주차',
    title: 'KPI 확정 & 표준 고정',
    color: '#7E4D2E',
    items: [
      '매장별 KPI 기준선 및 90일 목표 확정',
      '주간 보고 양식 정착',
      '점주·본사·매장 리더 역할 최종 고정',
      '4주 인수 리뷰 및 추가 투자 항목 확정',
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            4주 안정화 프로세스
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            일마레의 검증된 인수 표준이 매장을 단계적으로 안정화합니다.
            <br className="hidden sm:block" />
            감이 아닌 체크리스트와 데이터로 운영합니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-gray-200" />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Step number circle */}
                <div className="flex md:justify-center mb-4">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-tight"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.week}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-[#1A1A1A] mb-3" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#C8865A] font-bold mt-0.5">
                          {j + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-12 bg-[#1A1A1A] rounded-2xl p-6 sm:p-8">
          <h3 className="text-white font-bold text-lg mb-4">
            4주 완료 시 산출물
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              '인수 실사표',
              '자산·접근권 인수표',
              '직원 평가표',
              '4주 KPI 대시보드',
              '리스크 대응 로그',
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl px-4 py-3 text-sm text-white/80 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
