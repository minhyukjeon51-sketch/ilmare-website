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
        // Fallback: open mailto
        const subject = encodeURIComponent(`[일마레 상담 신청] ${formData.name}`)
        const body = encodeURIComponent(
          `이름: ${formData.name}\n연락처: ${formData.phone}\n이메일: ${formData.email}\n매장 유형: ${formData.storeType}\n좌석 수: ${formData.seats}\n\n문의 내용:\n${formData.message}`
        )
        window.location.href = `mailto:contact@ilmare.co.kr?subject=${subject}&body=${body}`
        setSubmitted(true)
      }
    } catch {
      const subject = encodeURIComponent(`[일마레 상담 신청] ${formData.name}`)
      const body = encodeURIComponent(
        `이름: ${formData.name}\n연락처: ${formData.phone}\n이메일: ${formData.email}\n매장 유형: ${formData.storeType}\n좌석 수: ${formData.seats}\n\n문의 내용:\n${formData.message}`
      )
      window.location.href = `mailto:contact@ilmare.co.kr?subject=${subject}&body=${body}`
      setSubmitted(true)
    }
    setLoading(false)
  }

  const inputClass =
    'w-full bg-[#FAFAF7] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C8865A] focus:ring-1 focus:ring-[#C8865A] transition-colors'

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
              지금 바로
              <br />
              상담을 신청하세요
            </h2>
            <p className="mt-5 text-gray-600 font-serif font-light text-base leading-relaxed">
              매장 상황을 말씀해 주시면, 일마레 팀이 직접 연락드려 구체적인 위탁운영 방안을 제안합니다.
              <br />
              <strong className="text-[#1A1A1A]">상담은 완전 무료</strong>입니다.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5EDE0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8865A]">📞</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">전화 상담</div>
                  <a href="tel:010-0000-0000" className="text-gray-500 text-sm hover:text-[#C8865A]">
                    010-0000-0000
                  </a>
                  <div className="text-gray-400 text-xs mt-0.5">평일 10:00–18:00, 토 10:00–13:00</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5EDE0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8865A]">✉️</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">이메일</div>
                  <a href="mailto:contact@ilmare.co.kr" className="text-gray-500 text-sm hover:text-[#C8865A]">
                    contact@ilmare.co.kr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5EDE0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8865A]">💬</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">카카오톡 채널</div>
                  <span className="text-gray-500 text-sm">@일마레위탁운영</span>
                  <div className="text-gray-400 text-xs mt-0.5">카카오 채널 연동 시 24시간 접수</div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-10 bg-[#FAFAF7] rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-3">자주 묻는 질문</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-[#1A1A1A]">Q. 계약 최소 기간이 있나요?</div>
                  <div className="text-gray-500 mt-0.5">A. 기본 6개월 계약입니다. 상담 시 조건 협의 가능합니다.</div>
                </div>
                <div>
                  <div className="font-medium text-[#1A1A1A]">Q. 비용은 어떻게 되나요?</div>
                  <div className="text-gray-500 mt-0.5">A. 매장 규모와 서비스 범위에 따라 달라집니다. 상담 후 맞춤 제안드립니다.</div>
                </div>
                <div>
                  <div className="font-medium text-[#1A1A1A]">Q. 어떤 업종이 대상인가요?</div>
                  <div className="text-gray-500 mt-0.5">A. F&B 전 업종 가능합니다. 브런치 카페 특화 경험이 풍부합니다.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-[#F5EDE0] rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">상담 신청이 완료됐습니다!</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  영업일 기준 1–2일 내로 담당자가 연락드릴 예정입니다.
                  <br />
                  급하신 경우 전화 상담을 이용해 주세요.
                </p>
                <a
                  href="tel:010-0000-0000"
                  className="mt-6 inline-block bg-[#C8865A] text-white font-semibold px-6 py-3 rounded-full text-sm"
                >
                  📞 지금 전화하기
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="010-0000-0000"
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
                    placeholder="현재 매장 운영의 어려운 점, 위탁 운영을 고려하게 된 이유 등을 자유롭게 적어주세요."
                    className={inputClass}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C8865A] hover:bg-[#b07048] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-colors"
                >
                  {loading ? '제출 중...' : '무료 상담 신청하기'}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  개인정보는 상담 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
