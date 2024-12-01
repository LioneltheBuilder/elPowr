'use client';
import { Card, CardContent } from '@/src/presentation/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/src/presentation/components/ui/carousel';
import { testimonials } from '@/src/presentation/constant/testimonials';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function TestimonialSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="max-w-screen-xl mx-auto px-4 relative py-12">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
            <span className="mr-1">+</span> Testimonial
          </div>

          <h2 className="text-4xl md:text-5xl leading-tight text-white text-center">
            See What Our Builders Are Saying
          </h2>
        </div>

        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-black border border-gray-200">
                    <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                      <p className="text-white text-center italic">
                        {item.testimonial}
                      </p>
                      <div className="flex flex-col justify-center items-center pt-6">
                        <Image
                          src={item.image}
                          alt="Customer Image"
                          width={60}
                          height={60}
                          className="rounded-full w-[50px] h-[50px] object-cover"
                        />
                        <p className="font-semibold text-[#9AE662] pt-4 text-lg">
                          {item.name}
                        </p>
                        <span className="text-gray-500 text-sm">
                          {item.role}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="py-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-[#9AE662] w-4' : 'bg-gray-500'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
