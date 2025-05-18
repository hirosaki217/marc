import Collection from '@/components/Collection'
import HomeCarousel from '@/components/HomeCarousel'

const carousels = [
  {
    src: '/slideshow_1.jpg',
    href: '/',
    alt: '',
  },
  {
    src: '/slideshow_2.jpg',
    href: '/',
    alt: '',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto w-full">
      <HomeCarousel images={carousels} />
      <div className="pt-12">
        <h2 className="text-center text-lg">Danh mục</h2>
        <Collection className="flex justify-center pt-4" />
      </div>
    </div>
  )
}
