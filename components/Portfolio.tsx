const stores = [
  {
    name: '브런치 카페 A',
    type: 'Grand Kitchen 모델',
    location: '서울 마포구',
    tags: ['아침·점심 특화', '테이크아웃'],
    result: '인수 4주 후 매출 +35%',
    bg: '#C8865A',
    image: '/images/store-grand.jpg',
  },
  {
    name: '올데이 다이닝 B',
    type: 'Bistro 모델',
    location: '서울 성동구',
    tags: ['파스타·에그', '평일 오피스 타운'],
    result: '원가율 38% → 27% 개선',
    bg: '#8B6454',
    image: '/images/store-bistro.jpg',
  },
  {
    name: '브런치 바이 C',
    type: '브런치 카페',
    location: '경기 판교',
    tags: ['위크엔드 특화', '예약제 운영'],
    result: '리뷰 평점 3.8 → 4.7',
    bg: '#A67C6A',
  },
  {
    name: '카페 레스토랑 D',
    type: '카페 레스토랑',
    location: '서울 강남구',
    tags: ['런치 세트 특화', '배달 병행'],
    result: '인건비율 12%p 절감',
    bg: '#7B5242',
  },
  {
    name: '에그 & 브런치 E',
    type: '브런치 카페',
    location: '서울 용산구',
    tags: ['에그베네딕트', '홈그라운드 감성'],
    result: '6개월 내 흑자 전환',
    bg: '#B07A5A',
  },
  {
    name: '모닝 키친 F',
    type: '아침 식당',
    location: '서울 종로구',
    tags: ['7AM 오픈', '직장인 아침 특화'],
    result: '고객 재방문율 65%+',
    bg: '#9B6850',
  },
]

export default function Portfolio() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C8865A] text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            운영 중인 매장들
          </h2>
          <p className="mt-4 text-gray-500 font-serif font-light text-base sm:text-lg max-w-2xl mx-auto">
            브런치 카페부터 올데이 다이닝까지, 다양한 업태에서
            일마레의 시스템이 검증되었습니다.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stores.map((store, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Color banner */}
              <div
                className="h-36 relative flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: store.bg,
                  ...(store.image
                    ? {
                        backgroundImage: `url(${basePath}${store.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}),
                }}
              >
                {store.image && <div className="absolute inset-0 bg-black/45" />}
                <div className="relative z-10 text-center">
                  <div className="text-white/60 text-xs font-medium uppercase tracking-widest mb-1">
                    {store.type}
                  </div>
                  <div className="text-white font-bold text-2xl">{store.name}</div>
                </div>
                {/* Location badge */}
                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {store.location}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-[#FAFAF7]">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {store.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs bg-[#F5EDE0] text-[#C8865A] font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C8865A]">📈</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{store.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-400 text-sm">
          * 실제 매장 정보는 NDA로 보호됩니다. 상담 시 상세 레퍼런스를 공유해 드립니다.
        </p>
      </div>
    </section>
  )
}
