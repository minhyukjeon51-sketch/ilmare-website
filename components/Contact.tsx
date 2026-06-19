'use client'
import { useState } from 'react'

const storeTypes = [
  '브런치 카페',
  '한식당',
  '중식당',
  '일식당',
  '양식 레스토랑',
  '분식/패스트푸드',
  '카페',
  '기타',
]

const faqs = [
  {
    q: '초기 투자금이 얼마나 필요한가요?',
    a: '초기 비용은 매장 규모와 상권에 따라 상이합니다. 정확한 견적은 상담 시 맞춤 제공해 드립니다. 위탁 운영의 경우 별도 초기 투자 없이 시작 가능합니다. 기존 매장을 그대로 운영하면서 일마레 브랜드와 시스템을 도입하므로, 가격 민감도가 높으시다면 위탁운영을 먼저 검토해 보시는 것을 추천합니다.',
  },
  {
    q: '요리 경험이 없어도 되나요?',
    a: '네, 요리 경험이 없어도 됩니다. 일마레는 2주간의 집중 운영 교육 프로그램을 제공하며, 표준화된 레시피와 조리 매뉴얼로 누구나 일정한 품질을 유지할 수 있도록 시스템을 갖추고 있습니다. 오픈 후에도 1개월 동안 본사 담당 매니저의 현장 지원이 함께하므로, 운영 노하우를 안정적으로 체화하실 수 있습니다.',
  },
  {
    q: '식자재를 강제로 구매해야 하나요?',
    a: '소스류와 특수 재료 등 브랜드 품질 유지에 필수적인 일부 핵심 품목은 본사를 통해 공급받습니다. 일반 채소·육류 등 범용 식자재는 자유롭게 조달 가능합니다. 전체 원가 구조는 상담 시 투명하게 안내해 드립니다.',
  },
  {
    q: '위탁운영 후 가맹 전환은 어떻게 되나요?',
    a: '위탁운영 12개월 이상 운영한 파트너에게는 정식 가맹 계약으로의 전환 우선권을 드립니다. 전환 시 가맹비 일부 감면 혜택도 적용됩니다. (조건 별도 안내)',
  },
  {
    q: '계약 해지는 어떻게 되나요?',
    a: '계약 기간(기본 12개월) 내 해지 시 위약금이 발생할 수 있으며, 계약서에 명시된 조건에 따라 처리됩니다. 계약 만료 후에는 별도의 위약금 없이 종료 가능합니다. 자세한 조건은 상담 시 계약서를 통해 투명하게 안내해 드립니다.',
  },
  {
    q: '타 지역에 같은 브랜드가 들어올 수 있나요?',
    a: '일마레는 상권 보호 정책을 운영합니다. 계약 시 설정된 상권 내에는 동일 브랜드의 추가 출점을 허용하지 않으며, 독점 영업권을 보장합니다.',
  },
  {
    q: '교육은 얼마나 걸리나요?',
    a: '2주간의 집중 운영 교육 + 오픈 후 1개월 현장 매니저 지원으로 구성됩니다. 2주 집중 교육에서는 브랜드 이해, 메뉴·조리 표준, 운영 시스템, POS·관리 도구 실습을 진행하고, 오픈 후 1개월간 본사 담당 매니저가 매장에 상주·방문하여 초기 운영 안정화를 지원합니다. 표준화된 매뉴얼과 본사 지원으로, 외식업 경험이 없으셔도 안정적으로 출발하실 수 있습니다.',
  },
  {
    q: '손익분기점까지 얼마나 걸리나요?',
    a: '매장 규모와 상권에 따라 다르지만, 일마레 파트너의 평균 손익분기 도달 기간은 6~12개월입니다. 상담 신청 시 해당 지역 상권 분석과 예상 손익 시뮬레이션을 제공해 드립니다.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    storeType: '',
    seats: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const subject = encodeURIComponent(`[일마레 상담 신청] ${formData.name}`)
        const body = encodeURIComponent(
          `이름: ${formData.name}\n연락처: ${formData.phone}\n이메일: ${formData.email}\n매장 유형: ${formData.storeType}\n좌석 수: ${formData.seats}\n\n문의 내용:\n${formData.message}`
        )
        window.location.href = `mailto:info@ilmare.co.kr?subject=${subject}&body=${body}`
        setSubmitted(true)
      }
    } catch {
      const subject = encodeURIComponent(`[일마레 상담 신청] ${formData.name}`)
      const body = encodeURIComponent(
        `이름: ${formData.name}\n연락처: ${formData.phone}\n이메일: ${formData.email}\n매장 유형: ${formData.storeType}\n좌석 수: ${formData.seats}\n\n문의 내용:\n${formData.message}`
      )
      window.location.href = `mailto:info@ilmare.co.kr?subject=${subject}&body=${body}`
      setSubmitted(true)
    }
    setLoading(false)
  }

  const inputClass =
    'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C8865A] focus:ring-1 focus:ring-[#C8865A] transition-colors'

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
              파트너 상담 문의
            </h2>
            <p className="mt-5 text-gray-600 font-serif font-light text-base leading-relaxed">
              가맹·위탁 운영 상담은 아래 채널로 접수해 주세요.
              <br />
              <strong className="text-[#1A1A1A]">영업일 기준 24시간 이내</strong> 담당자가 연락드립니다.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 bg-[#F5EDE0] rounded-xl p-4 border border-[#C8865A]/20">
                <div className="w-10 h-10 bg-[#C8865A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white">📨</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">상담 신청 폼 (1차 채널)</div>
                  <span className="text-[#C8865A] text-sm font-medium">우측 폼으로 바로 접수 →</span>
                  <div className="text-gray-500 text-xs mt-0.5">가장 빠른 응답을 받으실 수 있습니다</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5EDE0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8865A]">✉️</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">이메일</div>
                  <a href="mailto:info@ilmare.co.kr" className="text-gray-500 text-sm hover:text-[#C8865A]">
                    info@ilmare.co.kr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5EDE0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8865A]">📍</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">사무소 위치</div>
                  <span className="text-gray-500 text-sm">상담 시 안내드립니다</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form — visually elevated as primary channel */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -top-3 left-6 z-10">
                <span className="inline-flex items-center gap-1.5 bg-[#C8865A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  1차 채널
                </span>
              </div>
              <div className="bg-gradient-to-br from-[#FAFAF7] to-[#F5EDE0] rounded-3xl p-6 sm:p-8 border-2 border-[#C8865A]/30 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">상담 신청이 완료됐습니다!</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong className="text-[#1A1A1A]">영업일 기준 24시간 이내</strong>
                      <br />
                      담당자가 연락드립니다.
                    </p>
                    <p className="mt-4 text-gray-500 text-xs">
                      급한 문의는 <a href="mailto:info@ilmare.co.kr" className="text-[#C8865A] font-semibold hover:underline">info@ilmare.co.kr</a> 로 메일 부탁드립니다.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-2">
                      <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">무료 상담 신청</h3>
                      <p className="text-gray-500 text-xs">매장 상황을 알려주시면 일마레 팀이 직접 연락드립니다.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                          이름 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="홍길동"
                          className={inputClass}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                          연락처 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="010-1234-5678"
                          className={inputClass}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        이메일
                      </label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        className={inputClass}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                          매장 유형
                        </label>
                        <select
                          className={inputClass}
                          value={formData.storeType}
                          onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                        >
                          <option value="">선택하세요</option>
                          {storeTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                          좌석 수 (약)
                        </label>
                        <input
                          type="text"
                          placeholder="30석"
                          className={inputClass}
                          value={formData.seats}
                          onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                        현재 상황 및 문의 내용
                      </label>
                      <textarea
                        rows={4}
                        placeholder="현재 매장 운영의 어려운 점, 가맹·위탁 운영을 고려하게 된 이유 등을 자유롭게 적어주세요."
                        className={inputClass}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#C8865A] hover:bg-[#b07048] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-lg shadow-[#C8865A]/30"
                    >
                      {loading ? '제출 중...' : '📨 무료 상담 신청하기'}
                    </button>

                    <p className="text-center text-gray-500 text-xs">
                      개인정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section — 8 items */}
        <div id="faq" className="mt-24">
          <div className="text-center mb-12">
            <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              자주 묻는 질문
            </h2>
            <p className="mt-4 text-gray-500 text-base">
              가맹·위탁 운영을 검토하시는 분들이 가장 많이 묻는 8가지 질문입니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className="bg-[#FAFAF7] rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-[#F5EDE0]/40 transition-colors"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#C8865A] font-bold text-sm flex-shrink-0 mt-0.5">
                        Q{i + 1}.
                      </span>
                      <span className="font-semibold text-[#1A1A1A] text-sm sm:text-base">
                        {item.q}
                      </span>
                    </div>
                    <span
                      className={`text-[#C8865A] text-xl flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1">
                      <div className="pl-8 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {item.a}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
