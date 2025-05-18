import Image from 'next/image'

const collections = [
  {
    src: '/signature.jpg',
    title: 'SIGNATURE',
    href: '/',
  },
  {
    src: '/back-in-stock.jpg',
    title: 'Back In Stock',
    href: '/',
  },
  {
    src: '/ao-kieu.jpg',
    title: 'Áo Kiểu',
    href: '/',
  },
  {
    src: '/ao-thun.jpg',
    title: 'Áo Thun',
    href: '/',
  },
  {
    src: '/dam.jpg',
    title: 'Đầm',
    href: '/',
  },
  {
    src: '/quan.jpg',
    title: 'Quần',
    href: '/',
  },
  {
    src: '/vay.jpg',
    title: 'Váy',
    href: '/',
  },
]

function Collection(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      {collections.map(({ src, href, title }, index) => (
        <div key={index} className="px-2">
          <a href={href}>
            <div className="w-full flex-shrink-0">
              <div className="relative h-[100px] w-[100px] overflow-hidden md:h-[120px] md:w-[120px] xl:h-[130px] xl:w-[130px]">
                <Image
                  src={src || '/placeholder.svg'}
                  alt={title}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="pt-2 text-center">{title}</div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Collection
