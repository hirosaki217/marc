'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useMemo, useState } from 'react'

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: {
    src: string
    alt: string
  }[]
  aspectRatio?: 'square' | 'video' | 'wide' | 'default'
  showControls?: boolean
  autoPlay?: boolean
  interval?: number
}

function HomeCarousel({
  images,
  aspectRatio = 'default',
  showControls = true,
  autoPlay = false,
  interval = 5000,
  className,
  ...props
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  // Use embla carousel directly for more control
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  })

  // Set up autoplay
  useEffect(() => {
    if (!autoPlay || !emblaApi) return

    const intervalId = setInterval(() => {
      emblaApi.scrollNext()
    }, interval)

    return () => clearInterval(intervalId)
  }, [emblaApi, autoPlay, interval])

  // Update current index when scrolling
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  // Calculate aspect ratio class
  const aspectRatioClass = useMemo(() => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square'
      case 'video':
        return 'aspect-video'
      case 'wide':
        return 'aspect-[16/9]'
      default:
        return 'aspect-[3/1]'
    }
  }, [aspectRatio])

  return (
    <div className={cn('w-full', className)} {...props}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="border-none p-0">
                  <CardContent className="p-0">
                    <div className="w-full flex-shrink-0">
                      <div
                        className={cn(
                          'relative w-full overflow-hidden',
                          aspectRatioClass,
                        )}
                      >
                        <Image
                          src={image.src || '/placeholder.svg'}
                          alt={image.alt}
                          fill
                          sizes="100vw"
                          priority={index === 0}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full bg-transparent p-2 text-white shadow-none hover:shadow-md"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-transparent p-2 text-white shadow-none hover:shadow-md"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
        {images.length > 1 && (
          <div className="absolute right-0 bottom-1 left-0 flex justify-center gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  current === index ? 'w-4 bg-white' : 'bg-muted-foreground/30',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeCarousel
