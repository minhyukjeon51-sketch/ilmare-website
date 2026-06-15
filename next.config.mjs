/** @type {import('next').NextConfig} */
// GitHub Pages 프로젝트 페이지(/ilmare-website/)로 배포하기 위한 정적 export 설정.
// 로컬 개발(dev)에서는 basePath 없이 동작하고, CI 배포 시에만 basePath/assetPrefix를 적용한다.
const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages'
const repo = 'ilmare-website'

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
}

export default nextConfig
