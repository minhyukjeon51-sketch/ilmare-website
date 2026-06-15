import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'il mare | 28년 외식 브랜드 가맹·위탁운영 상담',
  description:
    '일마레는 F&B 매장을 4주 안에 안정적으로 운영하는 위탁경영 전문기업입니다. 체계적인 시스템과 전문 인력으로 매장 수익률을 개선합니다. 지금 무료 상담을 신청하세요.',
  keywords: ['위탁운영', 'F&B 위탁경영', '매장 위탁', '브런치카페 운영', '외식업 위탁경영', '일마레', '가맹창업', '외식 브랜드'],
  openGraph: {
    title: 'il mare | 28년 외식 브랜드 가맹·위탁운영 상담',
    description: '1998년부터 이어온 일마레의 운영 시스템을 파트너와 공유합니다. 가맹 창업과 위탁운영, 두 갈래 길을 한 번의 상담으로 비교해 보세요.',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
