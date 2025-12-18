import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // เปิดใช้ Image Optimization เพื่อให้รูปโหลดไว
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com'],
  },
}

const withMDX = createMDX({
  // ตั้งค่าให้ใช้ MDX ได้ (Markdown + React)
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)